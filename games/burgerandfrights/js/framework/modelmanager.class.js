/**
 * @file modelmanager.class.js
 * @version 1.1.0
 */

import config from '../resources/config.js';
import resources from '../resources/resources.js';

import { GLTFLoader } from '../lib/three.js/GLTFLoader.js';

export default class ModelManager {
    static _init() {
        ModelManager._models = new Map();
    }

    static asyncLoadModels() {
        const loader = new GLTFLoader();

        return Promise.all(Object.keys(resources.models).map(name => {
            const info = resources.models[name];
            const url = `./models/${info.path}${config.debug.preventCaching ? '?time=' + new Date().getTime() : ''}`;

            return new Promise((resolve, reject) => {
                if (info.type !== 'gltf') {
                    reject(new Error(`Unsupported model type "${info.type}"`));
                }

                loader.load(url, model => {
                    ModelManager._models.set(name, model);

                    resolve();
                }, undefined, () => {
                    reject(new Error(`Error loading model file "${url}"`));
                });
            });
        }));
    }

    static getModelNames() {
        return Array.from(ModelManager._models.keys());
    }

    static getModel(name) {
        const model = ModelManager._models.get(name);
        if (model === undefined) {
            throw new Error(`Model "${name}" does not exist`);
        }
        return model;
    }
}

ModelManager._init();
