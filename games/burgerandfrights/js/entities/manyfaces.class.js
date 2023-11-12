/**
 * @file manyfaces.class.js
 * @version 1.0.0
 */

import Entity from '../framework/entity.class.js';
import ModelManager from '../framework/modelmanager.class.js';

import Utility from '../game/utility.class.js';

import * as THREE from '../lib/three.js/three.module.js';

export default class Manyfaces extends Entity {
    constructor(context, scene, options = Object.create(null)) {
        options.updatePriority = 2;

        super(context, scene, options);

        const tScene = scene.getThreeScene();

        const gltf = ModelManager.getModel('characters');

        this._bikes = [];

        const bikeOriginal = gltf.scene.getObjectByName('BikeFlesh');
        bikeOriginal.traverse(obj => {
            obj.matrixAutoUpdate = true;
            obj.material = Utility.replaceMaterial(obj.material);
        });

        for (let i = 0; i < 12; i++) {
            const bike = bikeOriginal.clone();
            bike.name = `Manyfaces${i}`;
            tScene.add(bike);

            this._bikes.push({
                mesh: bike,
                roadPosition: new THREE.Vector2(),
            });
        }

        this._player = scene.findEntityOfType('Player');
        this._road = scene.findEntityOfType('Road');

        this._sceneName = null;
        this._sceneSeconds = null;

        this._stopping = null;
    }

    reset(context) {
        this._sceneName = null;

        this._stopping = false;

        this._bikes.forEach(bike => {
            bike.mesh.removeFromParent();

            bike.stunned = null;
        });
    }

    update(context) {
        super.update(context);

        if (this._sceneName === null) {
            return;
        }

        const dt = context.time.elapsedSeconds;

        this._sceneSeconds += dt;

        const distanceMax = this._road.getRoadDistanceMax();
        const playerRoadPosition = this._road.getPlayerRoadPosition();
        const inFront = this._sceneName === 'in_front';
        const driveBy = this._sceneName === 'drive_by';

        this._bikes.forEach((bike, i) => {
            if (bike.mesh.parent === undefined) {
                return;
            }

            const pdx = bike.roadPosition.x - playerRoadPosition.x;
            const pdd = this._road.getRoadDistanceBetween(playerRoadPosition.y, bike.roadPosition.y);
            const distanceToPlayer = Math.sqrt(pdx * pdx + pdd * pdd);
            const playerColliding = this._player.getBiking() && distanceToPlayer < 0.65;

            if (playerColliding && !bike.stunned) {
                this._player.stun(context);

                bike.stunned = true;
            }

            const roadType = this._road.getRoadType(bike.roadPosition.y);
            const bikeAngle = this._sceneSeconds * 0.5 + i * 4.5 + Math.PI;
            const targetX = roadType.laneCenter + (inFront ? roadType.laneOffset : Math.sin(bikeAngle) * (roadType.laneOffset - roadType.laneCenter) * 2);
            const velocity = inFront ? Math.max(0, (20 - pdd) * 0.05) : driveBy ? 0.8 : 0.05 + 0.02 * i;
            const steerT = 1 - 0.6 ** dt;

            const lastX = bike.roadPosition.x;

            if (!this._stopping) {
                bike.roadPosition.set(
                    bike.roadPosition.x * (1 - steerT) + targetX * steerT,
                    Math.min(distanceMax, bike.roadPosition.y + dt * velocity));
            }

            const dx = dt === 0 ? 0 : (bike.roadPosition.x - lastX) / dt;

            if (driveBy) {
                if (bike.roadPosition.y === distanceMax) {
                    this.reset(context);
                }
            } else if (bike.roadPosition.y < this._road.getPlayerRoadPosition().y - 2
                || bike.roadPosition.y >= distanceMax) {
                if (this._stopping) {
                    bike.mesh.removeFromParent();
                } else {
                    bike.roadPosition.y = this._road.getPlayerRoadPosition().y + 2 + Math.random() * 4;
                    bike.stunned = false;
                }
            }

            this._road.roadToWorldPosition(bike.roadPosition, bike.mesh.position);

            bike.mesh.rotation.set(0, 0, 0);
            bike.mesh.rotateY(-this._road.getRoadAngle(bike.roadPosition.y) - dx * 0.3);
            bike.mesh.rotateX(-this._road.getForwardSlopeAngle(bike.mesh));
        });
    }

    playScene(context, sceneName) {
        this.reset(context);

        const tScene = this.getScene().getThreeScene();
        const playerRoadPosition = this._road.getPlayerRoadPosition();

        this._sceneName = sceneName;
        this._sceneSeconds = 0;

        switch (sceneName) {
            case 'drive_by':
            case 'in_front':
                const bike = this._bikes[0];
                tScene.add(bike.mesh);
                bike.roadPosition.set(0, playerRoadPosition.y + (sceneName === 'drive_by' ? -1 : 1));

                break;

            case 'crowding':
                this._bikes.forEach(bike => {
                    tScene.add(bike.mesh);

                    bike.roadPosition.set(0, -1);
                    bike.stunned = false;
                });

                break;

            default:
                throw new Error(`Manyfaces scene "${sceneName}" does not exist`);
        }
    }

    stop() {
        this._stopping = true;
    }
}

Manyfaces.p_register();
