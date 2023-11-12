/**
 * @file ghost.class.js
 * @version 1.0.0
 */

import AudioSystem from '../framework/audiosystem.class.js';
import Entity from '../framework/entity.class.js';
import ModelManager from '../framework/modelmanager.class.js';
import Animator from '../framework/three.js/animator.class.js';

import Utility from '../game/utility.class.js';

import * as THREE from '../lib/three.js/three.module.js';

export default class Ghost extends Entity {
    static _init() {
        Ghost._tmpV20 = new THREE.Vector2();
    }

    constructor(context, scene, options = Object.create(null)) {
        options.updatePriority = 5;

        super(context, scene, options);

        const tScene = scene.getThreeScene();

        const gltf = ModelManager.getModel('characters');

        const animations = Animator.filterAnimations(gltf.animations, [
            'GhostReveal', 'GhostWalkNormal', 'GhostWalkCreepy', 'GhostWalkHands', 'GhostBiking',
            'GhostStrangle2', 'GhostStrangle1', 'GhostCrawlStart', 'GhostCrawl', 'GhostCrawlEat', 'GhostBehind', 'GhostTrap', 'GhostJump',
        ], null, null, true, false, true);

        this._rigGhost = gltf.scene.getObjectByName('Ghost');

        this._head = this._rigGhost.getObjectByName('Head');

        this._animator = new Animator(this._rigGhost, animations);

        this._action = null;

        this._group = new THREE.Group();
        this._group.name = 'Ghost';
        this._group.add(this._rigGhost);
        this._group.add(gltf.scene.getObjectByName('BikeStatic'));
        tScene.add(this._group);

        this._group.traverse(obj => {
            obj.matrixAutoUpdate = true;
            obj.frustumCulled = false;

            obj.material = Utility.replaceMaterial(obj.material);
        });

        this._player = scene.findEntityOfType('Player');
        this._road = scene.findEntityOfType('Road');
        this._train = scene.findEntityOfType('Train');
        this._overlay = scene.findEntityOfType('Overlay');

        this._sceneName = null;
        this._sceneSeconds = null;

        this._stopping = null;
        this._huntIndex = null;
        this._boostSeconds = null;
        this._walkAngle = null;
        this._soundPlayed = null;

        this._roadPosition = new THREE.Vector2();

        this._lastActionTime = null;
    }

    reset(context) {
        this._animator.stopActions();

        this._sceneName = null;

        this._stopping = false;
        this._boostSeconds = 2;
        this._walkAngle = Math.PI;
        this._soundPlayed = false;

        this._lastActionTime = null;

        this._group.visible = false;

        this._rigGhost.getObjectByName('GhostNormalMesh').visible = false;
        this._rigGhost.getObjectByName('GhostHappyMesh').visible = false;
        this._rigGhost.getObjectByName('GhostAngryMesh').visible = false;
        this._rigGhost.getObjectByName('GhostCyclistMesh').visible = false;

        this._group.getObjectByName('BikeStatic').visible = false;
    }

    update(context) {
        super.update(context);

        if (this._sceneName === null) {
            return;
        }

        const dt = context.time.elapsedSeconds;

        const lastSceneSeconds = this._sceneSeconds;
        this._sceneSeconds += dt;

        const distanceMin = this._road.getRoadDistanceMin();
        const distanceMax = this._road.getRoadDistanceMax();
        const playerRoadPosition = this._road.getPlayerRoadPosition();
        const playerBiking = this._player.getBiking();
        const pdx = this._roadPosition.x - playerRoadPosition.x;
        const pdd = this._road.getRoadDistanceBetween(playerRoadPosition.y, this._roadPosition.y);

        let moving = false;
        let shakeHead = 0;
        let t;

        switch (this._sceneName) {
            case 'walk_away':
                moving = true;

                if (pdd < 14) {
                    this._action.timeScale = 1.5;

                    this._player.slowDown(1);

                    if (!this._soundPlayed) {
                        this._soundPlayed = true;

                        AudioSystem.play('effect__ghost_laugh');
                    }
                }

                if (this._action.timeScale > 0) {
                    this._roadPosition.y += 0.07 * dt;
                }

                break;

            case 'reveal':
                moving = true;

                this._roadPosition.x = playerRoadPosition.x;

                if (this._sceneSeconds > 8 && this._sceneSeconds < 22) {
                    this._roadPosition.y += 0.02 * dt;
                }

                if (this._sceneSeconds > 4 && !this._soundPlayed) {
                    this._soundPlayed = true;

                    AudioSystem.play('effect__ghost_laugh');
                }

                if (this._sceneSeconds >= 20 && lastSceneSeconds < 20) {
                    AudioSystem.play('effect__ghost_reveal', 1, false, null, 3.8);
                }

                if (this._sceneSeconds >= 18.7 && lastSceneSeconds < 18.7) {
                    this._rigGhost.getObjectByName('GhostNormalMesh').visible = false;
                    this._rigGhost.getObjectByName('GhostHappyMesh').visible = true;

                    this._train.makeBloody();

                    this._animator.playAction('GhostJump', 1, 0, 1);

                    this._roadPosition.y += 0.19;
                }

                if (this._sceneSeconds > 19.5 && this._sceneSeconds < 21.5) {
                    this._player.shakeCamera(0.5, 0.01);
                }

                if (this._sceneSeconds >= 22 && lastSceneSeconds < 22) {
                    this._rigGhost.getObjectByName('GhostHappyMesh').visible = false;
                }

                if (this._sceneSeconds >= 25 && lastSceneSeconds < 25) {
                    this._train.stop();
                }

                if (this._sceneSeconds >= 26 && lastSceneSeconds < 26) {
                    this.playScene(context, 'hunting_start');

                    this._roadPosition.set(playerRoadPosition.x, playerRoadPosition.y + 1.15);
                }

                break;

            case 'hunting':
                const angleToPlayer = Math.atan2(pdx, pdd) + this._stopping * Math.PI;
                const closestAngleToPlayer = Utility.getClosestAngle(this._walkAngle, angleToPlayer);
                const distanceToPlayer = Math.sqrt(pdx * pdx + pdd * pdd);
                const playerColliding = playerBiking && distanceToPlayer < 0.55;
                const walking = this._huntIndex % 4 !== 3;

                this._walkAngle += closestAngleToPlayer * (1 - 0.1 ** dt);

                if (walking) {
                    this._boostSeconds -= dt;

                    if (this._boostSeconds < -0.2) {
                        this._boostSeconds = Math.random() * 3;
                    }

                    this._action.timeScale = this._boostSeconds < 0 ? 8 : 1;
                    shakeHead = this._boostSeconds < 0 ? 0.5 : 0;
                }

                if (playerColliding && !this._stopping) {
                    this._rigGhost.getObjectByName('GhostHappyMesh').visible = false;
                    this._rigGhost.getObjectByName('GhostAngryMesh').visible = true;

                    this._animator.fadeOutActions(0.3);
                    this._animator.playAction(this._player.getHurt() ? 'GhostStrangle2' : 'GhostStrangle1', 1, 0.1, 1, () => {
                        this.playScene(context, 'hunting');
                    });

                    this._player.playScene(context, 'strangled');

                    const playerGroup = this._player.getGroup();

                    this._group.position.copy(playerGroup.position);
                    this._group.rotation.copy(playerGroup.rotation);

                    this._sceneName = 'strangling';
                    this._sceneSeconds = 0;
                } else {
                    moving = true;

                    if (pdd < -8) {
                        if (this._stopping) {
                            this.reset(context);
                        } else {
                            this.playScene(context, 'hunting');
                        }
                    } else if (this._sceneSeconds > 15 && pdd > 8) {
                        this._huntIndex = 2;

                        if (this._stopping) {
                            this.reset(context);
                        } else {
                            this.playScene(context, 'hunting');
                        }

                        this._roadPosition.y = playerRoadPosition.y + 0.7;
                    }
                }

                const velocity = !playerBiking ? 0.1 : !walking ? 1.5 : 0.5 * this._action.timeScale;
                const vx = Math.sin(-this._walkAngle) * velocity * dt;
                const vy = -Math.cos(-this._walkAngle) * velocity * dt / 13;

                this._roadPosition.set(this._roadPosition.x + vx,
                    THREE.MathUtils.clamp(this._roadPosition.y + vy, distanceMin, distanceMax));

                break;

            case 'strangling':
                shakeHead = 0.25;

                break;

            case 'chase':
                moving = true;
                shakeHead = 0.1;

                break;

            case 'chase_started':
                moving = true;
                shakeHead = 0.1;

                this._action.timeScale = this._stopping ? this._action.timeScale * 0.95
                    : Math.min(this._sceneSeconds / 2, 3, Math.max(0.2, -pdd / 9));

                this._roadPosition.y = Math.max(distanceMin, this._roadPosition.y + dt * this._action.timeScale * 0.15);

                if (this._lastActionTime !== null && (
                    this._lastActionTime < 1.05 && this._action.time >= 1.05 ||
                    this._lastActionTime < 2.35 && this._action.time >= 2.35)) {
                    AudioSystem.play('effect__giant_step');

                    this._player.shakeCamera(0.2);
                }

                this._lastActionTime = this._action.time;

                if (playerBiking && pdd > -10) {
                    this._animator.fadeOutActions(0.5);
                    this._animator.playAction('GhostCrawlEat', 1, 0.5, 0.8);

                    this._player.playScene(context, 'eaten_by_ghost');

                    const playerGroup = this._player.getGroup();

                    this._road.roadToWorldPosition(Ghost._tmpV20.set(
                        0, this._roadPosition.y + 0.65), playerGroup.position);

                    this._sceneName = 'chase_ended';
                    this._sceneSeconds = 0;
                }

                break;

            case 'chase_ended':
                shakeHead = 0.2;

                break;

            case 'biking':
                this._roadPosition.y += dt * (1 - Math.min(0.6, Math.max(0, pdd / 5 + 0.3)));

                if (playerRoadPosition.x < 0 || Math.abs(pdd) > 3) {
                    this._roadPosition.x = Math.min(2, this._roadPosition.x + dt * 2);
                } else {
                    this._roadPosition.x = Math.max(-2, this._roadPosition.x - dt * 2);
                }

                if (this._roadPosition.y >= distanceMax) {
                    this.reset(context);
                } else {
                    moving = true;
                }

                break;

            case 'behind_player':
                if (!playerBiking) {
                    this.reset(context);
                } else {
                    const playerGroup = this._player.getGroup();

                    if (this._action.time < 1) {
                        this._group.position.copy(playerGroup.position);
                        this._group.rotation.copy(playerGroup.rotation);
                    }

                    this._rigGhost.getObjectByName('GhostHappyMesh').visible = this._action.time <= 0.2;
                    this._rigGhost.getObjectByName('GhostAngryMesh').visible = this._action.time > 0.2;

                    if (this._action.timeScale === 0) {
                        if (this._player.getLookRotation().x > 1.45) {
                            AudioSystem.play('effect__ghost_catch');
                            AudioSystem.play('effect__stinger_2');

                            this._action.timeScale = 0.7;
                        } else if (this._player.getLookRotation().x < 0) {
                            this._rigGhost.getObjectByName('GhostHappyMesh').visible = false;
                        }
                    }
                }

                break;
        }

        if (moving) {
            this._road.roadToWorldPosition(this._roadPosition, this._group.position);
            this._group.rotation.set(0, -this._walkAngle
                - this._road.getRoadAngle(this._roadPosition.y) + Math.PI, 0);
        }

        this._animator.update(dt);

        if (shakeHead) {
            this._head.rotation.x += (Math.random() * 1 - 0.5) * shakeHead;
            this._head.rotation.y += (Math.random() * 1 - 0.5) * shakeHead;
            this._head.rotation.z += (Math.random() * 1 - 0.5) * shakeHead;
        }
    }

    playScene(context, sceneName, segment = null) {
        if (sceneName === 'hunting_start' && this._sceneName === 'hunting') {
            return;
        }

        this.reset(context);

        const playerRoadPosition = this._road.getPlayerRoadPosition();

        this._sceneName = sceneName;
        this._sceneSeconds = 0;

        this._group.visible = true;
        this._group.scale.set(1, 1, 1);

        switch (sceneName) {
            case 'walk_away':
                this._rigGhost.getObjectByName('GhostNormalMesh').visible = true;

                this._action = this._animator.playAction('GhostWalkNormal', 2, 0, 0, () => {
                    this.reset(context);
                });

                this._roadPosition.set(1, segment.index + 0.6);

                break;

            case 'reveal':
                const secondsUntilLoop = this._train.getSecondsUntilLoop();

                this._player.pause(10);

                this._sceneSeconds = -secondsUntilLoop;

                context.time.setTimeout(() => {
                    this._overlay.playScene(context, 'letterbox', 27);

                    this._player.lookAt(this._group, 27);

                    this._roadPosition.set(0, playerRoadPosition.y - 0.6);

                    this._animator.playAction('GhostReveal', 1, 0, 0.5, () => {
                        this._animator.fadeOutActions(0.5);

                        this._animator.playAction('GhostWalkNormal', Infinity, 0.5, 1);
                    });

                    this._rigGhost.getObjectByName('GhostNormalMesh').visible = true;
                }, (secondsUntilLoop + 3.5) * 1000);

                break;

            case 'hunting_start':
                this._overlay.setContrast(0.6, 0.5, 0.5, 20);

                AudioSystem.stop('ambiance', 0.5);
                AudioSystem.play('ambiance__ghost_hunt', 1, true, 'ambiance');

            case 'hunting':
                this._huntIndex = this._huntIndex === null ? 0 : this._huntIndex + 1;

                if (this._huntIndex % 4 === 3) {
                    this._rigGhost.getObjectByName('GhostHappyMesh').visible = true;

                    this._animator.playAction('GhostWalkHands', Infinity, 0, 5);
                } else {
                    this._rigGhost.getObjectByName('GhostHappyMesh').visible = true;

                    this._action = this._animator.playAction('GhostWalkCreepy', Infinity);
                }

                this._roadPosition.set(
                    Math.random() < 0.4 ? playerRoadPosition.x : -4 + Math.random() * 8,
                    playerRoadPosition.y + 1 + Math.random() * 7);

                this._sceneName = 'hunting';

                break;

            case 'chase':
                this._rigGhost.getObjectByName('GhostAngryMesh').visible = true;

                this._animator.playAction('GhostCrawlStart', 1, 0, 0.8, () => {
                    this._animator.fadeOutActions(1);
                    this._action = this._animator.playAction('GhostCrawl', Infinity, 0.5);
                    this._action.time = 1.8;

                    this._sceneName = 'chase_started';
                    this._sceneSeconds = 0;
                });

                this._roadPosition.set(0, segment.index - 0.3);

                this._group.scale.set(12, 12, 12);

                this._player.pause(3);

                context.time.setTimeout(() => {
                    this._player.lookAt(this._group, 10);

                    this._overlay.playScene(context, 'letterbox', 10);
                }, 2000);

                [0, 1, 2, 3].forEach(seconds => {
                    context.time.setTimeout(() => {
                        AudioSystem.play('effect__giant_step');

                        this._player.shakeCamera(0.3);
                    }, seconds * 1000);
                });

                break;

            case 'biking':
                this._rigGhost.getObjectByName('GhostAngryMesh').visible = true;
                this._group.getObjectByName('BikeStatic').visible = true;

                this._animator.playAction('GhostBiking', Infinity, 0, 1);

                this._roadPosition.set(0, playerRoadPosition.y - 0.5);

                context.time.setTimeout(() => {
                    AudioSystem.play('effect__ghost_reveal');
                }, 500);

                break;

            case 'behind_player':
                this._rigGhost.getObjectByName('GhostHappyMesh').visible = true;

                this._action = this._animator.playAction('GhostBehind', 1, 0, 0, () => {
                    this.reset(context);
                });

                break;

            case 'trap':
                this._rigGhost.getObjectByName('GhostHappyMesh').visible = true;

                this._animator.playAction('GhostTrap');

                const throneSegment = this._road.getSegmentInstance('TuonelaThrone');
                const chains = throneSegment.mesh.getObjectByName('Chains');

                chains.getWorldPosition(this._group.position);
                chains.getWorldQuaternion(this._group.quaternion);

                context.time.setTimeout(() => {
                   this._rigGhost.getObjectByName('GhostHappyMesh').visible = false;
                   this._rigGhost.getObjectByName('GhostAngryMesh').visible = true;
                }, 6000);

                context.time.setTimeout(() => {
                   this._rigGhost.getObjectByName('GhostAngryMesh').visible = false;
                   this._rigGhost.getObjectByName('GhostHappyMesh').visible = true;
                }, 14200);

                context.time.setTimeout(() => {
                   this._rigGhost.getObjectByName('GhostHappyMesh').visible = false;
                   this._rigGhost.getObjectByName('GhostCyclistMesh').visible = true;

                   this._overlay.playScene(context, 'fade_in_white', 1);

                   this._player.shakeCamera(0.1);
                }, 18000);

                break;

            default:
                throw new Error(`Ghost scene "${sceneName}" does not exist`);
        }
    }

    stop() {
        this._stopping = true;
    }
}

Ghost._init();
Ghost.p_register();
