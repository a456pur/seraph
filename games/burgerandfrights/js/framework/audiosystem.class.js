/**
 * @file audiosystem.class.js
 * @version 1.0.0
 */

import config from '../resources/config.js';
import resources from '../resources/resources.js';

export default class AudioSystem {
    static _init() {
        AudioSystem._ac = null;
        AudioSystem._acResuming = null;

        AudioSystem._gain = null;
        AudioSystem._gainConnected = null;

        AudioSystem._destinationNode = null;

        AudioSystem._volume = config.audio.volume;

        AudioSystem._sounds = new Map();
        AudioSystem._soundInstances = [];

        window.addEventListener('load', AudioSystem._handleLoad);
    }

    static _handleLoad() {
        const userGesture = () => {
            const ac = AudioSystem._ac;
            if (ac === null) {
                return;
            }

            if (ac.state !== 'running' && !AudioSystem._acResuming) {
                AudioSystem._acResuming = true;

                ac.resume().finally(() => {
                    AudioSystem._acResuming = false;
                });
            }
        };

        document.addEventListener('click', userGesture);
        document.addEventListener('touchend', userGesture);
        document.addEventListener('keydown', userGesture);
    }

    static _getAudioContext() {
        const ac = AudioSystem._ac;
        if (ac === null) {
            throw new Error('Call .createAudioContext first');
        }
        return ac;
    }

    static createAudioContext(audioContext = null, destinationNode = null) {
        const ac = audioContext === null ? new AudioContext() : audioContext;
        AudioSystem._ac = ac;
        AudioSystem._acResuming = false;

        AudioSystem._destinationNode = destinationNode === null ? ac.destination : destinationNode;

        AudioSystem._gain = ac.createGain();
        AudioSystem._gainConnected = false;

        AudioSystem.setGlobalVolume(AudioSystem._volume);
    }

    static setGlobalVolume(volume) {
        AudioSystem._volume = volume;

        AudioSystem._getAudioContext();

        AudioSystem._gain.gain.value = volume;

        if (volume <= 0 && AudioSystem._gainConnected) {
            AudioSystem._gain.disconnect();
            AudioSystem._gainConnected = false;
        } else if (volume > 0 && !AudioSystem._gainConnected) {
            AudioSystem._gain.connect(AudioSystem._destinationNode);
            AudioSystem._gainConnected = true;
        }
    }

    static asyncLoadSounds() {
        const ac = AudioSystem._getAudioContext();

        return Promise.all(Object.keys(resources.sounds).map(name => {
            const info = resources.sounds[name];
            const url = `./sounds/${info.path}${config.debug.preventCaching ? '?time=' + new Date().getTime() : ''}`;

            return fetch(url, { cache: 'no-cache' })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }

                    return response.arrayBuffer();
                })
                .then(buffer => ac.decodeAudioData(buffer))
                .then(buffer => {
                    AudioSystem._sounds.set(name, {
                        buffer,
                        maxSources: info.maxSources,
                        baseVolume: info.baseVolume,
                        instances: [],
                    });
                })
                .catch(error => {
                    throw new Error(`Error loading sound file "${url}", ${error}`);
                });
        }));
    }

    /**
     * Create, play and return a new sound instance.
     * @param {string} soundName - The sound name.
     * @param {number} [volume] - The sound volume (gain). Scaled by the sound base volume. Defaults to 1.
     * @param {bool} [loop] - Whether the sound should loop. Defaults to false.
     * @param {object} [tag] - A tag identifying the new sound instance. Disabled by default.
     * @param {number} [offset] - The sound start offset in seconds. Defaults to 0.
     * @param {number} [fadeInSeconds] - Seconds to fade in the sound.
     * @param {bool} [stopOldestIfMax] - Whether to stop the oldest sound instance if max instances are playing, else ignore play.
     * @returns {object} - The sound instance.
     */
    static play(soundName, volume = 1, loop = false, tag = null, offset = 0, fadeInSeconds = 0, stopOldestIfMax = true) {
        const ac = AudioSystem._getAudioContext();

        const sound = AudioSystem._sounds.get(soundName);
        if (sound === undefined) {
            throw new Error(`Sound "${soundName}" does not exist`);
        }

        if (sound.maxSources <= 0) {
            return null;
        }

        if (sound.instances.length >= sound.maxSources) {
            if (stopOldestIfMax) {
                sound.instances[0].source.stop();
            } else {
                return null;
            }
        }

        const gain = ac.createGain();
        if (fadeInSeconds <= 0) {
            gain.gain.value = sound.baseVolume * volume;
        } else {
            gain.gain.setValueAtTime(1e-4, ac.currentTime);
            gain.gain.exponentialRampToValueAtTime(sound.baseVolume * volume, ac.currentTime + fadeInSeconds);
        }
        gain.connect(AudioSystem._gain);

        const source = ac.createBufferSource();
        source.buffer = sound.buffer;
        if (loop) {
            source.loop = true;
            if (offset > 0) {
                source.loopStart = offset;
                source.loopEnd = sound.buffer.duration;
            }
        }
        source.connect(gain);

        const instance = { source, gain, tag, stopping: false };

        sound.instances.push(instance);
        AudioSystem._soundInstances.push(instance);

        source.onended = () => {
            gain.disconnect();

            const si = sound.instances.indexOf(instance);
            if (si > -1) {
                sound.instances.splice(si, 1);
            }

            const i = AudioSystem._soundInstances.indexOf(instance);
            if (i > -1) {
                AudioSystem._soundInstances.splice(i, 1);
            }
        };

        source.start(ac.currentTime, offset);

        return instance;
    }

    /**
     * Stop all sound instances or sound instances identified by a tag.
     * @param {object} [tag] - A tag identifying the sound instances to stop if not null.
     * @param {number} [fadeOutSeconds] - The number of seconds over which to fade out the sound instances.
     */
    static stop(tag = null, fadeOutSeconds = 0) {
        const ac = AudioSystem._getAudioContext();

        for (let i = AudioSystem._soundInstances.length - 1; i > -1; i--) {
            const instance = AudioSystem._soundInstances[i];

            if (instance.stopping || tag !== null && instance.tag !== tag) {
                continue;
            }

            instance.stopping = true;

            if (fadeOutSeconds <= 0) {
                instance.source.stop();
            } else {
                instance.gain.gain.setValueAtTime(instance.gain.gain.value, ac.currentTime);
                instance.gain.gain.exponentialRampToValueAtTime(1e-4, ac.currentTime + fadeOutSeconds);
                instance.source.stop(ac.currentTime + fadeOutSeconds);
            }
        }
    }

    static getSoundNames() {
        return Array.from(AudioSystem._sounds.keys());
    }

    static getSoundBuffer(soundName) {
        const sound = AudioSystem._sounds.get(soundName);
        if (sound === undefined) {
            throw new Error(`Sound "${soundName}" does not exist`);
        }
        return sound.buffer;
    }
}

AudioSystem._init();
