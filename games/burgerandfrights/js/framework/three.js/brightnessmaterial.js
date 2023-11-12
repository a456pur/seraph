/**
 * @file brightnessmaterial.js
 * @version 1.0.0
 */

import * as THREE from '../../lib/three.js/three.module.js';

const BrightnessShader = {
    uniforms: {
        tDiffuse: { value: null },
        brightness: { value: new THREE.Vector3() },
        contrast: { value: new THREE.Vector3() },
    },
    vertexShader: `
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,
    fragmentShader: `
uniform sampler2D tDiffuse;

uniform vec3 brightness;
uniform vec3 contrast;

varying vec2 vUv;

void main() {
    gl_FragColor = sRGBToLinear(texture2D(tDiffuse, vUv));
    gl_FragColor.rgb += brightness;

    // Inspired by
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/brightnesscontrast.js

    vec3 cSign = sign(contrast);

    gl_FragColor.rgb =
        ((gl_FragColor.rgb - 0.5) * (1.0 + contrast) + 0.5) * max(-cSign, 0.0) +
        ((gl_FragColor.rgb - 0.5) / (1.0 - contrast) + 0.5) * max(cSign, 0.0);

    gl_FragColor = LinearTosRGB(gl_FragColor);
}`,
};

export default class BrightnessMaterial extends THREE.ShaderMaterial {
    constructor(parameters) {
        super({
            type: 'BrightnessMaterial',
            uniforms: THREE.UniformsUtils.clone(BrightnessShader.uniforms),
            vertexShader: BrightnessShader.vertexShader,
            fragmentShader: BrightnessShader.fragmentShader,
        });
    }

    setRenderTarget(rt) {
        this.uniforms.tDiffuse.value = rt.texture;
    }
}
