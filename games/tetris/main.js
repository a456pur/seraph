!(function (e) {
	var t = {};
	function i(n) {
		if (t[n]) return t[n].exports;
		var s = (t[n] = { i: n, l: !1, exports: {} });
		return e[n].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
	}
	(i.m = e),
		(i.c = t),
		(i.d = function (e, t, n) {
			i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
		}),
		(i.r = function (e) {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(e, '__esModule', { value: !0 });
		}),
		(i.t = function (e, t) {
			if ((1 & t && (e = i(e)), 8 & t)) return e;
			if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
			var n = Object.create(null);
			if (
				(i.r(n),
				Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
				2 & t && 'string' != typeof e)
			)
				for (var s in e)
					i.d(
						n,
						s,
						function (t) {
							return e[t];
						}.bind(null, s)
					);
			return n;
		}),
		(i.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default;
					  }
					: function () {
							return e;
					  };
			return i.d(t, 'a', t), t;
		}),
		(i.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(i.p = ''),
		i((i.s = 6));
})([
	function (e, t, i) {
		'use strict';
		i.r(t),
			i.d(t, 'init', function () {
				return r;
			});
		var n = i(2),
			s = i(3),
			o = i(4),
			a = i(1);
		const r = {
			blockSize: 25,
			maxBlockSize: 26,
			minBlockSize: 10,
			rows: 20,
			columns: 10,
			timerCountPrecision: 10,
			timerDisplayPrecision: 1e3,
			speedArray: [
				2360, 1460, 920, 590, 388, 259.8, 177.5, 123.6, 87.9, 63.61, 46.93, 35.256, 26.977, 21.017,
				16.67
			],
			devMode: !1,
			deletionAnimationSpeed: 500,
			previewSize: 4,
			detectDevice: () => (navigator.maxTouchPoints ? 'mobile' : 'computer'),
			gameMode: {
				enduro: {
					increaseSpeedValue: 1,
					linesToIncreaseSpeed: 10,
					initSpeed: 3,
					display() {
						document.getElementById('timerBox').classList.add('hide'),
							document.getElementById('timerTitle').classList.add('hide'),
							document.getElementById('scoreBox').classList.remove('hide'),
							document.getElementById('scoreTitle').classList.remove('hide');
					},
					init() {
						(n.game.speed = this.initSpeed), this.display(), (a.a.playingTheme = a.a.theme1);
					},
					start() {},
					pause: () => !1,
					lineCheck(e) {
						e.some(
							(e, t) => (n.game.lines + t + 1) % this.linesToIncreaseSpeed == 0 && n.game.lines > 0
						) && n.game.increaseSpeed(this.increaseSpeedValue);
					},
					end: () => !1,
					displayScore() {
						o.display.endGame(!0, 'GAME END', n.game.gameScore);
					}
				},
				rush: {
					initSpeed: 6,
					initTimer: 60,
					increaseSpeedValue: 1,
					linesToIncreaseSpeed: 5,
					display() {
						document.getElementById('timerBox').classList.remove('hide'),
							document.getElementById('timerTitle').classList.remove('hide'),
							document.getElementById('scoreBox').classList.remove('hide'),
							document.getElementById('scoreTitle').classList.remove('hide');
					},
					init() {
						(n.game.speed = this.initSpeed),
							(s.a.value = this.initTimer),
							s.a.pause(),
							this.display(),
							(a.a.playingTheme = a.a.theme1);
					},
					start() {
						s.a.decrement(), s.a.display();
					},
					pause() {
						s.a.pause();
					},
					lineCheck(e) {
						e.some(
							(e, t) => (n.game.lines + t + 1) % this.linesToIncreaseSpeed == 0 && n.game.lines > 0
						) && n.game.increaseSpeed(this.increaseSpeedValue);
					},
					end: () =>
						s.a.value <= 0 && (s.a.pause(), n.game.stop(), (n.game.gameStatut = 'end'), !0),
					displayScore() {
						o.display.endGame(!0, 'TIME OUT!', n.game.gameScore, 'points');
					}
				},
				sprint: {
					initSpeed: 6,
					increaseSpeedValue: 1,
					linesToIncreaseSpeed: 5,
					initTimer: 0,
					linesToWin: 20,
					display() {
						document.getElementById('timerBox').classList.remove('hide'),
							document.getElementById('timerTitle').classList.remove('hide'),
							document.getElementById('scoreBox').classList.add('hide'),
							document.getElementById('scoreTitle').classList.add('hide');
					},
					init() {
						(n.game.speed = this.initSpeed),
							(s.a.value = this.initTimer),
							s.a.pause(),
							this.display(),
							(a.a.playingTheme = a.a.theme1);
					},
					start() {
						s.a.increment(), s.a.display();
					},
					pause() {
						s.a.pause();
					},
					lineCheck(e) {
						e.some(
							(e, t) => (n.game.lines + t + 1) % this.linesToIncreaseSpeed == 0 && n.game.lines > 0
						) && n.game.increaseSpeed(this.increaseSpeedValue);
					},
					end() {
						return (
							n.game.lines >= this.linesToWin &&
							(s.a.pause(), n.game.stop(), (n.game.gameStatut = 'end'), !0)
						);
					},
					displayScore() {
						o.display.endGame(!0, this.linesToWin + ' LINES DONE!', s.a.value, 'seconds');
					}
				}
			}
		};
	},
	function (e, t, i) {
		'use strict';
		i.d(t, 'a', function () {
			return n;
		});
		let n = {
			theme1: new Audio('./sound/origTheme.mp3'),
			land: new Audio('./sound/samples/land.mp3'),
			level: new Audio('./sound/samples/level.mp3'),
			move: new Audio('./sound/samples/move.mp3'),
			rotate: new Audio('./sound/samples/rotate.mp3'),
			smack: new Audio('./sound/samples/shift.mp3'),
			pauseSound: new Audio('./sound/samples/pause.mp3'),
			line: new Audio('./sound/samples/line.mp3'),
			tetris: new Audio('./sound/samples/tetris.mp3'),
			gameover: new Audio('./sound/samples/gameover.mp3'),
			speedup: new Audio('./sound/samples/speedup.mp3'),
			save: new Audio('./sound/samples/save.mp3'),
			justSmashed: !1,
			playingTheme: 0,
			musicEnabled: !0,
			toggleSmash() {
				this.justSmashed = !this.justSmashed;
			},
			playSong(e) {
				this.musicEnabled && (e.play(), (e.loop = !0), (e.volume = 0.5));
			},
			play(e) {
				this.stop(e), e.play();
			},
			stop(e) {
				e.pause(), (e.currentTime = 0);
			},
			pause(e) {
				e.pause();
			},
			enableMusic(e) {
				this.musicEnabled = !!e;
			}
		};
	},
	function (e, t, i) {
		'use strict';
		i.r(t),
			i.d(t, 'game', function () {
				return S;
			});
		var n = i(0),
			s = i(3),
			o = i(1);
		const a = {
				blocks: [],
				preview: [],
				deletingAnimation: 'init',
				setBlockWidth() {
					const e = document.documentElement.clientWidth || document.body.clientWidth,
						t = Math.floor(e / (2.6 * n.init.columns));
					t > n.init.maxBlockSize
						? (n.init.blockSize = n.init.maxBlockSize)
						: t < n.init.minBlockSize
						? (n.init.blockSize = n.init.minBlockSize)
						: (n.init.blockSize = t);
				},
				generatePlaygroundGrid() {
					this.setBlockWidth();
					const e = document.getElementById('playground'),
						t = document.querySelector('html');
					t.style.setProperty('--columns', n.init.columns),
						t.style.setProperty('--rows', n.init.rows),
						t.style.setProperty('--block-width', n.init.blockSize + 'px');
					const i = n.init.rows * n.init.columns;
					for (let t = 0; t < i; t++) {
						let i = document.createElement('div');
						(i.className = 'playgroundBlock'),
							n.init.devMode && (i.innerHTML = t),
							e.appendChild(i);
					}
					for (let t = 0; t < n.init.columns; t++) {
						let t = document.createElement('div');
						(t.className = 'playgroundBottom taken'), e.appendChild(t);
					}
					this.blocks = Array.from(document.querySelectorAll('.grid div'));
				},
				generatePreviewGrid() {
					const e = document.getElementById('nextTetrominoBox'),
						t = Math.pow(n.init.previewSize, 2);
					for (let i = 0; i < t; i++) {
						let t = document.createElement('div');
						(t.className = 'playgroundBlock'),
							n.init.devMode && (t.innerHTML = i),
							e.appendChild(t);
					}
					this.preview = Array.from(document.querySelectorAll('#nextTetrominoBox div'));
				},
				generateSavedGrid() {
					const e = document.getElementById('savedTetrominoBox'),
						t = Math.pow(n.init.previewSize, 2);
					for (let i = 0; i < t; i++) {
						let t = document.createElement('div');
						(t.className = 'playgroundBlock'),
							n.init.devMode && (t.innerHTML = i),
							e.appendChild(t);
					}
					this.saved = Array.from(document.querySelectorAll('#savedTetrominoBox div'));
				},
				generateAllGrid() {
					this.generatePlaygroundGrid(), this.generatePreviewGrid(), this.generateSavedGrid();
				},
				cleanPreviewGrid() {
					this.preview.forEach((e) => (e.className = 'playgroundBlock'));
				},
				cleanSavedGrid() {
					this.saved.forEach((e) => (e.className = 'playgroundBlock'));
				},
				removeGrid(e) {
					const t = document.getElementById(e);
					for (; t.firstChild; ) t.removeChild(t.firstChild);
				},
				removeAllGrid() {
					this.removeGrid('nextTetrominoBox'),
						this.removeGrid('savedTetrominoBox'),
						this.removeGrid('playground');
				},
				cleanAllGrid() {
					this.removeGrid('playground'), this.cleanPreviewGrid(), this.cleanSavedGrid();
				},
				lineIsMade() {
					let e = [],
						t = [];
					for (let t = 0; t < n.init.columns; t++) e.push(t);
					for (let i = 0; i < n.init.rows; i++) {
						e.every(
							(e) =>
								this.blocks[i * n.init.columns + e].classList.contains('taken') ||
								this.blocks[i * n.init.columns + e].classList.contains('tetromino')
						) && t.push(i);
					}
					return t.length, t;
				},
				animateDeleteLine(e) {
					if (4 === e.length) {
						o.a.play(o.a.tetris);
						for (let t = 0; t < n.init.columns; t++)
							e.forEach(
								(e) =>
									(this.blocks[n.init.columns * e + t].className =
										'playgroundBlock taken specialErasing')
							);
					} else {
						o.a.play(o.a.line);
						for (let t = 0; t < n.init.columns; t++)
							e.forEach(
								(e) =>
									(this.blocks[n.init.columns * e + t].className = 'playgroundBlock taken erasing')
							);
					}
				},
				deleteLine(e) {
					for (let t = 0; t < e.length; t++) {
						let i = [];
						for (let s = 0; s < e[t] * n.init.columns; s++)
							i.push(this.blocks[s].className), (this.blocks[s].className = 'playgroundBlock');
						for (let s = 0; s < e[t] * n.init.columns; s++) {
							!this.blocks[s + n.init.columns].className.includes('playgroundBottom') &&
								(this.blocks[s + n.init.columns].className = i[s]);
						}
					}
				}
			},
			r = {
				number: 0,
				position: 0,
				rotation: 0,
				current: [],
				canBeSaved: !0,
				canMoveDown: !0,
				saved: {},
				next: {},
				theTetrominoes: [],
				theTetrominoesPreview: [],
				createTetrominoes: (e) => [
					[
						[1, e + 1, 2 * e + 1, 3 * e + 1],
						[0, 1, 2, 3],
						[1, e + 1, 2 * e + 1, 3 * e + 1],
						[0, 1, 2, 3]
					],
					[
						[0, e, e + 1, e + 2],
						[1, 2, e + 1, 2 * e + 1],
						[0, 1, 2, e + 2],
						[1, e + 1, 2 * e, 2 * e + 1]
					],
					[
						[2, e, e + 1, e + 2],
						[1, e + 1, 2 * e + 1, 2 * e + 2],
						[0, 1, 2, e],
						[0, 1, e + 1, 2 * e + 1]
					],
					[
						[1, 2, e + 1, e + 2],
						[1, 2, e + 1, e + 2],
						[1, 2, e + 1, e + 2],
						[1, 2, e + 1, e + 2]
					],
					[
						[1, 2, e, e + 1],
						[1, e + 1, e + 2, 2 * e + 2],
						[1, 2, e, e + 1],
						[1, e + 1, e + 2, 2 * e + 2]
					],
					[
						[0, 1, e + 1, e + 2],
						[2, e + 1, e + 2, 2 * e + 1],
						[0, 1, e + 1, e + 2],
						[2, e + 1, e + 2, 2 * e + 1]
					],
					[
						[1, e, e + 1, e + 2],
						[1, e + 1, e + 2, 2 * e + 1],
						[0, 1, 2, e + 1],
						[2, e + 1, e + 2, 2 * e + 2]
					]
				],
				initPreview() {
					const e = Math.floor(Math.random() * this.theTetrominoes.length),
						t = Math.floor(Math.random() * this.theTetrominoes[this.number].length),
						i = this.theTetrominoesPreview[e][t];
					this.next = { number: e, rotation: t, tetromino: i };
				},
				initSaved() {
					this.saved = { number: 0, rotation: 0, tetromino: [] };
				},
				initTetromino() {
					'notStarted' === S.gameStatut &&
						((this.theTetrominoes = this.createTetrominoes(n.init.columns)),
						(this.theTetrominoesPreview = this.createTetrominoes(n.init.previewSize)),
						this.initPreview()),
						(this.number = this.next.number),
						(this.rotation = this.next.rotation),
						(this.position = Math.floor(n.init.columns / 2 - 1)),
						(this.canBeSaved = !0),
						(this.canMoveDown = !0),
						this.initPreview(),
						(this.current = this.theTetrominoes[this.number][this.rotation]);
				},
				saveTetromino() {
					this.saved = {
						number: this.number,
						rotation: this.rotation,
						tetromino: this.theTetrominoesPreview[this.number][this.rotation]
					};
				},
				switchSaved() {
					const e = this.saved;
					this.saveTetromino(),
						(this.number = e.number),
						(this.rotation = e.rotation),
						(this.current = this.theTetrominoes[this.number][this.rotation]),
						(this.position = Math.floor(n.init.columns / 2 - 1)),
						(this.canBeSaved = !1),
						(this.canMoveDown = !0);
				},
				rotateTetromino(e) {
					let t = this.rotation;
					'right' === e ? t++ : t--,
						t >= this.theTetrominoes[this.number].length && (t = 0),
						t < 0 && (t = this.theTetrominoes[this.number].length - 1);
					const i = this.theTetrominoes[this.number][t],
						s = i.some((e) =>
							a.blocks[this.position + e + n.init.columns].classList.contains('taken')
						),
						r = i.some((e) => (e + this.position) % n.init.columns == 0),
						d = i.some((e) => (e + this.position + 1) % n.init.columns == 0);
					s ||
						(r && d) ||
						(o.a.play(o.a.rotate),
						this.undraw(),
						(this.current = i),
						(this.rotation = t),
						this.draw());
				},
				drawPreview() {
					a.cleanPreviewGrid(),
						this.next.tetromino.forEach((e) => {
							a.preview[e].classList.add('tetromino'),
								a.preview[e].classList.add('colorT' + this.next.number.toString());
						});
				},
				drawSaved() {
					a.cleanSavedGrid(),
						this.saved.tetromino.forEach((e) => {
							a.saved[e].classList.add('tetromino'),
								a.saved[e].classList.add('colorT' + this.saved.number.toString());
						});
				},
				draw() {
					this.current.forEach((e) => {
						a.blocks[this.position + e].classList.add('tetromino'),
							a.blocks[this.position + e].classList.add('colorT' + this.number.toString());
					});
				},
				drawNew() {
					this.initTetromino(), this.draw(), this.drawPreview();
				},
				undraw() {
					this.current.forEach((e) => {
						a.blocks[this.position + e].className = 'playgroundBlock';
					});
				},
				moveDown() {
					this.undraw(), (this.position += n.init.columns), this.draw();
				},
				smackDown() {
					if (this.canMoveDown) {
						for (this.undraw(); !this.freeze(); ) this.position += n.init.columns;
						o.a.play(o.a.smack), (o.a.justSmashed = !0), this.draw();
					}
				},
				moveLeft() {
					this.current.some((e) => (e + this.position) % n.init.columns == 0) ||
						this.lateralBlock('left') ||
						(o.a.play(o.a.move), this.undraw(), this.position--, this.draw());
				},
				pushDown() {
					'init' === a.deletingAnimation &&
						(!this.freeze() && this.canMoveDown
							? (o.a.play(o.a.move), this.undraw(), (this.position += n.init.columns), this.draw())
							: (this.canMoveDown && o.a.play(o.a.land), (this.canMoveDown = !1)));
				},
				moveRight() {
					this.current.some((e) => (e + this.position + 1) % n.init.columns == 0) ||
						this.lateralBlock('right') ||
						(o.a.play(o.a.move), this.undraw(), this.position++, this.draw());
				},
				freeze() {
					return (
						!!this.current.some((e) =>
							a.blocks[this.position + e + n.init.columns].classList.contains('taken')
						) &&
						((this.canMoveDown = !1),
						this.current.forEach((e) => {
							a.blocks[e + this.position].classList.add('taken');
						}),
						!0)
					);
				},
				lateralBlock(e) {
					let t;
					return (
						(t = 'right' === e ? 1 : -1),
						this.current.some((e) => a.blocks[this.position + e + t].classList.contains('taken'))
					);
				}
			};
		var d = i(4);
		let l = 37,
			m = 39,
			c = 40,
			u = 38,
			h = 65,
			p = 90,
			g = 69;
		const y = {
			handleKeyPress(e) {
				'play' === S.gameStatut &&
					(e.keyCode === l && r.moveLeft(),
					e.keyCode === m && r.moveRight(),
					e.keyCode === c && r.pushDown(),
					e.keyCode === u && r.smackDown(),
					e.keyCode === h && r.rotateTetromino('left'),
					e.keyCode === p && r.rotateTetromino('right'),
					e.keyCode === g && S.saveTetromino());
			},
			handleTouchPress(e) {
				'play' === S.gameStatut &&
					('controlRight' === e.target.id && r.moveRight(),
					'controlLeft' === e.target.id && r.moveLeft(),
					'controlDown' === e.target.id && r.pushDown(),
					'controlUp' === e.target.id && r.smackDown(),
					'controlRotRight' === e.target.id && r.rotateTetromino('right'),
					'controlRotLeft' === e.target.id && r.rotateTetromino('left'),
					'controlSave' === e.target.id && S.saveTetromino());
			},
			handleStart() {
				S.start();
			},
			handleReset() {
				S.reset();
			},
			handleBackMenu() {
				S.backMenu();
			},
			handleStart() {
				S.start();
			},
			setListener(e) {
				e
					? (document
							.getElementById('touchControlContainer')
							.addEventListener('click', this.handleTouchPress),
					  document.getElementById('resetButton').addEventListener('click', this.handleReset),
					  document.getElementById('startButton').addEventListener('click', this.handleStart),
					  document.getElementById('backMenu').addEventListener('click', this.handleBackMenu),
					  document.addEventListener('keydown', this.handleKeyPress))
					: (document
							.getElementById('touchControlContainer')
							.removeEventListener('click', this.handleTouchPress),
					  document.getElementById('resetButton').removeEventListener('click', this.handleReset),
					  document.getElementById('startButton').removeEventListener('click', this.handleReset),
					  document.getElementById('backMenu').removeEventListener('click', this.handleReset),
					  document.removeEventListener('keydown', this.handleKeyPress));
			}
		};
		var v = i(5);
		const S = {
			gameScore: 0,
			lines: 8,
			timerId: 0,
			gameStatut: 'notStarted',
			gameMode: '',
			speed: 0,
			init() {
				a.generateAllGrid(), y.setListener(!0), this.restore();
			},
			quit() {
				this.restore(),
					a.removeAllGrid(),
					(document.getElementById('startButton').innerHTML = 'Start'),
					document.getElementById('startButton').classList.add('buttonPulse'),
					y.setListener(!1),
					o.a.stop(o.a.theme1);
			},
			restore() {
				(this.gameScore = 0),
					(this.lines = 0),
					n.init.gameMode[this.gameMode].init(),
					this.updateScore(0),
					(this.gameStatut = 'notStarted'),
					d.display.endGame(!1),
					d.display.pause(!1),
					d.display.sidePanelInfo(),
					r.initSaved(),
					(a.deletingAnimation = 'init'),
					clearInterval(this.timerId);
			},
			start() {
				('lost' !== this.gameStatut && 'end' !== this.gameStatut) || this.reset(),
					'notStarted' === this.gameStatut &&
						(o.a.playSong(o.a.playingTheme),
						r.drawNew(),
						document.getElementById('startButton').classList.remove('buttonPulse')),
					'pause' === this.gameStatut || 'notStarted' === this.gameStatut
						? (o.a.playSong(o.a.playingTheme),
						  (this.timerId = setInterval(this.run.bind(this), n.init.speedArray[this.speed - 1])),
						  n.init.gameMode[this.gameMode].start(),
						  (document.getElementById('startButton').innerHTML = 'Pause'),
						  document.getElementById('startButton').classList.remove('buttonPulse'),
						  d.display.pause(!1),
						  (this.gameStatut = 'play'))
						: this.pause();
			},
			pause() {
				o.a.pause(o.a.playingTheme),
					o.a.play(o.a.pauseSound),
					(this.gameStatut = 'pause'),
					d.display.pause(!0),
					n.init.gameMode[this.gameMode].pause(),
					(document.getElementById('startButton').innerHTML = 'Resume'),
					document.getElementById('startButton').classList.add('buttonPulse'),
					clearInterval(this.timerId);
			},
			reset() {
				o.a.stop(o.a.playingTheme),
					a.cleanAllGrid(),
					a.generatePlaygroundGrid(),
					this.restore(),
					r.initSaved(),
					(this.gameStatut = 'notStarted'),
					(document.getElementById('startButton').innerHTML = 'Start'),
					document.getElementById('startButton').classList.add('buttonPulse');
			},
			backMenu() {
				this.quit(), v.a.showMenu(!0);
			},
			saveTetromino() {
				r.canBeSaved &&
					(r.saved.tetromino.length > 0
						? (r.undraw(), r.switchSaved(), r.drawSaved(), r.undraw(), r.draw())
						: (r.saveTetromino(), r.drawSaved(), r.undraw(), r.drawNew()),
					o.a.play(o.a.save));
			},
			updateScore() {
				const e = this.lines * this.lines * 10;
				(this.gameScore += e),
					(document.getElementById('score').innerHTML = this.gameScore),
					(document.getElementById('lines').innerHTML = this.lines);
			},
			increaseSpeed(e) {
				document.getElementById('speedBox').classList.add('flash'),
					setTimeout(() => {
						document.getElementById('speedBox').classList.remove('flash');
					}, 700),
					clearInterval(this.timerId),
					(this.speed += e),
					(this.timerId = setInterval(this.run.bind(this), n.init.speedArray[this.speed - 1])),
					(document.getElementById('speed').innerHTML = this.speed),
					o.a.play(o.a.speedup);
			},
			run() {
				if ('onGoing' === a.deletingAnimation) return;
				if (n.init.gameMode[this.gameMode].end())
					return o.a.stop(o.a.playingTheme), void n.init.gameMode[this.gameMode].displayScore();
				const e = a.lineIsMade(),
					t = r.freeze();
				if (t && e.length && 'done' !== a.deletingAnimation)
					return (
						n.init.gameMode[this.gameMode].lineCheck(e),
						(this.lines += e.length),
						this.updateScore(),
						a.animateDeleteLine(e),
						(a.deletingAnimation = 'onGoing'),
						setTimeout(() => {
							a.deletingAnimation = 'done';
						}, n.init.deletionAnimationSpeed),
						void setTimeout(() => {
							o.a.play(o.a.land);
						}, 1.5 * n.init.deletionAnimationSpeed)
					);
				if (t) {
					o.a.justSmashed ? o.a.toggleSmash() : o.a.play(o.a.land),
						a.deleteLine(e),
						(a.deletingAnimation = 'init'),
						r.drawNew();
					this.loseCondition() &&
						(o.a.stop(o.a.playingTheme),
						o.a.play(o.a.gameover),
						this.stop(),
						(this.gameStatut = 'lost'),
						'enduro' === this.gameMode
							? d.display.endGame(!0, 'GAME END', this.gameScore, 'points')
							: (d.display.endGame(!0, 'GAME OVER', ' ', ' '), s.a.pause()));
				} else r.moveDown();
			},
			stop() {
				clearInterval(this.timerId), (document.getElementById('startButton').innerHTML = 'Restart');
			},
			loseCondition: () =>
				r.current.some((e) => a.blocks[r.position + e].classList.contains('taken'))
		};
	},
	function (e, t, i) {
		'use strict';
		i.d(t, 'a', function () {
			return s;
		});
		var n = i(0);
		const s = {
			value: 0,
			timerCount: 0,
			timerDisplay: 0,
			display() {
				this.timerDisplay = setInterval(() => {
					let e;
					(e = this.value <= 0 ? 0 : Math.round(this.value)),
						(document.getElementById('timer').innerHTML = e);
				}, n.init.timerDisplayPrecision);
			},
			increment() {
				this.timerCount = setInterval(() => {
					(this.value += n.init.timerCountPrecision / 1e3),
						(this.value = Math.round(1e3 * this.value) / 1e3);
				}, n.init.timerCountPrecision);
			},
			decrement() {
				this.timerCount = setInterval(() => {
					(this.value -= n.init.timerCountPrecision / 1e3),
						(this.value = Math.round(1e3 * this.value) / 1e3);
				}, n.init.timerCountPrecision);
			},
			pause() {
				clearInterval(this.timerCount), clearInterval(this.timerDisplay);
			}
		};
	},
	function (e, t, i) {
		'use strict';
		i.r(t),
			i.d(t, 'display', function () {
				return o;
			});
		var n = i(2),
			s = i(3);
		const o = {
			tactil: !1,
			playgroundPanel(e) {
				e
					? (document.getElementById('sidePanelRight').classList.remove('hide'),
					  document.getElementById('sidePanelLeft').classList.remove('hide'),
					  document.getElementById('playgroundContainer').classList.remove('hide'))
					: (document.getElementById('sidePanelRight').classList.add('hide'),
					  document.getElementById('sidePanelLeft').classList.add('hide'),
					  document.getElementById('playgroundContainer').classList.add('hide'));
			},
			mainMenu(e) {
				e
					? (document.getElementById('mainMenu').classList.remove('hide'), this.touchControl(!1))
					: (document.getElementById('mainMenu').classList.add('hide'),
					  this.touchControl(this.tactil));
			},
			sidePanelInfo() {
				(document.getElementById('speed').innerHTML = n.game.speed.toString()),
					(document.getElementById('timer').innerHTML = Math.floor(s.a.value));
			},
			endGame(e, t = 'GAME OVER', i, n) {
				const s = e ? 'flex' : 'none';
				(document.getElementById('endGame').style.display = s),
					e &&
						((document.getElementById('endGameTitle').innerHTML = t),
						i >= 0 && (document.getElementById('finalScore').innerHTML = i),
						n && (document.getElementById('scoreUnit').innerHTML = n));
			},
			pause(e) {
				const t = e ? 'block' : 'none';
				document.getElementById('gamePaused').style.display = t;
			},
			touchControl(e) {
				document.getElementById('touchControlContainer').style.display = e ? 'flex' : 'none';
			}
		};
	},
	function (e, t, i) {
		'use strict';
		i.d(t, 'a', function () {
			return a;
		});
		i(3);
		const { display: n } = i(4),
			{ game: s } = i(2),
			{ init: o } = i(0),
			a = {
				showMenu(e) {
					n.mainMenu(e), n.playgroundPanel(!e);
				},
				enduranceMode() {
					this.showMenu(!1), (s.gameMode = 'enduro'), s.init();
				},
				rushMode() {
					this.showMenu(!1), n.mainMenu(!1), n.playgroundPanel(!0), (s.gameMode = 'rush'), s.init();
				},
				sprintMode() {
					this.showMenu(!1),
						n.mainMenu(!1),
						n.playgroundPanel(!0),
						(s.gameMode = 'sprint'),
						s.init();
				}
			};
	},
	function (e, t, i) {
		'use strict';
		i.r(t);
		var n = i(5),
			s = i(0),
			o = i(4),
			a = i(1),
			r = i(2);
		document.getElementById('enduranceMode').addEventListener('click', () => n.a.enduranceMode()),
			document.getElementById('rushMode').addEventListener('click', () => n.a.rushMode()),
			document.getElementById('sprintMode').addEventListener('click', () => n.a.sprintMode()),
			document.getElementById('musicSwitch').addEventListener('change', function () {
				this.checked
					? (a.a.enableMusic(!0), 'play' === r.game.gameStatut && a.a.playSong(a.a.theme1))
					: (a.a.enableMusic(!1), a.a.stop(a.a.theme1));
			}),
			'mobile' === s.init.detectDevice() ? (o.display.tactil = !0) : (o.display.tactil = !1);
	}
]);
