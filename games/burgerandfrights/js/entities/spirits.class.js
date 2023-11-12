/**
 * @file spirits.class.js
 * @version 1.0.0
 */

import AudioSystem from '../framework/audiosystem.class.js';
import Entity from '../framework/entity.class.js';
import ModelManager from '../framework/modelmanager.class.js';

import Utility from '../game/utility.class.js';

import * as THREE from '../lib/three.js/three.module.js';

export default class Spirits extends Entity {
    constructor(context, scene, options = Object.create(null)) {
        options.updatePriority = 8;

        super(context, scene, options);

        const tScene = scene.getThreeScene();

        const gltf = ModelManager.getModel('characters');

        this._spirits = [];

        const spiritOriginal = gltf.scene.getObjectByName('Spirit');
        spiritOriginal.matrixAutoUpdate = true;
        spiritOriginal.material = Utility.replaceMaterial(spiritOriginal.material);

        for (let i = 0; i < 4; i++) {
            const spirit = spiritOriginal.clone();
            spirit.name = `Spirit${i}`;
            tScene.add(spirit);

            this._spirits.push({
                mesh: spirit,
                roadPosition: new THREE.Vector2(),
                height: null,
                angle: null,
                lookSeconds: null,
                counter: null,
            });
        }

        this._player = scene.findEntityOfType('Player');
        this._road = scene.findEntityOfType('Road');
        this._overlay = scene.findEntityOfType('Overlay');

        this._sceneName = null;

        this._stopping = null;
    }

    reset(context) {
        this._sceneName = null;

        this._stopping = false;

        this._spirits.forEach(spirit => {
            spirit.mesh.visible = false;
            spirit.height = 0;
            spirit.angle = 0;
            spirit.lookSeconds = 0;
            spirit.counter = 0;
        });
    }

    update(context) {
        super.update(context);

        if (this._sceneName === null) {
            return;
        }

        const dt = context.time.elapsedSeconds;

        this._sceneSeconds += dt;

        const playerRoadPosition = this._road.getPlayerRoadPosition();

        let reset = false;

        switch (this._sceneName) {
            case 'behind_player':
                const spirit = this._spirits[0];
                const angleToPlayer = this._player.getLookAngleTowards(spirit.mesh);

                spirit.height = 0.7 + Math.sin(context.time.totalSeconds) * 0.2;

                spirit.roadPosition.set(
                    spirit.counter < 5 ? 0 : playerRoadPosition.x,
                    playerRoadPosition.y - (spirit.counter < 5 ? 1.3 : 0.1));

                if (spirit.counter % 2 === 0) {
                    if (angleToPlayer > Math.PI * 0.6) {
                        spirit.lookSeconds += dt;

                        if (spirit.lookSeconds > 1) {
                            spirit.lookSeconds = 0;
                            spirit.mesh.visible = true;
                            spirit.counter++;
                        }
                    } else {
                        spirit.lookSeconds = 0;
                    }
                } else if (angleToPlayer < Math.PI * 0.4 || spirit.lookSeconds > 0 && spirit.counter === 5) {
                    if (spirit.counter < 5) {
                        spirit.counter++;
                    } else {
                        if (spirit.lookSeconds === 0) {
                            AudioSystem.play('effect__stinger_1');
                        }

                        spirit.lookSeconds += dt;

                        this._player.shakeCamera(0.3, 0.05);

                        if (spirit.lookSeconds > 0.6) {
                            this.reset(context);

                            this._overlay.playScene(context, 'fade_in_noise', 0.5);

                            return;
                        }
                    }
                } else {
                    spirit.lookSeconds = 0;
                }

                break;

            case 'approach_at_speed':
                const distanceMax = this._road.getRoadDistanceMax();
                const playerSpeed = this._player.getSpeed();

                this._spirits.forEach((spirit, i) => {
                    if (playerSpeed > 0.5 && !this._stopping) {
                        spirit.counter = Math.min(5, spirit.counter + dt);
                    } else {
                        spirit.counter = Math.max(0, spirit.counter - dt);
                    }

                    spirit.height = -5 + spirit.counter + 0.7 + Math.sin(context.time.totalSeconds + i) * 0.5;

                    spirit.roadPosition.x = i < 2 ? -5.5 : 5.5;

                    if (spirit.roadPosition.y < playerRoadPosition.y - 1) {
                        spirit.roadPosition.y = Math.min(playerRoadPosition.y + 1 + Math.random() * 2, distanceMax);
                    }

                    spirit.mesh.visible = true;
                });

                break;

            case 'surround_player':
                let playSound = false;

                this._spirits.forEach((spirit, i) => {
                    const angle = Math.PI * 0.5 * i + context.time.totalSeconds;
                    const distance = 1 + spirit.lookSeconds * 2;

                    spirit.angle = angle;
                    spirit.roadPosition.set(
                        playerRoadPosition.x + Math.sin(angle) * distance,
                        playerRoadPosition.y + Math.cos(angle) * distance * 0.1);
                    spirit.height = 1 + Math.cos(spirit.lookSeconds) * 0.4;

                    if (!spirit.mesh.visible) {
                        spirit.mesh.visible = this._player.getLookRotation().y < -0.95;
                    } else if (this._player.getLookRotation().y > -0.7 || spirit.lookSeconds > 0) {
                        playSound = spirit.lookSeconds === 0;

                        spirit.lookSeconds += dt;

                        this._player.shakeCamera(0.3, 0.05);

                        if (spirit.lookSeconds > 1.5) {
                            reset = true;
                        }
                    }
                });

                if (reset) {
                    this.reset(context);

                    this._overlay.playScene(context, 'fade_in_noise', 0.5);
                }

                if (playSound) {
                    AudioSystem.play('effect__stinger_1');
                }

                break;

            case 'follow_end':
                this._spirits.forEach((spirit, i) => {
                    const n = Math.abs(i - 1.5);

                    spirit.roadPosition.set(-2 + i * 1.33, playerRoadPosition.y + 0.3);
                    if (spirit.roadPosition.y > spirit.counter + 8) {
                        spirit.height += dt * 3;
                        reset = spirit.height > 20;
                    } else {
                        spirit.height = Math.max(3 - n, 10 - this._sceneSeconds * 2 + n * 2)
                            + Math.sin(context.time.totalSeconds + i) * 0.4;
                    }
                });

                if (reset) {
                    this.reset(context);
                }

                break;
        }

        this._spirits.forEach(spirit => {
            if (spirit.parent === null) {
                return;
            }

            this._road.roadToWorldPosition(spirit.roadPosition, spirit.mesh.position);
            spirit.mesh.position.y += spirit.height;
            spirit.mesh.rotation.set(0,
                -spirit.angle - this._road.getRoadAngle(spirit.roadPosition.y) + Math.PI, 0);
        });
    }

    playScene(context, sceneName) {
        this.reset(context);

        const tScene = this.getScene().getThreeScene();

        this._sceneName = sceneName;
        this._sceneSeconds = 0;

        switch (sceneName) {
            case 'behind_player':
                this._spirits[0].angle = Math.PI;

                break;

            case 'approach_at_speed':
                this._spirits.forEach((spirit, i) => {
                    spirit.angle = i < 2 ? -Math.PI * 0.5 : Math.PI * 0.5;
                });

                break;

            case 'surround_player':

                break;

            case 'follow_end':
                this._spirits.forEach(spirit => {
                    spirit.mesh.visible = true;
                    spirit.counter = this._road.getPlayerRoadPosition().y;
                });

                break;

            default:
                throw new Error(`Spirits scene "${sceneName}" does not exist`);
        }
    }

    stop() {
        this._stopping = true;
    }
}

Spirits.p_register();
