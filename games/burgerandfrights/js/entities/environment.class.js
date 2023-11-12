/**
 * @file environment.class.js
 * @version 1.0.0
 */

import Entity from '../framework/entity.class.js';
import ModelManager from '../framework/modelmanager.class.js';

import * as THREE from '../lib/three.js/three.module.js';

export default class Environment extends Entity {
    constructor(context, scene, options = Object.create(null)) {
        options.updatePriority = 1;

        super(context, scene, options);

        const tScene = scene.getThreeScene();

        this._playerCamera = scene.findEntityOfType('Player').getCamera();

        const fog = new THREE.Fog(0, 1, 20);
        tScene.fog = fog;

        const props = ModelManager.getModel('props').scene;

        this._skyboxForest = props.getObjectByName('SkyboxForest');
        this._skyboxForest.renderOrder = -1;
        this._skyboxForest.matrixAutoUpdate = true;

        this._skyboxTuonela = props.getObjectByName('SkyboxTuonela');
        this._skyboxTuonela.renderOrder = -1;
        this._skyboxTuonela.matrixAutoUpdate = true;

        this._skyboxForest.material = new THREE.MeshBasicMaterial({
            map: this._skyboxForest.material.map,
            side: THREE.BackSide,
            depthWrite: false,
            depthTest: false,
        });

        this._skyboxTuonela.material = new THREE.MeshBasicMaterial({
            map: this._skyboxTuonela.material.map,
            side: THREE.BackSide,
            depthWrite: false,
            depthTest: false,
        });

        this._skyboxForest.rotation.y = 20 * Math.PI / 180;

        this._skyboxTuonela.material.map.magFilter = THREE.NearestFilter;
        this._skyboxTuonela.material.map.minFilter = THREE.NearestFilter;

        this._skybox = null;

        tScene.add(this._skyboxForest);
        tScene.add(this._skyboxTuonela);

        this._pointLightPool = [];
        this._spotLightPool = [];

        for (let i = 0; i < 6; i++) {
            const light = new THREE.PointLight();
            light.name = `PointLight${i}`;
            light.matrixAutoUpdate = true;

            light.pool = () => {
                tScene.add(light);

                this._pointLightPool.push(light);

                light.intensity = 0;
            };

            light.pool();
        }

        for (let i = 0; i < 1; i++) {
            const light = new THREE.SpotLight();
            light.name = `SpotLight${i}`;
            light.matrixAutoUpdate = true;

            light.target = new THREE.Object3D();
            light.target.name = `${light.name}Target`;
            light.target.matrixAutoUpdate = true;
            tScene.add(light.target);

            light.pool = () => {
                tScene.add(light);
                tScene.add(light.target);

                this._spotLightPool.push(light);

                light.intensity = 0;
            };

            light.pool();
        }

        this._firstReset = true;
    }

    reset(context) {
        if (this._firstReset) {
            this._firstReset = false;

            this.setEnvironment('forest');
        }
    }

    update(context) {
        super.update(context);

        if (this._skybox !== null) {
            this._playerCamera.getWorldPosition(this._skybox.position);
        }
    }

    setEnvironment(name) {
        const tScene = this.getScene().getThreeScene();

        this._skyboxForest.removeFromParent();
        this._skyboxTuonela.removeFromParent();

        switch (name) {
            case 'forest':
                this._skybox = this._skyboxForest;

                tScene.add(this._skybox);
                break;

            case 'tunnel':
                this._skybox = null;

                break;

            case 'tuonela':
                this._skybox = this._skyboxTuonela;

                tScene.add(this._skybox);
                break;

            case 'rebirth':
                break;

            default:
                throw new Error(`Environment "${name}" does not exist`);
        }
    }

    resetSkybox() {
        if (this._skybox !== null) {
            const road = this.getScene().findEntityOfType('Road');
            this._skybox.rotation.y = -road.getRoadAngle(Math.floor(road.getPlayerRoadPosition().y)) - Math.PI * 0.7;
        }
    }

    getPointLight(color = 0xffffff, intensity = 1, distance = 0, decay = 2,
        x = 0, y = 0, z = 0) {
        const light = this._pointLightPool.pop();
        if (light === undefined) {
            throw new Error('No more pointlights');
        }

        light.color.setHex(color);
        light.intensity = intensity;
        light.distance = distance;
        light.decay = decay;
        light.position.set(x, y, z);

        return light;
    }

    getSpotLight(color = 0xffffff, intensity = 1, distance = 0, decay = 2, angle = 0.5, penumbra = 0,
        x = 0, y = 0, z = 0, targetX = 0, targetY = 0, targetZ = 1,) {
        const light = this._spotLightPool.pop();
        if (light === undefined) {
            throw new Error('No more spotlights');
        }

        light.color.setHex(color);
        light.intensity = intensity;
        light.distance = distance;
        light.decay = decay;
        light.angle = angle;
        light.penumbra = penumbra;
        light.position.set(x, y, z);
        light.target.position.set(targetX, targetY, targetZ);

        return light;
    }
}

Environment.p_register();
