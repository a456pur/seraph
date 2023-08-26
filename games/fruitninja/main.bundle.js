(function (modules) {
	function webpackJsonpCallback(data) {
		var chunkIds = data[0];
		var moreModules = data[1];
		var executeModules = data[2];
		var moduleId,
			chunkId,
			i = 0,
			resolves = [];
		for (; i < chunkIds.length; i++) {
			chunkId = chunkIds[i];
			if (
				Object.prototype.hasOwnProperty.call(installedChunks, chunkId) &&
				installedChunks[chunkId]
			) {
				resolves.push(installedChunks[chunkId][0]);
			}
			installedChunks[chunkId] = 0;
		}
		for (moduleId in moreModules) {
			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
				modules[moduleId] = moreModules[moduleId];
			}
		}
		if (parentJsonpFunction) parentJsonpFunction(data);
		while (resolves.length) {
			resolves.shift()();
		}
		deferredModules.push.apply(deferredModules, executeModules || []);
		return checkDeferredModules();
	}
	function checkDeferredModules() {
		var result;
		for (var i = 0; i < deferredModules.length; i++) {
			var deferredModule = deferredModules[i];
			var fulfilled = true;
			for (var j = 1; j < deferredModule.length; j++) {
				var depId = deferredModule[j];
				if (installedChunks[depId] !== 0) fulfilled = false;
			}
			if (fulfilled) {
				deferredModules.splice(i--, 1);
				result = __webpack_require__((__webpack_require__.s = deferredModule[0]));
			}
		}
		return result;
	}
	var installedModules = {};
	var installedChunks = { main: 0 };
	var deferredModules = [];
	function __webpack_require__(moduleId) {
		if (installedModules[moduleId]) {
			return installedModules[moduleId].exports;
		}
		var module = (installedModules[moduleId] = { i: moduleId, l: false, exports: {} });
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		module.l = true;
		return module.exports;
	}
	__webpack_require__.m = modules;
	__webpack_require__.c = installedModules;
	__webpack_require__.d = function (exports, name, getter) {
		if (!__webpack_require__.o(exports, name)) {
			Object.defineProperty(exports, name, { enumerable: true, get: getter });
		}
	};
	__webpack_require__.r = function (exports) {
		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
		}
		Object.defineProperty(exports, '__esModule', { value: true });
	};
	__webpack_require__.t = function (value, mode) {
		if (mode & 1) value = __webpack_require__(value);
		if (mode & 8) return value;
		if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
		var ns = Object.create(null);
		__webpack_require__.r(ns);
		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
		if (mode & 2 && typeof value != 'string')
			for (var key in value)
				__webpack_require__.d(
					ns,
					key,
					function (key) {
						return value[key];
					}.bind(null, key)
				);
		return ns;
	};
	__webpack_require__.n = function (module) {
		var getter =
			module && module.__esModule
				? function getDefault() {
						return module['default'];
				  }
				: function getModuleExports() {
						return module;
				  };
		__webpack_require__.d(getter, 'a', getter);
		return getter;
	};
	__webpack_require__.o = function (object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	};
	__webpack_require__.p = '';
	var jsonpArray = (window['webpackJsonp'] = window['webpackJsonp'] || []);
	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
	jsonpArray.push = webpackJsonpCallback;
	jsonpArray = jsonpArray.slice();
	for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
	var parentJsonpFunction = oldJsonpFunction;
	deferredModules.push([0, 'vendors']);
	return checkDeferredModules();
})({
	'./src/scripts/game.ts': /*!*****************************!*\
!*** ./src/scripts/game.ts ***!
\*****************************/ /*!no static exports found*/ function (
		module,
		exports,
		__webpack_require__
	) {
		'use strict';
		var __createBinding =
			(this && this.__createBinding) ||
			(Object.create
				? function (o, m, k, k2) {
						if (k2 === undefined) k2 = k;
						Object.defineProperty(o, k2, {
							enumerable: true,
							get: function () {
								return m[k];
							}
						});
				  }
				: function (o, m, k, k2) {
						if (k2 === undefined) k2 = k;
						o[k2] = m[k];
				  });
		var __setModuleDefault =
			(this && this.__setModuleDefault) ||
			(Object.create
				? function (o, v) {
						Object.defineProperty(o, 'default', { enumerable: true, value: v });
				  }
				: function (o, v) {
						o['default'] = v;
				  });
		var __importStar =
			(this && this.__importStar) ||
			function (mod) {
				if (mod && mod.__esModule) return mod;
				var result = {};
				if (mod != null)
					for (var k in mod)
						if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
							__createBinding(result, mod, k);
				__setModuleDefault(result, mod);
				return result;
			};
		var __importDefault =
			(this && this.__importDefault) ||
			function (mod) {
				return mod && mod.__esModule ? mod : { default: mod };
			};
		Object.defineProperty(exports, '__esModule', { value: true });
		const Phaser = __importStar(
			__webpack_require__(/*!phaser*/ './node_modules/phaser/dist/phaser.js')
		);
		const phaser_extension_1 = __webpack_require__(
			/*!@enable3d/phaser-extension*/ './node_modules/@enable3d/phaser-extension/dist/index.js'
		);
		const mainScene_1 = __importDefault(
			__webpack_require__(/*!./scenes/mainScene*/ './src/scripts/scenes/mainScene.js')
		);
		const preloadScene_1 = __importDefault(
			__webpack_require__(/*!./scenes/preloadScene*/ './src/scripts/scenes/preloadScene.js')
		);
		const preLoadingScene_1 = __importDefault(
			__webpack_require__(/*!./scenes/preLoadingScene*/ './src/scripts/scenes/preLoadingScene.js')
		);
		const config = Object.assign(
			{
				type: Phaser.WEBGL,
				transparent: true,
				scale: {
					mode: Phaser.Scale.FIT,
					autoCenter: Phaser.Scale.CENTER_BOTH,
					width: 1280,
					height: 768
				},
				parent: 'phaser-canvas',
				fps: { target: 60, forceSetTimeOut: true },
				audio: { disableWebAudio: false },
				scene: [preLoadingScene_1.default, preloadScene_1.default, mainScene_1.default],
				backgroundColor: '#000000'
			},
			phaser_extension_1.Canvas()
		);
		window.addEventListener('load', () => {
			phaser_extension_1.enable3d(() => new Phaser.Game(config)).withPhysics('assets/ammo');
		});
	},
	'./src/scripts/gameobjects/Blade.js': /*!******************************************!*\
!*** ./src/scripts/gameobjects/Blade.js ***!
\******************************************/ /*!exports provided: default*/ function (
		module,
		__webpack_exports__,
		__webpack_require__
	) {
		'use strict';
		__webpack_require__.r(__webpack_exports__);
		__webpack_require__.d(__webpack_exports__, 'default', function () {
			return Blade;
		});
		var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
			/*!@enable3d/phaser-extension*/ './node_modules/@enable3d/phaser-extension/dist/index.js'
		);
		var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
			_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__
		);
		var currentScreen = 'HomeScreen';
		var clickedHomeClassic = false;
		var clickedHomeSetting = false;
		var clickedSettingBack = false;
		var clickedResultQuit = false;
		var clickedResultRetry = false;
		class Blade {
			constructor(scene) {
				this.scene = scene;
				this.points = [];
				this.slashes = this.scene.add.graphics(0, 0);
				this.slashes2 = this.scene.add.graphics(0, 0);
				this.slashes3 = this.scene.add.graphics(0, 0);
				this.slashes4 = this.scene.add.graphics(0, 0);
				this.slashes.setDepth(2);
				this.slashes2.setDepth(2);
				this.slashes3.setDepth(2);
				this.slashes4.setDepth(2);
				this.create();
				this.lastTimeStamp = 0;
				this.SliceEffect = __webpack_require__(
					/*!./../gameobjects/SliceEffect.js*/ './src/scripts/gameobjects/SliceEffect.js'
				).default;
				this.poolSliceEffect = [];
				this.activeSliceEffect = [];
				for (let i = 0; i < 10; i++) {
					let sliceEffect = new this.SliceEffect(this.scene, 0, 0, 'SliceDiamondNeutral');
					sliceEffect.deactivate();
					this.poolSliceEffect.push(sliceEffect);
				}
				this.SliceCriticalEffect = __webpack_require__(
					/*!./../gameobjects/SliceCriticalEffect.js*/ './src/scripts/gameobjects/SliceCriticalEffect.js'
				).default;
				this.poolSliceCriticalEffect = [];
				this.activeSliceCriticalEffect = [];
				for (let i = 0; i < 10; i++) {
					let sliceCriticalEffect = new this.SliceCriticalEffect(this.scene, 0, 0);
					sliceCriticalEffect.deactivate();
					this.poolSliceCriticalEffect.push(sliceCriticalEffect);
				}
			}
			async create() {}
			changeCurrentScreen(screenName) {
				currentScreen = screenName;
			}
			getCurrentScreen() {
				return currentScreen;
			}
			changeClickedHomeClassic(val) {
				clickedHomeClassic = val;
			}
			getClickedHomeClassic() {
				return clickedHomeClassic;
			}
			changeClickedHomeSetting(val) {
				clickedHomeSetting = val;
			}
			getClickedHomeSetting() {
				return clickedHomeSetting;
			}
			changeClickedSettingBack(val) {
				clickedSettingBack = val;
			}
			getClickedSettingBack() {
				return clickedSettingBack;
			}
			changeClickedResultQuit(val) {
				clickedResultQuit = val;
			}
			getClickedResultQuit() {
				return clickedResultQuit;
			}
			changeClickedResultRetry(val) {
				clickedResultRetry = val;
			}
			getClickedResultRetry() {
				return clickedResultRetry;
			}
			createBlade(trail, points, maxHeight, color) {
				trail.clear();
				let lastPos = 2;
				if (points.length > lastPos) {
					trail.lineStyle(1, 0xffff00, 1.0);
					trail.beginPath();
					trail.lineStyle(0, 0xffff00, 1.0);
					trail.moveTo(points[0].x, points[0].y);
					for (var index = 1; index < points.length - lastPos; ++index) {
						var point = points[index];
						let strokeSize = this.linearInterpolation(
							index / (points.length - lastPos),
							0,
							maxHeight
						);
						trail.lineStyle(
							this.linearInterpolation(index / (points.length - lastPos), 0, maxHeight),
							color,
							1.0
						);
						trail.lineTo(point.x, point.y);
					}
					var count = 0;
					for (var index = points.length - lastPos; index < points.length; ++index) {
						var point = points[index];
						count += 1;
						let strokeSize = this.linearInterpolation(count / lastPos, maxHeight, 3);
						trail.lineStyle(strokeSize, color, 1.0);
						trail.lineTo(point.x, point.y);
					}
					trail.strokePath();
					trail.closePath();
				}
			}
			updateBlade(delta) {
				let points = this.points;
				let maxHeight = 32;
				this.createBlade(this.slashes, this.points, 48, 0x41567a);
				this.createBlade(this.slashes2, this.points, 40, 0x7d91a5);
				this.createBlade(this.slashes3, this.points, 32, 0xc9dfd7);
				this.createBlade(this.slashes4, this.points, 24, 0xffffff);
				let playAny = false;
				this.lastTimeStamp -= delta;
				for (var index = 0; index < points.length; ++index) {
					var point = points[index];
					if (point.first) {
						if (index > 0) {
							let distanceX = point.x - points[index - 1].x;
							let distanceY = point.y - points[index - 1].y;
							let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
							if (distance > 50 && !playAny && this.lastTimeStamp <= 0) {
								if (!this.scene.SFXMuted) {
									this.scene.sound.play('BladeRegularSwipe0' + Phaser.Math.Between(1, 7));
								}
								this.lastTimeStamp = 200;
								playAny = true;
							}
						}
						point.first = false;
					}
					point.time -= 0.5;
					if (point.time <= 0) {
						points.splice(index, 1);
						index -= 1;
					}
				}
				for (let i = 0; i < this.activeSliceEffect.length; i++) {
					if (this.activeSliceEffect[i].visible == false) {
						this.poolSliceEffect.push(this.activeSliceEffect[i]);
						this.activeSliceEffect.splice(i, 1);
					}
				}
				for (let i = 0; i < this.activeSliceCriticalEffect.length; i++) {
					if (this.activeSliceCriticalEffect[i].visible == false) {
						this.poolSliceCriticalEffect.push(this.activeSliceCriticalEffect[i]);
						this.activeSliceCriticalEffect.splice(i, 1);
					}
				}
			}
			checkFruits(fruitFactory) {
				let points = this.points;
				let listFruits = fruitFactory.getListFruits();
				let count = 0;
				for (var i = 1; i < points.length; i++) {
					let line = new Phaser.Geom.Line(
						points[i].x,
						points[i].y,
						points[i - 1].x,
						points[i - 1].y
					);
					listFruits.forEach((fruitObj) => {
						if (fruitObj.active) {
							let posFruit = this.scene.third.transform.from3dto2d(fruitObj.object.position);
							let fruit = { x: posFruit.x, y: posFruit.y, width: 100, height: 100 };
							if (this.checkIntersects(fruit, line)) {
								let dy = points[i].y - points[i - 1].y;
								let dx = points[i].x - points[i - 1].x;
								let degree = (Math.atan2(-dy, dx) / Math.PI) * 180;
								let resSlice = this.scene.fruitFactory.slice(fruitObj, degree);
								if (resSlice != -1) {
									let sliceEffect;
									let splashEffect;
									if (resSlice == 1) {
										if (this.poolSliceEffect.length == 0) {
											sliceEffect = new this.SliceEffect(
												this.scene,
												posFruit.x,
												posFruit.y,
												'SliceDiamondNeutral'
											);
										} else {
											sliceEffect = this.poolSliceEffect[0];
											sliceEffect.setTexture('SliceDiamondNeutral');
											this.poolSliceEffect.splice(0, 1);
										}
										sliceEffect.x = posFruit.x;
										sliceEffect.y = posFruit.y;
										this.scene.lastPosX = posFruit.x;
										this.scene.lastPosY = posFruit.y;
										sliceEffect.angle = -degree + 90;
										sliceEffect.activate();
										sliceEffect.tint = 0xffffff;
										this.activeSliceEffect.push(sliceEffect);
									} else {
										if (this.poolSliceCriticalEffect.length == 0) {
											sliceEffect = new this.SliceCriticalEffect(
												this.scene,
												posFruit.x,
												posFruit.y
											);
										} else {
											sliceEffect = this.poolSliceCriticalEffect[0];
											this.poolSliceCriticalEffect.splice(0, 1);
										}
										sliceEffect.x = posFruit.x;
										sliceEffect.y = posFruit.y;
										this.scene.lastPosX = posFruit.x;
										this.scene.lastPosY = posFruit.y;
										sliceEffect.angle = -degree + 90;
										sliceEffect.activate();
										this.activeSliceCriticalEffect.push(sliceEffect);
									}
									if (fruitObj.hasSplash) {
										if (this.poolSliceEffect.length == 0) {
											splashEffect = new this.SliceEffect(
												this.scene,
												posFruit.x,
												posFruit.y,
												'FruitSplash'
											);
										} else {
											splashEffect = this.poolSliceEffect[0];
											splashEffect.setTexture('FruitSplash');
											this.poolSliceEffect.splice(0, 1);
										}
										splashEffect.x = posFruit.x;
										splashEffect.y = posFruit.y;
										splashEffect.angle = -degree + 90;
										splashEffect.tint = fruitObj.splashColor;
										splashEffect.activateSplash();
										this.activeSliceEffect.push(splashEffect);
									}
									if (fruitObj.id != 'Bomb') {
										count++;
									}
								}
							}
						}
					});
				}
				return count;
			}
			checkFruitsUI(fruitFactory) {
				let points = this.points;
				let listFruits = fruitFactory.getListFruits();
				let count = 0;
				let res = '';
				if (
					clickedHomeClassic ||
					clickedHomeSetting ||
					clickedSettingBack ||
					clickedResultQuit ||
					clickedResultRetry
				) {
					points = [
						{ x: 363.08797127468586, y: 356.1988919279052 },
						{ x: 363.08797127468586, y: 355.04986324426676 }
					];
				}
				for (var i = 1; i < points.length; i++) {
					let line = new Phaser.Geom.Line(
						points[i].x,
						points[i].y,
						points[i - 1].x,
						points[i - 1].y
					);
					listFruits.forEach((fruitObj) => {
						if (fruitObj.active && res == '') {
							let posFruit = this.scene.third.transform.from3dto2d(fruitObj.object.position);
							let fruit = { x: posFruit.x, y: posFruit.y, width: 100, height: 100 };
							let modifiedLine = {
								type: 2,
								x1: posFruit.x,
								x2: posFruit.x,
								y1: posFruit.y,
								y2: posFruit.y,
								bottom: posFruit.y,
								left: posFruit.x,
								right: posFruit.x,
								top: posFruit.y
							};
							let followMe = '';
							if (clickedHomeClassic && fruitObj.id == 'WMUI') {
								followMe = 'classic';
							} else if (clickedHomeSetting && fruitObj.id == 'KWUI') {
								followMe = 'setting';
							} else if (clickedSettingBack && fruitObj.id == 'BUI') {
								followMe = 'back';
							} else if (clickedResultQuit && fruitObj.id == 'BUI') {
								followMe = 'quit';
							} else if (clickedResultRetry && fruitObj.id == 'AGUI') {
								followMe = 'retry';
							}
							if (followMe == 'classic') {
								if (this.checkIntersects(fruit, modifiedLine, 'WMUI')) {
									let dy = points[i].y - points[i - 1].y;
									let dx = points[i].x - points[i - 1].x;
									let degree = (Math.atan2(-dy, dx) / Math.PI) * 180;
									if (res == '' && this.scene.fruitFactory.slice(fruitObj, degree) != -1) {
										res = fruitObj.id;
									}
								}
							} else if (followMe == 'setting') {
								if (this.checkIntersects(fruit, modifiedLine, 'KWUI')) {
									let dy = points[i].y - points[i - 1].y;
									let dx = points[i].x - points[i - 1].x;
									let degree = (Math.atan2(-dy, dx) / Math.PI) * 180;
									if (res == '' && this.scene.fruitFactory.slice(fruitObj, degree) != -1) {
										res = fruitObj.id;
									}
								}
							} else if (followMe == 'back') {
								if (this.checkIntersects(fruit, modifiedLine, 'BUI')) {
									let dy = points[i].y - points[i - 1].y;
									let dx = points[i].x - points[i - 1].x;
									let degree = (Math.atan2(-dy, dx) / Math.PI) * 180;
									if (res == '' && this.scene.fruitFactory.slice(fruitObj, degree) != -1) {
										res = fruitObj.id;
									}
								}
							} else if (followMe == 'quit') {
								if (this.checkIntersects(fruit, modifiedLine, 'BUI')) {
									let dy = points[i].y - points[i - 1].y;
									let dx = points[i].x - points[i - 1].x;
									let degree = (Math.atan2(-dy, dx) / Math.PI) * 180;
									if (res == '' && this.scene.fruitFactory.slice(fruitObj, degree) != -1) {
										res = fruitObj.id;
									}
								}
							} else if (followMe == 'retry') {
								if (this.checkIntersects(fruit, modifiedLine, 'AGUI')) {
									let dy = points[i].y - points[i - 1].y;
									let dx = points[i].x - points[i - 1].x;
									let degree = (Math.atan2(-dy, dx) / Math.PI) * 180;
									if (res == '' && this.scene.fruitFactory.slice(fruitObj, degree) != -1) {
										res = fruitObj.id;
									}
								}
							} else {
								if (this.checkIntersects(fruit, line)) {
									let dy = points[i].y - points[i - 1].y;
									let dx = points[i].x - points[i - 1].x;
									let degree = (Math.atan2(-dy, dx) / Math.PI) * 180;
									if (res == '' && this.scene.fruitFactory.slice(fruitObj, degree) != -1) {
										res = fruitObj.id;
									}
								}
							}
						}
					});
				}
				if (res == 'WMUI') {
					currentScreen = 'GameScreen';
				} else if (res == 'AGUI') {
					currentScreen = 'GameScreen';
				}
				clickedHomeClassic = false;
				clickedHomeSetting = false;
				clickedSettingBack = false;
				clickedResultQuit = false;
				clickedResultRetry = false;
				return res;
			}
			normalizeValue(value, min, max) {
				return (value - min) / (max - min);
			}
			linearInterpolation(norm, min, max) {
				return (max - min) * norm + min;
			}
			checkIntersects(fruit, line, type = '') {
				var l1 = new Phaser.Geom.Line(
					fruit.x - fruit.width / 2,
					fruit.y - fruit.height / 2,
					fruit.x + fruit.width / 2,
					fruit.y + fruit.height / 2
				);
				var l2 = new Phaser.Geom.Line(
					fruit.x - fruit.width / 2,
					fruit.y + fruit.height / 2,
					fruit.x + fruit.width / 2,
					fruit.y - fruit.height / 2
				);
				l2.angle = 90;
				if (type == 'WMUI' || type == 'KWUI' || type == 'BUI' || type == 'AGUI') {
					return true;
				}
				if (
					Phaser.Geom.Intersects.LineToLine(line, l1, true) ||
					Phaser.Geom.Intersects.LineToLine(line, l2, true)
				) {
					let input = this.scene.input;
					let contactPoint = new Phaser.Math.Vector2(250, 0);
					contactPoint.x = input.x;
					contactPoint.y = input.y;
					var distance = Phaser.Math.Distance.BetweenPoints(
						contactPoint,
						new Phaser.Math.Vector2(fruit.x, fruit.y)
					);
					if (
						Phaser.Math.Distance.BetweenPoints(
							contactPoint,
							new Phaser.Math.Vector2(fruit.x, fruit.y)
						) > 500
					) {
						return false;
					}
					return true;
				}
			}
			pushPoint(point) {
				this.points.push(point);
			}
		}
	},
	'./src/scripts/gameobjects/ComboText.js': /*!**********************************************!*\
!*** ./src/scripts/gameobjects/ComboText.js ***!
\**********************************************/ /*!exports provided: default*/ function (
		module,
		__webpack_exports__,
		__webpack_require__
	) {
		'use strict';
		__webpack_require__.r(__webpack_exports__);
		__webpack_require__.d(__webpack_exports__, 'default', function () {
			return ComboText;
		});
		var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
			/*!@enable3d/phaser-extension*/ './node_modules/@enable3d/phaser-extension/dist/index.js'
		);
		var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
			_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__
		);
		class ComboText extends Phaser.GameObjects.Container {
			constructor(scene, x, y) {
				super(scene, x, y);
				scene.add.existing(this);
				this.listTextAtas = [];
				this.listTextTengah = [];
				this.listTextBawah = [];
				this.scene = scene;
				this.textAtas = this.scene.add.text(0, 0, 'N Fruit', {
					fontFamily: 'gangofchinese',
					fontSize: 60,
					align: 'center'
				});
				this.textAtas.setOrigin(0.5, 0.5);
				this.textAtas.setStroke('#AA7800', 16);
				let gradient = this.textAtas.context.createLinearGradient(0, 0, 0, this.textAtas.height);
				gradient.addColorStop(0, '#FEDB3D');
				gradient.addColorStop(0.5, '#FDF5C5');
				gradient.addColorStop(0.5, '#D69E00');
				gradient.addColorStop(1, '#FEF38D');
				this.textAtas.setFill(gradient);
				this.listTextAtas.push(this.textAtas);
				this.textTengah = this.scene.add.text(0, this.textAtas.height / 2 + 30, 'Combo', {
					fontFamily: 'gangofchinese',
					fontSize: 60,
					align: 'center'
				});
				this.textTengah.setOrigin(0.5, 0.5);
				this.textTengah.setStroke('#AA7800', 16);
				gradient = this.textTengah.context.createLinearGradient(0, 0, 0, this.textTengah.height);
				gradient.addColorStop(0, '#FEDB3D');
				gradient.addColorStop(0.55, '#FDF5C5');
				gradient.addColorStop(0.55, '#D69E00');
				gradient.addColorStop(1, '#FEF38D');
				this.textTengah.setFill(gradient);
				this.listTextTengah.push(this.textTengah);
				this.textBawah = this.scene.add.text(
					0,
					this.textTengah.y + this.textAtas.height / 2 + 50,
					'+ N',
					{ fontFamily: 'gangofchinese', fontSize: 140, align: 'center' }
				);
				this.textBawah.setOrigin(0.5, 0.5);
				this.textBawah.setStroke('#AA7800', 16);
				gradient = this.textBawah.context.createLinearGradient(0, 0, 0, this.textBawah.height);
				gradient.addColorStop(0, '#FEDB3D');
				gradient.addColorStop(0.5, '#FDF5C5');
				gradient.addColorStop(0.5, '#D69E00');
				gradient.addColorStop(1, '#FEF38D');
				this.textBawah.setFill(gradient);
				this.listTextBawah.push(this.textBawah);
				this.textAtas2 = this.scene.add.text(0, 0, 'N Fruit', {
					fontFamily: 'gangofchinese',
					fontSize: 60,
					align: 'center'
				});
				this.textAtas2.setOrigin(0.5, 0.5);
				this.textAtas2.setStroke('#B24700', 16);
				gradient = this.textAtas2.context.createLinearGradient(0, 0, 0, this.textAtas2.height);
				gradient.addColorStop(0, '#FF9936');
				gradient.addColorStop(0.5, '#FFE264');
				gradient.addColorStop(0.5, '#E17C2F');
				gradient.addColorStop(1, '#FAC96A');
				this.textAtas2.setFill(gradient);
				this.listTextAtas.push(this.textAtas2);
				this.textAtas3 = this.scene.add.text(0, 0, 'N Fruit', {
					fontFamily: 'gangofchinese',
					fontSize: 60,
					align: 'center'
				});
				this.textAtas3.setOrigin(0.5, 0.5);
				this.textAtas3.setStroke('#AA2200', 16);
				gradient = this.textAtas3.context.createLinearGradient(0, 0, 0, this.textAtas3.height);
				gradient.addColorStop(0, '#FE7838');
				gradient.addColorStop(0.5, '#FFBA93');
				gradient.addColorStop(0.5, '#EF562F');
				gradient.addColorStop(1, '#FE7130');
				this.textAtas3.setFill(gradient);
				this.listTextAtas.push(this.textAtas3);
				this.textTengah2 = this.scene.add.text(0, this.textAtas.height / 2 + 30, 'Combo', {
					fontFamily: 'gangofchinese',
					fontSize: 60,
					align: 'center'
				});
				this.textTengah2.setOrigin(0.5, 0.5);
				this.textTengah2.setStroke('#B24700', 16);
				gradient = this.textTengah2.context.createLinearGradient(0, 0, 0, this.textTengah2.height);
				gradient.addColorStop(0, '#FF9936');
				gradient.addColorStop(0.55, '#FFE264');
				gradient.addColorStop(0.55, '#E17C2F');
				gradient.addColorStop(1, '#FAC96A');
				this.textTengah2.setFill(gradient);
				this.listTextTengah.push(this.textTengah2);
				this.textTengah3 = this.scene.add.text(0, this.textAtas.height / 2 + 30, 'Combo', {
					fontFamily: 'gangofchinese',
					fontSize: 60,
					align: 'center'
				});
				this.textTengah3.setOrigin(0.5, 0.5);
				this.textTengah3.setStroke('#AA2200', 16);
				gradient = this.textTengah3.context.createLinearGradient(0, 0, 0, this.textTengah3.height);
				gradient.addColorStop(0, '#FE7838');
				gradient.addColorStop(0.55, '#FFBA93');
				gradient.addColorStop(0.55, '#EF562F');
				gradient.addColorStop(1, '#FE7130');
				this.textTengah3.setFill(gradient);
				this.listTextTengah.push(this.textTengah3);
				this.textBawah2 = this.scene.add.text(
					0,
					this.textTengah.y + this.textAtas.height / 2 + 50,
					'+ N',
					{ fontFamily: 'gangofchinese', fontSize: 140, align: 'center' }
				);
				this.textBawah2.setOrigin(0.5, 0.5);
				this.textBawah2.setStroke('#B24700', 16);
				gradient = this.textBawah2.context.createLinearGradient(0, 0, 0, this.textBawah2.height);
				gradient.addColorStop(0, '#FF9936');
				gradient.addColorStop(0.5, '#FFE264');
				gradient.addColorStop(0.5, '#E17C2F');
				gradient.addColorStop(1, '#FAC96A');
				this.textBawah2.setFill(gradient);
				this.listTextBawah.push(this.textBawah2);
				this.textBawah3 = this.scene.add.text(
					0,
					this.textTengah.y + this.textAtas.height / 2 + 50,
					'+ N',
					{ fontFamily: 'gangofchinese', fontSize: 140, align: 'center' }
				);
				this.textBawah3.setOrigin(0.5, 0.5);
				this.textBawah3.setStroke('#AA2200', 16);
				gradient = this.textBawah3.context.createLinearGradient(0, 0, 0, this.textBawah3.height);
				gradient.addColorStop(0, '#FE7838');
				gradient.addColorStop(0.5, '#FFBA93');
				gradient.addColorStop(0.5, '#EF562F');
				gradient.addColorStop(1, '#FE7130');
				this.textBawah3.setFill(gradient);
				this.listTextBawah.push(this.textBawah3);
				this.add(this.textAtas);
				this.add(this.textTengah);
				this.add(this.textBawah);
				this.add(this.textAtas2);
				this.add(this.textTengah2);
				this.add(this.textBawah2);
				this.add(this.textAtas3);
				this.add(this.textTengah3);
				this.add(this.textBawah3);
				for (let i = 0; i < 3; i++) {
					this.listTextAtas[i].visible = false;
					this.listTextTengah[i].visible = false;
					this.listTextBawah[i].visible = false;
				}
				this.deactivate();
			}
			activate(combo) {
				this.visible = true;
				this.scaleY = 0;
				this.scaleX = 0;
				let idColor = 0;
				if (combo >= 8) {
					idColor = 2;
				} else if (combo >= 5) {
					idColor = 1;
				}
				let textAtas = this.listTextAtas[idColor];
				let textTengah = this.listTextTengah[idColor];
				let textBawah = this.listTextBawah[idColor];
				textAtas.text = combo + ' Fruit';
				textBawah.text = '+ ' + combo;
				textAtas.visible = true;
				textTengah.visible = true;
				textBawah.visible = true;
				this.scene.tweens.add({
					targets: this,
					scale: 1.1,
					duration: 200,
					onComplete: () => {
						this.scene.tweens.add({
							targets: this,
							scale: 1,
							duration: 100,
							onComplete: () => {
								this.scene.tweens.add({
									targets: this,
									scale: 1.1,
									duration: 100,
									onComplete: () => {
										this.scene.tweens.add({
											targets: this,
											scale: 0,
											delay: 1000,
											duration: 100,
											onComplete: () => {
												this.deactivate();
											}
										});
									}
								});
							}
						});
					}
				});
			}
			deactivate() {
				this.visible = false;
				this.scaleX = 0;
				this.scaleY = 0;
				for (let i = 0; i < 3; i++) {
					this.listTextAtas[i].visible = false;
					this.listTextTengah[i].visible = false;
					this.listTextBawah[i].visible = false;
				}
			}
		}
	},
	'./src/scripts/gameobjects/CriticalText.js':
		/*!*************************************************!*\
!*** ./src/scripts/gameobjects/CriticalText.js ***!
\*************************************************/ /*!exports provided: default*/ function (
			module,
			__webpack_exports__,
			__webpack_require__
		) {
			'use strict';
			__webpack_require__.r(__webpack_exports__);
			__webpack_require__.d(__webpack_exports__, 'default', function () {
				return CriticalText;
			});
			var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				/*!@enable3d/phaser-extension*/ './node_modules/@enable3d/phaser-extension/dist/index.js'
			);
			var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
				_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__
			);
			class CriticalText extends Phaser.GameObjects.Container {
				constructor(scene, x, y) {
					super(scene, x, y);
					scene.add.existing(this);
					this.scene = scene;
					this.textAtas = this.scene.add.text(0, 0, 'CRITICAL', {
						fontFamily: 'gangofchinese',
						fontSize: 60,
						align: 'center'
					});
					this.textAtas.setOrigin(0.5, 0.5);
					this.textAtas.setStroke('#022967', 16);
					let gradient = this.textAtas.context.createLinearGradient(0, 0, 0, this.textAtas.height);
					gradient.addColorStop(0, '#B2D6F5');
					gradient.addColorStop(1, '#135ECD');
					this.textAtas.setFill(gradient);
					this.textBawah = this.scene.add.text(0, 0, '+10', {
						fontFamily: 'gangofchinese',
						fontSize: 120,
						align: 'center'
					});
					this.textBawah.setOrigin(0.5, 0.5);
					this.textBawah.setStroke('#022967', 16);
					let gradientBawah = this.textBawah.context.createLinearGradient(
						0,
						0,
						0,
						this.textBawah.height
					);
					gradientBawah.addColorStop(0, '#B2D6F5');
					gradientBawah.addColorStop(1, '#135ECD');
					this.textBawah.setFill(gradientBawah);
					this.textBawah.setPosition(
						0,
						this.textAtas.y + this.textAtas.height / 2 + this.textBawah.height / 2 - 25
					);
					this.add(this.textAtas);
					this.add(this.textBawah);
					this.deactivate();
				}
				activate() {
					this.visible = true;
					this.scaleY = 0;
					this.scaleX = 0;
					this.textAtas.visible = true;
					this.textBawah.visible = true;
					this.scene.tweens.add({
						targets: this,
						scale: 1.1,
						duration: 200,
						onComplete: () => {
							this.scene.tweens.add({
								targets: this,
								scale: 1,
								duration: 100,
								onComplete: () => {
									this.scene.tweens.add({
										targets: this,
										scale: 1.1,
										duration: 100,
										onComplete: () => {
											this.scene.tweens.add({
												targets: this,
												scale: 0,
												delay: 1000,
												duration: 100,
												onComplete: () => {
													this.deactivate();
												}
											});
										}
									});
								}
							});
						}
					});
				}
				deactivate() {
					this.visible = false;
					this.scaleX = 0;
					this.scaleY = 0;
				}
			}
		},
	'./src/scripts/gameobjects/FruitFactory.js':
		/*!*************************************************!*\
!*** ./src/scripts/gameobjects/FruitFactory.js ***!
\*************************************************/ /*!exports provided: default*/ function (
			module,
			__webpack_exports__,
			__webpack_require__
		) {
			'use strict';
			__webpack_require__.r(__webpack_exports__);
			(function (global) {
				__webpack_require__.d(__webpack_exports__, 'default', function () {
					return FruitFactory;
				});
				var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*!@enable3d/phaser-extension*/ './node_modules/@enable3d/phaser-extension/dist/index.js'
				);
				var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__
				);
				class FruitFactory {
					constructor(scene) {
						global.gameData = {
							fruitList: [
								{
									id: 'Coconut',
									path: 'assets/fruits/Coconut.FBX',
									scale: 1.2413,
									splashColor: 0xf9ffff,
									alpha: 179,
									splashTex: 'splash',
									droplets: 'JuiceDragonFruit',
									impactSFX: 'FruitImpactBigHollow',
									minSplash: 2,
									maxSplash: 4
								},
								{
									id: 'Pineapple',
									path: 'assets/fruits/Pineapple.FBX',
									scale: 1.1526,
									splashColor: 0xffef3f,
									alpha: 180,
									splashTex: 'splash',
									droplets: 'JuicePineapple',
									impactSFX: 'FruitImpactBigWet0',
									minSplash: 2,
									maxSplash: 3
								},
								{
									id: 'Orange',
									path: 'assets/fruits/Orange.FBX',
									scale: 1.034,
									splashColor: 0xfc7804,
									alpha: 180,
									splashTex: 'splash',
									droplets: 'JuiceOrange',
									impactSFX: 'FruitImpactBigWet0',
									minSplash: 3,
									maxSplash: 4
								},
								{
									id: 'Kiwifruit',
									path: 'assets/fruits/Kiwifruit.FBX',
									scale: 0.8866,
									splashColor: 0x54ad10,
									alpha: 180,
									splashTex: 'splash',
									droplets: 'JuiceGreen',
									impactSFX: 'FruitImpactSmallWet0',
									minSplash: 1,
									maxSplash: 4
								},
								{
									id: 'Lemon',
									path: 'assets/fruits/Lemon.FBX',
									scale: 0.9753,
									splashColor: 0xffef3f,
									alpha: 180,
									splashTex: 'splash',
									droplets: 'JuicePineapple',
									impactSFX: 'FruitImpactMediumWet0',
									minSplash: 3,
									maxSplash: 4
								},
								{
									id: 'Peach',
									path: 'assets/fruits/Peach.FBX',
									scale: 1.0108,
									splashColor: 0xffc51b,
									alpha: 180,
									splashTex: 'splash',
									droplets: 'JuiceMango',
									impactSFX: 'FruitImpactMediumWet0',
									minSplash: 4,
									maxSplash: 4
								},
								{
									id: 'AppleGreen',
									path: 'assets/fruits/AppleGreen.FBX',
									scale: 1.064,
									splashColor: 0xfedc35,
									alpha: 179,
									splashTex: 'splash2',
									droplets: 'JuicePineapple',
									impactSFX: 'FruitImpactApple',
									minSplash: 2,
									maxSplash: 2
								},
								{
									id: 'Mango',
									path: 'assets/fruits/Mango.FBX',
									scale: 1.1526,
									splashColor: 0xffb720,
									alpha: 180,
									splashTex: 'splash',
									droplets: 'JuiceMango',
									impactSFX: 'FruitImpactMediumWet0',
									minSplash: 2,
									maxSplash: 4
								},
								{
									id: 'Watermelon',
									path: 'assets/fruits/Watermelon.FBX',
									scale: 1.33,
									splashColor: 0xfb2618,
									alpha: 255,
									splashTex: 'splash',
									droplets: 'JuiceRed',
									impactSFX: 'FruitImpactBigWet0',
									minSplash: 3,
									maxSplash: 4
								},
								{
									id: 'WMUI',
									path: 'assets/fruits/Watermelon.FBX',
									scale: 1.33,
									splashColor: 0xfb2618,
									alpha: 255,
									splashTex: 'splash',
									droplets: 'JuiceRed',
									impactSFX: 'FruitImpactBigWet0',
									minSplash: 3,
									maxSplash: 4
								},
								{
									id: 'KWUI',
									path: 'assets/fruits/Kiwifruit.FBX',
									scale: 0.8866,
									splashColor: 0x54ad10,
									alpha: 180,
									splashTex: 'splash',
									droplets: 'JuiceGreen',
									impactSFX: 'FruitImpactSmallWet0',
									minSplash: 1,
									maxSplash: 4
								},
								{
									id: 'BUI',
									path: 'assets/fruits/Bomb.fbx',
									scale: 1.0,
									splashTex: 'none',
									droplets: 'none',
									impactSFX: 'BombExplodeGameOver'
								},
								{
									id: 'AGUI',
									path: 'assets/fruits/AppleGreen.FBX',
									scale: 1.064,
									splashColor: 0xfedc35,
									alpha: 179,
									splashTex: 'splash2',
									droplets: 'JuicePineapple',
									impactSFX: 'FruitImpactApple',
									minSplash: 2,
									maxSplash: 2
								},
								{
									id: 'Banana',
									path: 'assets/fruits/Banana.FBX',
									scale: 0.95,
									splashTex: 'none',
									droplets: 'none',
									impactSFX: 'FruitImpactMediumDry'
								},
								{
									id: 'Bomb',
									path: 'assets/fruits/Bomb.fbx',
									scale: 1.0,
									splashTex: 'none',
									droplets: 'none',
									impactSFX: 'BombExplodeGameOver'
								}
							]
						};
						this.scene = scene;
						this.listFruits = [];
						this.fruitToSpawnList = [];
						this.fruitNeedUpdate = [];
						this.frustumSizeChanger = 192;
						this.bombHit = false;
						this.udahFinish = false;
						this.create();
					}
					async create() {
						this.fruitTexture = await this.scene.third.load.texture('fruits_tex');
						this.shadowTexture = await this.scene.third.load.texture('fruit_shadow');
						this.bombTexture = await this.scene.third.load.texture('bomb_tex');
						this.bombRayTexture = await this.scene.third.load.texture('bomb_ray_tex');
						this.splashTexture = await this.scene.third.load.texture('splash_tex');
						this.splashTexture2 = await this.scene.third.load.texture('splash2_tex');
						this.splashTexture3 = await this.scene.third.load.texture('splash3_tex');
						this.splashTexture4 = await this.scene.third.load.texture('splash4_tex');
						this.splashSliced1 = await this.scene.third.load.texture('SplashSlice1');
						this.splashSliced2 = await this.scene.third.load.texture('SplashSlice2');
						this.fruitTrailTex = await this.scene.third.load.texture('FruitTrail');
						this.criticalTrailTex = await this.scene.third.load.texture('CriticalTrail');
						this.bombTrailTex = await this.scene.third.load.texture('BombTrail');
						this.bombSmokeTex = await this.scene.third.load.texture('BombSmoke');
						this.helperVec3 = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
							'THREE'
						].Vector3(0, 0, 0);
						let data = global.gameData.fruitList;
						for (var i = 0; i < data.length; i++) {
							this.load(
								data[i].path,
								i * 20 - 180,
								75,
								0,
								(0.7 * data[i].scale) / this.frustumSizeChanger,
								data[i].id,
								data[i]
							);
						}
						this.emitterDroplets = {};
						this.emitterDroplets['JuiceDragonFruit'] = this.createEmitter('JuiceDragonfruit');
						this.emitterDroplets['JuiceGreen'] = this.createEmitter('JuiceGreen');
						this.emitterDroplets['JuiceMango'] = this.createEmitter('JuiceMango');
						this.emitterDroplets['JuiceOrange'] = this.createEmitter('JuiceOrange');
						this.emitterDroplets['JuicePineapple'] = this.createEmitter('JuicePineapple');
						this.emitterDroplets['JuiceRed'] = this.createEmitter('JuiceRed');
						this.emitterDroplets['StarCritical'] = this.createEmitter('StarCritical', 1.0);
						this.emitterDroplets2 = {};
						this.emitterDroplets2['JuiceDragonFruit'] = this.createEmitter('JuiceDragonfruit', 1);
						this.emitterDroplets2['JuiceGreen'] = this.createEmitter('JuiceGreen', 1);
						this.emitterDroplets2['JuiceMango'] = this.createEmitter('JuiceMango', 1);
						this.emitterDroplets2['JuiceOrange'] = this.createEmitter('JuiceOrange', 1);
						this.emitterDroplets2['JuicePineapple'] = this.createEmitter('JuicePineapple', 1);
						this.emitterDroplets2['JuiceRed'] = this.createEmitter('JuiceRed', 1);
						this.bombRay = [];
						this.bombFuse = this.scene.sound.add('BombFuseLP');
					}
					populateRayForBomb(bomb) {
						let nRay = 8;
						let startRand = Phaser.Math.Between(1, 12) * 30;
						for (let i = 0; i < nRay; i++) {
							this.scene.third.load.fbx('assets/effects/PomegranateRay.fbx').then((object) => {
								this.scene.third.add.existing(object);
								object.position.set(0, 0, 2);
								object.rotation.set(-90, startRand + i * 30, 0);
								const material = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
									'THREE'
								].MeshPhongMaterial({ map: this.bombRayTexture });
								material.transparent = true;
								let bombRayTexture = this.bombRayTexture;
								object.traverse(function (child) {
									if (child.isMesh) {
										child.material = material;
									}
								});
								object.material = material;
								material.opacity = Phaser.Math.Between(5, 10) / 10.0;
								object.visible = false;
								this.bombRay.push(object);
							});
						}
					}
					createEmitter(textureName, startScale = 2.0) {
						let dropletParticle = this.scene.add.particles(textureName);
						let emitter;
						if (textureName == 'StarCritical') {
							let shape = new Phaser.Geom.Line(0, -100, 0, 100);
							emitter = dropletParticle.createEmitter({
								x: 384,
								y: 640,
								emitZone: { type: 'random', source: shape },
								alpha: 1,
								scale: { start: startScale, end: 0 },
								speed: { min: 300, max: 800, step: 100 },
								angle: { min: -30, max: 30, step: 15 },
								lifespan: 1000,
								gravityX: 0,
								gravityY: 500,
								quantity: 15,
								tint: 0x9ff1ff,
								on: false
							});
						} else if (startScale == 2) {
							emitter = dropletParticle.createEmitter({
								x: 384,
								y: 640,
								alpha: 1,
								scale: { start: startScale, end: 0 },
								speed: { min: 300, max: 600 },
								angle: { min: -15, max: 15 },
								lifespan: 1000,
								gravityX: 0,
								gravityY: 1000,
								quantity: 10,
								on: false
							});
						} else {
							emitter = dropletParticle.createEmitter({
								x: 384,
								y: 640,
								alpha: 1,
								scale: { start: startScale, end: 0 },
								speedX: { min: -400, max: 400 },
								speedY: { min: -350, max: -50 },
								lifespan: 750,
								gravityX: 0,
								gravityY: 1000,
								quantity: 10,
								on: false
							});
						}
						return emitter;
					}
					load(path, posX, posY, posZ, scaleSize, id, data) {
						let fruitTexture;
						if (id == 'Bomb' || id == 'BUI') {
							fruitTexture = this.bombTexture;
						} else {
							fruitTexture = this.fruitTexture;
						}
						let me = this;
						let fruitTrailTex = this.fruitTrailTex;
						let criticalTrailTex = this.criticalTrailTex;
						let bombTrailTex = this.bombTrailTex;
						let bombSmokeTex = this.bombSmokeTex;
						if (id == 'WMUI') {
							posX = 0;
							posY = -64 / this.frustumSizeChanger;
							posZ = 10 / this.frustumSizeChanger;
						} else if (id == 'KWUI') {
							posX = (5.5 * 32) / this.frustumSizeChanger;
							posY = 0 / this.frustumSizeChanger;
							posZ = 10 / this.frustumSizeChanger;
							console.log('kiwi: ' + posX + ', ' + posY + ', ' + posZ);
						}
						this.scene.third.load.fbx(path).then((object) => {
							object.scale.set(scaleSize, scaleSize, scaleSize);
							object.position.set(posX, posY, posZ);
							let half1BasePos;
							let half2BasePos;
							let theBombTrail;
							object.traverse(function (child) {
								if (child.isMesh) {
									if (child.name.includes('Outline') || child.name.includes('outline')) {
										if (id != 'Bomb' && id != 'BUI') {
											child.visible = false;
										} else {
											const outlineColor =
												new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
													'THREE'
												].MeshLambertMaterial({ color: 0xff0000 });
											child.material = outlineColor;
										}
									}
									if (child.name.includes('Half') || child.name.includes('half')) {
										child.visible = false;
										child.firstLoad = true;
										if (child.name.includes('Half1') || child.name.includes('half1')) {
											half1BasePos = child.position;
										} else {
											half2BasePos = child.position;
										}
										me.scene.third.physics.add.existing(child, { shape: 'convexMesh' });
										child.body.on.update(() => {
											if (!child.body) {
												return;
											}
											if (child.firstLoad) {
												child.firstLoad = false;
												return;
											}
											child.body.setVelocity(0, 0, 0);
											child.body.setAngularVelocity(0, 0, 0);
											child.body.setRotation(0, 0, 0);
											child.position.set(0, 0, 10);
											child.body.setCollisionFlags(4);
											let force = 100;
											if (child.critical) {
												force = 1000;
											}
											if (child.name.includes('Half1') || child.name.includes('half1')) {
												child.body.applyForce(
													200 / me.frustumSizeChanger,
													force / me.frustumSizeChanger,
													-20 / me.frustumSizeChanger
												);
												child.body.setAngularVelocity(1, 0, 1);
											} else {
												child.body.applyForce(
													-200 / me.frustumSizeChanger,
													-force / me.frustumSizeChanger,
													-20 / me.frustumSizeChanger
												);
												child.body.setAngularVelocity(-1, 0, -1);
											}
										});
										child.body.needUpdate = true;
									}
									if (id != 'Bomb' && id != 'BUI') {
										child.material.map = fruitTexture;
									} else if (!child.name.includes('Outline') && !child.name.includes('outline')) {
										child.material.map = fruitTexture;
										const BombTrail = __webpack_require__(
											/*!./../utils/BombTrail.js*/ './src/scripts/utils/BombTrail.js'
										).default;
										theBombTrail = new BombTrail({
											parent: me.scene.third.scene,
											camera: me.scene.third.camera,
											helper: me.scene,
											texturePS: bombTrailTex
										});
									}
								}
							});
							this.scene.third.add.existing(object);
							this.scene.third.physics.add.existing(object, { shape: 'convexMesh' });
							if (id == 'Bomb') {
								this.populateRayForBomb(object);
							}
							this.shadowTexture.wrapS =
								_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
							this.shadowTexture.wrapT =
								_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
							const material = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
								'THREE'
							].MeshPhongMaterial({ map: this.shadowTexture });
							material.transparent = true;
							const shadow = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
								'THREE'
							].Mesh(
								new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].PlaneGeometry(
									scaleSize * 110,
									scaleSize * 110
								),
								material
							);
							shadow.opacity = 0.8;
							shadow.position.z = -699;
							shadow.position.x = posX;
							shadow.position.y = posY;
							this.scene.third.add.existing(shadow);
							let splash = [];
							let hasSplash = false;
							if (data.splashTex != 'none') {
								hasSplash = true;
								let texture = this.splashTexture;
								if (data.splashTex == 'splash2') {
									texture = this.splashTexture2;
								}
								texture.wrapS =
									_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
								texture.wrapT =
									_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
								for (let a = 0; a < 4; a++) {
									const materialSplash =
										new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
											'THREE'
										].MeshPhongMaterial({ map: texture, color: data.splashColor });
									materialSplash.transparent = true;
									materialSplash.opacity = data.alpha / 255.0;
									materialSplash.color.alpha = data.alpha / 255.0;
									materialSplash.color.baseAlpha = data.alpha / 255.0;
									let aSplash = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
										'THREE'
									].Mesh(
										new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
											'THREE'
										].PlaneGeometry(scaleSize * 110, scaleSize * 110),
										materialSplash
									);
									aSplash.position.z = -698;
									aSplash.position.x = posX;
									aSplash.position.y = posY;
									aSplash.visible = false;
									this.scene.third.add.existing(aSplash);
									splash.push(aSplash);
								}
								texture = this.splashTexture3;
								if (data.splashTex == 'splash2') {
									texture = this.splashTexture4;
								}
								texture.wrapS =
									_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
								texture.wrapT =
									_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
								for (let a = 0; a < 2; a++) {
									const materialSplash =
										new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
											'THREE'
										].MeshPhongMaterial({ map: texture, color: data.splashColor });
									materialSplash.transparent = true;
									materialSplash.opacity = data.alpha / 255.0;
									materialSplash.color.alpha = data.alpha / 255.0;
									materialSplash.color.baseAlpha = data.alpha / 255.0;
									let aSplash = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
										'THREE'
									].Mesh(
										new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
											'THREE'
										].PlaneGeometry(scaleSize * 110, scaleSize * 110),
										materialSplash
									);
									aSplash.position.z = -698;
									aSplash.position.x = posX;
									aSplash.position.y = posY;
									aSplash.visible = false;
									this.scene.third.add.existing(aSplash);
									splash.push(aSplash);
								}
								if (data.splashTex != 'splash2') {
									texture = this.splashSliced1;
									texture.wrapS =
										_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
									texture.wrapT =
										_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
									for (let a = 0; a < 1; a++) {
										const materialSplash =
											new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
												'THREE'
											].MeshPhongMaterial({ map: texture, color: data.splashColor });
										materialSplash.transparent = true;
										materialSplash.opacity = data.alpha / 255.0;
										materialSplash.color.alpha = data.alpha / 255.0;
										materialSplash.color.baseAlpha = data.alpha / 255.0;
										let aSplash = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
											'THREE'
										].Mesh(
											new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
												'THREE'
											].PlaneGeometry(scaleSize * 110, scaleSize * 110),
											materialSplash
										);
										aSplash.position.z = -698;
										aSplash.position.x = posX;
										aSplash.position.y = posY;
										aSplash.visible = false;
										this.scene.third.add.existing(aSplash);
										splash.push(aSplash);
									}
									texture = this.splashSliced2;
									texture.wrapS =
										_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
									texture.wrapT =
										_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
									for (let a = 0; a < 1; a++) {
										const materialSplash =
											new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
												'THREE'
											].MeshPhongMaterial({ map: texture, color: data.splashColor });
										materialSplash.transparent = true;
										materialSplash.opacity = data.alpha / 255.0;
										materialSplash.color.alpha = data.alpha / 255.0;
										materialSplash.color.baseAlpha = data.alpha / 255.0;
										let aSplash = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
											'THREE'
										].Mesh(
											new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
												'THREE'
											].PlaneGeometry(scaleSize * 110, scaleSize * 110),
											materialSplash
										);
										aSplash.position.z = -698;
										aSplash.position.x = posX;
										aSplash.position.y = posY;
										aSplash.visible = false;
										this.scene.third.add.existing(aSplash);
										splash.push(aSplash);
									}
								}
							}
							let fruitTrail;
							if (id == 'Bomb' || id == 'BUI') {
								const BombSmoke = __webpack_require__(
									/*!./../utils/BombSmoke.js*/ './src/scripts/utils/BombSmoke.js'
								).default;
								fruitTrail = new BombSmoke({
									parent: this.scene.third.scene,
									camera: this.scene.third.camera,
									helper: this.scene,
									texturePS: bombSmokeTex
								});
							} else {
								const FruitTrail = __webpack_require__(
									/*!./../utils/FruitTrail.js*/ './src/scripts/utils/FruitTrail.js'
								).default;
								fruitTrail = new FruitTrail({
									parent: this.scene.third.scene,
									camera: this.scene.third.camera,
									helper: this.scene,
									texturePS: fruitTrailTex
								});
							}
							const CriticalTrail = __webpack_require__(
								/*!./../utils/CriticalTrail.js*/ './src/scripts/utils/CriticalTrail.js'
							).default;
							let criticalTrailHalf1 = new CriticalTrail({
								parent: this.scene.third.scene,
								camera: this.scene.third.camera,
								helper: this.scene,
								texturePS: criticalTrailTex
							});
							let criticalTrailHalf2 = new CriticalTrail({
								parent: this.scene.third.scene,
								camera: this.scene.third.camera,
								helper: this.scene,
								texturePS: criticalTrailTex
							});
							const item = {
								object,
								active: true,
								pastScreen: false,
								willActive: false,
								count: 0,
								sliced: false,
								half1BasePos,
								half2BasePos,
								shadow,
								id,
								splash: splash,
								hasSplash: hasSplash,
								droplets: data.droplets,
								impactSFX: data.impactSFX,
								splashColor: data.splashColor,
								minSplash: data.minSplash,
								maxSplash: data.maxSplash,
								fruitTrail,
								theBombTrail,
								criticalTrailHalf1,
								criticalTrailHalf2
							};
							console.log(object);
							item.object.body.on.update(() => {
								if (!item) {
									return;
								}
								if (
									this.scene.gameState == -1 ||
									this.scene.gameState == 0 ||
									this.scene.gameState == 3 ||
									this.scene.gameState == 4
								) {
									item.object.position.set(item.uiPosX, item.uiPosY, 10);
									this.activate(item);
									if (item.id == 'Bomb' || item.id == 'BUI') {
										item.fruitTrail.setOn();
									} else {
										item.object.body.setAngularVelocity(0.5, 0.25, 0.5);
										item.fruitTrail.setOff();
									}
									item.object.body.physics.setGravity(0, 0, 0);
									item.object.body.setVelocity(0, 0, 0);
								} else if (this.scene.gameState == 2) {
									if (item.willActive) {
										this.activate(item);
										let force = Math.floor(Math.random() * 50) * 2 + 530;
										if (item.id == 'Bomb' || item.id == 'BUI') {
											force = Math.floor(Math.random() * 50) * 2 + 550;
											if (item.object.position.x < 0) {
												item.object.body.applyForce(
													70 / this.frustumSizeChanger,
													force / this.frustumSizeChanger,
													-250 / this.frustumSizeChanger
												);
												item.object.body.setAngularVelocity(1, 0, 1);
											} else {
												item.object.body.applyForce(
													-70 / this.frustumSizeChanger,
													force / this.frustumSizeChanger,
													-250 / this.frustumSizeChanger
												);
												item.object.body.setAngularVelocity(-1, 0, -1);
											}
										} else {
											if (item.object.position.x < 0) {
												item.object.body.applyForce(
													100 / this.frustumSizeChanger,
													force / this.frustumSizeChanger,
													-250 / this.frustumSizeChanger
												);
												item.object.body.setAngularVelocity(1, 0, 1);
											} else {
												item.object.body.applyForce(
													-100 / this.frustumSizeChanger,
													force / this.frustumSizeChanger,
													-250 / this.frustumSizeChanger
												);
												item.object.body.setAngularVelocity(-1, 0, -1);
											}
										}
									} else {
										item.object.body.setCollisionFlags(6);
										item.object.visible = false;
										item.object.body.setVelocity(0, 0, 0);
										item.object.body.setAngularVelocity(0, 0, 0);
									}
								} else {
									this.activate(item);
								}
							});
							this.deactivate(item);
							this.listFruits.push(item);
							if (this.isFinish()) {
								console.log('masuk finish');
								this.scene.contLoad();
							}
						});
					}
					isFinish() {
						if (this.udahFinish) {
							return false;
						}
						if (this.listFruits.length == 15) {
							this.udahFinish = true;
							return true;
						}
					}
					scheduleSpawnFruit(toSpawn, z, x, delay) {
						this.fruitToSpawnList.push({ toSpawn, z, x, delay });
					}
					spawnFruit(toSpawn, z, x) {
						let helper = [];
						let min = 9999;
						let bebas = toSpawn == 'R';
						if (toSpawn == 'B') {
							toSpawn = 'Bomb';
						}
						this.listFruits.forEach((fruit) => {
							if (!fruit.active && !fruit.willActive) {
								if (bebas && fruit.id != 'Bomb' && !fruit.id.includes('UI')) {
									helper.push(fruit);
								} else {
									if (toSpawn == fruit.id) {
										helper.push(fruit);
									}
								}
							}
						});
						let f;
						if (helper.length > 0) {
							let idx = Phaser.Math.Between(0, helper.length - 1);
							f = helper[idx];
						}
						if (f) {
							f.willActive = true;
							f.pastScreen = false;
							f.count++;
							f.object.position.set(x, -1.95, z);
							f.object.body.needUpdate = true;
							if (!this.scene.SFXMuted) {
								if (f.id != 'Bomb') {
									this.scene.sound.play('FruitLaunch');
								} else {
									this.scene.sound.play('BombLaunch');
									this.bombFuse.play();
								}
							}
						}
					}
					clearBomb() {
						let bomb;
						this.listFruits.forEach((fruit) => {
							if (fruit.id == 'Bomb') {
								bomb = fruit;
							} else {
								if (fruit.active) {
									this.deactivate(fruit);
								}
							}
						});
						if (bomb) {
							this.deactivate(bomb);
						}
						for (let i = 0; i < this.bombRay.length; i++) {
							this.bombRay[i].visible = false;
						}
						this.bombHit = false;
					}
					stopAllFruit() {
						this.fruitToSpawnList = [];
						this.listFruits.forEach((fruit) => {
							fruit.object.body.setVelocity(0, 0, 0);
						});
					}
					slice(fruit, sliceDirection) {
						let me = this;
						if (!fruit.sliced) {
							fruit.preventDeactivate = false;
							fruit.sliced = true;
							fruit.fruitTrail.setOff();
							fruit.shadow.visible = false;
							fruit.object.body.setCollisionFlags(6);
							if (fruit.id == 'Bomb' || fruit.id == 'BUI') {
								if (this.scene.gameState == 2) {
									fruit.deactivateTimerSlice = 4000;
									this.bombHit = true;
									let posFruit = this.scene.third.transform.from3dto2d(fruit.object.position);
									this.scene.notifyBombHit(posFruit.x, posFruit.y);
									if (!this.scene.SFXMuted) {
										this.scene.sound.play(fruit.impactSFX);
									}
									this.scene.tweens.addCounter({
										from: 0,
										to: 8,
										duration: 1500,
										onUpdate: (tween) => {
											const value = Math.floor(tween.getValue());
											if (value != 8) {
												this.bombRay[value].position.set(
													fruit.object.position.x,
													fruit.object.position.y,
													fruit.object.position.z - 2
												);
												this.bombRay[value].visible = true;
											}
										}
									});
									fruit.object.body.physics.setGravity(0, 0, 0);
									this.stopAllFruit();
								} else {
									this.deactivate(fruit);
									if (!this.scene.SFXMuted) {
										this.scene.sound.play('FruitImpactBigHollow');
									}
									fruit.object.body.physics.setGravity(0, -2, 0);
									return true;
								}
							} else {
								if (fruit.hasSplash) {
									let posFruit = this.scene.third.transform.from3dto2d(fruit.object.position);
									fruit.critical = false;
									if (this.scene.gameState == 2 && Phaser.Math.Between(1, 100) <= 12) {
										this.scene.showCriticalText(posFruit.x, posFruit.y);
										fruit.critical = true;
										fruit.criticalTrailHalf1.setOn();
										fruit.criticalTrailHalf2.setOn();
									}
									if (fruit.critical) {
										let curAngle = -sliceDirection;
										this.emitterDroplets['StarCritical'].angle.start = curAngle - 15;
										this.emitterDroplets['StarCritical'].angle.end = curAngle + 15;
										this.emitterDroplets['StarCritical'].emitParticleAt(posFruit.x, posFruit.y);
										this.emitterDroplets2[fruit.droplets].emitParticleAt(posFruit.x, posFruit.y);
									} else {
										if (fruit.id != 'AppleGreen') {
											let curAngle = -sliceDirection;
											this.emitterDroplets[fruit.droplets].angle.start = curAngle - 15;
											this.emitterDroplets[fruit.droplets].angle.end = curAngle + 15;
											this.emitterDroplets[fruit.droplets].emitParticleAt(posFruit.x, posFruit.y);
										}
										this.emitterDroplets2[fruit.droplets].emitParticleAt(posFruit.x, posFruit.y);
									}
									let nSplat = Phaser.Math.Between(fruit.minSplash, fruit.maxSplash);
									if (fruit.critical) {
										nSplat = fruit.splash.length;
									}
									let possibleSplash = [];
									for (let a = 0; a < fruit.splash.length; a++) {
										possibleSplash.push(a);
										if (a != 0) {
											fruit.splash[a].position.set(
												fruit.splash[0].position.x,
												fruit.splash[0].position.y,
												fruit.splash[0].position.z
											);
										}
										if (fruit.critical) {
											fruit.splash[a].material.color.setHex(0x1a5f90);
										} else {
											fruit.splash[a].material.color.setHex(fruit.splashColor);
										}
										fruit.splash[a].material.color.alpha = 0;
									}
									let sfxName = fruit.impactSFX;
									if (sfxName.includes('Wet')) {
										let rand = Phaser.Math.Between(1, 3);
										sfxName += '' + rand;
									}
									if (!this.scene.SFXMuted) {
										this.scene.sound.play(sfxName);
									}
									if (this.scene.gameState == 2) {
										fruit.deactivateTimerSlice = 4000;
									} else {
										fruit.deactivateTimerSlice = 3000;
									}
									let tmpArr = [];
									for (let a = 0; a < nSplat; a++) {
										let idx = Phaser.Math.Between(0, possibleSplash.length - 1);
										let splashId = possibleSplash[idx];
										possibleSplash.splice(idx, 1);
										fruit.splash[splashId].visible = true;
										if (splashId == 6 || splashId == 7) {
											fruit.splash[splashId].rotation.set(0, 0, (sliceDirection * Math.PI) / 180);
										}
										let tmp = fruit.splash[splashId].material.color;
										fruit.splash[splashId].material.color.alpha = 1;
										fruit.splash[splashId].material.opacity = 1;
										this.scene.tweens.add({
											targets: tmp,
											alpha: 0,
											delay: 2000,
											onUpdate: () => {
												fruit.splash[splashId].material.opacity = tmp.alpha;
											}
										});
										let tmpPos = fruit.splash[splashId].position;
										if (splashId == 6 || splashId == 7) {
											let xGeser = Math.cos((sliceDirection * Math.PI) / 180) / 2;
											let yGeser = Math.sin((sliceDirection * Math.PI) / 180) / 2;
											tmpPos.x += xGeser;
											tmpPos.y += yGeser;
										} else {
											tmpPos.x += (Phaser.Math.Between(-2, 2) * 5) / 40;
											tmpPos.y += (Phaser.Math.Between(-2, 2) * 5) / 40;
											this.scene.tweens.add({
												targets: tmpPos,
												y: '-=0.08',
												duration: 1000,
												delay: 2000,
												onUpdate: () => {
													fruit.splash[splashId].position.set(tmpPos.x, tmpPos.y, tmpPos.z);
												}
											});
										}
									}
								} else {
									if (this.scene.gameState == 2) {
										fruit.deactivateTimerSlice = 4000;
									} else {
										fruit.deactivateTimerSlice = 3000;
									}
									let posFruit = this.scene.third.transform.from3dto2d(fruit.object.position);
									fruit.critical = false;
									if (this.scene.gameState == 2 && Phaser.Math.Between(1, 100) <= 12) {
										this.scene.showCriticalText(posFruit.x, posFruit.y);
										fruit.critical = true;
										fruit.criticalTrailHalf1.setOn();
										fruit.criticalTrailHalf2.setOn();
									}
									if (fruit.critical) {
										let curAngle = -sliceDirection;
										this.emitterDroplets['StarCritical'].angle.start = curAngle - 15;
										this.emitterDroplets['StarCritical'].angle.end = curAngle + 15;
										this.emitterDroplets['StarCritical'].emitParticleAt(posFruit.x, posFruit.y);
									}
									let sfxName = fruit.impactSFX;
									if (sfxName.includes('Wet')) {
										let rand = Phaser.Math.Between(1, 3);
										sfxName += '' + rand;
									}
									if (!this.scene.SFXMuted) {
										this.scene.sound.play(sfxName);
									}
								}
								let me = this;
								fruit.object.rotation.x = 0;
								fruit.object.rotation.y = 0;
								fruit.object.rotation.z = (sliceDirection * Math.PI) / 180;
								fruit.object.body.setAngularVelocity(0, 0, 0);
								fruit.object.traverse(function (child) {
									if (child.isMesh) {
										if (child.name.includes('Whole') || child.name.includes('whole')) {
											child.visible = false;
										}
										if (child.name.includes('Half') || child.name.includes('half')) {
											child.visible = true;
											child.rotation.x = -Math.PI / 2;
											child.rotation.z = 0;
											child.position.set(0, 0, 10);
											child.critical = fruit.critical;
											child.body.needUpdate = true;
										}
									}
								});
							}
							fruit.object.body.physics.setGravity(0, -2, 0);
							return fruit.critical ? 2 : 1;
						}
						return -1;
					}
					activate(fruit) {
						fruit.object.body.setVelocity(0, 0, 0);
						fruit.object.body.setAngularVelocity(0, 0, 0);
						fruit.object.body.setRotation(0, 0, 0);
						if (this.scene.gameState == 2) {
							fruit.object.body.setCollisionFlags(4);
						}
						fruit.object.visible = true;
						fruit.shadow.position.x = fruit.object.position.x - 0.0825;
						fruit.shadow.position.y = fruit.object.position.y - 0.125;
						fruit.fruitTrail.setPosition(fruit.object.position.x, fruit.object.position.y - 0.08);
						fruit.fruitTrail.setOn();
						if (fruit.id == 'Bomb' || fruit.id == 'BUI') {
							fruit.theBombTrail.setPosition(
								fruit.object.position.x,
								fruit.object.position.y + 0.08
							);
							fruit.theBombTrail.setOn();
							fruit.fruitTrail.setPosition(
								fruit.object.position.x - 0.065,
								fruit.object.position.y + 0.03
							);
						}
						fruit.shadow.visible = true;
						let me = this;
						fruit.object.traverse(function (child) {
							if (child.isMesh) {
								if (child.name.includes('Whole') || child.name.includes('whole')) {
									child.visible = true;
								}
								if (child.name.includes('Half') || child.name.includes('half')) {
									child.visible = false;
								}
							}
						});
						fruit.sliced = false;
						fruit.active = true;
						if (fruit.hasSplash) {
							fruit.splash[0].material.color.alpha = fruit.splash[0].material.color.baseAlpha;
							fruit.splash[0].material.opacity = fruit.splash[0].material.color.alpha;
						}
					}
					deactivate(fruit) {
						if (fruit.preventDeactivate) {
							return;
						}
						fruit.object.body.setCollisionFlags(6);
						fruit.object.visible = false;
						fruit.critical = false;
						fruit.shadow.position.x = -100;
						fruit.object.body.setVelocity(0, 0, 0);
						fruit.object.body.setAngularVelocity(0, 0, 0);
						fruit.object.position.set(0, -1.95, 0);
						fruit.active = false;
						fruit.willActive = false;
						fruit.needUpdate = true;
						if (fruit.hasSplash) {
							for (let a = 0; a < fruit.splash.length; a++) {
								fruit.splash[a].visible = false;
							}
						}
						if (fruit.id == 'Bomb' || fruit.id == 'BUI') {
							this.bombFuse.stop();
							fruit.fruitTrail.setOff();
							fruit.theBombTrail.setOff();
						} else {
							fruit.fruitTrail.setOff();
							fruit.criticalTrailHalf1.setOff();
							fruit.criticalTrailHalf2.setOff();
						}
						let me = this;
						fruit.object.traverse(function (child) {
							if (child.isMesh) {
								if (child.name.includes('Whole') || child.name.includes('whole')) {
									child.visible = true;
								}
								if (child.name.includes('Half') || child.name.includes('half')) {
									child.visible = false;
									if (child.body) {
										child.body.setVelocity(0, 0, 0);
										child.body.setAngularVelocity(0, 0, 0);
										child.body.setRotation(0, 0, 0);
										child.body.setCollisionFlags(6);
										if (child.name.includes('Half1') || child.name.includes('half1')) {
											child.position.x = 0;
											child.position.y = 0;
											child.position.z = 0;
											child.rotation.x = 0;
											child.rotation.y = 0;
											child.rotation.z = 0;
										} else {
											child.position.x = 0;
											child.position.y = 0;
											child.position.z = 0;
											child.rotation.x = 0;
											child.rotation.y = 0;
											child.rotation.z = 0;
										}
									}
								}
							}
						});
						if (!fruit.sliced && fruit.id != 'Bomb' && fruit.id != 'BUI') {
							let posX = this.scene.third.transform.from3dto2d(fruit.object.position).x;
							if (fruit.pastScreen) {
								this.scene.loseLife(posX);
							}
							if (this.scene.gameState == 3) {
								this.fruitToSpawnList = [];
							}
						}
					}
					update(delta) {
						if (this.scene.gameState == 2 && !this.scene.hitBomb) {
							for (let a = 0; a < this.fruitToSpawnList.length; a++) {
								let obj = this.fruitToSpawnList[a];
								obj.delay -= delta;
								if (obj.delay <= 0) {
									this.spawnFruit(obj.toSpawn, obj.z, obj.x);
								}
							}
							var newArr = [];
							for (let a = 0; a < this.fruitToSpawnList.length; a++) {
								let obj = this.fruitToSpawnList[a];
								if (obj.delay > 0) {
									newArr.push(obj);
								}
							}
							this.fruitToSpawnList = newArr;
						}
						this.listFruits.forEach((fruit) => {
							if (fruit.id == 'Bomb' || fruit.id == 'BUI') {
								let curRot = fruit.object.rotation.z - Math.PI / 2;
								let moveX = Math.cos(curRot) * 0.21;
								let moveY = Math.sin(curRot) * 0.21;
								fruit.theBombTrail.setPosition(
									fruit.object.position.x - moveX,
									fruit.object.position.y - moveY
								);
								fruit.theBombTrail.Step(delta / 1000.0);
								fruit.fruitTrail.setPosition(
									fruit.object.position.x - moveX,
									fruit.object.position.y - moveY
								);
								fruit.fruitTrail.Step(delta / 1000.0);
							} else {
								fruit.fruitTrail.Step(delta / 1000.0);
								fruit.criticalTrailHalf1.Step(delta / 1000.0);
								fruit.criticalTrailHalf2.Step(delta / 1000.0);
							}
							if (fruit.active) {
								if (
									this.scene.gameState == -1 ||
									this.scene.gameState == 0 ||
									this.scene.gameState == 3 ||
									this.scene.gameState == 4
								) {
									if (
										fruit.id == 'BUI' ||
										fruit.id == 'WMUI' ||
										fruit.id == 'KWUI' ||
										fruit.id == 'AGUI'
									) {
										fruit.object.position.set(fruit.uiPosX, fruit.uiPosY, 0);
									}
								}
								if (this.bombHit) {
									fruit.object.body.physics.setGravity(0, 0, 0);
									fruit.object.body.setVelocity(0, 0, 0);
								}
								if (fruit.object.position.y > -1.9) {
									fruit.pastScreen = true;
								}
								if (fruit.sliced) {
									fruit.deactivateTimerSlice -= delta;
									let canDeactivate = fruit.deactivateTimerSlice <= 0;
									if (canDeactivate) {
										this.deactivate(fruit);
									}
								}
								if (fruit.object.position.y < -2) {
									if (!fruit.sliced) {
										this.deactivate(fruit);
									}
								} else {
									fruit.fruitTrail.setPosition(
										fruit.object.position.x,
										fruit.object.position.y - 0.08
									);
									if (fruit.sliced) {
										let half1 = fruit.object.getObjectByName(fruit.id + 'Half1');
										let half2 = fruit.object.getObjectByName(fruit.id + 'Half2');
										if (half1 && half2) {
											half1.getWorldPosition(this.helperVec3);
											fruit.criticalTrailHalf1.setPosition(
												this.helperVec3.x,
												this.helperVec3.y - 0.08
											);
											half2.getWorldPosition(this.helperVec3);
											fruit.criticalTrailHalf2.setPosition(
												this.helperVec3.x,
												this.helperVec3.y - 0.08
											);
										}
									}
									fruit.shadow.position.x = fruit.object.position.x - 0.0825;
									fruit.shadow.position.y = fruit.object.position.y - 0.125;
									if (fruit.hasSplash && !fruit.splash[0].visible) {
										fruit.splash[0].position.x = fruit.object.position.x;
										fruit.splash[0].position.y = fruit.object.position.y;
									}
								}
							}
						});
					}
					positionWaterMelonUI() {
						let watermelon;
						this.listFruits.forEach((fruit) => {
							if (fruit.id == 'WMUI') {
								watermelon = fruit;
							}
						});
						if (watermelon) {
							this.deactivate(watermelon);
							watermelon.object.position.set(
								0,
								-64 / this.frustumSizeChanger,
								10 / this.frustumSizeChanger
							);
							watermelon.splash[0].position.x = watermelon.object.position.x;
							watermelon.splash[0].position.y = watermelon.object.position.y;
							watermelon.uiPosX = 0;
							watermelon.uiPosY = -64 / this.frustumSizeChanger;
							let ss = 0;
							watermelon.object.visible = true;
							watermelon.object.traverse(function (child) {
								if (child.isMesh) {
									if (child.name.includes('Whole') || child.name.includes('whole')) {
										child.visible = true;
										child.scale.set(ss, ss, ss);
									}
									if (child.name.includes('Half') || child.name.includes('half')) {
										child.visible = false;
										child.scale.set(ss, ss, ss);
									}
								}
							});
							watermelon.object.body.needUpdate = true;
							return true;
						}
						return false;
					}
					forcePositionWaterMelonUI() {
						let watermelon;
						this.listFruits.forEach((fruit) => {
							if (fruit.id == 'Watermelon') {
								watermelon = fruit;
							}
						});
						if (watermelon) {
							watermelon.object.position.set(
								0,
								-64 / this.frustumSizeChanger,
								10 / this.frustumSizeChanger
							);
							watermelon.splash[0].position.x = watermelon.object.position.x;
							watermelon.splash[0].position.y = watermelon.object.position.y;
							watermelon.object.visible = true;
							watermelon.object.traverse(function (child) {
								if (child.isMesh) {
									if (child.name.includes('Whole') || child.name.includes('whole')) {
										child.visible = true;
									}
								}
							});
						}
					}
					getFruit(id) {
						let res;
						this.listFruits.forEach((fruit) => {
							if (fruit.id == id) {
								res = fruit;
							}
						});
						return res;
					}
					resetWaterMelonUI(id = 'Watermelon') {
						let watermelon;
						this.listFruits.forEach((fruit) => {
							if (fruit.id == id) {
								watermelon = fruit;
							}
						});
						if (watermelon) {
							watermelon.preventDeactivate = false;
							let ss = 1;
							watermelon.object.traverse(function (child) {
								if (child.isMesh) {
									if (child.name.includes('Whole') || child.name.includes('whole')) {
										child.visible = false;
										child.scale.set(ss, ss, ss);
									}
									if (child.name.includes('Half') || child.name.includes('half')) {
										child.visible = false;
										child.scale.set(ss, ss, ss);
									}
									if (child.name.includes('Bomb') || child.name.includes('bomb')) {
										child.scale.set(ss, ss, ss);
									}
								}
							});
							let me = this;
							if (watermelon.sliced) {
							} else {
								this.deactivate(watermelon);
							}
						}
					}
					positionFruitUI(id, posX, posY, scaleSize) {
						let watermelon;
						this.listFruits.forEach((fruit) => {
							if (fruit.id == id) {
								watermelon = fruit;
							}
						});
						if (watermelon) {
							this.deactivate(watermelon);
							watermelon.preventDeactivate = true;
							if (id != 'Bomb' && id != 'BUI') {
								watermelon.fruitTrail.setOff();
							}
							watermelon.object.position.set(
								(posX * 32) / this.frustumSizeChanger,
								(posY * 32) / this.frustumSizeChanger,
								10 / this.frustumSizeChanger
							);
							if (id == 'Bomb' || id == 'BUI') {
								watermelon.object.rotation.set(0, 0.523, -0.523);
							}
							if (watermelon.hasSplash) {
								watermelon.splash[0].position.x = watermelon.object.position.x;
								watermelon.splash[0].position.y = watermelon.object.position.y;
							}
							let ss = 0;
							watermelon.object.visible = true;
							let me = this;
							watermelon.uiPosX = (posX * 32) / this.frustumSizeChanger;
							watermelon.uiPosY = (posY * 32) / this.frustumSizeChanger;
							watermelon.object.traverse(function (child) {
								if (child.isMesh) {
									if (child.name.includes('Whole') || child.name.includes('whole')) {
										child.visible = true;
										child.scale.set(ss, ss, ss);
									}
									if (child.name.includes('Half') || child.name.includes('half')) {
										child.visible = false;
										child.scale.set(ss, ss, ss);
									}
									if (child.name.includes('Bomb') || child.name.includes('bomb')) {
										me.scene.tweens.addCounter({
											from: 0,
											to: 360,
											duration: 7000,
											loop: -1,
											onUpdate: (tween) => {
												const value = Math.floor(tween.getValue());
												child.rotation.set(0, (value / 180) * Math.PI, 0);
											}
										});
										child.scale.set(ss, ss, ss);
									}
								}
							});
							watermelon.object.body.needUpdate = true;
							return true;
						}
						return false;
					}
					getListFruits() {
						return this.listFruits;
					}
				}
			}).call(
				this,
				__webpack_require__(
					/*!./../../../node_modules/webpack/buildin/global.js*/ './node_modules/webpack/buildin/global.js'
				)
			);
		},
	'./src/scripts/gameobjects/SliceCriticalEffect.js':
		/*!********************************************************!*\
!*** ./src/scripts/gameobjects/SliceCriticalEffect.js ***!
\********************************************************/ /*!exports provided: default*/ function (
			module,
			__webpack_exports__,
			__webpack_require__
		) {
			'use strict';
			__webpack_require__.r(__webpack_exports__);
			__webpack_require__.d(__webpack_exports__, 'default', function () {
				return SliceCriticalEffect;
			});
			var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				/*!@enable3d/phaser-extension*/ './node_modules/@enable3d/phaser-extension/dist/index.js'
			);
			var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
				_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__
			);
			class SliceCriticalEffect extends Phaser.GameObjects.Container {
				constructor(scene, x, y) {
					super(scene, x, y);
					scene.add.existing(this);
					this.scene = scene;
					this.sliceAtas = this.scene.add.image(0, 0, 'SliceDiamondCritical');
					this.sliceBawah = this.scene.add.image(0, 0, 'SliceDiamondCritical');
					this.sliceAtas.setOrigin(0.5, 0.5);
					this.sliceBawah.setOrigin(0.5, 0.5);
					this.add(this.sliceAtas);
					this.add(this.sliceBawah);
					this.deactivate();
				}
				activate() {
					this.visible = true;
					this.scaleY = 1;
					this.scaleX = 1;
					this.alpha = 1;
					this.scene.tweens.add({
						targets: this,
						scaleY: 3.0,
						duration: 100,
						onComplete: () => {
							this.sliceAtas.angle = 45;
							this.sliceBawah.angle = -45;
							this.scene.tweens.add({
								targets: this,
								scaleY: 0,
								scaleX: 0,
								duration: 200,
								onComplete: () => {
									this.deactivate();
								}
							});
						}
					});
				}
				deactivate() {
					this.visible = false;
					this.alpha = 1;
				}
			}
		},
	'./src/scripts/gameobjects/SliceEffect.js': /*!************************************************!*\
!*** ./src/scripts/gameobjects/SliceEffect.js ***!
\************************************************/ /*!exports provided: default*/ function (
		module,
		__webpack_exports__,
		__webpack_require__
	) {
		'use strict';
		__webpack_require__.r(__webpack_exports__);
		__webpack_require__.d(__webpack_exports__, 'default', function () {
			return SliceEffect;
		});
		var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
			/*!@enable3d/phaser-extension*/ './node_modules/@enable3d/phaser-extension/dist/index.js'
		);
		var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
			_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__
		);
		class SliceEffect extends Phaser.GameObjects.Image {
			constructor(scene, x, y, texture, frame) {
				super(scene, x, y, texture, frame);
				scene.add.existing(this);
				this.scene = scene;
				this.deactivate();
			}
			activate() {
				this.visible = true;
				this.scaleY = 1;
				this.scaleX = 1;
				this.alpha = 1;
				this.scene.tweens.add({
					targets: this,
					scaleY: 2.0,
					duration: 100,
					onComplete: () => {
						this.scene.tweens.add({
							targets: this,
							scaleY: 0,
							duration: 100,
							onComplete: () => {
								this.deactivate();
							}
						});
					}
				});
			}
			activateSplash() {
				this.visible = true;
				this.scaleY = 1;
				this.scaleX = 1;
				this.alpha = 1;
				this.scene.tweens.add({
					targets: this,
					scaleY: 1.3,
					scaleX: 2.3,
					duration: 100,
					onComplete: () => {
						this.scene.tweens.add({
							targets: this,
							alpha: 0,
							scaleY: 1.95,
							scaleX: 3.45,
							duration: 200,
							onComplete: () => {
								this.deactivate();
							}
						});
					}
				});
			}
			deactivate() {
				this.visible = false;
				this.alpha = 1;
			}
		}
	},
	'./src/scripts/scenes/mainScene.js': /*!*****************************************!*\
!*** ./src/scripts/scenes/mainScene.js ***!
\*****************************************/ /*!exports provided: default*/ function (
		module,
		__webpack_exports__,
		__webpack_require__
	) {
		'use strict';
		__webpack_require__.r(__webpack_exports__);
		__webpack_require__.d(__webpack_exports__, 'default', function () {
			return MainScene;
		});
		var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
			/*!@enable3d/phaser-extension*/ './node_modules/@enable3d/phaser-extension/dist/index.js'
		);
		var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
			_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__
		);
		var canShowClassic = true;
		class MainScene extends _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['Scene3D'] {
			constructor() {
				super({ key: 'MainScene' });
			}
			init() {
				this.gameWidth = this.cameras.main.width;
				this.gameHeight = this.cameras.main.width;
				this.cameras.main.setBackgroundColor('#000000');
				this.frustumSizeChanger = 6;
				const frustumSize = 12 / this.frustumSizeChanger;
				const aspect = this.cameras.main.width / this.cameras.main.height;
				this.accessThirdDimension({
					camera: new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].OrthographicCamera(
						(frustumSize * aspect) / -2,
						(frustumSize * aspect) / 2,
						frustumSize / 2,
						frustumSize / -2,
						0.1,
						1000
					),
					gravity: { x: 0, y: -2, z: 0 }
				});
				this.timerCombo = 0;
				this.comboCount = 0;
			}
			preload() {
				this.third.load.preload('dojo_tex', 'assets/textures/Dojo_Basic.png');
				this.third.load.preload('fruits_tex', 'assets/textures/FruitAtlas.png');
				this.third.load.preload('fruit_shadow', 'assets/textures/Fruit_shadow.png');
				this.third.load.preload('bomb_tex', 'assets/textures/BombRedCross.png');
				this.third.load.preload('bomb_ray_tex', 'assets/effects/BombRay.png');
				this.third.load.preload('splash_tex', 'assets/textures/splat12.png');
				this.third.load.preload('splash2_tex', 'assets/textures/splat14.png');
				this.third.load.preload('splash3_tex', 'assets/textures/splat11.png');
				this.third.load.preload('splash4_tex', 'assets/textures/splat13.png');
				this.third.load.preload('FruitTrail', 'assets/textures/particles/FruitTrail.png');
				this.third.load.preload('CriticalTrail', 'assets/textures/particles/Star.png');
				this.third.load.preload('BombTrail', 'assets/textures/particles/Spark01.png');
				this.third.load.preload('BombSmoke', 'assets/textures/particles/SmokeYellow.png');
				this.third.load.preload('SplashSlice1', 'assets/textures/SplashSlice.png');
				this.third.load.preload('SplashSlice2', 'assets/textures/SplashSlice2.png');
				this.third.load.preload('classic_ring_tex', 'assets/textures/FruitRingClassic.png');
				this.third.load.preload('settings_ring_tex', 'assets/textures/FruitRingPurple.png');
				this.third.load.preload('shadow_ring_tex', 'assets/textures/FruitRingShadow.png');
				this.third.load.preload('quit_ring_tex', 'assets/textures/FruitRingQuit.png');
				this.third.load.preload('retry_ring_tex', 'assets/textures/FruitRingRetry.png');
				this.third.load.preload('back_ring_tex', 'assets/textures/FruitRingBack.png');
				const FruitFactory = __webpack_require__(
					/*!./../gameobjects/FruitFactory.js*/ './src/scripts/gameobjects/FruitFactory.js'
				).default;
				this.fruitFactory = new FruitFactory(this);
				this.testBlade = this.add.container(0, 0);
				this.gameData = { score: 0, best: 0 };
			}
			async create() {
				this.gameState = -2;
				this.hitBomb = false;
				this.startLedakan = false;
				this.showCredit = false;
				this.holdCheckUI = false;
				this.homeAnimation = false;
				this.homescreenBgm = this.sound.add('MusicMenu', { loop: 1 });
				this.gameplayBgm = this.sound.add('AmbArenaClassicLP', { loop: 1 });
				this.homescreenBgm.play({ loop: 1 });
				this.input.on('pointerdown', this.OnPointerDown, this);
				this.input.on('pointermove', this.OnPointerMove, this);
				this.input.on('pointerup', this.OnPointerUp, this);
				this.third.warpSpeed('light', 'camera', 'sky');
				this.third.camera.position.set(0, 0, 200);
				const intensity = 0.2;
				const hemisphereLight = this.third.lights.hemisphereLight({
					skyColor: 0xffffff,
					groundColor: 0x000000,
					intensity
				});
				const ambientLight = this.third.lights.ambientLight({ color: 0xffffff, intensity });
				const directionalLight = this.third.lights.directionalLight({ color: 0xffffff, intensity });
				directionalLight.position.set(0, 0, 0);
				const d = 10;
				directionalLight.shadow.camera.top = d;
				directionalLight.shadow.camera.bottom = -d;
				directionalLight.shadow.camera.left = -d;
				directionalLight.shadow.camera.right = d;
				directionalLight.shadow.mapSize.set(1024, 1024);
				const lights = { directionalLight };
				this.third.lights = lights;
				const textureDojo = await this.third.load.texture('dojo_tex');
				textureDojo.wrapS =
					_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
				textureDojo.wrapT =
					_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
				const material = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].MeshLambertMaterial({ map: textureDojo });
				const plane = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Mesh(
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].PlaneGeometry(
						22 / this.frustumSizeChanger,
						22 / this.frustumSizeChanger
					),
					material
				);
				plane.position.z = -700;
				this.third.add.existing(plane);
				const Blade = __webpack_require__(
					/*!./../gameobjects/Blade.js*/ './src/scripts/gameobjects/Blade.js'
				).default;
				this.blade = new Blade(this);
				this.startTimer = 0.75;
			}
			async contLoad() {
				await this.resumeLoad();
			}
			async resumeLoad() {
				const Button = __webpack_require__(
					/*!./../utils/Button.js*/ './src/scripts/utils/Button.js'
				).default;
				const textureRing = await this.third.load.texture('classic_ring_tex');
				textureRing.wrapS =
					_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
				textureRing.wrapT =
					_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
				const materialRing = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].MeshPhongMaterial({ map: textureRing });
				materialRing.transparent = true;
				this.planeRing = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Mesh(
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].PlaneGeometry(
						5.12 / this.frustumSizeChanger,
						5.12 / this.frustumSizeChanger
					),
					materialRing
				);
				this.planeRing.position.z = -499;
				this.planeRing.position.y = -2 / this.frustumSizeChanger;
				this.third.add.existing(this.planeRing);
				this.planeRing.angle = 0;
				this.planeRing.scale.x = 0;
				this.planeRing.scale.y = 0;
				this.planeRing.scale.z = 0;
				let tmp = this.planeRing;
				this.tweens.add({
					targets: tmp,
					angle: 360,
					loop: -1,
					duration: 20000,
					onUpdate: () => {
						this.planeRing.rotation.z = (tmp.angle / 180) * Math.PI;
					}
				});
				const textureShadowRing = await this.third.load.texture('shadow_ring_tex');
				textureShadowRing.wrapS =
					_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
				textureShadowRing.wrapT =
					_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
				const materialShadowRing = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].MeshPhongMaterial({ map: textureShadowRing });
				materialShadowRing.transparent = true;
				this.planeShadowRing = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].Mesh(
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].PlaneGeometry(
						5.12 / this.frustumSizeChanger,
						5.12 / this.frustumSizeChanger
					),
					materialShadowRing
				);
				this.planeShadowRing.position.z = -500;
				this.planeShadowRing.position.x = 0.2 / this.frustumSizeChanger;
				this.planeShadowRing.position.y = (-0.2 - 2) / this.frustumSizeChanger;
				this.third.add.existing(this.planeShadowRing);
				this.planeShadowRing.scale.x = 0;
				this.planeShadowRing.scale.y = 0;
				this.planeShadowRing.scale.z = 0;
				const textureRingSettings = await this.third.load.texture('settings_ring_tex');
				textureRingSettings.wrapS =
					_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
				textureRingSettings.wrapT =
					_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
				const materialRingSettings = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].MeshPhongMaterial({ map: textureRingSettings });
				materialRingSettings.transparent = true;
				this.planeRingSettings = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].Mesh(
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].PlaneGeometry(
						4.12 / this.frustumSizeChanger,
						4.12 / this.frustumSizeChanger
					),
					materialRingSettings
				);
				this.planeRingSettings.position.z = -499;
				this.planeRingSettings.position.y = 0;
				this.planeRingSettings.position.x = 5.5 / this.frustumSizeChanger;
				this.third.add.existing(this.planeRingSettings);
				this.planeRingSettings.angle = 0;
				let tmpSettings = this.planeRingSettings;
				this.tweens.add({
					targets: tmpSettings,
					angle: 360,
					loop: -1,
					duration: 20000,
					onUpdate: () => {
						this.planeRingSettings.rotation.z = (tmpSettings.angle / 180) * Math.PI;
					}
				});
				this.planeShadowRingSettings = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].Mesh(
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].PlaneGeometry(
						4.12 / this.frustumSizeChanger,
						4.12 / this.frustumSizeChanger
					),
					materialShadowRing
				);
				this.planeShadowRingSettings.position.z = -500;
				this.planeShadowRingSettings.position.x = (0.2 + 5.5) / this.frustumSizeChanger;
				this.planeShadowRingSettings.position.y = -0.2 / this.frustumSizeChanger;
				this.third.add.existing(this.planeShadowRingSettings);
				this.planeRingSettings.scale.x = 0;
				this.planeRingSettings.scale.y = 0;
				this.planeRingSettings.scale.z = 0;
				this.planeShadowRingSettings.scale.x = 0;
				this.planeShadowRingSettings.scale.y = 0;
				this.planeShadowRingSettings.scale.z = 0;
				let blackArea = this.add.image(0, 0, 'blackAreaforTitle');
				blackArea.alpha = 0.6;
				blackArea.setOrigin(0, 0);
				let logoFruit = this.add.image(-10, 40, 'LogoFruit');
				logoFruit.setOrigin(0, 0);
				let logoNinja = this.add.image(logoFruit.width - 20, 30 + logoFruit.height, 'LogoNinja');
				logoNinja.setOrigin(0, 1);
				logoNinja.setScale(0.7, 0.7);
				logoNinja.angle = 0;
				let contBoardSlice = this.add.container(150, blackArea.height - 10);
				let scrollLockBoard = this.add.image(0, 0, 'ScrollLockBoard');
				scrollLockBoard.setScale(0.6, 0.6);
				scrollLockBoard.setOrigin(0.5, 0.5);
				let textSlice = this.add.text(0, -2, 'Tap Fruit\nto begin', {
					fontFamily: 'gangofchinese',
					fontSize: 30,
					color: '#5E3C0D',
					align: 'center'
				});
				textSlice.setOrigin(0.5, 0.5);
				contBoardSlice.add(scrollLockBoard);
				contBoardSlice.add(textSlice);
				contBoardSlice.angle = -8;
				this.buttonClassic = new Button(this, 641, 513, 'ButtonClassic');
				this.buttonClassic.on(
					'pointerup',
					function () {
						this.blade.changeClickedHomeClassic(true);
					},
					this
				);
				this.buttonClassic.visible = false;
				this.buttonSetting = new Button(this, 992, 385, 'MediumButton');
				this.buttonSetting.on(
					'pointerup',
					function () {
						this.blade.changeClickedHomeSetting(true);
					},
					this
				);
				this.buttonSetting.visible = false;
				this.buttonBack = new Button(this, 1120, 607, 'SmallButton');
				this.buttonBack.on(
					'pointerup',
					function () {
						this.blade.changeClickedSettingBack(true);
						this.buttonBack.visible = false;
					},
					this
				);
				this.buttonBack.visible = false;
				this.buttonQuit = new Button(this, 832, 607, 'MediumSmallButton');
				this.buttonQuit.on(
					'pointerup',
					function () {
						this.blade.changeClickedResultQuit(true);
						this.buttonQuit.visible = false;
					},
					this
				);
				this.buttonQuit.visible = false;
				this.buttonRetry = new Button(this, 450, 607, 'MediumSmallButton');
				this.buttonRetry.on(
					'pointerup',
					function () {
						this.blade.changeClickedResultRetry(true);
						this.buttonRetry.visible = false;
						this.buttonQuit.visible = false;
					},
					this
				);
				this.buttonRetry.visible = false;
				this.topHomescreen = this.add.container(0, -500);
				this.topHomescreen.add(blackArea);
				this.topHomescreen.add(logoFruit);
				this.topHomescreen.add(logoNinja);
				this.topHomescreen.add(contBoardSlice);
				this.textReady = this.add.text(420, 560, 'Ready', {
					fontFamily: 'gangofchinese',
					fontSize: 150
				});
				this.textReady.setStroke('#8A4F00', 16);
				let gradient = this.textReady.context.createLinearGradient(0, 0, 0, this.textReady.height);
				gradient.addColorStop(0, '#FFF210');
				gradient.addColorStop(1, '#DDA011');
				this.textReady.setFill(gradient);
				this.textReady.alpha = 0;
				this.textGo = this.add.text(490, 560, 'GO!!', {
					fontFamily: 'gangofchinese',
					fontSize: 150
				});
				this.textGo.setStroke('#183930', 16);
				gradient = this.textReady.context.createLinearGradient(0, 0, 0, this.textGo.height);
				gradient.addColorStop(0, '#9CE41D');
				gradient.addColorStop(1, '#69CE21');
				this.textGo.setFill(gradient);
				this.textGo.alpha = 0;
				this.textReady.visible = false;
				this.textGo.visible = false;
				this.contGameplayUI = this.add.container(0, 0);
				this.iconScore = this.add.image(10 + 51, 10 + 51, 'HUDWatermelon');
				this.iconScore.setScale(0.4, 0.4);
				this.iconScore.setOrigin(0.5, 0.5);
				this.contGameplayUI.add(this.iconScore);
				this.textScore = this.add.text(110, 0, '0', { fontFamily: 'gangofchinese', fontSize: 105 });
				this.textScore.setStroke('#633700', 8);
				gradient = this.textScore.context.createLinearGradient(0, 0, 0, this.textScore.height);
				gradient.addColorStop(0, '#FEF65C');
				gradient.addColorStop(1, '#EB8D11');
				this.textScore.setFill(gradient);
				this.contGameplayUI.add(this.textScore);
				this.textBest = this.add.text(25, 110, 'Best: 0', {
					fontFamily: 'gangofchinese',
					fontSize: 35
				});
				this.textBest.setStroke('#3E1400', 8);
				gradient = this.textBest.context.createLinearGradient(0, 0, 0, this.textBest.height);
				gradient.addColorStop(0, '#FCA21E');
				gradient.addColorStop(1, '#DF7200');
				this.textBest.setFill(gradient);
				this.contGameplayUI.add(this.textBest);
				this.textBestGreen = this.add.text(25, 110, 'Best: 0', {
					fontFamily: 'gangofchinese',
					fontSize: 35
				});
				this.textBestGreen.setStroke('#1F4201', 8);
				gradient = this.textBest.context.createLinearGradient(0, 0, 0, this.textBest.height);
				gradient.addColorStop(0, '#15F21D');
				gradient.addColorStop(1, '#17AD0E');
				this.textBestGreen.setFill(gradient);
				this.contGameplayUI.add(this.textBestGreen);
				this.cross3 = this.add.image(1280, 10, 'CrossBlue');
				this.cross3.setOrigin(1, 0);
				this.cross3.setScale(0.8359375, 0.8359375);
				this.cross2 = this.add.image(1170, 10, 'CrossBlue');
				this.cross2.setOrigin(1, 0);
				this.cross2.setScale(0.7109375, 0.7109375);
				this.cross1 = this.add.image(1076, 10, 'CrossBlue');
				this.cross1.setOrigin(1, 0);
				this.cross1.setScale(0.5859375, 0.5859375);
				this.contGameplayUI.add(this.cross1);
				this.contGameplayUI.add(this.cross2);
				this.contGameplayUI.add(this.cross3);
				this.contGameplayUI.y = -200;
				this.crossList = [this.cross1, this.cross2, this.cross3];
				this.crossFruitPool = [];
				this.resetGameplay();
				this.initResultScreen();
				const textureRingPA = await this.third.load.texture('retry_ring_tex');
				textureRingPA.wrapS =
					_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
				textureRingPA.wrapT =
					_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
				const materialRingPA = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].MeshPhongMaterial({ map: textureRingPA });
				materialRingPA.transparent = true;
				this.planeRingPA = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].Mesh(
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].PlaneGeometry(
						3.62 / this.frustumSizeChanger,
						3.62 / this.frustumSizeChanger
					),
					materialRingPA
				);
				this.planeRingPA.position.z = -499;
				this.planeRingPA.position.y = -3.5 / this.frustumSizeChanger;
				this.planeRingPA.position.x = -3 / this.frustumSizeChanger;
				this.third.add.existing(this.planeRingPA);
				this.planeRingPA.angle = 0;
				this.planeRingPA.scale.x = 0;
				this.planeRingPA.scale.y = 0;
				this.planeRingPA.scale.z = 0;
				let tmpPA = this.planeRingPA;
				this.tweens.add({
					targets: tmpPA,
					angle: 360,
					loop: -1,
					duration: 20000,
					onUpdate: () => {
						this.planeRingPA.rotation.z = (tmpPA.angle / 180) * Math.PI;
					}
				});
				this.planeShadowRingPA = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].Mesh(
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].PlaneGeometry(
						3.62 / this.frustumSizeChanger,
						3.62 / this.frustumSizeChanger
					),
					materialShadowRing
				);
				this.planeShadowRingPA.position.z = -500;
				this.planeShadowRingPA.position.x = (0.2 - 3) / this.frustumSizeChanger;
				this.planeShadowRingPA.position.y = (-0.2 - 3.5) / this.frustumSizeChanger;
				this.third.add.existing(this.planeShadowRingPA);
				this.planeShadowRingPA.scale.x = 0;
				this.planeShadowRingPA.scale.y = 0;
				this.planeShadowRingPA.scale.z = 0;
				this.planeRingPA.visible = false;
				this.planeShadowRingPA.visible = false;
				const textureRingQuit = await this.third.load.texture('quit_ring_tex');
				textureRingQuit.wrapS =
					_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
				textureRingQuit.wrapT =
					_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
				const materialRingQuit = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].MeshPhongMaterial({ map: textureRingQuit });
				materialRingQuit.transparent = true;
				this.planeRingQuit = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].Mesh(
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].PlaneGeometry(
						3.62 / this.frustumSizeChanger,
						3.62 / this.frustumSizeChanger
					),
					materialRingQuit
				);
				this.planeRingQuit.position.z = -499;
				this.planeRingQuit.position.y = -3.5 / this.frustumSizeChanger;
				this.planeRingQuit.position.x = 3 / this.frustumSizeChanger;
				this.third.add.existing(this.planeRingQuit);
				this.planeRingQuit.angle = 0;
				this.planeRingQuit.scale.x = 0;
				this.planeRingQuit.scale.y = 0;
				this.planeRingQuit.scale.z = 0;
				let tmpQuit = this.planeRingQuit;
				this.tweens.add({
					targets: tmpQuit,
					angle: 360,
					loop: -1,
					duration: 20000,
					onUpdate: () => {
						this.planeRingQuit.rotation.z = (tmpQuit.angle / 180) * Math.PI;
					}
				});
				this.planeShadowRingQuit = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].Mesh(
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].PlaneGeometry(
						3.62 / this.frustumSizeChanger,
						3.62 / this.frustumSizeChanger
					),
					materialShadowRing
				);
				this.planeShadowRingQuit.position.z = -500;
				this.planeShadowRingQuit.position.x = (0.2 + 3) / this.frustumSizeChanger;
				this.planeShadowRingQuit.position.y = (-0.2 - 3.5) / this.frustumSizeChanger;
				this.third.add.existing(this.planeShadowRingQuit);
				this.planeShadowRingQuit.scale.x = 0;
				this.planeShadowRingQuit.scale.y = 0;
				this.planeShadowRingQuit.scale.z = 0;
				this.planeRingQuit.visible = false;
				this.planeShadowRingQuit.visible = false;
				this.textGameover = this.add.image(640, 384, 'GOText');
				this.textGameover.setOrigin(0.5, 0.5);
				this.textGameover.setScale(0, 0);
				this.textGameover.visible = false;
				this.glowLedakan = this.add.image(640, 384, 'Glow');
				this.glowLedakan.visible = false;
				this.waveList = [
					{
						id: 1,
						minWave: 0,
						chance: 90,
						chanceRegrowth: 0.33,
						delay: 1,
						dtScale: 0.9,
						dtScaleIncrease: 0,
						fruitChance: [{ fruits: ['Watermelon'], min: 1, max: 1, between: 0 }]
					},
					{
						id: 2,
						minWave: 1,
						chance: 90,
						chanceRegrowth: 0.33,
						delay: 1,
						dtScale: 0.9,
						dtScaleIncrease: 0,
						fruitChance: [{ fruits: ['R'], min: 1, max: 1, between: 0 }]
					},
					{
						id: 3,
						minWave: 2,
						chance: 90,
						chanceRegrowth: 0.33,
						delay: 1,
						dtScale: 0.9,
						dtScaleIncrease: 0,
						fruitChance: [{ fruits: ['R'], min: 2, max: 3, between: 0 }]
					},
					{
						id: 4,
						minWave: 4,
						chance: 90,
						chanceRegrowth: 0.33,
						delay: 0.8,
						dtScale: 0.9,
						dtScaleIncrease: 0,
						fruitChance: [{ fruits: ['Bomb'], min: 1, max: 2, between: 0 }]
					},
					{
						id: 5,
						minWave: 5,
						chance: 90,
						chanceRegrowth: 0.33,
						delay: 0.8,
						dtScale: 0.9,
						dtScaleIncrease: 0,
						fruitChance: [
							{ fruits: ['Bomb'], min: 1, max: 1, between: 0 },
							{ fruits: ['R'], min: 1, max: 2, between: 0 }
						]
					},
					{
						id: 6,
						minWave: 5,
						chance: 90,
						chanceRegrowth: 0.33,
						delay: 0.8,
						dtScale: 0.9,
						dtScaleIncrease: 0,
						fruitChance: [{ fruits: ['R'], min: 7, max: 7, between: 0.7 }]
					},
					{
						id: 7,
						minWave: 9,
						chance: 90,
						chanceRegrowth: 0.33,
						delay: 0.8,
						dtScale: 0.95,
						dtScaleIncrease: 0,
						fruitChance: [{ fruits: ['R', 'R', 'B'], min: 4, max: 6, between: 0.6 }]
					},
					{
						id: 8,
						minWave: 9,
						chance: 90,
						chanceRegrowth: 0.33,
						delay: 0.8,
						dtScale: 0.95,
						dtScaleIncrease: 0,
						fruitChance: [{ fruits: ['R'], min: 4, max: 6, between: 0 }]
					},
					{
						id: 9,
						minWave: 9,
						chance: 90,
						chanceRegrowth: 0.33,
						delay: 0.8,
						dtScale: 0.95,
						dtScaleIncrease: 0,
						fruitChance: [{ fruits: ['R', 'R', 'R', 'B'], min: 3, max: 4, between: 0 }]
					},
					{
						id: 10,
						minWave: 14,
						chance: 90,
						chanceRegrowth: 0.33,
						delay: 0.8,
						dtScale: 0.95,
						dtScaleIncrease: 0,
						fruitChance: [
							{ fruits: ['Bomb'], min: 1, max: 2, between: 0 },
							{ fruits: ['R'], min: 2, max: 3, between: 0 }
						]
					},
					{
						id: 11,
						minWave: 14,
						chance: 90,
						chanceRegrowth: 0.33,
						delay: 0.8,
						dtScale: 1.0,
						dtScaleIncrease: 0,
						fruitChance: [{ fruits: ['R', 'R', 'B'], min: 16, max: 16, between: 0.4 }]
					},
					{
						id: 12,
						minWave: 14,
						chance: 90,
						chanceRegrowth: 0.33,
						delay: 0.8,
						dtScale: 1.0,
						dtScaleIncrease: 0,
						fruitChance: [{ fruits: ['R'], min: 10, max: 10, between: 0.3 }]
					},
					{
						id: 13,
						minWave: 19,
						chance: 90,
						chanceRegrowth: 0.33,
						delay: 0.8,
						dtScale: 1.0,
						dtScaleIncrease: 0,
						fruitChance: [{ fruits: ['R', 'R', 'B'], min: 8, max: 8, between: 0.5, delayInc: -0.2 }]
					},
					{
						id: 14,
						minWave: 19,
						chance: 90,
						chanceRegrowth: 0.33,
						delay: 0.8,
						dtScale: 1.0,
						dtScaleIncrease: 0,
						fruitChance: [{ fruits: ['R', 'R', 'R', 'R', 'R', 'B'], min: 4, max: 6, between: 0 }]
					},
					{
						id: 15,
						minWave: 22,
						chance: 67,
						chanceRegrowth: 0.33,
						delay: 0.8,
						dtScale: 1.0,
						dtScaleIncrease: 0.02,
						fruitChance: [{ fruits: ['R', 'R', 'R', 'B'], min: 5, max: 10, between: 0.4 }]
					},
					{
						id: 16,
						minWave: 22,
						chance: 67,
						chanceRegrowth: 0.33,
						delay: 0.8,
						dtScale: 1.0,
						dtScaleIncrease: 0.02,
						fruitChance: [{ fruits: ['R', 'R', 'R', 'B'], min: 3, max: 5, between: 0.4 }]
					},
					{
						id: 17,
						minWave: 22,
						chance: 67,
						chanceRegrowth: 0.33,
						delay: 0.8,
						dtScale: 0.9,
						dtScaleIncrease: 0.02,
						fruitChance: [{ fruits: ['R'], min: 4, max: 7, between: 0.25 }]
					},
					{
						id: 18,
						minWave: 22,
						chance: 68,
						chanceRegrowth: 0.33,
						delay: 0.8,
						dtScale: 1.0,
						dtScaleIncrease: 0.02,
						fruitChance: [{ fruits: ['R', 'R', 'B'], min: 5, max: 7, between: 0.4 }]
					}
				];
				this.waveCounter = 0;
				this.ring = this.add.image(640, 384, 'Ring');
				this.impact = this.add.image(640, 384, 'ImpactClassic');
				this.ring.visible = false;
				this.impact.visible = false;
				this.creditsPopup = this.add.container(0, 0);
				let basePopup = this.add.image(490, 384, 'BackingPaper');
				basePopup.setScale(1.6, 1.25);
				let borderPopup = this.createWoodBorder(340, 264, 595, 475, 0.5, 0.5);
				this.creditsPopup.add(basePopup);
				this.creditsPopup.add(borderPopup);
				let creditText1 = this.createCreditsText();
				var boxMask = this.make.graphics();
				boxMask.fillRect(42, 75, 880, 620);
				var mask = new Phaser.Display.Masks.GeometryMask(this, boxMask);
				creditText1.y = 0;
				creditText1.setMask(mask);
				let creditText2 = this.createCreditsText();
				creditText2.y = 5900;
				creditText2.setMask(mask);
				this.tCrd1 = creditText1;
				this.tCrd2 = creditText2;
				this.conCreditText = this.add.container(0, 0);
				this.conCreditText.add(creditText1);
				this.conCreditText.add(creditText2);
				this.conCreditText.setSize(819 * 2, 5900 * 3);
				this.holdCredit = false;
				let me = this;
				this.conCreditText.setInteractive().on('drag', function (pointer, dragX, dragY) {
					var container = me.conCreditText;
					container.y = dragY;
					console.log(dragY);
					me.delayScrollCredit = 0;
					me.holdCredit = true;
				});
				this.conCreditText.setInteractive().on('dragend', function (pointer, dragX, dragY) {
					me.holdCredit = false;
				});
				this.input.setDraggable(this.conCreditText);
				this.creditsPopup.add(this.conCreditText);
				this.creditsPopup.visible = false;
				let basePopupAudio = this.add.image(1100, 270, 'BackingPaper');
				let borderPopupAudio = this.add.image(1100, 270, 'BorderWood');
				basePopupAudio.setScale(0.6, 0.5);
				borderPopupAudio.setScale(0.6 * 1.24, 0.5 * 1.24);
				this.audioPopup = this.add.container(0, 0);
				this.audioPopup.add(basePopupAudio);
				this.audioPopup.add(borderPopupAudio);
				this.audioPopup.visible = false;
				let textAudio = this.add
					.text(1100, 160, 'Audio', {
						fontFamily: 'gangofchinese',
						fontSize: 60,
						color: '#653A11',
						align: 'center'
					})
					.setOrigin(0.5, 0);
				this.audioPopup.add(textAudio);
				this.buttonSFX = new Button(this, 1030, 300, 'ButtonSFX');
				this.buttonBGM = new Button(this, 1170, 300, 'ButtonMusic');
				this.BGMMuted = false;
				this.SFXMuted = false;
				this.buttonSFX.on(
					'pointerup',
					function () {
						if (this.buttonSFX.clicked) this.toogleSFX();
						this.buttonSFX.animateRelease();
					},
					this
				);
				this.buttonBGM.on(
					'pointerup',
					function () {
						if (this.buttonBGM.clicked) this.toogleMusic();
						this.buttonBGM.animateRelease();
					},
					this
				);
				this.audioPopup.add(this.buttonSFX);
				this.audioPopup.add(this.buttonBGM);
				this.textVersi = this.add
					.text(450, 708, 'v1.1.0.8', {
						fontFamily: 'gangofchinese',
						fontSize: 30,
						color: '#FFFFFF',
						align: 'center'
					})
					.setOrigin(0.5, 0);
				this.textVersi.setStroke('#464646', 8);
				let gradientVersi = this.textVersi.context.createLinearGradient(
					0,
					0,
					0,
					this.textVersi.height
				);
				gradientVersi.addColorStop(0, '#CECFCE');
				gradientVersi.addColorStop(0.5, '#FFFFFF');
				gradientVersi.addColorStop(0.5, '#CECFCE');
				gradientVersi.addColorStop(1, '#FFFFFF');
				this.textVersi.setFill(gradientVersi);
				this.textVersi.visible = false;
				const textureRingBack = await this.third.load.texture('back_ring_tex');
				textureRingBack.wrapS =
					_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
				textureRingBack.wrapT =
					_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].RepeatWrapping;
				const materialRingBack = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].MeshPhongMaterial({ map: textureRingBack });
				materialRingBack.transparent = true;
				this.planeRingBack = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].Mesh(
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].PlaneGeometry(
						3.12 / this.frustumSizeChanger,
						3.12 / this.frustumSizeChanger
					),
					materialRingBack
				);
				this.planeRingBack.position.z = -499;
				this.planeRingBack.position.y = -3.5 / this.frustumSizeChanger;
				this.planeRingBack.position.x = 7.5 / this.frustumSizeChanger;
				this.third.add.existing(this.planeRingBack);
				this.planeRingBack.angle = 0;
				let tmpBack = this.planeRingBack;
				this.tweens.add({
					targets: tmpBack,
					angle: 360,
					loop: -1,
					duration: 20000,
					onUpdate: () => {
						this.planeRingBack.rotation.z = (tmpBack.angle / 180) * Math.PI;
					}
				});
				this.planeShadowRingBack = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].Mesh(
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].PlaneGeometry(
						3.12 / this.frustumSizeChanger,
						3.12 / this.frustumSizeChanger
					),
					materialShadowRing
				);
				this.planeShadowRingBack.position.z = -500;
				this.planeShadowRingBack.position.x = (0.2 + 7.5) / this.frustumSizeChanger;
				this.planeShadowRingBack.position.y = (-0.2 - 3.5) / this.frustumSizeChanger;
				this.third.add.existing(this.planeShadowRingBack);
				this.planeRingBack.visible = false;
				this.planeShadowRingBack.visible = false;
				this.CriticalText = __webpack_require__(
					/*!./../gameobjects/CriticalText.js*/ './src/scripts/gameobjects/CriticalText.js'
				).default;
				this.poolCritical = [];
				this.activeCritical = [];
				for (let i = 0; i < 5; i++) {
					let criticalText = new this.CriticalText(this, 0, 0);
					criticalText.deactivate();
					this.poolCritical.push(criticalText);
				}
				this.ComboText = __webpack_require__(
					/*!./../gameobjects/ComboText.js*/ './src/scripts/gameobjects/ComboText.js'
				).default;
				this.poolComboText = [];
				this.activeComboText = [];
				this.iconScaleUp = false;
				for (let i = 0; i < 5; i++) {
					let comboText = new this.ComboText(this, 0, 0);
					comboText.deactivate();
					this.poolComboText.push(comboText);
				}
				this.scene.stop('PreloadScene');
				this.gameState = -1;
				this.tweens.add({ targets: this.topHomescreen, y: 0, duration: 250 });
				this.buttonClassic.visible = true;
				this.buttonSetting.visible = true;
				pokiGameLoadingFinished();
			}
			showCriticalText(x, y) {
				let critContainer;
				if (this.poolCritical.length == 0) {
					critContainer = new this.CriticalText(this, 0, 0);
				} else {
					critContainer = this.poolCritical[0];
					this.poolCritical.splice(0, 1);
				}
				critContainer.setPosition(x, y);
				critContainer.activate();
				if (!this.SFXMuted) {
					this.sound.play('UICritical');
				}
				this.gameData.score += 10;
				this.activeCritical.push(critContainer);
			}
			createRingFruitTweenDisappear(planeRing, planeRingShadow, fruit) {
				let scale = 1;
				let temp = { scale: 1 };
				this.tweens.add({
					targets: temp,
					scale: 0,
					duration: 200,
					onUpdate: () => {
						planeRing.scale.x = temp.scale;
						planeRing.scale.y = temp.scale;
						planeRing.scale.z = temp.scale;
						planeRingShadow.scale.x = temp.scale;
						planeRingShadow.scale.y = temp.scale;
						planeRingShadow.scale.z = temp.scale;
						fruit.object.traverse(function (child) {
							if (child.name.includes('Whole') || child.name.includes('whole')) {
								child.scale.x = temp.scale;
								child.scale.y = temp.scale;
								child.scale.z = temp.scale;
							}
							if (child.name.includes('Half') || child.name.includes('half')) {
								child.scale.x = temp.scale;
								child.scale.y = temp.scale;
								child.scale.z = temp.scale;
							}
						});
					},
					onComplete: () => {
						planeRing.visible = false;
						planeRingShadow.visible = false;
						this.fruitFactory.deactivate(fruit);
					}
				});
			}
			createRingFruitTweenAppear(planeRing, planeRingShadow, fruit, fruitScale) {
				let scale = 1;
				let temp = { scale: 0 };
				this.tweens.add({
					targets: temp,
					scale: 1,
					duration: 200,
					onUpdate: () => {
						planeRing.scale.x = temp.scale;
						planeRing.scale.y = temp.scale;
						planeRing.scale.z = temp.scale;
						planeRingShadow.scale.x = temp.scale;
						planeRingShadow.scale.y = temp.scale;
						planeRingShadow.scale.z = temp.scale;
						fruit.object.body.setCollisionFlags(4);
						fruit.object.traverse(function (child) {
							if (child.name.includes('Whole') || child.name.includes('whole')) {
								child.scale.x = temp.scale * fruitScale;
								child.scale.y = temp.scale * fruitScale;
								child.scale.z = temp.scale * fruitScale;
							}
							if (child.name.includes('Bomb') || child.name.includes('bomb')) {
								child.scale.x = temp.scale * fruitScale;
								child.scale.y = temp.scale * fruitScale;
								child.scale.z = temp.scale * fruitScale;
							}
							if (child.name.includes('Half') || child.name.includes('half')) {
								child.scale.x = temp.scale;
								child.scale.y = temp.scale;
								child.scale.z = temp.scale;
							}
						});
					}
				});
			}
			createRingTweenDisappear(planeRing, planeRingShadow) {
				let scale = 1;
				let temp = { scale: 1 };
				this.tweens.add({
					targets: temp,
					scale: 0,
					duration: 200,
					onUpdate: () => {
						planeRing.scale.x = temp.scale;
						planeRing.scale.y = temp.scale;
						planeRing.scale.z = temp.scale;
						planeRingShadow.scale.x = temp.scale;
						planeRingShadow.scale.y = temp.scale;
						planeRingShadow.scale.z = temp.scale;
					},
					onComplete: () => {
						planeRing.visible = false;
						planeRingShadow.visible = false;
					}
				});
			}
			createCreditsText() {
				let wholeCredit = this.add.container(0, 0);
				let textAbout = this.add
					.text(490, 140, 'About', {
						fontFamily: 'gangofchinese',
						fontSize: 80,
						color: '#B74A32',
						align: 'center'
					})
					.setOrigin(0.5, 0.5);
				wholeCredit.add(textAbout);
				let textGameDesc = this.add
					.text(
						490,
						180,
						'All ninjas hate fruit!\nSwipe the fruit with your finger to end their journey\n\nBe wary of bombs, and make sensei proud',
						{ fontFamily: 'gangofchinese', fontSize: 33, color: '#6F461E', align: 'center' }
					)
					.setOrigin(0.5, 0);
				wholeCredit.add(textGameDesc);
				let textCredit = this.add
					.text(490, 480, 'Credits', {
						fontFamily: 'gangofchinese',
						fontSize: 80,
						color: '#B74A32',
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let textHTML5Port = this.add
					.text(490, 370, 'EXCLUSIVE PARTNER:', {
						fontFamily: 'gangofchinese',
						fontSize: 33,
						color: '#4D2E11',
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let textIsiPort = this.add
					.text(490, 410, 'STORMS', {
						fontFamily: 'gangofchinese',
						fontSize: 28,
						color: '#693E17',
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(textCredit);
				wholeCredit.add(textHTML5Port);
				wholeCredit.add(textIsiPort);
				let textCurrentTeam = this.add
					.text(490, 630, 'Current Team', {
						fontFamily: 'gangofchinese',
						fontSize: 45,
						color: '#689927',
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(textCurrentTeam);
				let cDivision = '#4C2E12';
				let cMember = '#6F461F';
				var mid = 490;
				var left = 490 - 200;
				var right = 490 + 200;
				var distanceY = 80;
				var fontSize = 33;
				var startY = 710;
				let t_teamLead = this.add
					.text(left, startY, 'Team Lead', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_teamLead = this.add
					.text(left, startY + t_teamLead.height + 5, 'Shainiel Deo', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cMember,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(t_teamLead);
				wholeCredit.add(n_teamLead);
				let t_art = this.add
					.text(right, startY, 'Art', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_art = this.add
					.text(right, startY + t_art.height + 5, 'Laura McCabe', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cMember,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(t_art);
				wholeCredit.add(n_art);
				startY = n_teamLead.y + n_teamLead.height + distanceY;
				let t_code = this.add
					.text(left, startY, 'Code', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_code = this.add
					.text(left, startY + t_code.height + 5, 'Samantha Turner\nVictor Rykov\nKayleb Garrett', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cMember,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(t_code);
				wholeCredit.add(n_code);
				let t_design = this.add
					.text(right, startY, 'Design', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_design = this.add
					.text(right, startY + t_design.height + 5, 'Shainiel Deo\nDylan Van Beek', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cMember,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(t_design);
				wholeCredit.add(n_design);
				startY = Math.max(n_code.y + n_code.height, n_design.y + n_design.height) + distanceY;
				let t_qa = this.add
					.text(left, startY, 'QA', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_qa = this.add
					.text(left, startY + t_qa.height + 5, 'Brent Hobson', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cMember,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(t_qa);
				wholeCredit.add(n_qa);
				let t_cs = this.add
					.text(right, startY, 'Customer Support', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_cs = this.add
					.text(right, startY + t_cs.height + 5, 'Madison Annibale\nAkaash Deo\nSam Scarpignato', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cMember,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(t_cs);
				wholeCredit.add(n_cs);
				startY = Math.max(n_qa.y + n_qa.height, n_cs.y + n_cs.height) + distanceY;
				let t_audio = this.add
					.text(left, startY, 'Audio', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_audio = this.add
					.text(left, startY + t_audio.height + 5, 'Cedar Jones\nJamie Campbell\nRicardo Pujol', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cMember,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(t_audio);
				wholeCredit.add(n_audio);
				let t_marketing = this.add
					.text(right, startY, 'Marketing', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_marketing = this.add
					.text(
						right,
						startY + t_marketing.height + 5,
						'Jason Maundrell\nSalvatore Compagnone\nOlivia Bambury\nParis Ormerod',
						{ fontFamily: 'gangofchinese', fontSize: fontSize, color: cMember, align: 'center' }
					)
					.setOrigin(0.5, 0);
				wholeCredit.add(t_marketing);
				wholeCredit.add(n_marketing);
				startY =
					Math.max(n_audio.y + n_audio.height, n_marketing.y + n_marketing.height) + distanceY;
				let t_originalTeam = this.add
					.text(mid, startY, 'Original Team', {
						fontFamily: 'gangofchinese',
						fontSize: 45,
						color: '#689927',
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(t_originalTeam);
				startY = t_originalTeam.y + t_originalTeam.height + distanceY;
				let t_teamLead2 = this.add
					.text(left, startY, 'Team Lead / Design', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_teamLead2 = this.add
					.text(left, startY + t_teamLead2.height + 5, 'Luke Muscat', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cMember,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(t_teamLead2);
				wholeCredit.add(n_teamLead2);
				let t_art2 = this.add
					.text(right, startY, 'Art', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_art2 = this.add
					.text(right, startY + t_art2.height + 5, 'Shath', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cMember,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(t_art2);
				wholeCredit.add(n_art2);
				startY = Math.max(n_teamLead2.y + n_teamLead2.height, n_art2.y + n_art2.height) + distanceY;
				let t_code2 = this.add
					.text(left, startY, 'Code', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_code2 = this.add
					.text(left, startY + t_code2.height + 5, 'Adam Wood\nStephen Last', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cMember,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(t_code2);
				wholeCredit.add(n_code2);
				let t_qa2 = this.add
					.text(right, startY, 'QA', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_qa2 = this.add
					.text(right, startY + t_qa2.height + 5, 'Brent Hobson\nJason Maundrell', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cMember,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(t_qa2);
				wholeCredit.add(n_qa2);
				startY = Math.max(n_code2.y + n_code2.height, n_qa2.y + n_qa2.height) + distanceY;
				let t_audio2 = this.add
					.text(left, startY, 'Audio', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_audio2 = this.add
					.text(left, startY + t_audio2.height + 5, 'Jesse Higginson\nCedar Jones', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cMember,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(t_audio2);
				wholeCredit.add(n_audio2);
				let t_production = this.add
					.text(right, startY, 'Production', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_production = this.add
					.text(right, startY + t_production.height + 5, 'Jason Harwood', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cMember,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(t_production);
				wholeCredit.add(n_production);
				startY =
					Math.max(n_audio2.y + n_audio2.height, n_production.y + n_production.height) + distanceY;
				let t_marketing2 = this.add
					.text(mid, startY, 'Marketing', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_marketing2 = this.add
					.text(mid, startY + t_marketing2.height + 5, 'Beverley Chen', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cMember,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(t_marketing2);
				wholeCredit.add(n_marketing2);
				startY = n_marketing2.y + n_marketing2.height + distanceY;
				let t_add_development = this.add
					.text(mid, startY, 'Additional Development', {
						fontFamily: 'gangofchinese',
						fontSize: 45,
						color: '#689927',
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(t_add_development);
				startY = t_add_development.y + t_add_development.height + distanceY;
				let n_leftTeam = this.add
					.text(
						left,
						startY,
						'Adam Nichols\nAnthony Hansen\nAlex Butterfield\nAlex Richardson\nAshley Muller\nBen Marrinan\nBen Vale\nBertrand Thomachot\nBrendon Thomas\nCorey Hearder\nCorey Taylor\nDaemon Walters\nDale Williams\nDaniel Baxter\nDaniel Fisher\nDaniel John\nDean Loades\nElliot Courtney\nEmma Koch\nGareth Heavon-Jones\nGemma Refalo\nGuillaume Evrard\nMark Hurst\nHugh Walters\nJames Barnes\nJames Quick\nJared Oats\nJason Robson\nJesse Higginson',
						{ fontFamily: 'gangofchinese', fontSize: fontSize, color: cMember, align: 'center' }
					)
					.setOrigin(0.5, 0);
				let n_rightTeam = this.add
					.text(
						right,
						startY,
						'John Qian\nJohnathon Carr\nJonathan Law\nJordan Comino\nJosh Sanderson\nKate Hynes\nLayton Hawkes\nMatt Millwood\nMatt Ross\nMatthew Knights\nMelanie Devoy\nMichael Dobele\nMichael Szewczyk\nMotze Asher\nMurry Lancashire\nNathan Steenstra\nPaul McNab\nPhil Larsen\nRamine Darabiha\nResa Liputra\nRichard McKinney\nRod Wong\nRyan Langley\nSean Druitt\nSean Ockert\nTerry Greisbach\nWill Goddard\nWren Brier\nZac Congo',
						{ fontFamily: 'gangofchinese', fontSize: fontSize, color: cMember, align: 'center' }
					)
					.setOrigin(0.5, 0);
				wholeCredit.add(n_leftTeam);
				wholeCredit.add(n_rightTeam);
				startY =
					Math.max(n_leftTeam.y + n_leftTeam.height, n_rightTeam.y + n_rightTeam.height) +
					distanceY;
				let t_ceo = this.add
					.text(left, startY, 'CEO', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_ceo = this.add
					.text(left, startY + t_ceo.height + 5, 'Shainiel Deo', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cMember,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(t_ceo);
				wholeCredit.add(n_ceo);
				let t_cfo = this.add
					.text(right, startY, 'CFO', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_cfo = this.add
					.text(right, startY + t_cfo.height + 5, 'Rinal Deo', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cMember,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(t_cfo);
				wholeCredit.add(n_cfo);
				startY = Math.max(n_ceo.y + n_ceo.height, n_cfo.y + n_cfo.height) + distanceY;
				let t_marketing3 = this.add
					.text(left, startY, 'Marketing', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_marketing3 = this.add
					.text(
						left,
						startY + t_marketing3.height + 5,
						'Beverley Chen\nBob Jones\nFiona Guo\nJames Schultz\nJustin Bowen\nMichelle Whitehead\nPhoebe Ong\nScheree Reeves\nTerry Greisbach\nToby Meadows',
						{ fontFamily: 'gangofchinese', fontSize: fontSize, color: cMember, align: 'center' }
					)
					.setOrigin(0.5, 0);
				wholeCredit.add(t_marketing3);
				wholeCredit.add(n_marketing3);
				let t_engine = this.add
					.text(right, startY, 'Engine', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_engine = this.add
					.text(right, startY + t_engine.height + 5, 'Jason Maundrell\nGrant Peters\nZac Congo', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cMember,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(t_engine);
				wholeCredit.add(n_engine);
				startY =
					Math.max(n_marketing3.y + n_marketing3.height, n_engine.y + n_engine.height) + distanceY;
				let t_qa3 = this.add
					.text(left, startY, 'QA', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_qa3 = this.add
					.text(
						left,
						startY + t_marketing3.height + 5,
						'Charles Bussy\nClement Valette\nKirby Scarfe\nSethlans Vayu',
						{ fontFamily: 'gangofchinese', fontSize: fontSize, color: cMember, align: 'center' }
					)
					.setOrigin(0.5, 0);
				wholeCredit.add(t_qa3);
				wholeCredit.add(n_qa3);
				let t_support = this.add
					.text(right, startY, 'Support', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_support = this.add
					.text(
						right,
						startY + t_engine.height + 5,
						'Brendan Deboy\nChloe Pearson\nChris Edwards\nGenevieve Carter\nGeorgia Shephard\nPaul Howatson\nPing Ma\nSam Gillespie\nSam White\nSethlans Vayu',
						{ fontFamily: 'gangofchinese', fontSize: fontSize, color: cMember, align: 'center' }
					)
					.setOrigin(0.5, 0);
				wholeCredit.add(t_support);
				wholeCredit.add(n_support);
				startY = Math.max(n_qa3.y + n_qa3.height, n_support.y + n_support.height) + distanceY;
				let t_special = this.add
					.text(mid, startY, 'Special Thanks', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_special = this.add
					.text(
						mid,
						startY + t_engine.height + 5,
						'Char + Emma Wood\nKaaren + Raymond Hawkes\nKate Exley\nKing Dragon Le + Family\nLauren Fryer\nLeah Mostyn\nMadonna + Callum Bryan\nNatalie Clarke\nNell + Calyb Rehua\nShinta Liputra\nStella Kalis',
						{ fontFamily: 'gangofchinese', fontSize: fontSize, color: cMember, align: 'center' }
					)
					.setOrigin(0.5, 0);
				wholeCredit.add(t_special);
				wholeCredit.add(n_special);
				startY = n_special.y + n_special.height + distanceY;
				let t_copyright = this.add
					.text(
						mid,
						startY,
						'© 2010 - 2021 Halfbrick Studios Pty Ltd. FRUIT NINJA®\nGame characters, Halfbrick and logo are trademarks of\nHalfbrick Studios Pty Ltd and are protected by copyright.\nAll rights reserved.',
						{ fontFamily: 'gangofchinese', fontSize: 28, color: cMember, align: 'center' }
					)
					.setOrigin(0.5, 0);
				wholeCredit.add(t_copyright);
				startY = t_copyright.y + t_copyright.height + distanceY;
				let t_fact = this.add
					.text(mid, startY, 'Bonus Fruit Fact', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cDivision,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let n_fact = this.add
					.text(mid, startY + t_fact.height + 5, 'Sensei loves prunes! :p', {
						fontFamily: 'gangofchinese',
						fontSize: fontSize,
						color: cMember,
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(t_fact);
				wholeCredit.add(n_fact);
				startY = n_fact.y + n_fact.height + distanceY;
				let sthanksog = this.add
					.text(490, startY, 'Special Thanks:', {
						fontFamily: 'gangofchinese',
						fontSize: 33,
						color: '#4D2E11',
						align: 'center'
					})
					.setOrigin(0.5, 0);
				let thanksogid = this.add
					.text(490, startY + sthanksog.height + 5, 'Own Games Indonesia', {
						fontFamily: 'gangofchinese',
						fontSize: 28,
						color: '#693E17',
						align: 'center'
					})
					.setOrigin(0.5, 0);
				wholeCredit.add(sthanksog);
				wholeCredit.add(thanksogid);
				return wholeCredit;
			}
			initResultScreen() {
				this.wholePopupGameover = this.add.container(0, 0);
				this.popupGameover = this.add.image(640, 25, 'ParchmentBackingLarge');
				this.popupGameover.setOrigin(0.5, 0);
				this.popupGameover.setScale(1.25, 1.25);
				let senseiHead = this.add.image(
					this.popupGameover.x + (this.popupGameover.width / 2) * 1.25 - 20,
					this.popupGameover.y + 119,
					'SenseiHead'
				);
				senseiHead.setOrigin(0.5, 0.5);
				senseiHead.setScale(0.625, 0.625);
				senseiHead.angle = -20;
				let titleText = this.add.text(640, 70, 'SCORE', {
					fontFamily: 'gangofchinese',
					fontSize: 85
				});
				titleText.setStroke('#633700', 8);
				let gradient = titleText.context.createLinearGradient(0, 0, 0, titleText.height);
				gradient.addColorStop(0, '#FDF353');
				gradient.addColorStop(1, '#E38D13');
				titleText.setOrigin(0.5, 0);
				titleText.setFill(gradient);
				this.textScoreGameover = this.add.text(640, 265, '0', {
					fontFamily: 'gangofchinese',
					fontSize: 275
				});
				this.textScoreGameover.setStroke('#633700', 16);
				gradient = this.textScoreGameover.context.createLinearGradient(
					0,
					0,
					0,
					this.textScoreGameover.height
				);
				gradient.addColorStop(0, '#FDF353');
				gradient.addColorStop(1, '#E38D13');
				this.textScoreGameover.setFill(gradient);
				this.textScoreGameover.setOrigin(0.5, 0.5);
				this.newBestText = this.add.text(640, 380, 'NEW BEST!', {
					fontFamily: 'gangofchinese',
					fontSize: 55
				});
				this.newBestText.setStroke('#360000', 4);
				gradient = titleText.context.createLinearGradient(0, 0, 0, this.newBestText.height);
				gradient.addColorStop(0, '#FF9E26');
				gradient.addColorStop(1, '#B32E0B');
				this.newBestText.setOrigin(0.5, 0);
				this.newBestText.setFill(gradient);
				this.newBestText.visible = false;
				this.wholePopupGameover.add(this.popupGameover);
				this.wholePopupGameover.add(senseiHead);
				this.wholePopupGameover.add(titleText);
				this.wholePopupGameover.add(this.textScoreGameover);
				this.wholePopupGameover.add(this.newBestText);
				this.wholePopupGameover.visible = false;
				const ScreenShake = __webpack_require__(
					/*!./../utils/ScreenShake.js*/ './src/scripts/utils/ScreenShake.js'
				).default;
				this.screenShake = ScreenShake();
			}
			getCrossFruit(posX) {
				let crossFruit;
				if (this.crossFruitPool.length == 0) {
					crossFruit = this.createCrossFruit();
				} else {
					crossFruit = this.crossFruitPool[0];
					this.crossFruitPool.splice(0, 1);
				}
				crossFruit.visible = true;
				crossFruit.setOrigin(0.5, 0.5);
				crossFruit.x = posX;
				crossFruit.scale = 0;
				this.tweens.add({
					targets: crossFruit,
					scale: 1,
					duration: 200,
					onComplete: () => {
						this.tweens.add({
							targets: crossFruit,
							scale: 0,
							duration: 200,
							delay: 700,
							onComplete: () => {
								crossFruit.visible = false;
								this.crossFruitPool.push(crossFruit);
							}
						});
					}
				});
			}
			createCrossFruit() {
				let crossFruit = this.add.image(0, 720, 'CrossRed');
				crossFruit.visible = false;
				crossFruit.setOrigin(0.5, 0.5);
				return crossFruit;
			}
			update(time, delta) {
				if (this.screenShake) {
					this.screenShake.update(this.third.camera);
					if (this.startLedakan) {
						this.timerStartLedakan -= delta;
						if (this.timerStartLedakan <= 0) {
							this.screenShake.shake(
								this.third.camera,
								new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Vector3(
									0.0625,
									0.0625,
									0
								),
								100
							);
							this.timerStartLedakan = 100;
						}
					}
				}
				if (this.gameState == -1) {
					if (this.fruitFactory) {
						this.fruitFactory.positionWaterMelonUI();
						this.fruitFactory.positionFruitUI('KWUI', 5.5, 0, 0.85);
						this.gameState = 0;
						this.createRingFruitTweenAppear(
							this.planeRing,
							this.planeShadowRing,
							this.fruitFactory.getFruit('WMUI'),
							0.85
						);
						this.createRingFruitTweenAppear(
							this.planeRingSettings,
							this.planeShadowRingSettings,
							this.fruitFactory.getFruit('KWUI'),
							0.85
						);
					}
				} else if (this.gameState == 0) {
					if (this.blade) {
						this.blade.updateBlade(delta);
						if (!this.holdCheckUI && !this.homeAnimation) {
							let resHit = this.blade.checkFruitsUI(this.fruitFactory);
							if (resHit == 'WMUI') {
								this.blade.changeCurrentScreen('GameScreen');
								this.moveToGameplay();
							} else if (resHit == 'KWUI') {
								this.blade.changeCurrentScreen('SettingScreen');
								this.moveToSettings();
							} else if (resHit == 'BUI') {
								this.blade.changeCurrentScreen('HomeScreen');
								this.exitSettings();
							}
							if (this.fruitFactory) {
								this.fruitFactory.update(delta);
							}
							if (this.showCredit) {
								this.delayScrollCredit -= delta;
								if (this.delayScrollCredit <= 0) {
									if (!this.holdCredit) {
										this.conCreditText.y -= (150 * delta) / 1000;
									}
									if (this.conCreditText.y <= -5900) {
										this.conCreditText.y += 5900;
									} else if (this.conCreditText.y > 0) {
										this.conCreditText.y -= 5900;
									}
								}
							}
						}
					}
				} else if (this.gameState == 1) {
					if (this.blade) {
						this.blade.updateBlade(delta);
						this.blade.checkFruits(this.fruitFactory);
					}
					if (this.fruitFactory) {
						this.fruitFactory.update(delta);
					}
				} else if (this.gameState == 2) {
					if (this.fruitFactory) {
						this.startTimer -= delta / 1000.0;
						if (this.startTimer <= 0 && !this.hitBomb) {
							let wave = this.getWave();
						}
						if (this.fruitFactory) {
							this.fruitFactory.update(delta);
						}
						if (this.blade) {
							this.blade.updateBlade(delta);
							let prevScore = this.gameData.score;
							let upScore = this.blade.checkFruits(this.fruitFactory);
							this.gameData.score += upScore;
							if (this.timerCombo > 0) {
								this.timerCombo -= delta;
								if (this.timerCombo <= 0) {
									this.timerCombo = 0;
									if (this.comboCount >= 3) {
										this.showCombo(this.comboCount, this.lastPosX, this.lastPosY);
									}
									this.comboCount = 0;
								}
							}
							if (upScore != 0) {
								if (this.comboCount == 0) {
									this.timerCombo = 300;
									this.comboCount = upScore;
								} else {
									this.timerCombo += 100;
									this.comboCount += upScore;
								}
							}
						}
						this.updateScore(delta);
						for (let i = 0; i < this.activeComboText.length; i++) {
							if (this.activeComboText[i].visible == false) {
								this.poolComboText.push(this.activeComboText[i]);
								this.activeComboText.splice(i, 1);
							}
						}
						for (let i = 0; i < this.activeCritical.length; i++) {
							if (this.activeCritical[i].visible == false) {
								this.poolCritical.push(this.activeCritical[i]);
								this.activeCritical.splice(i, 1);
							}
						}
					}
				} else if (this.gameState == 3) {
					if (this.fruitFactory) {
						this.fruitFactory.update(delta);
					}
					if (this.blade) {
						this.blade.updateBlade(delta);
					}
				} else if (this.gameState == 4) {
					if (this.fruitFactory) {
						this.fruitFactory.update(delta);
					}
					if (this.blade) {
						this.blade.updateBlade(delta);
						let resUI = this.blade.checkFruitsUI(this.fruitFactory);
						if (gameMode != GAMEMODE_TOURNAMENT) {
							if (resUI == 'AGUI') {
								this.blade.changeCurrentScreen('GameScreen');
								this.showAds('gameplay');
								this.hideResults();
							} else if (resUI == 'BUI') {
								this.blade.changeCurrentScreen('HomeScreen');
								this.showAds('homescreen');
								this.hideResults();
							}
						} else {
							if (resUI == 'AGUI') {
								this.replayGame();
							} else if (resUI == 'BUI') {
								this.moveToHomescreen();
							}
						}
					}
				} else if (this.gameState == 5) {
					if (!this.adsShowing) {
						this.timerAds += delta;
					}
					if (this.fruitFactory) {
						this.fruitFactory.update(delta);
					}
					if (this.blade) {
						this.blade.updateBlade(delta);
					}
					console.log(this.timerAds);
					if (this.timerAds >= 3000) {
						this.startShowAds = false;
						this.timerAds = 0;
						if (this.tipeAds == 'homescreen') {
							this.moveToHomescreen();
						} else if (this.tipeAds == 'gameplay') {
							this.moveToGameplay();
						}
					}
				}
			}
			updateScore(delta) {
				if (this.gameData.best < this.gameData.score) {
					this.gameData.best = this.gameData.score;
				}
				this.textBest.text = 'Best: ' + this.gameData.best;
				this.textBestGreen.text = 'Best: ' + this.gameData.best;
				if (this.gameData.best == this.gameData.score && this.gameData.best != 0) {
					this.textBest.visible = false;
					this.textBestGreen.visible = true;
				} else {
					this.textBest.visible = true;
					this.textBestGreen.visible = false;
				}
				if (this.gameData.displayScore != this.gameData.score) {
					let prevScore = this.gameData.displayScore;
					if (!this.iconScaleUp) {
						this.iconScaleUp = true;
						this.tweens.add({ targets: this.iconScore, scale: 0.43, duration: 100 });
					}
					let temp = this.gameData.displayScore;
					temp += delta / 100;
					if (temp > this.gameData.score) {
						temp = this.gameData.score;
					}
					this.gameData.displayScore = temp;
					this.textScore.text = '' + this.gameData.displayScore.toFixed(0);
					let curScore = this.gameData.displayScore;
					if (Math.floor(curScore / 100.0) > Math.floor(prevScore / 100.0)) {
						this.TryRestoreLife();
					}
				} else {
					if (this.iconScaleUp) {
						this.iconScaleUp = false;
						this.tweens.add({ targets: this.iconScore, scale: 0.4, duration: 100 });
					}
				}
			}
			showCombo(nCombo, posX, posY) {
				let comboText;
				if (this.poolComboText.length == 0) {
					comboText = new this.ComboText(this, 0, 0);
				} else {
					comboText = this.poolComboText[0];
					this.poolComboText.splice(0, 1);
				}
				if (nCombo >= 10) {
					if (!this.SFXMuted) {
						this.sound.play('Combo10');
					}
				} else {
					if (!this.SFXMuted) {
						this.sound.play('Combo' + nCombo);
					}
				}
				this.gameData.score += nCombo;
				comboText.x = posX;
				comboText.y = posY;
				comboText.activate(nCombo);
				this.activeComboText.push(comboText);
			}
			getWave() {
				let capableWave = [];
				let lastMinWave = 0;
				for (let i = 0; i < this.waveList.length; i++) {
					if (this.waveCounter >= this.waveList[i].minWave) {
						if (lastMinWave == this.waveList[i].minWave) {
							capableWave.push(this.waveList[i]);
						} else {
							lastMinWave = this.waveList[i].minWave;
							capableWave = [];
							capableWave.push(this.waveList[i]);
						}
					}
				}
				let idRand = Phaser.Math.Between(0, capableWave.length - 1);
				let waveUsed = capableWave[idRand];
				let totalDelay = 0;
				let counter = 0;
				let possibleSpawn = [-1.2, -0.6, 0.6, 1.2];
				for (let i = 0; i < waveUsed.fruitChance.length; i++) {
					let fruitToSpawn = waveUsed.fruitChance[i].fruits;
					let nFruit = Phaser.Math.Between(
						waveUsed.fruitChance[i].min,
						waveUsed.fruitChance[i].max
					);
					let delay = waveUsed.fruitChance[i].between;
					console.log(
						'spawning wave: ' +
							waveUsed.id +
							' on index: ' +
							i +
							' for ' +
							nFruit +
							' fruits, interval: ' +
							delay
					);
					for (let j = 0; j < nFruit; j++) {
						let toSpawn = fruitToSpawn[j % fruitToSpawn.length];
						let timeSpawn = j * delay * 1000;
						if (possibleSpawn.length == 0) {
							possibleSpawn = [-1.2, -0.6, 0.6, 1.2];
						}
						let idxX = Phaser.Math.Between(0, possibleSpawn.length - 1);
						let xUsed = possibleSpawn[idxX];
						possibleSpawn.splice(idxX, 1);
						if (timeSpawn == 0) {
							this.fruitFactory.spawnFruit(toSpawn, 10 - counter * 4, xUsed);
						} else {
							this.fruitFactory.scheduleSpawnFruit(toSpawn, 10 - counter * 4, xUsed, timeSpawn);
						}
						counter++;
					}
					if (totalDelay < nFruit * delay) {
						totalDelay = nFruit * delay;
					}
				}
				this.startTimer = waveUsed.delay + totalDelay + 2;
				console.log('next timer on: ' + this.startTimer);
				this.waveCounter++;
			}
			notifyBombHit(posX, posY) {
				this.hitBomb = true;
				this.glowLedakan.x = posX;
				this.glowLedakan.y = posY;
				this.tweens.add({
					targets: this.glowLedakan,
					scale: 200,
					duration: 300,
					delay: 1500,
					onStart: () => {
						this.glowLedakan.visible = true;
					},
					onComplete: () => {
						this.fruitFactory.clearBomb();
						this.tweens.add({
							targets: this.glowLedakan,
							duration: 500,
							delay: 500,
							alpha: 0,
							onComplete: () => {
								this.glowLedakan.visible = false;
								this.glowLedakan.scale = 0;
								this.glowLedakan.alpha = 1;
								this.hitBomb = false;
								this.showResult();
							}
						});
						let me = this;
						setTimeout(function () {
							me.startLedakan = false;
							me.third.camera.position.set(0, 0, 200);
						}, 800);
					}
				});
				this.startLedakan = true;
				this.timerStartLedakan = 0;
			}
			TryRestoreLife() {
				if (this.loseCount > 0) {
					this.loseCount--;
					if (!this.SFXMuted) {
						this.sound.play('UIExtraLife');
					}
					this.crossList[this.loseCount].setTexture('CrossBlue');
					let baseX = this.crossList[this.loseCount].x;
					let baseY = this.crossList[this.loseCount].y;
					let thisCross = this.crossList[this.loseCount];
					this.ring.visible = true;
					this.impact.visible = true;
					this.ring.alpha = 1;
					this.impact.alpha = 1;
					this.ring.x = baseX - this.crossList[this.loseCount].width / 4;
					this.ring.y = baseY + this.crossList[this.loseCount].height / 4;
					this.impact.x = baseX - this.crossList[this.loseCount].width / 4;
					this.impact.y = baseY + this.crossList[this.loseCount].height / 4;
					this.ring.scale = 1;
					this.impact.scale = 1;
					this.tweens.add({
						targets: [this.ring, this.impact],
						scale: 3,
						alpha: 0,
						duration: 200,
						onComplete: () => {
							this.ring.visible = false;
							this.impact.visible = false;
						}
					});
					this.tweens.timeline({
						targets: this.crossList[this.loseCount],
						loop: 2,
						tweens: [
							{ x: baseX - 6, duration: 50 },
							{ y: baseY - 6, duration: 50 },
							{ y: baseY + 6, duration: 50 },
							{ x: baseX + 6, duration: 50 }
						],
						onComplete: () => {
							thisCross.x = baseX;
							thisCross.y = baseY;
						}
					});
				}
			}
			loseLife(posX) {
				if (this.gameState == 2 && !this.hitBomb) {
					this.getCrossFruit(posX);
					if (!this.SFXMuted) {
						this.sound.play('UIGank');
					}
					this.crossList[this.loseCount].setTexture('CrossRed');
					let baseX = this.crossList[this.loseCount].x;
					let baseY = this.crossList[this.loseCount].y;
					let thisCross = this.crossList[this.loseCount];
					this.tweens.timeline({
						targets: this.crossList[this.loseCount],
						loop: 2,
						tweens: [
							{ x: baseX - 6, duration: 50 },
							{ y: baseY - 6, duration: 50 },
							{ y: baseY + 6, duration: 50 },
							{ x: baseX + 6, duration: 50 }
						],
						onComplete: () => {
							thisCross.x = baseX;
							thisCross.y = baseY;
						}
					});
					this.loseCount++;
					if (this.loseCount == 3) {
						this.showResult();
					}
				}
			}
			showResult() {
				pokiGamePlayStop();
				this.blade.changeCurrentScreen('ResultScreen');
				this.gameState = 3;
				this.textGameover.visible = true;
				this.textScoreGameover.text = '' + this.gameData.score;
				if (!this.SFXMuted) {
					this.sound.play('UIGameOver');
				}
				this.gameplayBgm.stop();
				this.tweens.add({
					targets: this.textGameover,
					scale: 1,
					ease: 'Back',
					easeParams: [1.5],
					duration: 1000,
					onComplete: () => {
						this.tweens.add({ targets: this.contGameplayUI, y: -200, duration: 500, delay: 500 });
						this.tweens.add({
							targets: this.textGameover,
							scale: 0,
							delay: 500,
							duration: 500,
							onComplete: () => {
								this.wholePopupGameover.visible = true;
								if (this.gameData.best == this.gameData.score) {
									this.newBestText.visible = true;
								} else {
									this.newBestText.visible = false;
								}
								this.wholePopupGameover.y = -500;
								this.tweens.add({
									targets: this.wholePopupGameover,
									y: 0,
									duration: 250,
									onComplete: () => {
										this.gameState = 4;
										this.planeRingPA.visible = true;
										this.planeShadowRingPA.visible = true;
										this.planeRingQuit.visible = true;
										this.planeShadowRingQuit.visible = true;
										this.buttonQuit.visible = true;
										this.buttonRetry.visible = true;
										this.fruitFactory.positionFruitUI('AGUI', -3, -3.5, 0.85);
										this.fruitFactory.positionFruitUI('BUI', 3, -3.5, 0.85);
										this.createRingFruitTweenAppear(
											this.planeRingPA,
											this.planeShadowRingPA,
											this.fruitFactory.getFruit('AGUI'),
											0.85
										);
										this.createRingFruitTweenAppear(
											this.planeRingQuit,
											this.planeShadowRingQuit,
											this.fruitFactory.getFruit('BUI'),
											0.65
										);
									}
								});
							}
						});
					}
				});
				callCommercialBreak();
			}
			exitSettings() {
				this.showCredit = false;
				this.createRingTweenDisappear(this.planeRingBack, this.planeShadowRingBack);
				this.tweens.add({ targets: this.audioPopup, x: 800, duration: 1000 });
				this.tweens.add({
					targets: [this.creditsPopup, this.textVersi],
					x: -2000,
					duration: 1000,
					onComplete: () => {
						this.fruitFactory.resetWaterMelonUI('BUI');
						this.creditsPopup.visible = false;
						this.audioPopup.visible = false;
						this.textVersi.visible = false;
						this.moveToHomescreen();
					}
				});
			}
			moveToHomescreen() {
				this.resetGameplay();
				this.planeRingPA.visible = false;
				this.planeShadowRingPA.visible = false;
				this.planeRingQuit.visible = false;
				this.planeShadowRingQuit.visible = false;
				this.homeAnimation = true;
				this.fruitFactory.resetWaterMelonUI('AGUI');
				this.fruitFactory.resetWaterMelonUI('BUI');
				if (this.gameState != 0) {
					if (!this.BGMMuted) {
						this.homescreenBgm.play();
						this.tweens.add({
							targets: this.homescreenBgm,
							volume: 1,
							duration: 500,
							onComplete: () => {}
						});
					}
				}
				this.tweens.add({
					targets: this.wholePopupGameover,
					y: -500,
					duration: 500,
					onComplete: () => {
						this.gameState = -1;
						this.planeRing.visible = true;
						this.planeShadowRing.visible = true;
						this.planeRingSettings.visible = true;
						this.planeShadowRingSettings.visible = true;
						this.tweens.add({
							targets: this.topHomescreen,
							y: 0,
							duration: 500,
							onComplete: () => {
								this.homeAnimation = false;
							}
						});
						this.createRingFruitTweenAppear(
							this.planeRing,
							this.planeShadowRing,
							this.fruitFactory.getFruit('WMUI'),
							0.85
						);
						this.createRingFruitTweenAppear(
							this.planeRingSettings,
							this.planeShadowRingSettings,
							this.fruitFactory.getFruit('KWUI'),
							0.85
						);
					}
				});
				this.buttonClassic.visible = true;
				this.buttonSetting.visible = true;
				this.buttonBack.visible = false;
				this.buttonQuit.visible = false;
				this.buttonRetry.visible = false;
			}
			moveToSettings() {
				this.tweens.add({ targets: this.topHomescreen, y: -500, duration: 250 });
				this.creditsPopup.visible = true;
				this.audioPopup.visible = true;
				this.textVersi.visible = true;
				this.holdCheckUI = true;
				this.buttonClassic.visible = false;
				this.buttonSetting.visible = false;
				this.createRingFruitTweenDisappear(
					this.planeRing,
					this.planeShadowRing,
					this.fruitFactory.getFruit('WMUI')
				);
				this.createRingTweenDisappear(this.planeRingSettings, this.planeShadowRingSettings);
				this.creditsPopup.x = -2000;
				this.textVersi.x = -1550;
				this.tweens.add({ targets: this.textVersi, x: 450, duration: 500 });
				this.audioPopup.x = 800;
				this.tweens.add({
					targets: [this.creditsPopup, this.audioPopup],
					x: 0,
					duration: 500,
					onComplete: () => {
						this.fruitFactory.resetWaterMelonUI('KWUI');
						this.fruitFactory.resetWaterMelonUI('WMUI');
						this.delayScrollCredit = 1000;
						this.showCredit = true;
						this.holdCheckUI = false;
						this.planeRingBack.visible = true;
						this.planeShadowRingBack.visible = true;
						this.fruitFactory.positionFruitUI('BUI', 7.5, -3.5, 0.65);
						this.createRingFruitTweenAppear(
							this.planeRingBack,
							this.planeShadowRingBack,
							this.fruitFactory.getFruit('BUI'),
							0.65
						);
					}
				});
				this.buttonBack.visible = true;
			}
			moveToGameplay() {
				pokiGamePlayStarted();
				this.buttonClassic.visible = false;
				this.buttonSetting.visible = false;
				this.waveCounter = 0;
				this.hitBomb = false;
				this.gameState = 1;
				this.holdCheckUI = true;
				if (!this.BGMMuted) {
					this.gameplayBgm.play();
				}
				this.tweens.add({
					targets: this.homescreenBgm,
					volume: 0,
					duration: 500,
					onComplete: () => {
						this.homescreenBgm.stop();
						this.holdCheckUI = false;
						if (!this.SFXMuted) {
							this.sound.play('UIGameStart');
						}
					}
				});
				this.createRingFruitTweenDisappear(
					this.planeRingSettings,
					this.planeShadowRingSettings,
					this.fruitFactory.getFruit('KWUI')
				);
				this.createRingTweenDisappear(this.planeRing, this.planeShadowRing);
				this.textReady.visible = true;
				this.textBest.visible = true;
				this.textBestGreen.visible = false;
				this.tweens.add({ targets: this.topHomescreen, y: -500, duration: 250 });
				this.tweens.add({
					targets: this.textReady,
					y: '-=250',
					alpha: 1,
					duration: 500,
					delay: 500,
					onComplete: () => {
						this.tweens.add({ targets: this.contGameplayUI, y: 0, duration: 500 });
						this.tweens.add({
							targets: this.textReady,
							y: '-=250',
							alpha: 0,
							duration: 250,
							delay: 200,
							onComplete: () => {
								this.textGo.visible = true;
								this.fruitFactory.resetWaterMelonUI('WMUI');
								this.fruitFactory.resetWaterMelonUI('KWUI');
								this.tweens.add({
									targets: this.textGo,
									y: '-=250',
									alpha: 1,
									duration: 250,
									onComplete: () => {
										this.tweens.add({
											targets: this.textGo,
											y: '-=250',
											alpha: 0,
											duration: 250,
											delay: 200,
											onComplete: () => {
												this.gameState = 2;
											}
										});
									}
								});
							}
						});
					}
				});
			}
			createWoodBorder(x, y, w, h, px, py) {
				let contBorder = this.add.container(x + w * -px, y + h * -py);
				let topLeft = this.add.image(0, 0, 'BorderWoodTL');
				topLeft.setOrigin(0, 0);
				let topRight = this.add.image(w - 70, 0, 'BorderWoodTR');
				topRight.setOrigin(0, 0);
				let top = this.add.image(70, 0, 'BorderWoodT');
				top.setOrigin(0, 0);
				top.scaleX = (w - 140) / 116;
				let bottomLeft = this.add.image(0, h - 70, 'BorderWoodBL');
				bottomLeft.setOrigin(0, 0);
				let bottomRight = this.add.image(w - 70, h - 70, 'BorderWoodBR');
				bottomRight.setOrigin(0, 0);
				let bottom = this.add.image(70, h - 70, 'BorderWoodB');
				bottom.setOrigin(0, 0);
				bottom.scaleX = (w - 140) / 116;
				let left = this.add.image(0, 70, 'BorderWoodL');
				let right = this.add.image(w - 70, 70, 'BorderWoodR');
				left.scaleY = (h - 140) / 116;
				right.scaleY = (h - 140) / 116;
				left.setOrigin(0, 0);
				right.setOrigin(0, 0);
				contBorder.add(topLeft);
				contBorder.add(topRight);
				contBorder.add(top);
				contBorder.add(bottomLeft);
				contBorder.add(bottomRight);
				contBorder.add(bottom);
				contBorder.add(left);
				contBorder.add(right);
				contBorder.setScale(1.5);
				return contBorder;
			}
			resetGameplay() {
				this.loseCount = 0;
				this.contGameplayUI.y = -200;
				this.textReady.y = 560;
				this.textGo.y = 560;
				this.crossList[0].setTexture('CrossBlue');
				this.crossList[1].setTexture('CrossBlue');
				this.crossList[2].setTexture('CrossBlue');
				this.gameData.score = 0;
				this.gameData.displayScore = 0;
				this.textScore.text = '' + this.gameData.score;
			}
			hideResults() {
				this.resetGameplay();
				this.gameState = 5;
				if (this.tipeAds == 'gameplay') {
					this.createRingTweenDisappear(this.planeRingPA, this.planeShadowRingPA);
					this.createRingFruitTweenDisappear(
						this.planeRingQuit,
						this.planeShadowRingQuit,
						this.fruitFactory.getFruit('BUI')
					);
				} else {
					this.createRingFruitTweenDisappear(
						this.planeRingPA,
						this.planeShadowRingPA,
						this.fruitFactory.getFruit('AGUI')
					);
					this.createRingTweenDisappear(this.planeRingQuit, this.planeShadowRingQuit);
				}
				this.tweens.add({
					targets: this.wholePopupGameover,
					y: -500,
					duration: 250,
					onComplete: () => {
						this.fruitFactory.resetWaterMelonUI('BUI');
					}
				});
			}
			replayGame() {
				this.resetGameplay();
				this.createRingTweenDisappear(this.planeRingPA, this.planeShadowRingPA);
				this.createRingFruitTweenDisappear(
					this.planeRingQuit,
					this.planeShadowRingQuit,
					this.fruitFactory.getFruit('BUI')
				);
				this.tweens.add({
					targets: this.wholePopupGameover,
					y: -500,
					duration: 250,
					onComplete: () => {
						this.fruitFactory.resetWaterMelonUI('BUI');
					}
				});
			}
			toogleMusic() {
				this.BGMMuted = !this.BGMMuted;
				if (this.BGMMuted) {
					this.buttonBGM.setTexture('ButtonMusicMute');
					this.homescreenBgm.stop();
				} else {
					this.buttonBGM.setTexture('ButtonMusic');
					this.homescreenBgm.play();
				}
			}
			toogleSFX() {
				this.SFXMuted = !this.SFXMuted;
				if (this.SFXMuted) {
					this.buttonSFX.setTexture('ButtonSFXMute');
				} else {
					this.buttonSFX.setTexture('ButtonSFX');
				}
			}
			OnPointerDown(pointer) {
				this.startMovingBlade = true;
			}
			OnPointerMove(pointer) {
				if (this.startMovingBlade && !this.hitBomb && !this.holdCredit) {
					this.blade.pushPoint({ x: pointer.x, y: pointer.y, time: 6.0, first: true });
				}
			}
			OnPointerUp(pointer) {
				this.startMovingBlade = false;
			}
			showAds(tipe) {
				this.tipeAds = tipe;
				if (!this.startShowAds) {
					this.startShowAds = true;
					this.timerAds = 0;
					this.adsShowing = false;
					console.log('showAds ' + tipe);
					this.startShowAds = false;
					if (this.tipeAds == 'homescreen') {
						this.moveToHomescreen();
					} else if (this.tipeAds == 'gameplay') {
						this.moveToGameplay();
					}
				}
			}
		}
		function pokiGameLoadingFinished() {
			PokiSDK.gameLoadingFinished();
			console.log('*** Poki - Game Loading Finished');
		}
		function pokiGamePlayStarted() {
			PokiSDK.gameplayStart();
			console.log('*** Poki - Player Started the Game');
		}
		function pokiGamePlayStop() {
			PokiSDK.gameplayStop();
			console.log('*** Poki - Game Play Stop');
		}
		function pokiCommercialBreak() {
			console.log('*** Poki - CommercialBreak started');
			PokiSDK.commercialBreak(() => {}).then(() => {
				console.log('*** Poki - Commercial break finished, proceeding to game');
			});
		}
		function callCommercialBreak() {
			setTimeout(function () {
				pokiCommercialBreak();
			}, 2500);
		}
		function pokiRewardBread() {
			console.log('*** Poki - Reward Break Started');
			PokiSDK.rewardedBreak(() => {}).then((success) => {
				if (success) {
				} else {
				}
				console.log('*** Poki - Rewarded break finished, proceeding to game');
			});
			function callRewardBreak() {
				setTimeout(function () {
					pokiRewardBread();
				}, 2500);
			}
		}
	},
	'./src/scripts/scenes/preLoadingScene.js': /*!***********************************************!*\
!*** ./src/scripts/scenes/preLoadingScene.js ***!
\***********************************************/ /*!exports provided: default*/ function (
		module,
		__webpack_exports__,
		__webpack_require__
	) {
		'use strict';
		__webpack_require__.r(__webpack_exports__);
		(function (global) {
			__webpack_require__.d(__webpack_exports__, 'default', function () {
				return PreloadingScene;
			});
			class PreloadingScene extends Phaser.Scene {
				constructor() {
					super({ key: 'PreloadingScene' });
				}
				preload() {
					this.load.image('splash', 'assets/splash/splash screen.png');
					this.load.image('loadBarIsi', 'assets/splash/LoadingBar.png');
					this.load.image('loadingText', 'assets/splash/loading text.png');
					checkMode();
					console.log('gameMode ' + gameMode);
				}
				create() {
					this.scene.start('PreloadScene');
				}
			}
			global.gameMode = 'normal';
			global.GAMEMODE_TOURNAMENT = 'tournament';
			global.GAMEMODE_NORMAL = 'normal';
			function checkMode() {
				var link = window.location.href;
				if (link.includes('#tournament')) {
					gameMode = GAMEMODE_TOURNAMENT;
				} else {
					gameMode = GAMEMODE_NORMAL;
				}
			}
		}).call(
			this,
			__webpack_require__(
				/*!./../../../node_modules/webpack/buildin/global.js*/ './node_modules/webpack/buildin/global.js'
			)
		);
	},
	'./src/scripts/scenes/preloadScene.js': /*!********************************************!*\
!*** ./src/scripts/scenes/preloadScene.js ***!
\********************************************/ /*!exports provided: default*/ function (
		module,
		__webpack_exports__,
		__webpack_require__
	) {
		'use strict';
		__webpack_require__.r(__webpack_exports__);
		__webpack_require__.d(__webpack_exports__, 'default', function () {
			return PreloadScene;
		});
		class PreloadScene extends Phaser.Scene {
			constructor() {
				super({ key: 'PreloadScene' });
			}
			init() {
				this.finishFont = true;
				this.finishBar = false;
			}
			preload() {
				this.add.image(640, 384, 'splash');
				this.cameras.main.setBackgroundColor('#000000');
				var progressBar = this.add.graphics();
				var progressBox = this.add.graphics();
				var htext = 768 - 70;
				var hloading = htext + 20;
				var wbar = 500,
					persen = wbar - 2;
				var rect = new Phaser.Geom.Rectangle(1280 / 2 - wbar / 2, hloading, wbar, 40);
				var progressBox = this.add.graphics({ fillStyle: { color: 0x362f2d, alpha: 0 } });
				let isiBar = this.add.image(rect.x, rect.y + 1, 'loadBarIsi');
				isiBar.setOrigin(0, 0);
				progressBox.lineStyle(5, 0x290a07);
				progressBox.lineBetween(rect.x - 3, rect.y, rect.x + rect.width + 3, rect.y);
				progressBox.lineBetween(rect.x, rect.y, rect.x, rect.y + rect.height - 5);
				progressBox.lineBetween(
					rect.x - 3,
					rect.y + rect.height - 5,
					rect.x + rect.width + 3,
					rect.y + rect.height - 5
				);
				progressBox.lineBetween(
					rect.x + rect.width,
					rect.y,
					rect.x + rect.width,
					rect.y + rect.height - 5
				);
				var loadingText = this.add.image(rect.x + wbar / 2, htext + 18, 'loadingText');
				loadingText.setOrigin(0.5, 1);
				this.load.on(
					'loaderror',
					function (file) {
						this.registry.destroy();
						this.events.off();
						this.scene.restart();
					},
					this
				);
				this.load.on('progress', function (value) {
					progressBar.clear();
					progressBar.fillStyle(0xda4c00, 1);
					progressBar.fillRect(rect.x + 2, hloading, wbar, 16);
					progressBar.fillStyle(0x944d00, 1);
					progressBar.fillRect(rect.x + 2, hloading + 16, wbar, 16);
					isiBar.setScale((value * wbar) / 32.0, 1);
				});
				this.load.on(
					'complete',
					function () {
						this.finishBar = true;
					},
					this
				);
				this.load.audio('AmbArenaClassicLP', 'assets/sound/AmbArenaClassicLP.mp3');
				this.load.audio('MusicMenu', 'assets/sound/MusicMenu.mp3');
				this.load.audio('BladeRegularSwipe01', 'assets/sound/BladeRegularSwipe01.mp3');
				this.load.audio('BladeRegularSwipe02', 'assets/sound/BladeRegularSwipe02.mp3');
				this.load.audio('BladeRegularSwipe03', 'assets/sound/BladeRegularSwipe03.mp3');
				this.load.audio('BladeRegularSwipe04', 'assets/sound/BladeRegularSwipe04.mp3');
				this.load.audio('BladeRegularSwipe05', 'assets/sound/BladeRegularSwipe05.mp3');
				this.load.audio('BladeRegularSwipe06', 'assets/sound/BladeRegularSwipe06.mp3');
				this.load.audio('BladeRegularSwipe07', 'assets/sound/BladeRegularSwipe07.mp3');
				this.load.audio('Combo3', 'assets/sound/UICombo3Fruit.mp3');
				this.load.audio('Combo4', 'assets/sound/UICombo4Fruit.mp3');
				this.load.audio('Combo5', 'assets/sound/UICombo5Fruit.mp3');
				this.load.audio('Combo6', 'assets/sound/UICombo6Fruit.mp3');
				this.load.audio('Combo7', 'assets/sound/UICombo7Fruit.mp3');
				this.load.audio('Combo8', 'assets/sound/UICombo8Fruit.mp3');
				this.load.audio('Combo9', 'assets/sound/UICombo9Fruit.mp3');
				this.load.audio('Combo10', 'assets/sound/UICombo10FruitPlus.mp3');
				this.load.audio('UICritical', 'assets/sound/UICritical.mp3');
				this.load.audio('BombFuseLP', 'assets/sound/BombFuseLP.mp3');
				this.load.audio('BombLaunch', 'assets/sound/BombLaunch.mp3');
				this.load.audio('BombExplodeGameOver', 'assets/sound/BombExplodeGameOver.mp3');
				this.load.audio('FruitImpactApple', 'assets/sound/FruitImpactApple.mp3');
				this.load.audio('FruitImpactBigHollow', 'assets/sound/FruitImpactBigHollow.mp3');
				this.load.audio('FruitImpactBigWet01', 'assets/sound/FruitImpactBigWet01.mp3');
				this.load.audio('FruitImpactBigWet02', 'assets/sound/FruitImpactBigWet02.mp3');
				this.load.audio('FruitImpactBigWet03', 'assets/sound/FruitImpactBigWet03.mp3');
				this.load.audio('FruitImpactMediumDry', 'assets/sound/FruitImpactMediumDry.mp3');
				this.load.audio('FruitImpactMediumWet01', 'assets/sound/FruitImpactMediumWet01.mp3');
				this.load.audio('FruitImpactMediumWet02', 'assets/sound/FruitImpactMediumWet02.mp3');
				this.load.audio('FruitImpactMediumWet03', 'assets/sound/FruitImpactMediumWet03.mp3');
				this.load.audio('FruitImpactSmallWet01', 'assets/sound/FruitImpactSmallWet01.mp3');
				this.load.audio('FruitImpactSmallWet02', 'assets/sound/FruitImpactSmallWet02.mp3');
				this.load.audio('FruitImpactSmallWet03', 'assets/sound/FruitImpactSmallWet03.mp3');
				this.load.audio('FruitLaunch', 'assets/sound/FruitLaunch.mp3');
				this.load.audio('UIGank', 'assets/sound/UIGank.mp3');
				this.load.audio('UIGameOver', 'assets/sound/UIGameOver.mp3');
				this.load.audio('UIGameStart', 'assets/sound/UIGameStart.mp3');
				this.load.audio('UIExtraLife', 'assets/sound/UIExtraLife.mp3');
				this.load.image('JuiceRed', 'assets/textures/particles/JuiceRed.png');
				this.load.image('JuiceGreen', 'assets/textures/particles/JuiceGreen.png');
				this.load.image('JuiceDragonfruit', 'assets/textures/particles/JuiceDragonfruit.png');
				this.load.image('JuiceMango', 'assets/textures/particles/JuiceMango.png');
				this.load.image('JuiceOrange', 'assets/textures/particles/JuiceOrange.png');
				this.load.image('JuicePineapple', 'assets/textures/particles/JuicePineapple.png');
				this.load.image('StarCritical', 'assets/textures/particles/StarCritical.png');
				this.load.image('SliceDiamondNeutral', 'assets/effects/SliceDiamondNeutral.png');
				this.load.image('SliceDiamondCritical', 'assets/effects/SliceDiamondCritical.png');
				this.load.image('FruitSplash', 'assets/effects/FruitSplash.png');
				this.load.image('GOText', 'assets/UI/gameover text.png');
				this.load.image('HUDWatermelon', 'assets/UI/HUDWatermelon.png');
				this.load.image('CrossBlue', 'assets/UI/CrossBlue.png');
				this.load.image('CrossRed', 'assets/UI/CrossRed.png');
				this.load.image('HeaderWood', 'assets/UI/HeaderWood.png');
				this.load.image('blackAreaforTitle', 'assets/UI/blackAreaforTitle.png');
				this.load.image('LogoFruit', 'assets/UI/LogoFruit.png');
				this.load.image('LogoNinja', 'assets/UI/LogoNinja.png');
				this.load.image('ScrollLockBoard', 'assets/UI/ParchmentBackingSmall.png');
				this.load.image('ImpactClassic', 'assets/effects/ImpactClassic.png');
				this.load.image('Ring', 'assets/effects/Ring01.png');
				this.load.image('Glow', 'assets/effects/Glow.png');
				this.load.image('ParchmentBackingLarge', 'assets/UI/ParchmentBackingLarge.png');
				this.load.image('SenseiHead', 'assets/UI/SenseiHead.png');
				this.load.image('BorderWood', 'assets/UI/BorderWood.png');
				this.load.image('BorderWoodTL', 'assets/UI/BorderWoodTopLeft.png');
				this.load.image('BorderWoodT', 'assets/UI/BorderWoodTop.png');
				this.load.image('BorderWoodTR', 'assets/UI/BorderWoodTopRight.png');
				this.load.image('BorderWoodL', 'assets/UI/BorderWoodLeft.png');
				this.load.image('BorderWoodR', 'assets/UI/BorderWoodRight.png');
				this.load.image('BorderWoodBL', 'assets/UI/BorderWoodBottomLeft.png');
				this.load.image('BorderWoodB', 'assets/UI/BorderWoodBottom.png');
				this.load.image('BorderWoodBR', 'assets/UI/BorderWoodBottomRight.png');
				this.load.image('BackingPaper', 'assets/UI/BackingPaper.png');
				this.load.image('ButtonSFX', 'assets/UI/ButtonSFX.png');
				this.load.image('ButtonSFXMute', 'assets/UI/ButtonSFXMute.png');
				this.load.image('ButtonMusic', 'assets/UI/ButtonMusic.png');
				this.load.image('ButtonMusicMute', 'assets/UI/ButtonMusicMute.png');
				this.load.image('ButtonClassic', 'assets/UI/circle2.png');
				this.load.image('MediumButton', 'assets/UI/medium_button.png');
				this.load.image('SmallButton', 'assets/UI/small_button.png');
				this.load.image('MediumSmallButton', 'assets/UI/medium_small_button.png');
				initializePokiSDK();
			}
			create() {
				let me = this;
				this.once = false;
			}
			update() {
				if (this.finishFont && this.finishBar && !this.once) {
					this.once = true;
					this.scene.launch('MainScene');
				}
			}
		}
		function initializePokiSDK() {
			PokiSDK.init()
				.then(() => {
					console.log('*** Poki - SDK successfully initialized');
					pokiGameLoadingFinished();
					setTimeout(function () {
						pokiRewardBread();
					}, 2500);
				})
				.catch(() => {
					console.log('*** Poki - SDK Initialized, but the user likely has adblock');
				});
		}
	},
	'./src/scripts/utils/BombSmoke.js': /*!****************************************!*\
!*** ./src/scripts/utils/BombSmoke.js ***!
\****************************************/ /*!exports provided: default*/ function (
		module,
		__webpack_exports__,
		__webpack_require__
	) {
		'use strict';
		__webpack_require__.r(__webpack_exports__);
		__webpack_require__.d(__webpack_exports__, 'default', function () {
			return BombTrail;
		});
		var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
			/*!@enable3d/phaser-extension*/ './node_modules/@enable3d/phaser-extension/dist/index.js'
		);
		var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
			_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__
		);
		const _VS = `
	uniform float pointMultiplier;

	attribute float size;
	attribute float angle;
	attribute vec4 colour;

	varying vec4 vColour;
	varying vec2 vAngle;

	void main() {
	  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

	  gl_Position = projectionMatrix * mvPosition;
	  gl_PointSize = size * pointMultiplier / gl_Position.w;

	  vAngle = vec2(cos(angle), sin(angle));
	  vColour = colour;
	}`;
		const _FS = `

	uniform sampler2D diffuseTexture;

	varying vec4 vColour;
	varying vec2 vAngle;

	void main() {
	  vec2 coords = (gl_PointCoord - 0.5) * mat2(vAngle.x, vAngle.y, -vAngle.y, vAngle.x) + 0.5;
	  gl_FragColor = texture2D(diffuseTexture, coords) * vColour;
	}`;
		class BombTrail {
			constructor(params) {
				const uniforms = {
					diffuseTexture: { value: params.texturePS },
					pointMultiplier: { value: 6 }
				};
				this._material = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].ShaderMaterial({
					uniforms: uniforms,
					vertexShader: _VS,
					fragmentShader: _FS,
					blending: _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].NormalBlending,
					depthTest: true,
					depthWrite: false,
					transparent: true,
					vertexColors: true
				});
				this.curX = 0;
				this.curY = 0;
				this.on = false;
				this.emitEvery = 0.1;
				this._camera = params.camera;
				this._particles = [];
				this._geometry = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].BufferGeometry();
				this._geometry.setAttribute(
					'position',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute([], 3)
				);
				this._geometry.setAttribute(
					'size',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute([], 1)
				);
				this._geometry.setAttribute(
					'colour',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute([], 4)
				);
				this._geometry.setAttribute(
					'angle',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute([], 1)
				);
				this._points = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Points(
					this._geometry,
					this._material
				);
				params.parent.add(this._points);
				const LinearSpline = __webpack_require__(
					/*!./../utils/LinearSpline.js*/ './src/scripts/utils/LinearSpline.js'
				).default;
				this._alphaSpline = new LinearSpline((t, a, b) => {
					return a + t * (b - a);
				});
				this._alphaSpline.AddPoint(0.0, 1.0);
				this._alphaSpline.AddPoint(1.0, 0.0);
				this._colourSpline = new LinearSpline((t, a, b) => {
					const c = a.clone();
					return c.lerp(b, t);
				});
				this._colourSpline.AddPoint(
					0.0,
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Color(0xffffff)
				);
				this._colourSpline.AddPoint(
					1.0,
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Color(0xffffff)
				);
				this._sizeSpline = new LinearSpline((t, a, b) => {
					return a + t * (b - a);
				});
				this._sizeSpline.AddPoint(0.0, 1.0);
				this._sizeSpline.AddPoint(1.0, 0.5);
				this._UpdateGeometry();
			}
			_AddParticles(timeElapsed) {
				if (!this.gdfsghk) {
					this.gdfsghk = 0.0;
				}
				this.gdfsghk += timeElapsed;
				if (this.gdfsghk >= this.emitEvery) {
					this.gdfsghk = 0;
					const life = Math.random() * 0.2 + 0.3;
					this._particles.push({
						position: new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Vector3(
							this.curX,
							this.curY,
							3
						),
						size: 10.0,
						colour: new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Color(),
						alpha: 1.0,
						life: life,
						maxLife: life,
						rotation: -Math.PI,
						velocity: new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Vector3(
							0.25,
							0.25,
							0
						)
					});
				}
			}
			_UpdateGeometry() {
				const positions = [];
				const sizes = [];
				const colours = [];
				const angles = [];
				for (let p of this._particles) {
					positions.push(p.position.x, p.position.y, p.position.z);
					colours.push(p.colour.r, p.colour.g, p.colour.b, p.alpha);
					sizes.push(p.currentSize);
					angles.push(p.rotation);
				}
				this._geometry.setAttribute(
					'position',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute(positions, 3)
				);
				this._geometry.setAttribute(
					'size',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute(sizes, 1)
				);
				this._geometry.setAttribute(
					'colour',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute(colours, 4)
				);
				this._geometry.setAttribute(
					'angle',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute(angles, 1)
				);
				this._geometry.attributes.position.needsUpdate = true;
				this._geometry.attributes.size.needsUpdate = true;
				this._geometry.attributes.colour.needsUpdate = true;
				this._geometry.attributes.angle.needsUpdate = true;
			}
			_UpdateParticles(timeElapsed) {
				for (let p of this._particles) {
					p.life -= timeElapsed;
				}
				this._particles = this._particles.filter((p) => {
					return p.life > 0.0;
				});
				for (let p of this._particles) {
					const t = 1.0 - p.life / p.maxLife;
					p.rotation += timeElapsed * 0.5;
					p.alpha = this._alphaSpline.Get(t);
					p.currentSize = p.size * this._sizeSpline.Get(t);
					p.colour.copy(this._colourSpline.Get(t));
					p.position.add(p.velocity.clone().multiplyScalar(timeElapsed));
					const drag = p.velocity.clone();
					drag.multiplyScalar(timeElapsed * 0.1);
					drag.x = Math.sign(p.velocity.x) * Math.min(Math.abs(drag.x), Math.abs(p.velocity.x));
					drag.y = Math.sign(p.velocity.y) * Math.min(Math.abs(drag.y), Math.abs(p.velocity.y));
					drag.z = Math.sign(p.velocity.z) * Math.min(Math.abs(drag.z), Math.abs(p.velocity.z));
					p.velocity.sub(drag);
				}
				this._particles.sort((a, b) => {
					const d1 = this._camera.position.distanceTo(a.position);
					const d2 = this._camera.position.distanceTo(b.position);
					if (d1 > d2) {
						return -1;
					}
					if (d1 < d2) {
						return 1;
					}
					return 0;
				});
			}
			Step(timeElapsed) {
				if (this.on) {
					this._AddParticles(timeElapsed);
				}
				this._UpdateParticles(timeElapsed);
				this._UpdateGeometry();
			}
			setPosition(posX, posY) {
				this.curX = posX;
				this.curY = posY;
			}
			setOff() {
				this.on = false;
			}
			setOn() {
				this.on = true;
			}
		}
	},
	'./src/scripts/utils/BombTrail.js': /*!****************************************!*\
!*** ./src/scripts/utils/BombTrail.js ***!
\****************************************/ /*!exports provided: default*/ function (
		module,
		__webpack_exports__,
		__webpack_require__
	) {
		'use strict';
		__webpack_require__.r(__webpack_exports__);
		__webpack_require__.d(__webpack_exports__, 'default', function () {
			return BombTrail;
		});
		var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
			/*!@enable3d/phaser-extension*/ './node_modules/@enable3d/phaser-extension/dist/index.js'
		);
		var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
			_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__
		);
		const _VS = `
	uniform float pointMultiplier;

	attribute float size;
	attribute float angle;
	attribute vec4 colour;

	varying vec4 vColour;
	varying vec2 vAngle;

	void main() {
	  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

	  gl_Position = projectionMatrix * mvPosition;
	  gl_PointSize = size * pointMultiplier / gl_Position.w;

	  vAngle = vec2(cos(angle), sin(angle));
	  vColour = colour;
	}`;
		const _FS = `

	uniform sampler2D diffuseTexture;

	varying vec4 vColour;
	varying vec2 vAngle;

	void main() {
	  vec2 coords = (gl_PointCoord - 0.5) * mat2(vAngle.x, vAngle.y, -vAngle.y, vAngle.x) + 0.5;
	  gl_FragColor = texture2D(diffuseTexture, coords) * vColour;
	}`;
		class BombTrail {
			constructor(params) {
				const uniforms = {
					diffuseTexture: { value: params.texturePS },
					pointMultiplier: { value: 6 }
				};
				this._material = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].ShaderMaterial({
					uniforms: uniforms,
					vertexShader: _VS,
					fragmentShader: _FS,
					blending: _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].NormalBlending,
					depthTest: true,
					depthWrite: false,
					transparent: true,
					vertexColors: true
				});
				this.curX = 0;
				this.curY = 0;
				this.on = false;
				this._camera = params.camera;
				this._particles = [];
				this._geometry = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].BufferGeometry();
				this._geometry.setAttribute(
					'position',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute([], 3)
				);
				this._geometry.setAttribute(
					'size',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute([], 1)
				);
				this._geometry.setAttribute(
					'colour',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute([], 4)
				);
				this._geometry.setAttribute(
					'angle',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute([], 1)
				);
				this._points = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Points(
					this._geometry,
					this._material
				);
				params.parent.add(this._points);
				const LinearSpline = __webpack_require__(
					/*!./../utils/LinearSpline.js*/ './src/scripts/utils/LinearSpline.js'
				).default;
				this._alphaSpline = new LinearSpline((t, a, b) => {
					return a + t * (b - a);
				});
				this._alphaSpline.AddPoint(0.0, 1.0);
				this._alphaSpline.AddPoint(1.0, 1.0);
				this._colourSpline = new LinearSpline((t, a, b) => {
					const c = a.clone();
					return c.lerp(b, t);
				});
				this._colourSpline.AddPoint(
					0.0,
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Color(0xffffff)
				);
				this._colourSpline.AddPoint(
					1.0,
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Color(0xfff425)
				);
				this._sizeSpline = new LinearSpline((t, a, b) => {
					return a + t * (b - a);
				});
				this._sizeSpline.AddPoint(0.0, 0.0);
				this._sizeSpline.AddPoint(0.5, 1.0);
				this._sizeSpline.AddPoint(1.0, 0.0);
				this._UpdateGeometry();
			}
			_AddParticles(timeElapsed) {
				if (!this.gdfsghk) {
					this.gdfsghk = 0.0;
				}
				this.gdfsghk += timeElapsed;
				const n = Math.floor(this.gdfsghk * 20.0);
				this.gdfsghk -= n / 20.0;
				for (let i = 0; i < n; i++) {
					const life = 0.2;
					let sudut = Math.random() * 2.0 * Math.PI;
					let speed = Math.random() * 1.5 + 0.5;
					sudut = sudut + 0.523;
					this._particles.push({
						position: new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Vector3(
							this.curX,
							this.curY,
							10
						),
						size: Math.random() * 6.0 + 4.8,
						colour: new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Color(),
						alpha: 1.0,
						life: life,
						maxLife: life,
						rotation: sudut,
						velocity: new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Vector3(
							Math.cos(-sudut) * speed,
							Math.sin(-sudut) * speed,
							Math.random() * 2.0 - 1.0
						)
					});
				}
			}
			_UpdateGeometry() {
				const positions = [];
				const sizes = [];
				const colours = [];
				const angles = [];
				for (let p of this._particles) {
					positions.push(p.position.x, p.position.y, p.position.z);
					colours.push(p.colour.r, p.colour.g, p.colour.b, p.alpha);
					sizes.push(p.currentSize);
					angles.push(p.rotation);
				}
				this._geometry.setAttribute(
					'position',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute(positions, 3)
				);
				this._geometry.setAttribute(
					'size',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute(sizes, 1)
				);
				this._geometry.setAttribute(
					'colour',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute(colours, 4)
				);
				this._geometry.setAttribute(
					'angle',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute(angles, 1)
				);
				this._geometry.attributes.position.needsUpdate = true;
				this._geometry.attributes.size.needsUpdate = true;
				this._geometry.attributes.colour.needsUpdate = true;
				this._geometry.attributes.angle.needsUpdate = true;
			}
			_UpdateParticles(timeElapsed) {
				for (let p of this._particles) {
					p.life -= timeElapsed;
				}
				this._particles = this._particles.filter((p) => {
					return p.life > 0.0;
				});
				for (let p of this._particles) {
					const t = 1.0 - p.life / p.maxLife;
					p.alpha = this._alphaSpline.Get(t);
					p.currentSize = p.size * this._sizeSpline.Get(t);
					p.colour.copy(this._colourSpline.Get(t));
					p.position.add(p.velocity.clone().multiplyScalar(timeElapsed));
					const drag = p.velocity.clone();
					drag.multiplyScalar(timeElapsed * 0.1);
					drag.x = Math.sign(p.velocity.x) * Math.min(Math.abs(drag.x), Math.abs(p.velocity.x));
					drag.y = Math.sign(p.velocity.y) * Math.min(Math.abs(drag.y), Math.abs(p.velocity.y));
					drag.z = Math.sign(p.velocity.z) * Math.min(Math.abs(drag.z), Math.abs(p.velocity.z));
					p.velocity.sub(drag);
				}
				this._particles.sort((a, b) => {
					const d1 = this._camera.position.distanceTo(a.position);
					const d2 = this._camera.position.distanceTo(b.position);
					if (d1 > d2) {
						return -1;
					}
					if (d1 < d2) {
						return 1;
					}
					return 0;
				});
			}
			Step(timeElapsed) {
				if (this.on) {
					this._AddParticles(timeElapsed);
				}
				this._UpdateParticles(timeElapsed);
				this._UpdateGeometry();
			}
			setPosition(posX, posY) {
				this.curX = posX;
				this.curY = posY;
			}
			setOff() {
				this.on = false;
			}
			setOn() {
				this.on = true;
			}
		}
	},
	'./src/scripts/utils/Button.js': /*!*************************************!*\
!*** ./src/scripts/utils/Button.js ***!
\*************************************/ /*!exports provided: default*/ function (
		module,
		__webpack_exports__,
		__webpack_require__
	) {
		'use strict';
		__webpack_require__.r(__webpack_exports__);
		__webpack_require__.d(__webpack_exports__, 'default', function () {
			return Button;
		});
		var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
			/*!@enable3d/phaser-extension*/ './node_modules/@enable3d/phaser-extension/dist/index.js'
		);
		var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
			_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__
		);
		class Button extends Phaser.GameObjects.Image {
			constructor(scene, x, y, texture, frame) {
				super(scene, x, y, texture, frame);
				this.setInteractive();
				this.clicked = false;
				this.focus = false;
				scene.add.existing(this);
				this.name = frame;
				this.on('pointerdown', this.animateClick, this);
			}
			animateClick() {
				if (this.defaultScaleX == undefined) {
					this.defaultScaleX = this.scaleX;
					this.defaultScaleY = this.scaleY;
				}
				if (this.clicked) return;
				this.clicked = true;
				this.scene.tweens.addCounter({
					from: 255,
					to: 204,
					duration: 100,
					onUpdate: (tween) => {
						const value = Math.floor(tween.getValue());
						this.setTint(Phaser.Display.Color.GetColor(value, value, value));
					}
				});
			}
			animateRelease() {
				if (!this.clicked) return;
				this.clicked = false;
				this.scene.tweens.addCounter({
					from: 204,
					to: 255,
					duration: 100,
					onUpdate: (tween) => {
						const value = Math.floor(tween.getValue());
						this.setTint(Phaser.Display.Color.GetColor(value, value, value));
					}
				});
			}
			setChild(child) {
				this.child = child;
			}
			setFocus(focus) {
				this.focus = focus;
				var imageKey = this.name;
				if (focus) imageKey = this.name + '_sel';
				this.setTexture('game_assets', imageKey);
			}
			pointerout() {
				var imageKey = this.texture.key;
				var last4Text = imageKey.substring(imageKey.length - 4, imageKey.length);
				if (last4Text == '_sel') {
					imageKey = this.texture.key;
					imageKey = imageKey.substring(0, imageKey.length - 4);
					this.setTexture('game_assets', imageKey);
					this.animateRelease();
				}
			}
			pointerover() {
				var imageKey = this.texture.key;
				var last4Text = imageKey.substring(imageKey.length - 4, imageKey.length);
				if (last4Text != '_sel') {
					this.setTexture('game_assets', this.texture.key + '_sel');
				}
			}
		}
	},
	'./src/scripts/utils/CriticalTrail.js': /*!********************************************!*\
!*** ./src/scripts/utils/CriticalTrail.js ***!
\********************************************/ /*!exports provided: default*/ function (
		module,
		__webpack_exports__,
		__webpack_require__
	) {
		'use strict';
		__webpack_require__.r(__webpack_exports__);
		__webpack_require__.d(__webpack_exports__, 'default', function () {
			return CriticalTrail;
		});
		var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
			/*!@enable3d/phaser-extension*/ './node_modules/@enable3d/phaser-extension/dist/index.js'
		);
		var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
			_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__
		);
		const _VS = `
	uniform float pointMultiplier;

	attribute float size;
	attribute float angle;
	attribute vec4 colour;

	varying vec4 vColour;
	varying vec2 vAngle;

	void main() {
	  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

	  gl_Position = projectionMatrix * mvPosition;
	  gl_PointSize = size * pointMultiplier / gl_Position.w;

	  vAngle = vec2(cos(angle), sin(angle));
	  vColour = colour;
	}`;
		const _FS = `

	uniform sampler2D diffuseTexture;

	varying vec4 vColour;
	varying vec2 vAngle;

	void main() {
	  vec2 coords = (gl_PointCoord - 0.5) * mat2(vAngle.x, vAngle.y, -vAngle.y, vAngle.x) + 0.5;
	  gl_FragColor = texture2D(diffuseTexture, coords) * vColour;
	}`;
		class CriticalTrail {
			constructor(params) {
				const uniforms = {
					diffuseTexture: { value: params.texturePS },
					pointMultiplier: { value: 6 }
				};
				this._material = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].ShaderMaterial({
					uniforms: uniforms,
					vertexShader: _VS,
					fragmentShader: _FS,
					blending: _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].NormalBlending,
					depthTest: true,
					depthWrite: false,
					transparent: true,
					vertexColors: true
				});
				this.curX = 0;
				this.curY = 0;
				this.on = false;
				this.emitEvery = 0.01;
				this._camera = params.camera;
				this._particles = [];
				this._geometry = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].BufferGeometry();
				this._geometry.setAttribute(
					'position',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute([], 3)
				);
				this._geometry.setAttribute(
					'size',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute([], 1)
				);
				this._geometry.setAttribute(
					'colour',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute([], 4)
				);
				this._geometry.setAttribute(
					'angle',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute([], 1)
				);
				this._points = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Points(
					this._geometry,
					this._material
				);
				params.parent.add(this._points);
				const LinearSpline = __webpack_require__(
					/*!./../utils/LinearSpline.js*/ './src/scripts/utils/LinearSpline.js'
				).default;
				this._alphaSpline = new LinearSpline((t, a, b) => {
					return a + t * (b - a);
				});
				this._alphaSpline.AddPoint(0.0, 1.0);
				this._alphaSpline.AddPoint(1.0, 1.0);
				this._colourSpline = new LinearSpline((t, a, b) => {
					const c = a.clone();
					return c.lerp(b, t);
				});
				this._colourSpline.AddPoint(
					0.0,
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Color(0x9ff1ff)
				);
				this._colourSpline.AddPoint(
					1.0,
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Color(0xffffff)
				);
				this._sizeSpline = new LinearSpline((t, a, b) => {
					return a + t * (b - a);
				});
				this._sizeSpline.AddPoint(0.0, 0.7);
				this._sizeSpline.AddPoint(0.5, 0.7);
				this._sizeSpline.AddPoint(1.0, 0.0);
				this._UpdateGeometry();
			}
			_AddParticles(timeElapsed) {
				if (!this.gdfsghk) {
					this.gdfsghk = 0.0;
				}
				this.gdfsghk += timeElapsed;
				if (this.gdfsghk >= this.emitEvery) {
					this.gdfsghk = 0;
					const life = 1.0;
					this._particles.push({
						position: new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Vector3(
							this.curX + (Math.random() * 2 - 1) * 0.05,
							this.curY + (Math.random() * 2 - 1) * 0.05,
							-30
						),
						size: 15.0,
						colour: new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Color(),
						alpha: 1.0,
						life: life,
						maxLife: life,
						rotation: Math.random() * 2.0 * Math.PI,
						velocity: new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Vector3(
							0,
							0,
							0
						)
					});
				}
			}
			_UpdateGeometry() {
				const positions = [];
				const sizes = [];
				const colours = [];
				const angles = [];
				for (let p of this._particles) {
					positions.push(p.position.x, p.position.y, p.position.z);
					colours.push(p.colour.r, p.colour.g, p.colour.b, p.alpha);
					sizes.push(p.currentSize);
					angles.push(p.rotation);
				}
				this._geometry.setAttribute(
					'position',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute(positions, 3)
				);
				this._geometry.setAttribute(
					'size',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute(sizes, 1)
				);
				this._geometry.setAttribute(
					'colour',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute(colours, 4)
				);
				this._geometry.setAttribute(
					'angle',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute(angles, 1)
				);
				this._geometry.attributes.position.needsUpdate = true;
				this._geometry.attributes.size.needsUpdate = true;
				this._geometry.attributes.colour.needsUpdate = true;
				this._geometry.attributes.angle.needsUpdate = true;
			}
			_UpdateParticles(timeElapsed) {
				for (let p of this._particles) {
					p.life -= timeElapsed;
				}
				this._particles = this._particles.filter((p) => {
					return p.life > 0.0;
				});
				for (let p of this._particles) {
					const t = 1.0 - p.life / p.maxLife;
					p.rotation += timeElapsed * 0.5;
					p.alpha = this._alphaSpline.Get(t);
					p.currentSize = p.size * this._sizeSpline.Get(t);
					p.colour.copy(this._colourSpline.Get(t));
					p.position.add(p.velocity.clone().multiplyScalar(timeElapsed));
					const drag = p.velocity.clone();
					drag.multiplyScalar(timeElapsed * 0.1);
					drag.x = Math.sign(p.velocity.x) * Math.min(Math.abs(drag.x), Math.abs(p.velocity.x));
					drag.y = Math.sign(p.velocity.y) * Math.min(Math.abs(drag.y), Math.abs(p.velocity.y));
					drag.z = Math.sign(p.velocity.z) * Math.min(Math.abs(drag.z), Math.abs(p.velocity.z));
					p.velocity.sub(drag);
				}
				this._particles.sort((a, b) => {
					const d1 = this._camera.position.distanceTo(a.position);
					const d2 = this._camera.position.distanceTo(b.position);
					if (d1 > d2) {
						return -1;
					}
					if (d1 < d2) {
						return 1;
					}
					return 0;
				});
			}
			Step(timeElapsed) {
				if (this.on) {
					this._AddParticles(timeElapsed);
				}
				this._UpdateParticles(timeElapsed);
				this._UpdateGeometry();
			}
			setPosition(posX, posY) {
				this.curX = posX;
				this.curY = posY;
			}
			setOff() {
				this.on = false;
			}
			setOn() {
				this.on = true;
			}
		}
	},
	'./src/scripts/utils/FruitTrail.js': /*!*****************************************!*\
!*** ./src/scripts/utils/FruitTrail.js ***!
\*****************************************/ /*!exports provided: default*/ function (
		module,
		__webpack_exports__,
		__webpack_require__
	) {
		'use strict';
		__webpack_require__.r(__webpack_exports__);
		__webpack_require__.d(__webpack_exports__, 'default', function () {
			return FruitTrail;
		});
		var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
			/*!@enable3d/phaser-extension*/ './node_modules/@enable3d/phaser-extension/dist/index.js'
		);
		var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
			_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__
		);
		const _VS = `
	uniform float pointMultiplier;

	attribute float size;
	attribute float angle;
	attribute vec4 colour;

	varying vec4 vColour;
	varying vec2 vAngle;

	void main() {
	  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

	  gl_Position = projectionMatrix * mvPosition;
	  gl_PointSize = size * pointMultiplier / gl_Position.w;

	  vAngle = vec2(cos(angle), sin(angle));
	  vColour = colour;
	}`;
		const _FS = `

	uniform sampler2D diffuseTexture;

	varying vec4 vColour;
	varying vec2 vAngle;

	void main() {
	  vec2 coords = (gl_PointCoord - 0.5) * mat2(vAngle.x, vAngle.y, -vAngle.y, vAngle.x) + 0.5;
	  gl_FragColor = texture2D(diffuseTexture, coords) * vColour;
	}`;
		class FruitTrail {
			constructor(params) {
				const uniforms = {
					diffuseTexture: { value: params.texturePS },
					pointMultiplier: { value: 6 }
				};
				this._material = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].ShaderMaterial({
					uniforms: uniforms,
					vertexShader: _VS,
					fragmentShader: _FS,
					blending: _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].NormalBlending,
					depthTest: true,
					depthWrite: false,
					transparent: true,
					vertexColors: true
				});
				this.curX = 0;
				this.curY = 0;
				this.on = false;
				this.emitEvery = 0.05;
				this._camera = params.camera;
				this._particles = [];
				this._geometry = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
					'THREE'
				].BufferGeometry();
				this._geometry.setAttribute(
					'position',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute([], 3)
				);
				this._geometry.setAttribute(
					'size',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute([], 1)
				);
				this._geometry.setAttribute(
					'colour',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute([], 4)
				);
				this._geometry.setAttribute(
					'angle',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute([], 1)
				);
				this._points = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Points(
					this._geometry,
					this._material
				);
				params.parent.add(this._points);
				const LinearSpline = __webpack_require__(
					/*!./../utils/LinearSpline.js*/ './src/scripts/utils/LinearSpline.js'
				).default;
				this._alphaSpline = new LinearSpline((t, a, b) => {
					return a + t * (b - a);
				});
				this._alphaSpline.AddPoint(0.0, 0.05);
				this._alphaSpline.AddPoint(1.0, 0.0);
				this._colourSpline = new LinearSpline((t, a, b) => {
					const c = a.clone();
					return c.lerp(b, t);
				});
				this._colourSpline.AddPoint(
					0.0,
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Color(0xbcb986)
				);
				this._colourSpline.AddPoint(
					1.0,
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Color(0xbcb986)
				);
				this._sizeSpline = new LinearSpline((t, a, b) => {
					return a + t * (b - a);
				});
				this._sizeSpline.AddPoint(0.0, 1.0);
				this._sizeSpline.AddPoint(1.0, 0.5);
				this._UpdateGeometry();
			}
			_AddParticles(timeElapsed) {
				if (!this.gdfsghk) {
					this.gdfsghk = 0.0;
				}
				this.gdfsghk += timeElapsed;
				if (this.gdfsghk >= this.emitEvery) {
					this.gdfsghk = 0;
					const life = 0.5;
					this._particles.push({
						position: new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Vector3(
							this.curX,
							this.curY,
							-30
						),
						size: 20.0,
						colour: new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Color(),
						alpha: 1.0,
						life: life,
						maxLife: life,
						rotation: Math.random() * 2.0 * Math.PI,
						velocity: new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__['THREE'].Vector3(
							0,
							0,
							0
						)
					});
				}
			}
			_UpdateGeometry() {
				const positions = [];
				const sizes = [];
				const colours = [];
				const angles = [];
				for (let p of this._particles) {
					positions.push(p.position.x, p.position.y, p.position.z);
					colours.push(p.colour.r, p.colour.g, p.colour.b, p.alpha);
					sizes.push(p.currentSize);
					angles.push(p.rotation);
				}
				this._geometry.setAttribute(
					'position',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute(positions, 3)
				);
				this._geometry.setAttribute(
					'size',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute(sizes, 1)
				);
				this._geometry.setAttribute(
					'colour',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute(colours, 4)
				);
				this._geometry.setAttribute(
					'angle',
					new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Float32BufferAttribute(angles, 1)
				);
				this._geometry.attributes.position.needsUpdate = true;
				this._geometry.attributes.size.needsUpdate = true;
				this._geometry.attributes.colour.needsUpdate = true;
				this._geometry.attributes.angle.needsUpdate = true;
			}
			_UpdateParticles(timeElapsed) {
				for (let p of this._particles) {
					p.life -= timeElapsed;
				}
				this._particles = this._particles.filter((p) => {
					return p.life > 0.0;
				});
				for (let p of this._particles) {
					const t = 1.0 - p.life / p.maxLife;
					p.rotation += timeElapsed * 0.5;
					p.alpha = this._alphaSpline.Get(t);
					p.currentSize = p.size * this._sizeSpline.Get(t);
					p.colour.copy(this._colourSpline.Get(t));
					p.position.add(p.velocity.clone().multiplyScalar(timeElapsed));
					const drag = p.velocity.clone();
					drag.multiplyScalar(timeElapsed * 0.1);
					drag.x = Math.sign(p.velocity.x) * Math.min(Math.abs(drag.x), Math.abs(p.velocity.x));
					drag.y = Math.sign(p.velocity.y) * Math.min(Math.abs(drag.y), Math.abs(p.velocity.y));
					drag.z = Math.sign(p.velocity.z) * Math.min(Math.abs(drag.z), Math.abs(p.velocity.z));
					p.velocity.sub(drag);
				}
				this._particles.sort((a, b) => {
					const d1 = this._camera.position.distanceTo(a.position);
					const d2 = this._camera.position.distanceTo(b.position);
					if (d1 > d2) {
						return -1;
					}
					if (d1 < d2) {
						return 1;
					}
					return 0;
				});
			}
			Step(timeElapsed) {
				if (this.on) {
					this._AddParticles(timeElapsed);
				}
				this._UpdateParticles(timeElapsed);
				this._UpdateGeometry();
			}
			setPosition(posX, posY) {
				this.curX = posX;
				this.curY = posY;
			}
			setOff() {
				this.on = false;
			}
			setOn() {
				this.on = true;
			}
		}
	},
	'./src/scripts/utils/LinearSpline.js': /*!*******************************************!*\
!*** ./src/scripts/utils/LinearSpline.js ***!
\*******************************************/ /*!exports provided: default*/ function (
		module,
		__webpack_exports__,
		__webpack_require__
	) {
		'use strict';
		__webpack_require__.r(__webpack_exports__);
		__webpack_require__.d(__webpack_exports__, 'default', function () {
			return LinearSpline;
		});
		var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
			/*!@enable3d/phaser-extension*/ './node_modules/@enable3d/phaser-extension/dist/index.js'
		);
		var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
			_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__
		);
		class LinearSpline {
			constructor(lerp) {
				this._points = [];
				this._lerp = lerp;
			}
			AddPoint(t, d) {
				this._points.push([t, d]);
			}
			Get(t) {
				let p1 = 0;
				for (let i = 0; i < this._points.length; i++) {
					if (this._points[i][0] >= t) {
						break;
					}
					p1 = i;
				}
				const p2 = Math.min(this._points.length - 1, p1 + 1);
				if (p1 == p2) {
					return this._points[p1][1];
				}
				return this._lerp(
					(t - this._points[p1][0]) / (this._points[p2][0] - this._points[p1][0]),
					this._points[p1][1],
					this._points[p2][1]
				);
			}
		}
	},
	'./src/scripts/utils/ScreenShake.js': /*!******************************************!*\
!*** ./src/scripts/utils/ScreenShake.js ***!
\******************************************/ /*!exports provided: default*/ function (
		module,
		__webpack_exports__,
		__webpack_require__
	) {
		'use strict';
		__webpack_require__.r(__webpack_exports__);
		__webpack_require__.d(__webpack_exports__, 'default', function () {
			return ScreenShake;
		});
		var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
			/*!@enable3d/phaser-extension*/ './node_modules/@enable3d/phaser-extension/dist/index.js'
		);
		var _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
			_enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__
		);
		function ScreenShake() {
			return {
				enabled: false,
				_timestampStart: undefined,
				_timestampEnd: undefined,
				_startPoint: undefined,
				_endPoint: undefined,
				update: function update(camera) {
					if (this.enabled == true) {
						const now = Date.now();
						if (this._timestampEnd > now) {
							let interval =
								(Date.now() - this._timestampStart) / (this._timestampEnd - this._timestampStart);
							this.computePosition(camera, interval);
						} else {
							camera.position.copy(this._startPoint);
							this.enabled = false;
						}
					}
				},
				shake: function shake(camera, vecToAdd, milliseconds) {
					this.enabled = true;
					this._timestampStart = Date.now();
					this._timestampEnd = this._timestampStart + milliseconds;
					this._startPoint = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Vector3().copy(camera.position);
					this._endPoint = new _enable3d_phaser_extension__WEBPACK_IMPORTED_MODULE_0__[
						'THREE'
					].Vector3().addVectors(camera.position, vecToAdd);
				},
				computePosition: function computePosition(camera, interval) {
					if (interval < 0.4) {
						var position = this.getQuadra(interval / 0.4);
					} else if (interval < 0.7) {
						var position = this.getQuadra((interval - 0.4) / 0.3) * -0.6;
					} else if (interval < 0.9) {
						var position = this.getQuadra((interval - 0.7) / 0.2) * 0.3;
					} else {
						var position = this.getQuadra((interval - 0.9) / 0.1) * -0.1;
					}
					camera.position.lerpVectors(this._startPoint, this._endPoint, position);
				},
				getQuadra: function getQuadra(t) {
					return 9.436896e-16 + 4 * t - 4 * (t * t);
				}
			};
		}
	},
	'./webpack/credits.js': /*!****************************!*\
!*** ./webpack/credits.js ***!
\****************************/ /*!no static exports found*/ function (module, exports) {
		console.log(
			'%c %c %c %c %c Built using phaser-project-template %c https://github.com/yandeu/phaser-project-template',
			'background: #ff0000',
			'background: #ffff00',
			'background: #00ff00',
			'background: #00ffff',
			'color: #fff; background: #000000;',
			'background: none'
		);
	},
	0: /*!********************************************************!*\
!*** multi ./src/scripts/game.ts ./webpack/credits.js ***!
\********************************************************/ /*!no static exports found*/ function (
		module,
		exports,
		__webpack_require__
	) {
		__webpack_require__(/*!./src/scripts/game.ts*/ './src/scripts/game.ts');
		module.exports = __webpack_require__(/*!./webpack/credits.js*/ './webpack/credits.js');
	}
});
