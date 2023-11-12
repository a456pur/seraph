/**
 * @file scarecrow.class.js
 * @version 1.0.0
 */

import Entity from '../framework/entity.class.js';

import Utility from '../game/utility.class.js';

import * as THREE from '../lib/three.js/three.module.js';

export default class Scarecrow extends Entity {
    static _init() {
        Scarecrow._tmpV30 = new THREE.Vector3();
    }

    constructor(context, scene, options = Object.create(null)) {
        options.updatePriority = 6;

        super(context, scene, options);

        const tScene = scene.getThreeScene();

        const road = scene.findEntityOfType('Road');
        const segment = road.getSegmentInstance('ForestField');

        this._scarecrow = segment.mesh.getObjectByName('Scarecrow');

        this._scarecrow.traverse(obj => {
            obj.matrixAutoUpdate = true;
            obj.material = Utility.replaceMaterial(obj.material);
        });

        this._player = scene.findEntityOfType('Player');

        this._sceneName = null;
    }

    reset(context) {
        this._sceneName = null;

        this._scarecrow.rotation.set(0, -Math.PI / 2, 0);
    }

    update(context) {
        super.update(context);

        if (this._sceneName === null) {
            return;
        }

        switch (this._sceneName) {
            case 'stare_near':
                this._scarecrow.lookAt(this._player.getGroup().getWorldPosition(Scarecrow._tmpV30));

                break;
        }
    }

    playScene(context, sceneName) {
        this.reset(context);

        this._sceneName = sceneName;

        switch (sceneName) {
            case 'stare_very_far':
            case 'stare_far':
            case 'stare_medium':
            case 'stare_near':
            case 'gone':
                this._scarecrow.position.y = 1;
                this._scarecrow.position.x =
                    sceneName === 'stare_very_far' ? 13
                    : sceneName === 'stare_far' ? 10
                    : sceneName === 'stare_medium' ? 8
                    : sceneName === 'gone' ? 50 : 7;

                break;

            default:
                throw new Error(`Scarecrow scene "${sceneName}" does not exist`);
        }
    }
}

Scarecrow._init();
Scarecrow.p_register();
