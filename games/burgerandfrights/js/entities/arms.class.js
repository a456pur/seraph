/**
 * @file arms.class.js
 * @version 1.0.0
 */

import Entity from '../framework/entity.class.js';
import ModelManager from '../framework/modelmanager.class.js';
import Animator from '../framework/three.js/animator.class.js';

import Utility from '../game/utility.class.js';

import { SkeletonUtils } from '../lib/three.js/SkeletonUtils.js';
import * as THREE from '../lib/three.js/three.module.js';

export default class Arms extends Entity {
    constructor(context, scene, options = Object.create(null)) {
        options.updatePriority = 3;

        super(context, scene, options);

        const tScene = scene.getThreeScene();

        const gltf = ModelManager.getModel('characters');

        const animations = Animator.filterAnimations(gltf.animations, [
            'ArmExtend', 'ArmGrab',
        ], null, null, true, false, true);

        this._arms = [];

        const armOriginal = gltf.scene.getObjectByName('Arm');
        armOriginal.traverse(obj => {
            obj.matrixAutoUpdate = true;
            obj.frustumCulled = false;
            obj.material = Utility.replaceMaterial(obj.material);
        });

        for (let i = 0; i < 5; i++) {
            const rig = SkeletonUtils.clone(armOriginal);
            rig.name = `Arm${i}`;
            tScene.add(rig);

            this._arms.push({
                rig,
                animator: new Animator(rig, animations),
                roadPosition: new THREE.Vector2(),
                stopped: false,
                attacked: false,
            });
        }

        this._player = scene.findEntityOfType('Player');
        this._road = scene.findEntityOfType('Road');

        this._sceneName = null;
    }

    reset(context) {
        this._sceneName = null;

        this._arms.forEach(arm => {
            arm.rig.removeFromParent();
        });
    }

    update(context) {
        super.update(context);

        if (this._sceneName === null) {
            return;
        }

        const dt = context.time.elapsedSeconds;
        const playerRoadPosition = this._road.getPlayerRoadPosition();

        this._arms.forEach(arm => {
            const pdx = arm.roadPosition.x - playerRoadPosition.x;
            const pdd = this._road.getRoadDistanceBetween(playerRoadPosition.y, arm.roadPosition.y);
            const playerColliding = this._player.getBiking() && pdd < 0.7 && pdd > 0 && Math.abs(pdx) < 1.4;

            if (arm.roadPosition.y < playerRoadPosition.y - 0.3) {
                arm.roadPosition.set(0, playerRoadPosition.y + 0.35 + Math.random() * 0.6);

                arm.stopped = true;
                arm.attacked = false;

                arm.animator.stopActions();
            } else if (arm.roadPosition.y < playerRoadPosition.y + 0.35 && arm.stopped) {
                const leftSide = Math.random() < 0.5;

                arm.stopped = false;

                arm.roadPosition.x = leftSide ? -2 : 2;

                this._road.roadToWorldPosition(arm.roadPosition, arm.rig.position);

                arm.rig.position.y += 0.5 + Math.random();
                arm.rig.rotation.set(0, -this._road.getRoadAngle(arm.roadPosition.y) - Math.PI * 0.5, 0);
                arm.rig.scale.set(1.5, 1.5, (leftSide * 2 - 1) * 2);

                arm.animator.playAction('ArmExtend', 1, 0, 2, () => {
                    arm.animator.fadeOutActions(0.2);
                    arm.animator.playAction('ArmGrab', Infinity, 0.2);
                });
            }

            if (playerColliding && !arm.attacked) {
                arm.attacked = true;

                this._player.stun(context);
            }

            arm.animator.update(context.time.elapsedSeconds);
        });
    }

    playScene(context, sceneName) {
        this.reset(context);

        const tScene = this.getScene().getThreeScene();

        this._sceneName = sceneName;

        switch (sceneName) {
            case 'grab_from_walls':
                this._arms.forEach(arm => {
                    tScene.add(arm.rig);

                    arm.roadPosition.set(0, -1);
                });

                break;

            default:
                throw new Error(`Arms scene "${sceneName}" does not exist`);
        }
    }
}

Arms.p_register();
