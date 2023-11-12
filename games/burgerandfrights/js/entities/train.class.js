/**
 * @file train.class.js
 * @version 1.0.0
 */

import AudioSystem from '../framework/audiosystem.class.js';
import Entity from '../framework/entity.class.js';

import Utility from '../game/utility.class.js';

import * as THREE from '../lib/three.js/three.module.js';

export default class Train extends Entity {
    static _init() {
        Train._cartLength = 11.2;
    }

    constructor(context, scene, options = Object.create(null)) {
        options.updatePriority = 6;

        super(context, scene, options);

        const tScene = scene.getThreeScene();

        this._environment = scene.findEntityOfType('Environment');

        const road = scene.findEntityOfType('Road');
        this._segment = road.getSegmentInstance('ForestCrossing');

        this._coaches = [];

        const coachOriginal = this._segment.mesh.getObjectByName('Coach');
        coachOriginal.matrixAutoUpdate = true;
        coachOriginal.material = Utility.replaceMaterial(coachOriginal.material);
        coachOriginal.removeFromParent();

        for (let i = 0; i < 3; i++) {
            const coach = coachOriginal.clone();
            coach.name = `Coach${i}`;
            this._segment.mesh.add(coach);

            this._coaches.push(coach);
        }

        this._sceneName = null;
        this._sceneSeconds = null;

        this._stopping = null;
        this._cartCounter = null;

        this._lightSpot = null;

        const listener = scene.findEntityOfType('Player').getListener();

        this._soundTrain = new THREE.PositionalAudio(listener);
        this._soundTrain.name = 'SoundTrain';
        this._soundTrain.matrixAutoUpdate = true;
        this._soundTrain.setBuffer(AudioSystem.getSoundBuffer('effect__train'));
        this._soundTrain.setLoop(true);
        this._soundTrain.position.set(0, 2, -9);
        this._soundTrain.setRefDistance(5);
        this._segment.mesh.add(this._soundTrain);
    }

    reset(context) {
        this._sceneName = null;

        this._stopping = false;
        this._cartCounter = 0;

        if (this._lightSpot !== null) {
            this._lightSpot.pool();
            this._lightSpot = null;
        }

        this._coaches.forEach(coach => {
            coach.visible = false;
        });

        if (this._soundTrain.isPlaying) {
            this._soundTrain.stop();
        }
    }

    update(context) {
        super.update(context);

        if (this._sceneName === null) {
            return;
        }

        const dt = context.time.elapsedSeconds;

        this._sceneSeconds += dt;

        switch (this._sceneName) {
            case 'ghost_reveal':
                const x = this._sceneSeconds * 3;

                this._coaches.forEach((coach, i) => {
                    if (!this._stopping &&
                        this._cartCounter < x / Train._cartLength) {
                        this._cartCounter++;
                    }

                    coach.position.set(x + i * Train._cartLength - Train._cartLength * (0.5 + this._cartCounter), 1, -9);
                });

                this._lightSpot.position.set(x % Train._cartLength - Train._cartLength * 0.5, 2, -7.8);
                this._lightSpot.target.position.copy(this._lightSpot.position).z += 1;

                if (this._stopping) {
                    this._lightSpot.intensity = Math.max(0, this._lightSpot.intensity - dt * 0.4);
                } else {
                    this._lightSpot.intensity = Math.max(0, 1 - Math.abs(this._lightSpot.position.x) / 5) * 3;
                }

                this._segment.mesh.localToWorld(this._lightSpot.position);
                this._segment.mesh.localToWorld(this._lightSpot.target.position);

                if (this._stopping) {
                    this._soundTrain.setRefDistance(Math.max(0.01, this._soundTrain.getRefDistance() - dt));

                    if (this._coaches[0].position.x > Train._cartLength * 3) {
                        this.reset(context);
                    }
                }

                break;
        }
    }

    stop() {
        this._stopping = true;
    }

    getSecondsUntilLoop() {
        const secondsPerCart = Train._cartLength / 3;
        return secondsPerCart - this._sceneSeconds % secondsPerCart;
    }

    makeBloody() {
        this._coaches.forEach(coach => {
            coach.getObjectByName('CoachNormal').visible = false;
            coach.getObjectByName('CoachBloody').visible = true;
        });

        this._lightSpot.color.setHex(0xff5555);
    }

    playScene(context, sceneName) {
        this.reset(context);

        this._sceneName = sceneName;
        this._sceneSeconds = 0;

        switch (sceneName) {
            case 'ghost_reveal':
                this._coaches.forEach(coach => {
                    coach.visible = true;
                    coach.getObjectByName('CoachNormal').visible = true;
                    coach.getObjectByName('CoachBloody').visible = false;
                });

                this._lightSpot = this._environment.getSpotLight(0xf1a134, 8, 15, 0.7, 0.4, 0.8);

                this._soundTrain.play();

                break;

            default:
                throw new Error(`Train scene "${sceneName}" does not exist`);
        }
    }
}

Train._init();
Train.p_register();
