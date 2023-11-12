/**
 * @file car.class.js
 * @version 1.0.0
 */

import AudioSystem from '../framework/audiosystem.class.js';
import Entity from '../framework/entity.class.js';
import ModelManager from '../framework/modelmanager.class.js';
import Animator from '../framework/three.js/animator.class.js';

import Utility from '../game/utility.class.js';

import { SkeletonUtils } from '../lib/three.js/SkeletonUtils.js';
import * as THREE from '../lib/three.js/three.module.js';

export default class Car extends Entity {
    constructor(context, scene, options = Object.create(null)) {
        options.updatePriority = 4;

        super(context, scene, options);

        const tScene = scene.getThreeScene();

        const gltf = ModelManager.getModel('characters');

        const animations = Animator.filterAnimations(gltf.animations, [
            'DriverCalm',
            'DriverScreaming',
            'DriverDead',
        ], null, null, true, false, true);

        this._rig = SkeletonUtils.clone(gltf.scene.getObjectByName('Man'));

        this._rig.getObjectByName('CyclistMesh').removeFromParent();
        this._rig.getObjectByName('CyclistBloodyMesh').removeFromParent();

        this._animator = new Animator(this._rig, animations);

        this._group = new THREE.Group();
        this._group.name = 'Car';
        this._group.add(this._rig);
        this._group.add(gltf.scene.getObjectByName('Car'));
        this._group.add(gltf.scene.getObjectByName('CarMonster'));
        tScene.add(this._group);

        this._group.traverse(obj => {
            obj.matrixAutoUpdate = true;
            obj.frustumCulled = false;
            obj.material = Utility.replaceMaterial(obj.material);
        });

        this._player = scene.findEntityOfType('Player');
        this._road = scene.findEntityOfType('Road');
        this._overlay = scene.findEntityOfType('Overlay');

        this._sceneName = null;
        this._sceneSeconds = null;

        this._stopping = null;
        this._playerFallSeconds = null;
        this._soundPlayed = null;
        this._secondsUntilClonk = null;

        this._roadPosition = new THREE.Vector2();

        this._lightPoint = null;
        this._lightSpot = null;

        const listener = this._player.getListener();

        this._soundCar = new THREE.PositionalAudio(listener);
        this._soundCar.name = 'SoundCar';
        this._soundCar.matrixAutoUpdate = true;
        this._soundCar.setBuffer(AudioSystem.getSoundBuffer('effect__clonk'));
        this._group.add(this._soundCar);
    }

    reset(context) {
        this._animator.stopActions();

        this._sceneName = null;

        this._stopping = false;
        this._playerFallSeconds = 0;
        this._soundPlayed = false;
        this._secondsUntilClonk = null;

        this._roadPosition.set(0, 0);

        if (this._lightPoint !== null) {
            this._lightPoint.pool();
            this._lightPoint = null;
        }

        if (this._lightSpot !== null) {
            this._lightSpot.pool();
            this._lightSpot = null;
        }

        this._group.visible = false;

        this._rig.getObjectByName('DriverCalmMesh').visible = false;
        this._rig.getObjectByName('DriverScreamingMesh').visible = false;
        this._rig.getObjectByName('DriverDeadMesh').visible = false;

        this._group.getObjectByName('Car').visible = false;
        this._group.getObjectByName('CarMonster').visible = false;
    }

    update(context) {
        super.update(context);

        if (this._sceneName === null) {
            return;
        }

        const dt = context.time.elapsedSeconds;

        const firstUpdate = this._sceneSeconds === 0;

        this._sceneSeconds += dt;

        const distanceMin = this._road.getRoadDistanceMin();
        const distanceMax = this._road.getRoadDistanceMax();
        const type = this._road.getRoadType(this._roadPosition.y);
        const laneCenter = type.laneCenter;
        const laneOffset = type.laneOffset;
        const playerRoadPosition = this._road.getPlayerRoadPosition();
        const playerBiking = this._player.getBiking();
        const pdx = this._roadPosition.x - playerRoadPosition.x;
        const pdd = this._road.getRoadDistanceBetween(playerRoadPosition.y, this._roadPosition.y);
        const chaseVelocity = pdd / 20;

        let targetX = THREE.MathUtils.clamp(
            this._roadPosition.x,
            playerRoadPosition.x - 0.5,
            playerRoadPosition.x + 0.5);
        let t;
        let againstPlayer = false;

        switch (this._sceneName) {
            case 'drive_by_calm':
            case 'drive_by_screaming':
            case 'drive_by_dead':
                againstPlayer = true;

                targetX = -laneOffset + 0.2;

                this._roadPosition.y -= 0.15 * dt;

                this._lightSpot.distance = Math.min(13, this._lightSpot.distance + dt * 5);

                if (pdd > 2 && pdd < 9) {
                    this._player.slowDown(1);
                }

                if (pdd < 15 && !this._soundPlayed) {
                    this._soundPlayed = true;

                    AudioSystem.play('effect__car_drive_by');

                    if (this._sceneName === 'drive_by_dead') {
                        AudioSystem.play('ambiance__creepy_violin', 1, true, 'violin');
                        context.time.setTimeout(() => {
                            AudioSystem.stop('violin', 5);
                        }, 4000);
                    }
                }

                if (playerBiking && Math.abs(pdx) < 1.3 && Math.abs(pdd) < 2.5) {
                    this._player.playScene(context, 'crash');
                }

                if (this._sceneName === 'drive_by_screaming') {
                    this._secondsUntilClonk -= dt;

                    if (this._secondsUntilClonk <= 0) {
                        this._secondsUntilClonk += 0.875;

                        this._soundCar.play();
                    }
                }

                if (this._roadPosition.y <= distanceMin) {
                    this.reset(context);

                    return;
                }

                break;

            case 'chase':
                t = Math.min(1, this._sceneSeconds / 4);

                this._roadPosition.y = Math.min(this._roadPosition.y - chaseVelocity * dt, playerRoadPosition.y - 0.5);

                this._lightSpot.distance = 0.01 + t * 20;

                if (this._sceneSeconds > 4 &&
                    this._player.getLookAngleTowards(this._group) < Math.PI * 0.5 || this._sceneSeconds > 15) {
                    AudioSystem.stop('ambiance', 0.5);

                    context.time.setTimeout(() => {
                        AudioSystem.play('effect__car_reveal');
                    }, 2000);

                    this._player.lookAt(this._group, 8, false);

                    this._overlay.playScene(context, 'letterbox', 7);

                    this._overlay.setContrast(0.5, 0.55, 0.55, 20);

                    this._sceneName = 'chase_reveal';
                    this._sceneSeconds = 0;
                }

                break;

            case 'chase_reveal':
                t = Math.min(1, Math.max(0, (this._sceneSeconds - 2) / 6));

                this._lightPoint.distance = 1 + t * 0.5;
                this._lightPoint.intensity = 0.5 + t;

                this._lightSpot.distance = 15;
                this._lightSpot.position.z = 2.5 - 3 * t;

                this._roadPosition.y = THREE.MathUtils.clamp(
                    this._roadPosition.y - chaseVelocity * dt,
                    playerRoadPosition.y - 1,
                    playerRoadPosition.y - 0.1);

                if (this._sceneSeconds > 8) {
                    AudioSystem.play('ambiance__car_chase', 1, true, 'ambiance');

                    this._roadPosition.y = playerRoadPosition.y - 0.5;

                    this._sceneName = 'chase_started';
                    this._sceneSeconds = 0;
                }

                break;

            case 'chase_started':
                t = Math.min(1, this._sceneSeconds / 2);

                this._lightSpot.distance = Math.max(this._lightSpot.distance, 0.1 + t * 15);

                if (!this._stopping) {
                    if (this._player.getFallen()) {
                        this._playerFallSeconds += dt;
                        this._roadPosition.y = Math.max(this._roadPosition.y - dt, playerRoadPosition.y - 0.5 + this._playerFallSeconds * 0.1);
                    } else {
                        this._roadPosition.y = THREE.MathUtils.clamp(
                            this._roadPosition.y - chaseVelocity * dt,
                            playerRoadPosition.y - 0.5,
                            playerRoadPosition.y);
                    }
                }

                if (playerBiking && Math.abs(pdd) < 2.5) {
                    AudioSystem.play('effect__car_reveal');

                    this._player.playScene(context, 'eaten_by_car');

                    this._sceneName = 'chase_ended';
                    this._sceneSeconds = 0;
                }

                break;

            case 'chase_ended':
                t = Math.min(1, this._sceneSeconds / 6);

                this._roadPosition.y = playerRoadPosition.y - 0.3 + t * t * 0.25;

                break;

            case 'chicken_race':
                againstPlayer = true;

                t = Math.min(1, this._sceneSeconds / 2);

                this._lightSpot.distance = 0.1 + t * 20;

                if (pdd < 6) {
                    this._roadPosition.y -= 0.2 * dt;

                    this._player.pause(1);
                } else {
                    this._roadPosition.y -= 0.6 * dt;
                }

                if (playerRoadPosition.y > this._roadPosition.y - 0.12) {
                    AudioSystem.stop('ambiance');
                    AudioSystem.play('effect__bike_crash');
                    AudioSystem.play('effect__game_over_scream');
                    AudioSystem.play('effect__game_over_splatter');

                    this._player.pause(5);

                    this._overlay.playScene(context, 'fade_out_red_splatter', 5, () => {
                        this.getScene().findEntityOfType('Director').resetInTuonela(context);

                        this._player.pause(2);

                        this._overlay.playScene(context, 'fade_in_black', 10);
                    });

                    this._sceneName = 'collided';
                    this._sceneSeconds = 0;
                }

                break;

            case 'collided':
                againstPlayer = true;
                this._roadPosition.y = playerRoadPosition.y + 0.12;

                break;
        }

        const steerT = firstUpdate ? 1 : 1 - 0.1 ** dt;
        const lastX = this._roadPosition.x;

        if (this._sceneName !== 'chase_ended') {
            const laneWidth = laneOffset === 0 ? 0.5 : Math.abs(laneOffset) + 1;

            targetX = THREE.MathUtils.clamp(targetX, laneCenter - laneWidth, laneCenter + laneWidth);
        }

        this._roadPosition.set(
            this._roadPosition.x * (1 - steerT) + targetX * steerT,
            THREE.MathUtils.clamp(this._roadPosition.y, distanceMin, distanceMax));

        const dx = dt === 0 ? 0 : (this._roadPosition.x - lastX) / dt;

        this._road.roadToWorldPosition(this._roadPosition, this._group.position);

        this._group.position.x += Math.random() * 0.015;
        this._group.position.y += Math.random() * 0.015;
        this._group.position.z += Math.random() * 0.015;

        this._group.rotation.set(0, 0, 0);
        this._group.rotateY(-this._road.getRoadAngle(this._roadPosition.y) - dx * 0.1
            + Math.sin(context.time.totalSeconds * 2) * 0.03 + againstPlayer * Math.PI);
        this._group.rotateX(THREE.MathUtils.clamp(-this._road.getForwardSlopeAngle(this._group), -0.5, 0.5));

        this._animator.update(dt);
    }

    playScene(context, sceneName) {
        this.reset(context);

        const environment = this.getScene().findEntityOfType('Environment');
        const isChase = sceneName === 'chase' || sceneName === 'chase_started' || sceneName === 'chicken_race';

        this._sceneName = sceneName;
        this._sceneSeconds = 0;

        this._lightPoint = environment.getPointLight(0xfcf095, 1.5, 1, 0.8, 0, 1.5, 0.2);
        this._lightSpot = environment.getSpotLight(0xf1a134, 4, 10, 0.4, 0.5, 0.2, 0, 0.5, 2.4, 0, isChase ? 0.5 : -0.5, 5);

        this._group.add(this._lightPoint);
        this._group.add(this._lightSpot);
        this._group.add(this._lightSpot.target);

        this._group.visible = true;

        switch (sceneName) {
            case 'drive_by_calm':
                this._rig.getObjectByName('DriverCalmMesh').visible = true;
                this._group.getObjectByName('Car').visible = true;

                this._animator.playAction('DriverCalm', Infinity);

                this._roadPosition.set(0, this._road.getRoadDistanceMax());

                break;

            case 'drive_by_screaming':
                this._rig.getObjectByName('DriverScreamingMesh').visible = true;
                this._group.getObjectByName('Car').visible = true;

                this._animator.playAction('DriverScreaming', Infinity);

                this._roadPosition.set(0, this._road.getRoadDistanceMax());

                this._secondsUntilClonk = 0.28;

                break;

            case 'drive_by_dead':
                this._rig.getObjectByName('DriverDeadMesh').visible = true;
                this._group.getObjectByName('Car').visible = true;

                this._animator.playAction('DriverDead', Infinity);

                this._roadPosition.set(0, this._road.getRoadDistanceMax());

                break;

            case 'chicken_race':
            case 'chase':
            case 'chase_started':
                AudioSystem.play(this._sceneName === 'chase_started' ? 'effect__car_reveal' : 'effect__car_drive_by');

                this._rig.getObjectByName('DriverDeadMesh').visible = true;
                this._group.getObjectByName('CarMonster').visible = true;

                this._animator.playAction(sceneName === 'chase' ? 'DriverDead' : 'DriverCalm', Infinity);

                this._lightPoint.color.setHex(0xff6666);
                this._lightPoint.intensity = sceneName === 'chase' ? 0.2 : 1;
                this._lightPoint.distance = sceneName === 'chase' ? 1 : 3;

                this._lightSpot.color.setHex(0xff6666);
                this._lightSpot.distance = 0.1;
                this._lightSpot.penumbra = 0.4;
                this._lightSpot.position.y = 1.5;
                this._lightSpot.position.z = 2.5;
                this._lightSpot.target.y = 0.5;

                this._roadPosition.set(0, this._road.getRoadDistanceMin());

                if (sceneName === 'chase_started') {
                    this._player.lookAt(this._group, 3, false);
                } else if (sceneName === 'chicken_race') {
                    this._roadPosition.set(0, this._road.getRoadDistanceMax() - 1);
                }

                break;

            default:
                throw new Error(`Car scene "${sceneName}" does not exist`);
        }
    }

    stop() {
        this._stopping = true;
    }
}

Car.p_register();
