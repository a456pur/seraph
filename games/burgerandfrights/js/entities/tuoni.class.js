/**
 * @file tuoni.class.js
 * @version 1.0.0
 */

import Entity from '../framework/entity.class.js';
import ModelManager from '../framework/modelmanager.class.js';
import Animator from '../framework/three.js/animator.class.js';

import Utility from '../game/utility.class.js';

import * as THREE from '../lib/three.js/three.module.js';

export default class Tuoni extends Entity {
    constructor(context, scene, options = Object.create(null)) {
        options.updatePriority = 7;

        super(context, scene, options);

        const tScene = scene.getThreeScene();

        const gltf = ModelManager.getModel('characters');

        const animations = Animator.filterAnimations(gltf.animations, [
            'TuoniTrap',
        ], null, null, true, false, true);

        this._rig = gltf.scene.getObjectByName('Tuoni');
        tScene.add(this._rig);

        this._flesh = this._rig.getObjectByName('Flesh');
        this._halo = this._rig.getObjectByName('Halo');

        this._animator = new Animator(this._rig, animations);

        this._rig.traverse(obj => {
            obj.matrixAutoUpdate = true;
            obj.frustumCulled = false;
            obj.material = Utility.replaceMaterial(obj.material);
        });

        this._skulls = [];

        this._player = scene.findEntityOfType('Player');
        this._director = scene.findEntityOfType('Director');
        this._road = scene.findEntityOfType('Road');

        this._sceneName = null;
    }

    reset(context) {
        this._animator.stopActions();

        this._sceneName = null;

        this._rig.visible = false;
    }

    update(context) {
        super.update(context);

        if (this._sceneName === null) {
            return;
        }

        const dt = context.time.elapsedSeconds;

        this._animator.update(context.time.elapsedSeconds);

        this._flesh.rotation.y = context.time.totalSeconds * 1;
        this._halo.rotation.y = -context.time.totalSeconds * 2;
    }

    playScene(context, sceneName) {
        this.reset(context);

        this._sceneName = sceneName;

        this._rig.visible = true;

        switch (sceneName) {
            case 'trap':
                this._animator.playAction('TuoniTrap');

                const throneSegment = this._road.getSegmentInstance('TuonelaThrone');
                const chains = throneSegment.mesh.getObjectByName('Chains');

                chains.getWorldPosition(this._rig.position);
                chains.getWorldQuaternion(this._rig.quaternion);

                break;

            default:
                throw new Error(`Tuoni scene "${sceneName}" does not exist`);
        }
    }
}

Tuoni.p_register();
