/**
 * @file animatior.class.js
 * @version 1.0.0
 */

import * as THREE from '../../lib/three.js/three.module.js';

export default class Animatior {
    constructor(rootObject, animations) {
        this._animations = animations;

        this._mixer = new THREE.AnimationMixer(rootObject);
        this._mixer.addEventListener('finished', e => {
            if (e.action.finishedCallback !== null) {
                e.action.finishedCallback();
            }
        });

        this._actions = new Set();
    }

    update(elapsedSeconds) {
        this._mixer.update(elapsedSeconds);
    }

    stopActions() {
        this._mixer.stopAllAction();

        this._actions.clear();
    }

    fadeOutActions(fadeOutSeconds = 0) {
        this._actions.forEach(action => {
            action.fadeOut(fadeOutSeconds);
        });

        this._actions.clear();
    }

    playAction(animationName, repetitions = 1,
        fadeInSeconds = 0, timescale = 1, finishedCallback = null) {
        const animation = this._animations.find(animation => animation.name === animationName);
        if (animation === undefined) {
            throw new Error(`Animation "${animationName}" does not exist`);
        }

        const action = this._mixer.clipAction(animation);
        action.reset();
        action.repetitions = repetitions;
        action.timeScale = timescale;
        action.finishedCallback = finishedCallback;
        action.clampWhenFinished = true;
        action.fadeIn(fadeInSeconds).play();

        this._actions.add(action);

        return action;
    }

    static filterAnimations(animations, animationNames = null, boneNames = null, excludedBoneNames = null,
        includePosition = true, includeScale = true, includeQuaternion = true) {
        const usedAnimations = animationNames === null ? animations : animationNames.map(name => {
            const found = animations.find(animation => animation.name === name);
            if (found === undefined) {
                throw new Error(`Animation not found "${name}"`);
            }
            return found;
        });

        return usedAnimations.map(animation => {
            const tracks = animation.tracks.filter(track => {
                const i = track.name.lastIndexOf('.');
                const name = track.name.slice(0, i);
                const channel = track.name.slice(i + 1);

                return (
                    channel === 'position' && includePosition ||
                    channel === 'scale' && includeScale ||
                    channel === 'quaternion' && includeQuaternion) &&
                    (boneNames === null || boneNames.includes(name)) &&
                    (excludedBoneNames === null || !excludedBoneNames.includes(name));
            }).map(track => track.clone());

            return new THREE.AnimationClip(animation.name, animation.duration, tracks, animation.blendMode);
        });


    }
}
