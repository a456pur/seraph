/**
 * @file overlay.class.js
 * @version 1.0.0
 */

import Entity from '../framework/entity.class.js';
import ImageManager from '../framework/imagemanager.class.js';
import BrightnessMaterial from '../framework/three.js/brightnessmaterial.js';

import * as THREE from '../lib/three.js/three.module.js';

export default class Overlay extends Entity {
    static _init() {
        Overlay._tmpV20 = new THREE.Vector2();
    }

    constructor(context, scene, options = Object.create(null)) {
        options.updatePriority = 11;

        super(context, scene, options);

        context.renderer.outputEncoding = THREE.sRGBEncoding;

        this._renderTarget = new THREE.WebGLRenderTarget(1024, 1024, {
            encoding: context.renderer.outputEncoding,
        });

        this._camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, -1, 1);
        this._player = null;

        this._tSceneOverlay = new THREE.Scene();
        this._tSceneOverlay.name = 'SceneOverlay';

        this._canvas = document.createElement('canvas');
        this._ctx2d = this._canvas.getContext('2d');

        this._imageData = null;

        const geometry = new THREE.PlaneGeometry();

        this._texture = new THREE.CanvasTexture(this._canvas);
        this._texture.generateMipmaps = false;
        this._texture.minFilter = THREE.LinearFilter;
        this._texture.encoding = THREE.sRGBEncoding;

        this._materialEffect = new THREE.MeshBasicMaterial({
            map: this._texture,
            transparent: true,
            depthTest: false,
        });

        const meshEffect = new THREE.Mesh(geometry, this._materialEffect);
        this._tSceneOverlay.add(meshEffect);

        this._tScenePost = new THREE.Scene();
        this._tScenePost.name = 'ScenePost';

        this._materialBrightness = new BrightnessMaterial();
        this._materialBrightness.uniforms.brightness.value.set(0.25, 0.25, 0.25);
        this._materialBrightness.uniforms.contrast.value.set(0.5, 0.5, 0.5);

        this._contrastOriginal = new THREE.Vector3();
        this._contrastTarget = new THREE.Vector3();
        this._contrastChangeDuration = null;
        this._contrastChangeSeconds = null;

        const meshBrightness = new THREE.Mesh(geometry, this._materialBrightness);
        this._tScenePost.add(meshBrightness);

        this._sceneName = null;
        this._sceneSeconds = null;
        this._sceneDuration = null;
        this._finishedCallback = null;
        this._frameIndex = null;

        this.setContrast();
    }

    handleResize(context) {
        super.handleResize(context);

        const size = context.renderer.getSize(Overlay._tmpV20);

        this._renderTarget.setSize(size.x, size.y);

        this._materialBrightness.setRenderTarget(this._renderTarget);

        this._canvas.width = size.x;
        this._canvas.height = size.y;

        this._imageData = this._ctx2d.createImageData(this._canvas.width, this._canvas.height);

        this._frameIndex = 0;
    }

    update(context) {
        super.update(context);

        if (this._contrastChangeDuration !== null) {
            this._contrastChangeSeconds += context.time.elapsedSeconds;

            const t = Math.min(1, this._contrastChangeSeconds / this._contrastChangeDuration);

            this._materialBrightness.uniforms.contrast.value.copy(
                this._contrastOriginal).lerp(this._contrastTarget, t);

            if (t === 1) {
                this._contrastChangeDuration = null;
            }
        }

        if (this._sceneName === null) {
            return;
        }

        this._renderScene(context);

        if (this._sceneSeconds >= this._sceneDuration) {
            this._sceneName = null;

            if (this._finishedCallback !== null) {
                const callback = this._finishedCallback;
                this._finishedCallback = null;
                callback();
            }
        }
    }

    playScene(context, effectName, duration = 0, finishedCallback = null) {
        const callback = this._finishedCallback;

        this._sceneName = effectName;
        this._sceneSeconds = 0;
        this._sceneDuration = duration;

        this._finishedCallback = finishedCallback;

        this._frameIndex = 0;

        if (callback !== null) {
            callback();
        }

        this._clear();

        this._materialEffect.opacity = 1;

        this._texture.needsUpdate = true;

        this._renderScene(context);
    }

    setContrast(r = 0.5, g = 0.5, b = 0.5, duration = 0) {
        this._contrastOriginal.copy(this._materialBrightness.uniforms.contrast.value);
        this._contrastTarget.set(r, g, b);
        this._contrastChangeDuration = duration;
        this._contrastChangeSeconds = 0;
    }

    isPlayingScene() {
        return this._sceneName !== null;
    }

    render(context) {
        context.renderer.setRenderTarget(this._renderTarget);

        context.renderer.clear();

        if (this._player === null) {
            this._player = this.getScene().findEntityOfType('Player');
        } else {
            context.renderer.render(this.getScene().getThreeScene(), this._player.getCamera());
        }

        if (this._sceneName !== null) {
            context.renderer.render(this._tSceneOverlay, this._camera);
        }

        context.renderer.setRenderTarget(null);
        context.renderer.render(this._tScenePost, this._camera);
    }

    _renderScene(context) {
        const canvas = this._canvas;
        const ctx = this._ctx2d;
        const t = context.time.totalSeconds;
        const dt = context.time.elapsedSeconds;
        const l = Math.min(1, this._sceneSeconds / this._sceneDuration);

        switch (this._sceneName) {
            case 'clear':

                break;

            case 'brightness':
                if (this._frameIndex++ === 0) {
                    this._clear('#000');

                    const image = ImageManager.getImage('brightness');

                    ctx.drawImage(image, 0, 0);

                    this._texture.needsUpdate = true;
                }

                break;

            case 'letterbox':
                if (this._frameIndex++ === 0) {
                    ctx.fillStyle = '#000';
                    ctx.fillRect(0, 0, canvas.width, canvas.height * 0.1);
                    ctx.fillRect(0, canvas.height * 0.9, canvas.width, canvas.height * 0.1);
                    this._texture.needsUpdate = true;
                }

                this._materialEffect.opacity = Math.min(this._sceneSeconds, this._sceneDuration - this._sceneSeconds, 1);

                break;

            case 'enough':
            case 'belong':
            case 'controls':
                if (this._frameIndex++ === 0) {
                    this._drawImage(this._sceneName, 0.5, 0.6, 0, this._sceneName === 'belong' ? 0.4 : 0.7);
                    this._texture.needsUpdate = true;
                }

                break;

            case 'loop_1':
            case 'loop_2':
            case 'loop_3':
            case 'loop_4':
            case 'loop_5':
            case 'title':
                if (this._frameIndex++ === 0) {
                    this._drawImage(this._sceneName, 0.5, 0.5, 0, this._sceneName === 'title' ? 0.5 : 0.4);
                    this._texture.needsUpdate = true;
                }

                this._materialEffect.opacity = Math.min(this._sceneSeconds, this._sceneDuration - this._sceneSeconds, 1);

                break;

            case 'outro':
                if (this._frameIndex++ === 0) {
                    this._clear('#000');
                    this._drawImage('outro', 0.5, 0.5, 0, 0.1);
                    this._texture.needsUpdate = true;
                }

                this._materialEffect.opacity = Math.min(1, this._sceneSeconds * 0.3);

                break;

            case 'fade_in_black':
            case 'fade_in_white':
            case 'fade_out_black':
                if (this._frameIndex++ === 0) {
                    this._clear(this._sceneName === 'fade_in_white' ? '#fff' : '#000');
                    this._texture.needsUpdate = true;
                }

                this._materialEffect.opacity = this._sceneName === 'fade_out_black' ? l : 1 - l;

                break;

            case 'fade_out_red_splatter':
            case 'fade_out_black_splatter':
            case 'fade_out_black_splatter_stop':
                const particlesMax = this._sceneName !== 'fade_out_red_splatter' ? 200 : 400;

                while (this._frameIndex <= l * particlesMax) {
                    this._frameIndex++;

                    const black = this._sceneName !== 'fade_out_red_splatter' || l > 0.5;

                    this._drawImage(black ? 'blood_splatter_black' : 'blood_splatter_red',
                        Math.random(), Math.random(), Math.random() * Math.PI * 2, 1);

                    if (this._sceneName === 'fade_out_black_splatter_stop') {
                        this._drawImage('stop', 0.5, 0.5, 0, 0.3);
                    }

                    this._texture.needsUpdate = true;
                }

                break;

            case 'fade_in_noise':
                while (this._frameIndex < this._sceneSeconds * 10) {
                    this._frameIndex++;

                    const data = this._imageData.data;
                    const opacity = 1 - l;

                    for (let i = 0, n = data.length; i < n; i += 4) {
                        const c = 7 + Math.sin(i / 40000 + t / 16);
                        data[i] = data[i + 1] = data[i + 2] = 5 * Math.random() * c;
                        data[i + 3] = opacity * 255;
                    }

                    ctx.putImageData(this._imageData, 0, 0);

                    this._texture.needsUpdate = true;
                }

                break;

            case 'pulse_red':
                if (this._frameIndex++ === 0) {
                    this._clear('#a008');

                    const image = ImageManager.getImage('vignette');

                    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

                    this._texture.needsUpdate = true;
                }

                this._materialEffect.opacity = Math.min(1, (1 - l) * 5) * (0.1 + Math.sin(t * 5) * 0.05);

                break;


            case 'fade_in_game_over':
                while (this._frameIndex <= this._sceneSeconds * 10) {
                    this._frameIndex++;

                    this._clear(`rgba(0, 0, 0, ${Math.min(1, (1 - l) * 8)})`);

                    for (let i = 0; i < 16; i++) {
                        const a = i / 16 * Math.PI * 2 + t;
                        const r = Math.max(0, 1 - l * 2);
                        const alpha = (1 - Math.abs(l - 0.5) * 2) * 0.05;
                        this._drawImage('game_over', 0.5 + Math.sin(a) * 0.1 * r, 0.5 + Math.random() * 0.02, 0, 0.7, alpha);
                    }

                    this._texture.needsUpdate = true;
                }

                break;

            case 'hurt':
                if (this._frameIndex++ < 5) {
                    this._drawImage('blood_splatter_red',
                        Math.random(), Math.random(), Math.random() * Math.PI * 2, 1);

                    this._texture.needsUpdate = true;
                }

                break;

            case 'spiral':
                while (this._frameIndex <= this._sceneSeconds * 10) {
                    this._frameIndex++;

                    this._clear('#fff');

                    for (let i = 0; i < 3; i++) {
                        const alpha = Math.min(0.3, l);
                        this._drawImage('spiral', 0.5, 0.5, -(i + 1) * l * l * 20 + context.time.totalSeconds, 6, alpha);
                    }

                    this._texture.needsUpdate = true;
                }

                this._materialEffect.opacity = Math.min(1, (1 - l) * 5 - 1);

                break;

            default:
                throw new Error(`Overlay effect "${this._sceneName}" does not exist`);
        }

        this._sceneSeconds += dt;
    }

    _clear(color = null) {
        this._ctx2d.clearRect(0, 0, this._canvas.width, this._canvas.height);

        if (color !== null) {
            this._ctx2d.fillStyle = color;
            this._ctx2d.fillRect(0, 0, this._canvas.width, this._canvas.height);
        }
    }

    _drawImage(imageName, xFraction, yFraction, rotation, heightFraction = 0.5, opacity = 1) {
        const image = ImageManager.getImage(imageName);
        const scale = this._canvas.height / image.height * heightFraction;

        if (opacity < 1) {
            this._ctx2d.globalAlpha = opacity;
        }

        this._ctx2d.setTransform(scale, 0, 0, scale, xFraction * this._canvas.width, yFraction * this._canvas.height);
        this._ctx2d.rotate(rotation);
        this._ctx2d.drawImage(image, -image.width / 2, -image.height / 2);
        this._ctx2d.setTransform(1, 0, 0, 1, 0, 0);

        if (opacity < 1) {
            this._ctx2d.globalAlpha = 1;
        }
    }
}

Overlay._init();
Overlay.p_register();
