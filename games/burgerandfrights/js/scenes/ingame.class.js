/**
 * @file ingame.class.js
 * @version 1.0.0
 */

import Entity from '../framework/entity.class.js';
import Input from '../framework/input.class.js';
import Scene from '../framework/scene.class.js';

import * as THREE from '../lib/three.js/three.module.js';

export default class Ingame extends Scene {
    constructor(context) {
        super(context);

        this._tScene = new THREE.Scene();
        this._tScene.name = 'Scene';

        this._overlay = Entity.createByName('Overlay', context, this);

        const director = Entity.createByName('Director', context, this);
        const camera = this.findEntityOfType('Player').getCamera();

        context.renderer.compile(this._tScene, camera);

        director.reset(context);

        Input.setPointerLockElement(context.renderer.domElement);

        this._stopped = false;
    }

    update(context) {
        if (this._stopped) {
            return;
        }

        super.update(context);

        this._overlay.render(context);
    }

    getThreeScene() {
        return this._tScene;
    }

    stop(context) {
        this._stopped = true;

        context.renderer.domElement.style.visibility = 'hidden';
    }
}
