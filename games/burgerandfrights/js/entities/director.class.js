/**
 * @file director.class.js
 * @version 1.0.0
 */

import AudioSystem from '../framework/audiosystem.class.js';
import Entity from '../framework/entity.class.js';
import Input from '../framework/input.class.js';

import * as THREE from '../lib/three.js/three.module.js';

export default class Director extends Entity {
    static _init() {
        Director._tmpV20 = new THREE.Vector2();
        Director._tmpV30 = new THREE.Vector3();
    }

    constructor(context, scene, options = Object.create(null)) {
        options.updatePriority = 9;

        super(context, scene, options);

        const tScene = scene.getThreeScene();

        this._overlay = scene.findEntityOfType('Overlay');
        this._road = Entity.createByName('Road', context, scene);
        this._player = Entity.createByName('Player', context, scene);
        this._environment = Entity.createByName('Environment', context, scene);
        this._car = Entity.createByName('Car', context, scene);
        this._train = Entity.createByName('Train', context, scene);
        this._ghost = Entity.createByName('Ghost', context, scene);
        this._scarecrow = Entity.createByName('Scarecrow', context, scene);
        this._spirits = Entity.createByName('Spirits', context, scene);
        this._tuoni = Entity.createByName('Tuoni', context, scene);
        this._arms = Entity.createByName('Arms', context, scene);
        this._manyfaces = Entity.createByName('Manyfaces', context, scene);

        this._segmentFactories = [];

        this._checkpointSegmentIndex = 5;
        this._checkpointAmbianceName = ['ambiance__forest'];

        this._resturantLoopSegmentIndex = [];
        this._endingSegmentIndex = null;

        this._respawning = null;
        this._controlsShown = false;
        this._soundStarted = false;
        this._looping = false;

        this._createSegmentFactories(context);
    }

    resetInTuonela(context) {
        this._checkpointSegmentIndex = this._resturantLoopSegmentIndex[5];
        this._checkpointAmbianceName = ['ambiance__tuonela'];

        this.reset(context, true);
    }

    resetInEnding(context) {
        this._checkpointSegmentIndex = this._endingSegmentIndex;
        this._checkpointAmbianceName = ['ambiance__forest'];

        this.reset(context, true);
    }

    reset(context, fromCheckpoint = true) {
        this._respawning = false;

        if (!fromCheckpoint) {
            const distance = Math.max(
                this._road.getRoadDistanceMin() + 2.2,
                this._road.getRoadSafeRespawnDistance(this._road.getPlayerRoadPosition().y - 0.1));
            const type = this._road.getRoadType(distance);
            const x = type.laneCenter + type.laneOffset;

            this._player.reset(context,
                this._road.roadToWorldPosition(Director._tmpV20.set(x, distance), Director._tmpV30),
                this._road.getRoadAngle(distance), fromCheckpoint);

            return;
        }

        AudioSystem.stop('violin');
        AudioSystem.stop('ambiance', 0.5);

        this._checkpointAmbianceName.forEach(name => {
            AudioSystem.play(name, 1, true, 'ambiance', 0, 4);
        });

        this._overlay.setContrast();

        context.time.clearAllTimeouts();

        this._environment.reset(context);
        this._car.reset(context);
        this._train.reset(context);
        this._ghost.reset(context);
        this._scarecrow.reset(context);
        this._spirits.reset(context);
        this._tuoni.reset(context);
        this._arms.reset(context);
        this._manyfaces.reset(context);

        this._road.reset(context, this._checkpointSegmentIndex - 2, this._checkpointSegmentIndex);

        this._road.clearSegments();
        for (let i = 0; i < this._road.constructor.segmentsMax; i++) {
            this._segmentFactories[this._road.getNextSegmentIndex()]();
        }

        const distance = this._checkpointSegmentIndex + 0.4;
        const x = this._road.getRoadType(distance).laneOffset;

        this._player.reset(context,
            this._road.roadToWorldPosition(Director._tmpV20.set(x, distance), Director._tmpV30),
            this._road.getRoadAngle(distance));
    }

    update(context) {
        super.update(context);

        if (!this._soundStarted && Input.isPointerLocked()) {
            AudioSystem.stop('ambiance', 0.5);
            AudioSystem.play('ambiance__forest', 1, true, 'ambiance', 0, 2);

            this._soundStarted = true;
        }

        const playerRoadPosition = this._road.getPlayerRoadPosition();

        if (playerRoadPosition.y > this._road.getRoadDistanceMax() - this._road.constructor.segmentsMax * 0.5 + 0.5) {
            this._segmentFactories[this._road.getNextSegmentIndex()]();
        }

        if (!this._respawning && !this._looping) {
            const fallen = this._player.getFallen();
            const killed = this._player.getKilled();
            const tooFarBack = playerRoadPosition.y < this._road.getRoadDistanceMin() + 1;

            if (fallen || killed || tooFarBack) {
                this._respawning = true;

                context.time.setTimeout(() => {
                    if (killed) {
                        AudioSystem.play('effect__game_over_splatter');
                    }

                    this._overlay.playScene(context, tooFarBack ? 'fade_out_black_splatter_stop' :
                        killed ? 'fade_out_red_splatter' : 'fade_out_black_splatter', killed ? 3 : 1, () => {
                        this.reset(context, killed);

                        this._overlay.playScene(context, killed ? 'fade_in_game_over' : 'fade_in_black', killed ? 4 : 0.5);
                    });
                }, killed ? 0 : 500);
            }
        }
    }

    _createSegmentFactories(context) {
        const d2r = x => x * Math.PI / 180;
        const create = callback => {
            this._segmentFactories.push(callback);
        };

        // Start padding
        create(() => this._road.createSegment('Forest', d2r(0), -1, {
        }));

        for (let loop = 0; loop < 6; loop++) {
            // Shared
            create(() => this._road.createSegment('Forest', d2r(0), -0.3, {
                handleEntered: () => {
                    if (loop > 0) {
                        AudioSystem.play('effect__road_loop');
                        AudioSystem.stop('ambiance', 0.5);

                        this._overlay.setContrast(0.8, 0.8, 0.8, 1);

                        this._looping = true;

                        context.time.setTimeout(() => {
                            this._looping = false;

                            this._checkpointAmbianceName = loop > 2 ? ['ambiance__forest', 'ambiance__forest_after_hunt'] : ['ambiance__forest'];
                            this._checkpointSegmentIndex = this._resturantLoopSegmentIndex[loop];

                            this.reset(context, true);

                            this._environment.resetSkybox();

                            this._player.setBagMode(loop < 1 ? 0 : loop < 3 ? 1 : 2);
                        }, 2000);
                    }
                },
                enteredDistance: 0.1,
            }));
            create(() => this._road.createSegment('Forest', d2r(0), 0, {
            }));
            create(() => this._road.createSegment('Forest', d2r(0), 0, {
            }));
            create(() => this._road.createSegment('Forest', d2r(20), 0, {
            }));
            create(() => {
                this._road.createSegment('ForestResturant', d2r(0), 0, {
                    resturant: loop < 2 ? 'open' : loop === 2 ? 'closed' : loop < 5 ? 'abandoned' : 'bleeding',
                    enteredDistance: 0.2,
                });

                if (loop === 0) {
                    this._overlay.playScene(context, 'fade_in_black', 3, () => {
                        this._overlay.playScene(context, 'controls', Infinity);
                    });
                }

                if (loop === 5) {
                    this._environment.setEnvironment('tuonela');
                }

                if (loop > 0 && loop < 5) {
                    this._overlay.playScene(context, 'fade_in_black', 2, () => {
                        this._overlay.playScene(context, 'loop_' + loop, 7);
                    });
                }
            });

            this._resturantLoopSegmentIndex.push(this._segmentFactories.length - 1);

            create(() => this._road.createSegment('Forest', d2r(-10), -0.5, {
                useLight: loop !== 3,
                handleEntered: () => {
                    if (loop === 0) {
                        AudioSystem.play('ambiance__forest', 1, true, 'ambiance');

                        this._overlay.playScene(context, 'clear');

                        context.app.constructor.setCreditsVisibility(false, false);
                    }

                    if (loop === 1) {
                        this._spirits.playScene(context, 'behind_player');
                    }

                    if (loop === 3) {
                        this._ghost.playScene(context, 'behind_player');
                    }

                    if (loop === 5) {
                        this._overlay.playScene(context, 'loop_5', 7);
                    }
                },
                enteredDistance: 0.5,
            }));
            create(() => this._road.createSegment('Forest', d2r(-15), -1, {
                useLight: loop !== 3,
            }));
            create(() => this._road.createSegment('Forest', d2r(30), -0.5, {
                useLight: loop !== 3,
            }));
            create(() => {
                this._road.createSegment('Forest', d2r(0), -1, {
                    useLight: true,
                    handleEntered: () => {
                        if (loop === 0) {
                            AudioSystem.play('music__intro');

                            this._overlay.playScene(context, 'title', 7);
                        }

                        if (loop === 2) {
                            this._player.showDeadHands();
                        }

                        if (loop === 4) {
                            this._spirits.playScene(context, 'surround_player');
                        }
                    },
                });
            });

            if (loop < 5) {
                create(() => this._road.createSegment('ForestSign', d2r(5), 0, {
                    sign: loop < 3 ? 'place_2' : loop === 3 ? 'place_3' : 'place_1',
                }));
                create(() => this._road.createSegment('Forest', d2r(20), 0.5, {
                    useLight: true,
                }));
                create(() => {
                    this._road.createSegment('ForestField', d2r(0), 0, {
                        handleEntered: () => {
                            if (loop === 4) {
                                this._player.slowDown(4);
                            }
                        },
                        enteredDistance: 0.2,
                    });

                    this._scarecrow.playScene(context, loop === 0 ? 'stare_very_far'
                        : loop === 1 ? 'stare_far' : loop === 2 ? 'stare_medium' : loop === 4 ? 'stare_near' : 'gone');
                });
                create(() => this._road.createSegment('Forest', d2r(30), 0, {
                    useLight: true,
                    handleEntered: () => {
                        this._scarecrow.reset(context);

                        if (loop === 4) {
                            this._manyfaces.playScene(context, 'in_front');
                        }
                    },
                }));
                create(() => this._road.createSegment('Forest', d2r(-10), -1, {
                    useLight: true,
                }));
                create(() => this._road.createSegment('Forest', d2r(-50), 1, {
                    useLight: true,
                }));
                create(() => this._road.createSegment('Forest', d2r(15), 0.5, {
                    useLight: true,
                }));
                create(() => {
                    this._checkpointSegmentIndex = this._road.createSegment('Forest', d2r(-5), -0.5, {
                        handleEntered: () => {
                            if (loop === 1) {
                                this._spirits.reset(context);
                            }

                            if (loop < 4) {
                                this._car.playScene(context, loop < 2 ? 'drive_by_calm'
                                    : loop === 2 ? 'drive_by_screaming' : 'drive_by_dead');
                            }
                        },
                    }).index;
                });
                create(() => this._road.createSegment('Forest', d2r(5), 0, {
                }));
                create(() => this._road.createSegment('Forest', d2r(3), -0.5, {
                }));
                create(() => this._road.createSegment('Forest', d2r(0), 0, {
                    handleEntered: () => {
                        if (loop === 4) {
                            this._manyfaces.reset(context);
                            this._spirits.reset(context);
                        }
                    }
                }));

                // Not for tunnel loop
                if (loop !== 4) {
                    create(() => this._road.createSegment('Forest', d2r(-5), 0.5, {
                         useLight: true,
                    }));
                    create(() => this._road.createSegment('Forest', d2r(-20), 1.5, {
                        useLight: false,
                    }));
                    create(() => this._road.createSegment('Forest', d2r(20), 0, {
                        useLight: true,
                    }));
                    create(() => this._road.createSegment('ForestBike', d2r(0), 0, {
                        bike: loop < 3,
                        blood: loop > 0,
                        bloodPool: loop === 2,
                        bloodTrail: loop > 0,
                    }));
                    create(() => this._road.createSegment('Forest', d2r(-5), -0.5, {
                        useLight: loop !== 2,
                        handleEntered: () => {
                            if (loop === 3) {
                                this._ghost.playScene(context, 'biking');
                            }
                        },
                        enteredDistance: 0.5,
                    }));
                    create(() => {
                        const segment = this._road.createSegment('Forest', d2r(-10), -1.5, {
                            useLight: loop !== 2 && loop !== 3,
                        });
                        if (loop === 1) {
                            this._ghost.playScene(context, 'walk_away', segment);
                        }
                    });
                    create(() => this._road.createSegment('Forest', d2r(-50), -1.5, {
                        useLight: false,
                        handleEntered: () => {
                            if (loop === 0) {
                                this._manyfaces.playScene(context, 'in_front');
                            }

                            if (loop === 2) {
                                this._train.playScene(context, 'ghost_reveal');
                            }

                            if (loop === 3) {
                                this._ghost.reset(context);
                            }
                        },
                    }));
                    create(() => this._road.createSegment('Forest', d2r(-5), -0.5, {
                        useLight: false,
                    }));
                    create(() => {
                        const segment = this._road.createSegment('ForestCrossing', d2r(0), 0, {
                            useLight: loop !== 2,
                            handleEntered: () => {
                                if (loop === 2) {
                                    this._ghost.playScene(context, 'reveal', segment);
                                }
                            },
                            enteredDistance: 0.2,
                        });
                        this._checkpointSegmentIndex = segment.index;
                    });
                    create(() => this._road.createSegment('Forest', d2r(20), -0.5, {
                        handleEntered: () => {
                            if (loop === 2) {
                                this._ghost.playScene(context, 'hunting_start');
                            }
                        },
                    }));
                }
            }

            // Dark forest
            if (loop === 2) {
                [[-10, -0.5, 'Forest'], [-20, -0.6, 'ForestTree1'], [-30, -0.7, 'Forest'], [-40, -0.8, 'ForestTree2'], [40, 0.5, 'Forest'], [20, 0.5, 'Forest'], [-30, -1, 'Forest'],
                    [70, 0.5, 'ForestTree1'], [70, 0.5, 'Forest'], [70, 0.5, 'ForestTree2'], [70, -0.5, 'Forest'], [40, -0.6, 'Forest'], [30, -0.8, 'Forest'], [20, 0.2, 'ForestTree1'], [10, 0.1, 'Forest']].forEach(p =>
                    create(() => this._road.createSegment(p[2], d2r(p[0]), p[1], {
                    })));
                create(() => this._road.createSegment('Forest', d2r(0), 0, {
                    handleEntered: () => {
                        this._ghost.stop();

                        this._overlay.setContrast(0.5, 0.5, 0.5, 5);
                    },
                }));
            }

            // Bridge
            if (loop === 3) {
                create(() => this._road.createSegment('ForestSign', d2r(40), -0.5, {
                    sign: 'dig',
                }, 1, 1.3));
                create(() => this._road.createSegment('TunnelEntrance', d2r(0), 0, {
                    handleEntered: () => {
                        AudioSystem.stop('ambiance', 5);
                    },
                }, 1, 0.865, 0.22));
                create(() => this._road.createSegment('Bridge', d2r(10), 0.1, {
                    handleEntered: () => {
                        this._checkpointAmbianceName = ['ambiance__bridge'];

                        AudioSystem.play('ambiance__bridge', 1, true, 'ambiance', 0, 2);
                    },
                    useLight: true,
                }, 1, 1, -0.12));
                create(() => this._road.createSegment('Bridge', d2r(5), 0.3, {
                    useLight: true,
                }));
                create(() => this._road.createSegment('Bridge', d2r(0), -0.3, {
                    useLight: true,
                    handleEntered: () => {
                        this._spirits.playScene(context, 'approach_at_speed');
                    },
                }));
                [[10, 0.2], [-20, 0.1], [-10, -0.3], [-5, 0.3], [10, 0.2], [20, -0.2]].forEach(p =>
                    create(() => this._road.createSegment('Bridge', d2r(p[0]), p[1], {
                    })));
                create(() => {
                    this._checkpointSegmentIndex = this._road.createSegment('Bridge', d2r(-20), 0, {
                        handleEntered: () => {
                            this._car.playScene(context, 'chase');

                            this._spirits.stop();
                        },
                    }).index - 1;
                });
                [[10, 0.2], [-20, 0.1], [-10, -0.3], [-5, 0.3], [10, 0.2], [20, -0.2]].forEach(p =>
                    create(() => this._road.createSegment('Bridge', d2r(p[0]), p[1], {
                    })));
                create(() => this._road.createSegment('Bridge', d2r(-10), -0.3, {
                    sign: 'dig',
                    handleEntered: () => {
                        this._spirits.reset(context);
                    },
                }));
                for (let i = 0; i < 2; i++) {
                    [[10, 0.2, 'BridgeCracks1'], [-20, 0.1, 'Bridge'], [-10, -0.3, 'BridgeCracks2'],
                        [-5, 0.3, 'BridgeCracks1'], [10, 0.2, 'Bridge'], [20, -0.2, 'BridgeCracks3']].forEach(p =>
                        create(() => this._road.createSegment(p[2], d2r(p[0]), p[1], {
                        })));
                }
                create(() => this._road.createSegment('BridgeCracks4', d2r(0), 0, {
                    handleEntered: () => {
                        AudioSystem.stop('ambiance', 5);
                        AudioSystem.play('ambiance__forest', 1, true, 'ambiance', 0, 5);

                        this._car.stop();

                        this._overlay.setContrast(0.5, 0.5, 0.5, 5);
                    },
                }));
                create(() => this._road.createSegment('Bridge', d2r(-10), -0.3, {
                }));
                create(() => this._road.createSegment('Bridge', d2r(-5), -1, {
                    handleEntered: () => {
                        this._car.reset(context);
                    },
                }));
                create(() => this._road.createSegment('Bridge', d2r(0), -2, {
                }));
                create(() => this._road.createSegment('Forest', d2r(30), 0, {
                }, 1.12, 1, -0.1));
            }

            // Tunnel
            if (loop === 4) {
                create(() => this._road.createSegment('Forest', d2r(70), -0.5, {
                }));
                create(() => this._road.createSegment('Forest', d2r(70), -2, {
                }));
                create(() => this._road.createSegment('Forest', d2r(50), -3, {
                }));
                create(() => this._road.createSegment('Forest', d2r(30), -4, {
                }));
                create(() => this._road.createSegment('Forest', d2r(30), -4, {
                }, 1, 1.3));
                create(() => this._road.createSegment('TunnelEntrance', d2r(30), -3, {
                    handleEntered: () => {
                        AudioSystem.stop('ambiance', 5);
                    },
                    useLight: true,
                    giant: true,
                }, 1, 1, 0.22));
                create(() => this._road.createSegment('Tunnel', d2r(30), -3, {
                    useLight: true,
                    handleEntered: () => {
                        this._checkpointAmbianceName = ['ambiance__tunnel'];

                        AudioSystem.play('ambiance__tunnel', 1, true, 'ambiance', 0, 2);
                    },
                }));
                create(() => this._road.createSegment('Tunnel', d2r(30), -2, {
                    useLight: true,
                    handleEntered: () => {
                        this._environment.setEnvironment('tunnel');
                    },
                }));
                create(() => this._road.createSegment('Tunnel', d2r(20), -1, {
                    useLight: true,
                }));
                create(() => this._road.createSegment('Tunnel', d2r(10), -0.5, {
                    useLight: true,
                }));
                create(() => this._road.createSegment('Tunnel', d2r(0), -0.5, {
                }));
                create(() => this._road.createSegment('Tunnel', d2r(-5), -0.5, {
                    useLight: true,
                    sign: 'bike',
                }));
                create(() => this._road.createSegment('Tunnel', d2r(-5), -0.2, {
                    useLight: true,
                    handleEntered: () => {
                        this._manyfaces.playScene(context, 'drive_by');
                    },
                }));
                create(() => this._road.createSegment('Tunnel', d2r(45), -0.5, {
                }));
                create(() => this._road.createSegment('Tunnel', d2r(20), -0.3, {
                    useLight: true,
                }));
                create(() => this._road.createSegment('Tunnel', d2r(5), -0.1, {
                }));
                create(() => {
                    this._checkpointSegmentIndex = this._road.createSegment('Tunnel', d2r(0), -0.3, {
                    }).index;
                });
                create(() => {
                    const segment = this._road.createSegment('Tunnel', d2r(5), -0.1, {
                        useLight: true,
                        handleEntered: () => {
                            AudioSystem.stop('ambiance', 0.5);
                            AudioSystem.play('ambiance__giant_chase', 1, true, 'ambiance', 0, 2);

                            this._ghost.playScene(context, 'chase', segment);

                            this._overlay.setContrast(0.6, 0.5, 0.5, 40);
                        },
                        enteredDistance: 0.6,
                    });
                });
                create(() => this._road.createSegment('Tunnel', d2r(20), -0.3, {
                }));
                create(() => this._road.createSegment('Tunnel', d2r(-30), -0.5, {
                    useLight: true,
                }));
                create(() => this._road.createSegment('Tunnel', d2r(30), -0.3, {
                    useLight: true,
                    handleEntered: () => {
                        this._manyfaces.playScene(context, 'crowding');
                    },
                }));
                for (let i = 0; i < 2; i++) {
                    [[30, -0.5, 'Tunnel'], [-30, -0.5, 'TunnelBarricade1'], [-20, -0.5, 'Tunnel'],
                    [-20, -0.5, 'Tunnel'], [30, -0.5, 'TunnelBarricade2'], [-30, -0.5, 'Tunnel']].forEach((p, j) =>
                        create(() => this._road.createSegment(p[2], d2r(p[0]), p[1], {
                            useLight: j % 3 !== 0,
                        })));
                }
                create(() => this._road.createSegment('Tunnel', d2r(-20), -0.5, {
                    handleEntered: () => {
                        this._manyfaces.stop();
                    }
                }));
                create(() => this._road.createSegment('Tunnel', d2r(-10), -0.3, {
                    useLight: true,
                }));
                create(() => this._road.createSegment('Tunnel', d2r(-5), 0, {
                    useLight: true,
                }));
                create(() => this._road.createSegment('SmallTunnelEntrance', d2r(0), -0.5, {
                    handleEntered: () => {
                        AudioSystem.stop('ambiance', 3);
                        AudioSystem.play('ambiance__small_tunnel', 1, true, 'ambiance', 0, 2);

                        this._ghost.stop();

                        this._arms.playScene(context, 'grab_from_walls');

                        this._overlay.setContrast(0.5, 0.6, 0.6, 10);
                    }
                }));
                create(() => this._road.createSegment('SmallTunnel', d2r(-30), -2, {
                }));
                create(() => this._road.createSegment('SmallTunnel', d2r(30), -3, {
                    handleEntered: () => {
                        this._ghost.reset(context);
                        this._manyfaces.reset(context);
                    },
                }));
                create(() => this._road.createSegment('SmallTunnel', d2r(20), -3, {
                }));
                create(() => this._road.createSegment('SmallTunnel', d2r(-20), -3, {
                }));
                create(() => this._road.createSegment('SmallTunnel', d2r(-30), -3, {
                    handleEntered: () => {
                        this._car.playScene(context, 'chase_started');
                    },
                }));
                [[30, -2], [-30, -3], [-50, -1], [-30, -3], [30, -2], [-45, -2]].forEach((p, j) =>
                    create(() => this._road.createSegment('SmallTunnel', d2r(p[0]), p[1], {
                    })));
                create(() => this._road.createSegment('SmallTunnel', d2r(-10), -1, {
                    handleEntered: () => {
                        this._car.reset(context);
                    },
                }));
                create(() => this._road.createSegment('SmallTunnel', d2r(-5), -0.5, {
                }));
                create(() => this._road.createSegment('SmallTunnel', d2r(10), -0.5, {
                    handleEntered: () => {
                        this._car.playScene(context, 'chicken_race');
                    },
                }));
                for (let i = 0; i < 10; i++) {
                    create(() => this._road.createSegment('SmallTunnel', d2r(5), -0.5, {
                    }));
                }
                create(() => this._road.createSegment('Forest', d2r(0), -3, {
                }));
            }

            // Tuonela
            if (loop === 5) {
                create(() => this._road.createSegment('Tuonela', d2r(0), 0, {
                }, 0.7));
                create(() => this._road.createSegment('Tuonela', d2r(0), 0, {
                    handleEntered: () => {
                        this._spirits.playScene(context, 'follow_end');
                    },
                }));
                for (let i = 0; i < 10; i++) {
                    create(() => this._road.createSegment('Tuonela', d2r(48), -3, {
                    }, 1 - i * 0.04, 1 - (i + 1) * 0.04));
                }
                create(() => this._road.createSegment('Tuonela', d2r(10), -2, {
                }, 0.6, 0.5));
                create(() => this._road.createSegment('Tuonela', d2r(5), -1, {
                }, 0.5, 0.4));
                create(() => this._road.createSegment('Tuonela', d2r(2), -0., {
                }, 0.4, 0.6));
                create(() => this._road.createSegment('Tuonela', d2r(0), 2, {
                    handleEntered: () => {
                        this._player.slowDown(1000);
                    },
                    enteredDistance: 0.3,
                }, 0.6, 1));
                create(() => this._road.createSegment('TuonelaThrone', d2r(0), 0, {
                    handleEntered: () => {
                        this._player.playScene(context, 'trapped');

                        context.time.setTimeout(() => {
                            this._ghost.playScene(context, 'trap');
                            this._tuoni.playScene(context, 'trap');
                        }, 6000);
                    },
                    enteredDistance: 0.9,
                }));
                for (let i = 0; i < 3; i++) {
                    create(() => this._road.createSegment('Tuonela', d2r(0), -10, {
                    }));
                }

                // Ending
                create(() => this._road.createSegment('Forest', d2r(-20), 1.5, {
                }));
                create(() => this._road.createSegment('Forest', d2r(20), 0, {
                }));
                create(() => {
                    this._road.createSegment('ForestBike', d2r(0), 0, {
                        bike: true,
                        blood: true,
                        bloodTrack: true,
                        car: true,
                        woman: true,
                    });
                });
                this._endingSegmentIndex = this._segmentFactories.length - 1;
                create(() => this._road.createSegment('Forest', d2r(-5), -0.5, {
                }));
                create(() => this._road.createSegment('Forest', d2r(-10), -1.5, {
                }));
                create(() => this._road.createSegment('Forest', d2r(0), 0, {
                }));
            }
        }
    }


}

Director._init();
Director.p_register();
