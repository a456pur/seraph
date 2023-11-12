/**
 * @file utility.class.js
 * @version 1.0.0
 */

import * as THREE from '../lib/three.js/three.module.js';

export default class Utility {
    static getClosestAngle(a, b) {
        const tau = Math.PI * 2;
        const x = b - a + Math.PI;
        return x - Math.floor(x / tau) * tau - Math.PI;
    }

    static replaceMaterial(material, isToon = true) {
        if (material === undefined) {
            return undefined;
        }

        const newMaterial = new (material.transparent ? THREE.MeshBasicMaterial :
            isToon ? THREE.MeshToonMaterial : THREE.MeshPhongMaterial)({
            map: material.map,
            color: material.color,
            side: material.side,
            transparent: material.transparent,
            opacity: material.opacity,
            alphaTest: material.alphaTest,
            depthWrite: !material.transparent,
        });

        if (!material.transparent) {
            newMaterial.emissive = material.emissive;
            newMaterial.emissiveMap = material.emissiveMap;
            newMaterial.emissiveIntensity = material.emissiveIntensity;

            if (!isToon) {
                newMaterial.shininess = 0;
                newMaterial.specular.setHex(0);
            }
        }

        if (newMaterial.map) {
            newMaterial.map.magFilter = THREE.NearestFilter;
            newMaterial.map.minFilter = THREE.NearestFilter;
        }

        if (newMaterial.emissiveMap) {
            newMaterial.emissiveMap.magFilter = THREE.NearestFilter;
            newMaterial.emissiveMap.minFilter = THREE.NearestFilter;
        }

        return newMaterial;
    }

    static easeInOutCubic(x) {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }
}
