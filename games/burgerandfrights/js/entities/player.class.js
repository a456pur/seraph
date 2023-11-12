/**
 * @file player.class.js
 * @version 1.0.0
 */

import AudioSystem from '../framework/audiosystem.class.js';
import Entity from '../framework/entity.class.js';
import Input from '../framework/input.class.js';
import ModelManager from '../framework/modelmanager.class.js';
import Animator from '../framework/three.js/animator.class.js';

import Utility from '../game/utility.class.js';

import { SkeletonUtils } from '../lib/three.js/SkeletonUtils.js';
import * as THREE from '../lib/three.js/three.module.js';

import config from '../resources/config.js';

export default class Player extends Entity {
    static _init() {
        Player._speedSteer = 2.3;
        Player._speedTurn = 0.1;
        Player._speedTurnMax = 2.5;
        Player._speedAccelerate = 1;
        Player._speedBrake = 1;
        Player._speedStopThreshold = 0.4;

        Player._velocityMax = 40;
        Player._velocitySlowFactor = 0.6;

        Player._lookResetTime = 0.5;
        Player._lookResetSmoothing = 0.01;
        Player._lookSmoothing = 0.3;

        Player._tmpV20 = new THREE.Vector2();
        Player._tmpV30 = new THREE.Vector3();
        Player._tmpV31 = new THREE.Vector3();
    }

    constructor(context, scene, options = Object.create(null)) {
        options.updatePriority = 10;

        super(context, scene, options);

        const tScene = scene.getThreeScene();

        const gltf = ModelManager.getModel('characters');

        const animationsMan = [].concat(
            Animator.filterAnimations(gltf.animations, [
                'PlayerCrash', 'PlayerEatenByCar', 'PlayerEatenByGhost', 'PlayerStrangled1',
                'PlayerStrangled2', 'PlayerEnding', 'PlayerTrapped', 'PlayerTrappedIdle', 'PlayerTrappedEscape',
            ], null, null, true, false, true),
            Animator.filterAnimations(gltf.animations, [
                'PlayerLowerBodyPaddle', 'PlayerLowerBodyPause',
            ], [
                'UpperLegLM', 'LowerLegLM', 'UpperFootLM', 'MiddleFootLM', 'LowerFootLM',
                'UpperLegRM', 'LowerLegRM', 'UpperFootRM', 'MiddleFootRM', 'LowerFootRM',
            ], null, true, false, true),
            Animator.filterAnimations(gltf.animations, [
                'PlayerUpperBodySteer', 'PlayerUpperBodyLookLeft', 'PlayerUpperBodyLookRight',
            ], [
                'RootM', 'LowerBodyM', 'MiddleBodyM', 'ChestM', 'NeckM', 'HeadM', 'CameraM',
                'ShoulderLM', 'UpperArmLM', 'LowerArmLM', 'Hand2LM', 'Finger2LM', 'Hand1LM', 'Finger1LM',
                'ShoulderRM', 'UpperArmRM', 'LowerArmRM', 'Hand2RM', 'Finger2RM', 'Hand1RM', 'Finger1RM',
            ], null, true, false, true));

        const animationsBike = Animator.filterAnimations(gltf.animations, [
            'BikeCrash', 'BikeSteer'
        ], null, null, true, false, true);

        this._rigMan = SkeletonUtils.clone(gltf.scene.getObjectByName('Man'));
        this._rigBike = gltf.scene.getObjectByName('Bike');

        this._rigMan.getObjectByName('DriverScreamingMesh').removeFromParent();
        this._rigMan.getObjectByName('DriverDeadMesh').removeFromParent();
        this._rigMan.getObjectByName('HeadM').scale.set(0, 0, 0);

        const handlebars = this._rigBike.getObjectByName('Handlebars');

        this._bag = gltf.scene.getObjectByName('Bag');
        this._bag.position.set(0, 0.08, 0.15);
        handlebars.add(this._bag);

        this._animatorMan = new Animator(this._rigMan, animationsMan);
        this._animatorBike = new Animator(this._rigBike, animationsBike);

        this._actionLowerBody = null;
        this._actionUpperBody = null;
        this._actionBike = null;

        this._group = new THREE.Group();
        this._group.name = 'Player';
        this._group.add(this._rigMan);
        this._group.add(this._rigBike);
        tScene.add(this._group);

        this._spotLight = new THREE.PointLight(0xf1a134, 0.6, 2);
        this._spotLight.name = 'AreaLight';
        this._spotLight.position.set(0, 0.13, 0.05);
        handlebars.add(this._spotLight);

        this._bikeLight = new THREE.SpotLight(0xffd37b, 0, 5, Math.PI * 0.25, 0.2, 0.4);

        this._bikeLight.name = 'BikeLight';
        this._bikeLight.position.set(0, 0.13, 0.05);
        this._bikeLight.target = this._rigBike.getObjectByName('Light');
        handlebars.add(this._bikeLight);

        this._paddles = this._rigBike.getObjectByName('Paddles');
        this._wheels = [
            this._rigBike.getObjectByName('FrontWheel'),
            this._rigBike.getObjectByName('BackWheel'),
        ];

        this._group.traverse(obj => {
            obj.matrixAutoUpdate = true;
            obj.frustumCulled = false;

            obj.material = Utility.replaceMaterial(obj.material);
        });

        this._camera = new THREE.PerspectiveCamera(70, 1, 0.06, 35);
        this._camera.name = 'PlayerCamera';
        this._camera.matrixAutoUpdate = true;

        this._listener = new THREE.AudioListener();
        this._camera.add(this._listener);

        this._cameraShakeAmount = 0;
        this._cameraShakeSeconds = 0;
        this._cameraShakeAmountMax = 0;

        this._rigMan.getObjectByName('CameraM').add(this._camera);

        this._camera.position.set(0, 0.14, 0.1);

        this._overlay = scene.findEntityOfType('Overlay');
        this._road = scene.findEntityOfType('Road');

        this._lastCursorPosition = new THREE.Vector2();

        this._lookRotation = new THREE.Vector2();
        this._lookTarget = null;
        this._lookSeconds = null;
        this._stopDuringLook = null;

        this._endingSeconds = null;

        this._resetHeight = null;

        this._killed = null;
        this._fallen = null;
        this._biking = null;

        this._secondsSinceReset = null;
        this._hurtSeconds = null;
        this._pauseSeconds = null;
        this._slowSeconds = null;
        this._slowFactor = 1;

        this._deadHandsSeconds = null;

        this._bagMode = null;
        this._bagShakeSeconds = null;

        this._speed = null;

        this._steerAngle = null;
        this._bikeAngle = null;

        this._paddleAngle = null;
        this._wheelAngle = null;

        this._playingChainSound = false;

        this.setBagMode(0);
    }

    reset(context, position, angle, fullReset = true) {
        this._lookRotation.set(0, 0);
        this._lookTarget = null;
        this._lookSeconds = 0;
        this._stopDuringLook = null;

        this._resetHeight = true;

        this._killed = false;
        this._fallen = false;
        this._biking = false;

        if (fullReset) {
            this._hurtSeconds = 0;
            this._secondsSinceReset = 0;
        } else if (this._hurtSeconds > 0) {
            context.time.setTimeout(() => {
                this._overlay.playScene(context, 'pulse_red', this._hurtSeconds);
            }, 0);
        }

        this._pauseSeconds = 0;
        this._slowSeconds = 0;
        this._slowFactor = 1;

        this._deadHandsSeconds = null;

        this._bagShakeSeconds = 0;

        this._speed = 0;

        this._steerAngle = 0;
        this._bikeAngle = angle;

        this._paddleAngle = 0;
        this._wheelAngle = 0;

        this._group.position.copy(position);
        this._group.updateWorldMatrix(false, true);

        this.playScene(context, 'biking');
    }

    handleResize(context) {
        super.handleResize(context);

        const size = context.renderer.getSize(Player._tmpV20);

        this._camera.aspect = size.x / size.y;
        this._camera.updateProjectionMatrix();
    }

    update(context) {
        super.update(context);

        if (this._resetHeight === null) {
            return;
        }

        const dt = context.time.elapsedSeconds;

        // Ending
        if (this._endingSeconds !== null) {
            this._endingSeconds += dt;

            this._camera.position.y += dt * 0.4;

            return;
        }

        // Update timers
        this._secondsSinceReset += dt;
        this._hurtSeconds -= dt;
        this._pauseSeconds -= dt;
        this._slowSeconds -= dt;
        this._lookSeconds -= dt;

        const resettingLook = this._lookSeconds >= 0 && this._lookSeconds < Player._lookResetTime;

        // Camera rotation fix
        if (resettingLook) {
            this._lookRotation.x = (this._lookRotation.x + Math.PI * 8) % (Math.PI * 2);
            if (this._lookRotation.x > Math.PI) {
                this._lookRotation.x -= Math.PI * 2;
            }
        }

        // Get bike height and slope
        const positionCenter = this._group.getWorldPosition(Player._tmpV30);
        const positionFront = this._group.localToWorld(Player._tmpV31.set(0, 0, 0.4));

        const heightCenter = this._road.getHeightAtPosition(positionCenter, true);
        const heightFront = this._road.getHeightAtPosition(positionFront, false);

        const slopeAngle = this._road.getForwardSlopeAngle(this._group, 1, 4);

        // If player is in control
        if (this._biking && !this._fallen && !this._killed) {
            const upHeld = config.input.keys.up.some(Input.getKey);
            const downHeld = config.input.keys.down.some(Input.getKey);
            const leftHeld = config.input.keys.left.some(Input.getKey);
            const rightHeld = config.input.keys.right.some(Input.getKey);
            const autopilot = this._lookTarget !== null && !this._stopDuringLook;

            // Show dead hands
            if (this._deadHandsSeconds !== null) {
                if (this._deadHandsSeconds === Infinity) {
                    if (this._lookRotation.y > -0.3) {
                        this._rigMan.getObjectByName('CyclistMesh').visible = false;
                        this._rigMan.getObjectByName('CyclistBloodyMesh').visible = true;

                        this._deadHandsSeconds = 1;
                    }
                } else if (this._deadHandsSeconds < 0) {
                        this._deadHandsSeconds = null;

                        this._overlay.playScene(context, 'fade_in_noise', 0.5);

                        this._rigMan.getObjectByName('CyclistMesh').visible = true;
                        this._rigMan.getObjectByName('CyclistBloodyMesh').visible = false;
                } else if (this._deadHandsSeconds < 1) {
                    this._deadHandsSeconds -= dt;
                } else if (this._lookRotation.y < -0.55 + 0.2 * Math.abs(this._lookRotation.x) && Math.abs(this._lookRotation.x) < Math.PI * 0.4) {
                    this._deadHandsSeconds = 0.6;

                    AudioSystem.play('effect__stinger_1')
                }
            }

            // Control camera
            if (!Input.isPointerLocked()) {
                this._lastCursorPosition.set(null, null);
            } else {
                const cursorPosition = Input.getCursorPosition(Player._tmpV20);

                if (this._lastCursorPosition.x !== null &&
                    (this._lookTarget === null || resettingLook)) {
                    const dx = cursorPosition.x - this._lastCursorPosition.x;
                    const dy = cursorPosition.y - this._lastCursorPosition.y;

                    const maxX = Math.PI;
                    const x = THREE.MathUtils.clamp(this._lookRotation.x - dx * config.input.mouseSensitivity.x, -maxX, maxX);
                    const maxY = Math.PI * 0.4 - Math.max(0, Math.abs(x) * 0.5 - 0.4);
                    const y = THREE.MathUtils.clamp(this._lookRotation.y - dy * config.input.mouseSensitivity.y, -maxY, maxY);

                    this._lookRotation.set(x, y);

                    // Ring bell
                    if (Input.getMouseButtonDown() && this._secondsSinceReset > 1.5) {
                        AudioSystem.play('effect__bike_bell');

                        if (this._bagShakeSeconds > 0.6) {
                            this._bagShakeSeconds = Math.max(0.6, this._bagShakeSeconds - 3);
                        }
                    }
                }

                this._lastCursorPosition.copy(cursorPosition);
            }

            // Turn handle
            if (autopilot) {
                this._bikeAngle = this._road.getRoadAngle(this._road.getPlayerRoadPosition().y);
            } else {
                this._steerAngle = (
                    leftHeld ? Math.max(-1, this._steerAngle - Player._speedSteer * dt * (this._steerAngle > 0 ? 2 : 1)) :
                    rightHeld ? Math.min(1, this._steerAngle + Player._speedSteer * dt * (this._steerAngle < 0 ? 2 : 1)) :
                    this._steerAngle < 0 ?
                        Math.min(0, this._steerAngle + Player._speedSteer * dt) :
                        Math.max(0, this._steerAngle - Player._speedSteer * dt));
            }

            // Accelerate and brake
            const stop = this._secondsSinceReset < 1 || this._pauseSeconds > 0 ||
                this._lookTarget !== null && this._stopDuringLook && !resettingLook;

            if (upHeld && !stop || autopilot) {
                this._speed = this._speed + Player._speedAccelerate * dt;
            } else if (downHeld || this._speed < Player._speedStopThreshold || stop) {
                this._speed = this._speed - Player._speedBrake * dt;
            }

            // Limit speed
            this._speed = THREE.MathUtils.clamp(this._speed, 0, 1);

            // Fall down
            const drop = heightCenter === null ? 0 : this._group.position.y - heightCenter;
            const outsideMap = heightFront === null || heightCenter === null;

            if (this._pauseSeconds <= 0 && this._lookTarget === null &&
                (drop > 3 && !this._resetHeight || outsideMap)) {
                this.playScene(context, 'fall');

                return;
            }

            // Crash into wall
            if (heightFront > heightCenter + 3) {
                const forwardAngle = this._road.getRoadAngle(this._road.getPlayerRoadPosition().y);
                const closestAngle = Utility.getClosestAngle(forwardAngle, this._bikeAngle);

                if (closestAngle < -Math.PI / 2) {
                    this._bikeAngle = forwardAngle + Math.PI * 0.95;
                } else if (closestAngle < 0) {
                    this._bikeAngle = forwardAngle + Math.PI * 0.05;
                } else if (closestAngle > Math.PI / 2) {
                    this._bikeAngle = forwardAngle - Math.PI * 0.95;
                } else {
                    this._bikeAngle = forwardAngle - Math.PI * 0.05;
                }

                this._group.position.x += Math.sin(-this._bikeAngle) * 0.3;
                this._group.position.z += Math.cos(-this._bikeAngle) * 0.3;

                if (!autopilot && this._pauseSeconds <= 0) {
                    this.stun(context);
                }
            }

            // Calculate velocity
            if (this._slowSeconds > 0) {
                this._slowFactor = Math.max(Player._velocitySlowFactor, this._slowFactor - dt);
            } else {
                this._slowFactor = Math.min(1, this._slowFactor + dt * 2);
            }
            const velocity = Utility.easeInOutCubic(this._speed) * Player._velocityMax * this._slowFactor;

            // Turn bike
            this._bikeAngle += this._steerAngle * Math.min(Player._speedTurn * velocity, Player._speedTurnMax) * dt;

            // Rotate and move player
            this._group.rotation.set(0, 0, 0);
            this._group.rotateY(-this._bikeAngle);
            this._group.rotateX(-slopeAngle);
            this._group.rotateZ((this._steerAngle + Math.sin(this._paddleAngle) * 0.5) * Math.min(velocity * 0.1, 1) * 0.02);

            if (heightCenter !== null) {
                this._group.position.y = heightCenter;

                this._resetHeight = false;
            }

            this._group.position.x += Math.sin(-this._bikeAngle) * velocity * dt * 0.1;
            this._group.position.z += Math.cos(-this._bikeAngle) * velocity * dt * 0.1;

            // Pull towards center if in autopilot
            if (autopilot) {
                const roadCenter = this._road.roadToWorldPosition(Player._tmpV20.set(0, this._road.getPlayerRoadPosition().y), Player._tmpV30);
                const centerT = 1 - 0.7 ** dt;
                this._group.position.lerp(roadCenter, centerT);
            }

            // Update animations
            const lookingRight = this._lookRotation.x < -Math.PI * 0.4;
            const lookingLeft = this._lookRotation.x > Math.PI * 0.4;

            // Update bike animations
            if (this._actionLowerBody !== null) {
                switch (this._actionLowerBody.getClip().name) {
                    case 'PlayerLowerBodyPaddle':
                        this._actionLowerBody.timeScale = this._speed * 1;
                        this._paddleAngle = this._actionLowerBody.time / this._actionLowerBody.getClip().duration * Math.PI * 2;

                        if (this._speed === 0) {
                            this._actionLowerBody.fadeOut(0.5);
                            this._actionLowerBody = this._animatorMan.playAction('PlayerLowerBodyPause', 1, 0.5);
                        }

                        break;

                    case 'PlayerLowerBodyPause':
                        this._paddleAngle = 0;

                        if (this._speed > 0) {
                            this._actionLowerBody.fadeOut(0.5);
                            this._actionLowerBody = this._animatorMan.playAction('PlayerLowerBodyPaddle', Infinity, 0.5, 0);
                        }

                        break;
                }
            }

            switch (this._actionUpperBody.getClip().name) {
                case 'PlayerUpperBodySteer':
                    this._actionUpperBody.time = ((this._steerAngle + 1) / 2) * this._actionUpperBody.getClip().duration;

                    if (lookingLeft || lookingRight) {
                        this._actionUpperBody.fadeOut(0.5);
                        this._actionUpperBody = this._animatorMan.playAction(lookingLeft ? 'PlayerUpperBodyLookLeft' : 'PlayerUpperBodyLookRight', 1);
                    }

                    break;

                case 'PlayerUpperBodyLookLeft':
                    if (!lookingLeft) {
                        this._actionUpperBody.fadeOut(0.2);
                        this._actionUpperBody = this._animatorMan.playAction('PlayerUpperBodySteer', 1, 0.2, 0);
                    }

                    break;

                case 'PlayerUpperBodyLookRight':
                    if (!lookingRight) {
                        this._actionUpperBody.fadeOut(0.2);
                        this._actionUpperBody = this._animatorMan.playAction('PlayerUpperBodySteer', 1, 0.2, 0);
                    }

                    break;
            }

            switch (this._actionBike.getClip().name) {
                case 'BikeSteer':
                    this._actionBike.time = ((this._steerAngle + 1) / 2) * this._actionBike.getClip().duration;

                    break;
            }

            // Rotate wheels
            this._wheelAngle += velocity * dt * 2;

            this._paddles.rotation.x = this._paddleAngle - Math.PI * 0.5;

            this._wheels.forEach(wheel => {
                wheel.rotation.x = this._wheelAngle;
            });
        }

        // Play bike chain sound
        if (this._speed > 0.5 && !this._playingChainSound) {
            AudioSystem.play('effect__bike_chain', 1, true, 'chain');

            this._playingChainSound = true;
        } else if (this._speed <= 0.5 && this._playingChainSound) {
            AudioSystem.stop('chain');

            this._playingChainSound = false;
        }

        // Update bike light
        this._bikeLight.intensity = THREE.MathUtils.clamp((this._speed - 0.3) * (2 - Math.random() * 0.1) * 4, 0.2, 2);

        // Update animators
        this._animatorMan.update(dt);
        this._animatorBike.update(dt);

        // Shake bag
        this._bagShakeSeconds -= dt;
        if (this._bagShakeSeconds <= 0) {
            this._bagShakeSeconds = 5 + Math.random() * 20;
        }

        const bagShake = this._bagMode < 2 ? 0 :
            Math.sin(context.time.totalSeconds * 30) * (0.3 - Math.abs(0.3 - Math.min(0.6, this._bagShakeSeconds)));

        this._bag.rotation.set(Math.PI - 0.3, 0, -this._steerAngle * 0.2 + bagShake * 0.35);

        // Update camera
        if (this._lookTarget !== null && !resettingLook) {
            const lerpT = 1 - Player._lookSmoothing ** dt;

            const world = this._lookTarget.getWorldPosition(Player._tmpV30);
            const local = this._group.worldToLocal(world);
            const angle = Math.atan2(local.x, local.z);
            const closestAngle = Utility.getClosestAngle(this._lookRotation.x, angle);

            this._lookRotation.lerp(Player._tmpV20.set(this._lookRotation.x + closestAngle, 0), lerpT);
        }

        if (this._lookSeconds <= 0) {
            this._lookTarget = null;
        }

        if (!this._biking || resettingLook) {
            const lerpT = 1 - Player._lookResetSmoothing ** dt;
            this._lookRotation.lerp(Player._tmpV20.set(0, 0), lerpT);
        }

        this._cameraShakeSeconds = Math.max(0, this._cameraShakeSeconds - dt);
        const shakeAmount = Math.min(this._cameraShakeAmountMax, this._cameraShakeSeconds * this._cameraShakeAmount);

        this._camera.rotation.set(
            this._lookRotation.y + shakeAmount * Math.random(),
            this._lookRotation.x + Math.PI + shakeAmount * Math.random(), 0, 'ZYX');
    }

    playScene(context, sceneName) {
        this._speed = 0;

        this._rigMan.getObjectByName('CyclistMesh').visible = true;
        this._rigMan.getObjectByName('CyclistBloodyMesh').visible = false;
        this._rigMan.getObjectByName('DriverCalmMesh').visible = false;

        this._rigBike.visible = true;

        this._animatorMan.fadeOutActions(0.1);
        this._animatorBike.fadeOutActions(0.1);

        this._biking = false;
        this._killed = false;
        this._fallen = false;

        switch (sceneName) {
            case 'biking':
                this._biking = true;

                this._actionLowerBody = this._animatorMan.playAction('PlayerLowerBodyPaddle', Infinity, 0, 0);
                this._actionUpperBody = this._animatorMan.playAction('PlayerUpperBodySteer', 1, 0, 0);
                this._actionBike = this._animatorBike.playAction('BikeSteer', 1, 0, 0);

                break;

            case 'crash':
                AudioSystem.play('effect__bike_crash');

                this._actionLowerBody = null;
                this._actionUpperBody = this._animatorMan.playAction('PlayerCrash', 1, 0.1);
                this._actionBike = this._animatorBike.playAction('BikeCrash', 1, 0.1);

                this.shakeCamera(1);

                this._killed = true;

                break;

            case 'fall':
                AudioSystem.play('effect__bike_crash');

                this._actionLowerBody = null;
                this._actionUpperBody = this._animatorMan.playAction('PlayerCrash', 1, 0.1);
                this._actionBike = this._animatorBike.playAction('BikeCrash', 1, 0.1);

                this._fallen = true;

                break;

            case 'eaten_by_car':
                AudioSystem.play('effect__bike_crash');

                context.time.setTimeout(() => {
                    AudioSystem.play('effect__game_over_stinger');
                }, 3500);

                context.time.setTimeout(() => {
                    AudioSystem.play('effect__game_over_scream');
                }, 5000);

                this._actionLowerBody = null;
                this._actionUpperBody = this._animatorMan.playAction('PlayerEatenByCar', 1, 0.1, 1, () => {
                    this._killed = true;
                });
                this._actionBike = this._animatorBike.playAction('BikeCrash', 1, 0.1);

                this._bikeAngle = this._road.getRoadAngle(this._road.getPlayerRoadPosition().y);

                this._group.rotation.set(0, 0, 0);
                this._group.rotateY(-this._bikeAngle);

                break;

            case 'eaten_by_ghost':
                AudioSystem.play('effect__bike_crash');

                context.time.setTimeout(() => {
                    AudioSystem.play('effect__game_over_stinger');
                }, 3000);

                context.time.setTimeout(() => {
                    AudioSystem.play('effect__game_over_scream');
                }, 4500);

                this._actionLowerBody = null;
                this._actionUpperBody = this._animatorMan.playAction('PlayerEatenByGhost', 1, 0.1, 1, () => {
                    this._killed = true;
                });
                this._actionBike = this._animatorBike.playAction('BikeCrash', 1, 0.1);

                this._bikeAngle = this._road.getRoadAngle(this._road.getPlayerRoadPosition().y);

                this._group.rotation.set(0, 0, 0);
                this._group.rotateY(-this._bikeAngle);

                break;

            case 'strangled':
                const killed = this._hurtSeconds > 0;

                this._hurtSeconds = 50;

                this._overlay.playScene(context, 'pulse_red', killed ? 3 : this._hurtSeconds);

                this._actionLowerBody = null;
                this._actionUpperBody = this._animatorMan.playAction(killed ? 'PlayerStrangled2' : 'PlayerStrangled1', 1, 0.1, 1, () => {
                    if (killed) {
                        this._killed = true;
                    } else {
                        this.playScene(context, 'biking');
                    }
                });

                AudioSystem.play('effect__ghost_catch');

                if (killed) {
                    this._actionBike = this._animatorBike.playAction('BikeCrash', 1, 0, 0.3);

                    context.time.setTimeout(() => {
                        AudioSystem.play('effect__game_over_stinger');
                    }, 2500);

                    context.time.setTimeout(() => {
                        AudioSystem.play('effect__game_over_scream');
                    }, 4000);
                } else {
                    this._actionBike = this._animatorBike.playAction('BikeSteer', 1, 0, 0);
                }

                this.shakeCamera(2, 0.5, 0.05);

                break;

            case 'trapped':
                AudioSystem.stop('ambiance');

                AudioSystem.play('effect__bike_crash');

                context.time.setTimeout(() => {
                    AudioSystem.play('effect__trap_chain');
                }, 1000);

                this._actionBike = this._animatorBike.playAction('BikeCrash');

                this.shakeCamera(0.1);

                this._actionUpperBody = this._animatorMan.playAction('PlayerTrapped', 1, 0.1, 1, () => {
                    AudioSystem.play('effect__ghost_laugh');
                    AudioSystem.play('ambiance__creepy_violin', 1, true, 'ambiance', 0, 3);

                    context.time.setTimeout(() => {
                        AudioSystem.play('effect__car_reveal');
                    }, 12000);

                    context.time.setTimeout(() => {
                        AudioSystem.stop('ambiance', 1);
                        AudioSystem.play('ambiance__forest_after_hunt', 1, true, 'ambiance', 0, 0.5);

                        this._overlay.playScene(context, 'enough', 2);
                    }, 12500);

                    context.time.setTimeout(() => {
                        AudioSystem.play('effect__game_over_stinger');
                    }, 21400);

                    context.time.setTimeout(() => {
                        AudioSystem.play('effect__bike_stun');
                    }, 16800);

                    context.time.setTimeout(() => {
                        AudioSystem.play('effect__game_over_splatter');
                    }, 22500);

                    context.time.setTimeout(() => {
                        AudioSystem.play('effect__car_reveal');
                    }, 24000);

                    context.time.setTimeout(() => {
                        this._overlay.playScene(context, 'belong', 4);
                    }, 25000);

                    this._animatorMan.fadeOutActions(0.1);

                    this._actionUpperBody = this._animatorMan.playAction('PlayerTrappedIdle', 9, 0.1, 1, () => {
                        this._animatorMan.fadeOutActions(0.1);

                        context.time.setTimeout(() => {
                            AudioSystem.play('effect__bike_stun');

                            this.shakeCamera(0.2);
                        }, 1100);

                        for (let i = 0; i < 4; i++) {
                            context.time.setTimeout(() => {
                                AudioSystem.play('effect__step');

                                this.shakeCamera(0.05);
                            }, 4500 + i * 500);
                        }

                        AudioSystem.play('effect__trap_chain');

                        this._actionUpperBody = this._animatorMan.playAction('PlayerTrappedEscape', 1, 0.1, 1, () => {
                            AudioSystem.stop('ambiance', 0.5);
                            AudioSystem.play('effect__road_loop');

                            this._overlay.playScene(context, 'spiral', 10);

                            context.time.setTimeout(() => {
                                const scene = this.getScene();

                                scene.findEntityOfType('Environment').setEnvironment('forest');
                                scene.findEntityOfType('Director').resetInEnding(context);

                                this.playScene(context, 'ending', 1, 0, 0.7);
                            }, 5000);
                        });
                    });
                });

                const throneSegment = this._road.getSegmentInstance('TuonelaThrone');
                const chains = throneSegment.mesh.getObjectByName('Chains');

                chains.getWorldPosition(this._group.position);
                chains.getWorldQuaternion(this._group.quaternion);

                context.time.setTimeout(() => {
                    this._rigMan.getObjectByName('CyclistMesh').visible = false;
                    this._rigMan.getObjectByName('DriverCalmMesh').visible = true;

                    chains.visible = true;
                }, 3000);

                break;

            case 'ending':
                this._rigMan.getObjectByName('CyclistMesh').visible = false;
                this._rigMan.getObjectByName('DriverCalmMesh').visible = true;

                this._rigBike.visible = false;

                const segment = this._road.getSegmentInstance('ForestBike');
                const car = segment.mesh.getObjectByName('Car');

                car.getWorldPosition(this._group.position);
                car.getWorldQuaternion(this._group.quaternion);

                this._actionUpperBody = this._animatorMan.playAction('PlayerEnding', 1, 0, 1);

                this.getScene().findEntityOfType('Environment').getPointLight(0xffffff, 0.5, 2, 2,
                    this._group.position.x,
                    this._group.position.y + 1,
                    this._group.position.z);

                context.time.setTimeout(() => {
                    AudioSystem.stop('ambiance', 3);
                    AudioSystem.play('music__outro', 1, true, 'music');
                }, 16000);

                context.time.setTimeout(() => {
                    this._camera.removeFromParent();
                    this.getScene().getThreeScene().add(this._camera);

                    car.getWorldPosition(this._camera.position).y += 0.7;
                    this._camera.rotation.set(-Math.PI / 2, 0, 0);

                    this._endingSeconds = 0;
                }, 17000);

                context.time.setTimeout(() => {
                    this._overlay.playScene(context, 'outro', 6, () => {
                        this.getScene().stop(context);

                        context.app.constructor.setCreditsVisibility(true, false);

                        Input.exitPointerLock();
                        Input.setPointerLockElement();
                    });
                }, 38000);

                context.time.setTimeout(() => {
                    AudioSystem.stop('music', 10);
                }, 50000);

                break;

            default:
                throw new Error(`Player scene "${sceneName}" does not exist`);
        }
    }

    getCamera() {
        return this._camera;
    }

    getListener() {
        return this._listener;
    }

    getGroup() {
        return this._group;
    }

    getHurt() {
        return this._hurtSeconds > 0;
    }

    getKilled() {
        return this._killed;
    }

    getFallen() {
        return this._fallen;
    }

    getBiking() {
        return this._biking;
    }

    getSpeed() {
        return this._speed;
    }

    getLookAngleTowards(object3d) {
        const world = object3d.getWorldPosition(Player._tmpV30);
        const local = this._camera.worldToLocal(world);
        const forward = Player._tmpV31.set(0, 0, -1);

        return local.angleTo(forward);
    }

    getLookRotation() {
        return this._lookRotation;
    }

    setBagMode(mode) {
        this._bagMode = mode;

        this._bag.getObjectByName('BagNormal').visible = this._bagMode === 0;
        this._bag.getObjectByName('BagLittleBlood').visible = this._bagMode === 1;
        this._bag.getObjectByName('BagMuchBlood').visible = this._bagMode === 2;
    }

    shakeCamera(duration, amount = 0.5, amountMax = 0.2) {
        this._cameraShakeSeconds = duration;
        this._cameraShakeAmount = amount;
        this._cameraShakeAmountMax = amountMax;
    }

    lookAt(object3d, seconds, stopDuringLook = true) {
        this._lookTarget = object3d;
        this._lookSeconds = seconds;
        this._stopDuringLook = stopDuringLook;
    }

    pause(seconds) {
        this._pauseSeconds = seconds;
    }

    slowDown(seconds) {
        this._slowSeconds = seconds;
    }

    stun(context) {
        if (this._lookSeconds > 0) {
            return;
        }

        AudioSystem.play('effect__bike_stun');

        if (!this._overlay.isPlayingScene()) {
            this._overlay.playScene(context, 'hurt', 0.5);
        }

        this.shakeCamera(0.3);

        this._pauseSeconds = 0.3;
        this._speed = 0;
    }

    showDeadHands() {
        this._deadHandsSeconds = Infinity;
    }
}

Player._init();
Player.p_register();
