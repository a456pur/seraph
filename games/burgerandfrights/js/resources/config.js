/**
 * @file config.js
 * @version 1.0.0
 */

import * as THREE from '../lib/three.js/three.module.js';

const config = {
    audio: {
        volume: 1,
    },
    debug: {
        preventCaching: false,
    },
    input: {
        mouseSensitivity: new THREE.Vector2(0.0007, 0.0007),
        keys: {
            left: [37, 65],
            right: [39, 68],
            up: [38, 87],
            down: [40, 83],
        },
    },
    simulation: {
        maxTimestep: 0.1,
    },
    renderer: {
        antialias: false,
        height: 400,
    },
};

export default config;
