/**
 * @file road.class.js
 * @version 1.0.0
 */

import Entity from '../framework/entity.class.js';
import ModelManager from '../framework/modelmanager.class.js';

import Utility from '../game/utility.class.js';

import * as THREE from '../lib/three.js/three.module.js';

export default class Road extends Entity {
    static _init() {
        Road.segmentsMax = 6;

        const roadLightColor = 0xf1a134;
        const roadLightIntensity = 2;
        const roadLightConeOpacity = 0.02;
        const roadLightDecay = 0.6;

        const updateLightCones = root => {
            root.traverse(obj => {
                if (obj.material && obj.material.transparent) {
                    obj.material.opacity = roadLightConeOpacity;
                    obj.material.side = THREE.FrontSide;
                }
            });
        };

        Road._segmentTypes = new Map([
            ['Forest', {
                count: Road.segmentsMax,
                laneCenter: 0,
                laneOffset: 1.5,
                nonDoubleSided: [],
                setup: (environment, segment, options) => {
                    segment.find('LightRoot').visible = !!options.useLight;
                    if (options.useLight) {
                        segment.light = environment.getPointLight(roadLightColor, roadLightIntensity, 4.3, roadLightDecay);
                        segment.find('LightContainer').add(segment.light);
                        updateLightCones(segment.find('LightRoot'));
                    }
                },
            }],
            ['ForestSign', {
                count: 1,
                laneCenter: 0,
                laneOffset: 1.5,
                nonDoubleSided: ['SignPlace1', 'SignPlace2', 'SignPlace3'],
                setup: (environment, segment, options) => {
                    segment.light = environment.getPointLight(roadLightColor, roadLightIntensity, 5.5, roadLightDecay);
                    segment.find('LightContainer').add(segment.light);
                    updateLightCones(segment.find('LightRoot'));
                    segment.find('SignPlace1').visible = options.sign === 'place_1';
                    segment.find('SignPlace2').visible = options.sign === 'place_2';
                    segment.find('SignPlace3').visible = options.sign === 'place_3';
                },
            }],
            ['ForestCrossing', {
                count: 1,
                laneCenter: 0,
                laneOffset: 1.5,
                nonDoubleSided: ['Sign013', 'Sign014'],
                setup: (environment, segment, options) => {
                    segment.find('LightRoot').visible = !!options.useLight;
                    if (options.useLight) {
                        segment.light = environment.getPointLight(roadLightColor, roadLightIntensity, 5, roadLightDecay);
                        segment.find('LightContainer').add(segment.light);
                        updateLightCones(segment.find('LightRoot'));
                    }
                },
            }],
            ['ForestBike', {
                count: 1,
                laneCenter: 0,
                laneOffset: 1.5,
                nonDoubleSided: [],
                setup: (environment, segment, options) => {
                    segment.light = environment.getPointLight(roadLightColor, roadLightIntensity, 4.3, roadLightDecay);
                    segment.find('LightContainer').add(segment.light);
                    updateLightCones(segment.find('LightRoot'));
                    segment.find('BloodPuddle').visible = !!options.blood;
                    segment.find('BloodTrail').visible = !!options.bloodTrail;
                    segment.find('BloodTrack').visible = !!options.bloodTrack;
                    segment.find('BloodPool').visible = !!options.bloodPool;
                    segment.find('Car').visible = !!options.car;
                    segment.find('Bicycle').visible = !!options.bike;
                    segment.find('Woman').visible = !!options.woman;
                },
            }],
            ['ForestResturant', {
                count: 1,
                laneCenter: 0,
                laneOffset: 7,
                nonDoubleSided: [],
                setup: (environment, segment, options) => {
                    segment.light = environment.getPointLight(
                        options.resturant === 'bleeding' ? 0xff0000 : 0xff6666,
                        options.resturant === 'open' ? 1 : 0.3, 10, 1);
                    segment.find('LightContainer').add(segment.light);
                    segment.find('ResturantOpen').visible = options.resturant === 'open';
                    segment.find('ResturantClosed').visible = options.resturant === 'closed';
                    segment.find('ResturantAbandoned').visible = options.resturant === 'abandoned';
                    segment.find('ResturantBleeding').visible = options.resturant === 'bleeding';
                },
            }],
            ['ForestField', {
                count: 1,
                laneCenter: 0,
                laneOffset: 1.5,
                nonDoubleSided: [],
                setup: (environment, segment, options) => {
                    segment.light = environment.getPointLight(0x001659, 2, 20, 1);
                    segment.find('LightContainer').add(segment.light);
                },
            }],
            ['ForestTree1', {
                count: 1,
                laneCenter: 0,
                laneOffset: 1.5,
                nonDoubleSided: [],
                setup: (environment, segment, options) => {
                },
            }],
            ['ForestTree2', {
                count: 1,
                laneCenter: 0,
                laneOffset: -1.5,
                nonDoubleSided: [],
                setup: (environment, segment, options) => {
                },
            }],
            ['Bridge', {
                count: Road.segmentsMax,
                laneCenter: 0,
                laneOffset: 1.5,
                nonDoubleSided: ['SignDig'],
                setup: (environment, segment, options) => {
                    segment.find('LightRoot').visible = !!options.useLight;
                    if (options.useLight) {
                        segment.light = environment.getPointLight(roadLightColor, roadLightIntensity, 4.3, roadLightDecay);
                        segment.find('LightContainer').add(segment.light);
                        updateLightCones(segment.find('LightRoot'));
                    }
                    segment.find('SignDig').visible = options.sign === 'dig';
                },
            }],
            ['BridgeCracks1', {
                count: 2,
                laneCenter: 0,
                laneOffset: 1.5,
                nonDoubleSided: [],
                setup: (environment, segment, options) => {
                },
            }],
            ['BridgeCracks2', {
                count: 2,
                laneCenter: -2,
                laneOffset: 0,
                nonDoubleSided: [],
                setup: (environment, segment, options) => {
                },
            }],
            ['BridgeCracks3', {
                count: 2,
                laneCenter: 2,
                laneOffset: 0,
                nonDoubleSided: [],
                setup: (environment, segment, options) => {
                },
            }],
            ['BridgeCracks4', {
                count: 1,
                laneCenter: 0,
                laneOffset: 0,
                nonDoubleSided: [],
                setup: (environment, segment, options) => {
                },
            }],
            ['Tunnel', {
                count: Road.segmentsMax,
                laneCenter: 0,
                laneOffset: 1.5,
                nonDoubleSided: ['SignBike'],
                setup: (environment, segment, options) => {
                    segment.find('LightRoot').visible = !!options.useLight;
                    if (options.useLight) {
                        segment.light = environment.getPointLight(roadLightColor, roadLightIntensity, 8, roadLightDecay);
                        segment.find('LightContainer').add(segment.light);
                        updateLightCones(segment.find('LightRoot'));
                    }
                    segment.find('SignBike').visible = options.sign === 'bike';
                },
            }],
            ['TunnelEntrance', {
                count: 1,
                laneCenter: 0,
                laneOffset: 1.5,
                nonDoubleSided: [],
                setup: (environment, segment, options) => {
                    segment.find('LightRoot').visible = !!options.useLight;
                    if (options.useLight) {
                        segment.light = environment.getPointLight(roadLightColor, roadLightIntensity, 8, roadLightDecay);
                        segment.find('LightContainer').add(segment.light);
                        updateLightCones(segment.find('LightRoot'));
                    }
                    segment.find('GiantGhost').visible = !!options.giant;
                },
            }],
            ['TunnelBarricade1', {
                count: 1,
                laneCenter: 2,
                laneOffset: 0,
                nonDoubleSided: [],
                setup: (environment, segment, options) => {
                },
            }],
            ['TunnelBarricade2', {
                count: 1,
                laneCenter: -2,
                laneOffset: 0,
                nonDoubleSided: [],
                setup: (environment, segment, options) => {
                },
            }],
            ['SmallTunnel', {
                count: Road.segmentsMax,
                laneCenter: 0,
                laneOffset: 0,
                nonDoubleSided: [],
                setup: (environment, segment, options) => {
                },
            }],
            ['SmallTunnelEntrance', {
                count: 1,
                laneCenter: 0,
                laneOffset: 0,
                nonDoubleSided: [],
                setup: (environment, segment, options) => {
                },
            }],
            ['Tuonela', {
                count: Road.segmentsMax,
                laneCenter: 0,
                laneOffset: 0,
                nonDoubleSided: [],
                setup: (environment, segment, options) => {
                    segment.light = environment.getPointLight(0xff0000, 0.5, 15, 2, 0, 5, 5);
                    segment.mesh.add(segment.light);
                },
            }],
            ['TuonelaThrone', {
                count: 1,
                laneCenter: 0,
                laneOffset: 0,
                nonDoubleSided: [],
                setup: (environment, segment, options) => {
                    segment.light = environment.getPointLight(0xff6666, 5, 20, 2, 0, 5, 5);
                    segment.mesh.add(segment.light);
                    segment.find('Chains').visible = false;
                },
            }],
        ]);

        Road._lengthPadding = 0.5;

        Road._tmpV20 = new THREE.Vector2();
        Road._tmpV30 = new THREE.Vector3();
        Road._tmpV31 = new THREE.Vector3();
        Road._tmpV32 = new THREE.Vector3();
        Road._tmpRaycaster = new THREE.Raycaster();
        Road._tmpArray = [];
    }

    constructor(context, scene, options = Object.create(null)) {
        options.updatePriority = 11;

        super(context, scene, options);

        const tScene = scene.getThreeScene();

        const gltfProps = ModelManager.getModel('props');

        const findByPrefix = (root, prefix) => {
            let found = null;

            root.traverse(obj => {
                if (!found && obj.name.indexOf(prefix) === 0) {
                    found = obj;
                }
            });

            return found;
        };

        Road._segmentTypes.forEach((type, name) => {
            const mesh = gltfProps.scene.getObjectByName(name);

            const navMesh = findByPrefix(mesh, 'NavMesh').removeFromParent();

            navMesh.geometry.computeBoundingBox();

            mesh.traverse(obj => {
                if (type.nonDoubleSided.includes(obj.name)) {
                    obj.material.side = THREE.FrontSide;
                }

                obj.material = Utility.replaceMaterial(obj.material, obj !== mesh);

                obj.frustumCulled = false;
            });

            const instances = Array.from({ length: type.count }, (_, j) => {
                const newMesh = mesh.clone();
                newMesh.name = mesh.name + j;
                newMesh.geometry = mesh.geometry.clone();

                const newNavMesh = new THREE.Mesh(navMesh.geometry.clone(), new THREE.MeshBasicMaterial());
                newNavMesh.name = navMesh.name + j;

                tScene.add(newMesh);

                newNavMesh.visible = false;

                const segment = {
                    type,
                    index: null,

                    find: prefix => findByPrefix(newMesh, prefix),

                    handleEntered: null,
                    rotation: 0,
                    heightOffset: 0,
                    nearScaleX: 1,
                    farScaleX: 1,
                    nearOffsetX: 0,
                    position: new THREE.Vector3(),
                    angle: 0,

                    light: null,

                    meshOriginal: mesh,
                    mesh: newMesh,

                    navMeshOriginal: navMesh,
                    navMesh: newNavMesh,

                    remove: () => {
                        if (segment.light !== null) {
                            segment.light.pool();
                            segment.light = null;
                        }

                        segment.mesh.removeFromParent();
                        segment.navMesh.removeFromParent();

                        this._segments[segment.index] = undefined;

                        segment.index = null;
                    },

                    twistPosition: position => {
                        const distance = -position.z / type.length;
                        const scaleX = segment.nearScaleX * (1 - distance) + segment.farScaleX * distance;
                        const offsetX = segment.nearOffsetX * (1 - distance);

                        position.x = (position.x + offsetX) * scaleX;

                        const lastSegment = this._segments[segment.index - 1];
                        if (lastSegment === undefined) {
                            position.y += distance * segment.heightOffset;
                        } else {
                            const y0 = position.y + distance * lastSegment.heightOffset;
                            const y1 = position.y + distance * segment.heightOffset;
                            const t = Utility.easeInOutCubic(THREE.MathUtils.clamp(distance, 0, 1));

                            position.y = y0 * (1 - t) + y1 * t;
                        }

                        if (segment.rotation !== 0) {
                            const radius = type.length / segment.rotation;

                            const x = position.x - radius;
                            position.z = x * Math.sin(segment.rotation * distance);
                            position.x = radius + x * Math.cos(segment.rotation * distance);
                        }

                        return position;
                    },
                    toRoadPosition: (position, target) => {
                        const local = segment.navMesh.worldToLocal(Road._tmpV30.copy(position));

                        if (segment.rotation === 0) {
                            const distance = -local.z / type.length;
                            const scaleX = segment.nearScaleX * (1 - distance) + segment.farScaleX * distance;
                            const offsetX = segment.nearOffsetX * (1 - distance);

                            return target.set(local.x / scaleX - offsetX, THREE.MathUtils.clamp(distance, 0, 1));
                        }

                        const centerRadius = type.length / segment.rotation;
                        const dx = local.x - centerRadius;
                        const radius = Math.sqrt(dx * dx + local.z * local.z);
                        const x = centerRadius + (segment.rotation < 0 ? radius : -radius);

                        const distance = Math.asin(-local.z / radius) / Math.abs(segment.rotation);
                        const scaleX = segment.nearScaleX * (1 - distance) + segment.farScaleX * distance;
                        const offsetX = segment.nearOffsetX * (1 - distance);

                        return target.set(x / scaleX - offsetX, THREE.MathUtils.clamp(distance, 0, 1));
                    },
                };

                return segment;
            });

            type.name = name;
            type.length = -navMesh.geometry.boundingBox.min.z - Road._lengthPadding;
            type.instances = instances;
            type.getNextInstance = () => {
                instances.push(instances.shift());

                return instances[0];
            };
        });

        this._segments = [];
        this._activeSegments = [];

        this._playerRoadPosition = new THREE.Vector2();

        this._nextSegmentIndex = null;
        this._lastEnteredSegmentIndex = null;

        this._lastRaycastSegment = null;
    }

    reset(context, nextSegmentIndex, lastEnteredSegmentIndex) {
        this._nextSegmentIndex = nextSegmentIndex;
        this._lastEnteredSegmentIndex = lastEnteredSegmentIndex;
        this._playerRoadPosition.set(0, lastEnteredSegmentIndex + 0.5);

        Road._segmentTypes.forEach(type => {
            type.instances.forEach(segment => {
                if (segment.index === null) {
                    segment.mesh.removeFromParent();
                    segment.mesh.traverse(obj => {
                        obj.frustumCulled = true;
                    });
                }
            });
        });
    }

    getSegmentInstance(typeName) {
        return Road._segmentTypes.get(typeName).getNextInstance();
    }

    getNextSegmentIndex() {
        return this._nextSegmentIndex;
    }

    roadToWorldPosition(position, target) {
        const segment = this._segments[Math.floor(position.y)];
        if (segment === undefined) {
            return target.set(0, 0, 0);
        }
        const local = target.set(position.x, 0, -segment.type.length * (position.y % 1));
        return segment.mesh.localToWorld(segment.twistPosition(local));
    }

    getRoadSafeRespawnDistance(fromDistance, toDistance = fromDistance + 2, step = 0.02) {
        for (let distance = fromDistance; distance <= toDistance; distance += step) {
            const x = this.getRoadType(distance).laneOffset;
            const position = this.roadToWorldPosition(Road._tmpV20.set(x, distance), Road._tmpV30);

            if (this.getHeightAtPosition(position) !== null) {
                return distance;
            }
        }

        return fromDistance;
    }

    getRoadAngle(distance) {
        const segment = this._segments[Math.floor(distance)];
        return segment === undefined ? 0 : segment.angle + segment.rotation * (distance % 1) + Math.PI;
    }

    getRoadType(distance) {
        const segment = this._segments[Math.floor(distance)];
        return segment === undefined ? Road._segmentTypes.get('Forest') : segment.type;
    }

    getRoadDistanceMin() {
        return this._nextSegmentIndex - this._activeSegments.length + 1e-10;
    }

    getRoadDistanceMax() {
        return this._nextSegmentIndex - 1e-10;
    }

    getPlayerRoadPosition() {
        return this._playerRoadPosition;
    }

    getRoadDistanceBetween(d0, d1) {
        const dMin = d0 < d1 ? d0 : d1;
        const dMax = d0 < d1 ? d1 : d0;

        const iMin = Math.floor(dMin);
        const iMax = Math.floor(dMax);

        let distance = 0;

        for (let i = iMin; i <= iMax; i++) {
            const segment = this._segments[i];
            const length = segment === undefined ? 13 : segment.type.length;

            if (i === iMin && i === iMax) {
                distance += (dMax - dMin) * length;
            } else if (i === iMin) {
                distance += (1 - dMin + iMin) * length;
            } else if (i === iMax) {
                distance += (dMax - iMax) * length;
            } else {
                distance += length;
            }
        }

        return d0 < d1 ? distance : -distance;
    }

    getForwardSlopeAngle(object3d, distance = 1, samples = 2, maxDeltaHeight = 1) {
        const step = distance * 2 / (samples - 1);
        const start = object3d.localToWorld(Road._tmpV30.set(0, 0, -distance));
        const end = object3d.localToWorld(Road._tmpV31.set(0, 0, distance));

        let sum = 0;
        let count = 0;
        let lastHeight = null;

        for (let i = 0; i < samples; i++) {
            const position = Road._tmpV32.copy(start).lerp(end, i / (samples - 1));
            const height = this.getHeightAtPosition(position, false);
            if (lastHeight !== null && Math.abs(lastHeight - height) < maxDeltaHeight) {
                sum += (height - lastHeight) / step;
                count++;
            }
            lastHeight = height;
        }

        return count === 0 ? 0 : Math.atan(sum / count);
    }

    getHeightAtPosition(position, isPlayer = false) {
        const raycaster = Road._tmpRaycaster;

        raycaster.ray.origin.set(position.x, 100000, position.z);
        raycaster.ray.direction.set(0, -1, 0);

        const intersects = Road._tmpArray;
        intersects.length = 0;

        for (let i = -1; i < this._activeSegments.length; i++) {
            let segment;
            if (i === -1) {
                if (!this._activeSegments.includes(this._lastRaycastSegment)) {
                    continue;
                }
                segment = this._lastRaycastSegment;
            } else {
                segment = this._activeSegments[i]
                if (segment === this._lastRaycastSegment) {
                    continue;
                }
            }

            segment.navMesh.raycast(raycaster, intersects);

            if (intersects.length === 0) {
                continue;
            }

            const intersect = intersects[0];

            if (isPlayer) {
                segment.toRoadPosition(intersect.point, this._playerRoadPosition);
                const distance = this._playerRoadPosition.y;
                this._playerRoadPosition.y += segment.index;

                if (segment.index > this._lastEnteredSegmentIndex &&
                    distance >= segment.enteredDistance) {
                    this._lastEnteredSegmentIndex = segment.index;

                    if (segment.handleEntered !== null) {
                        segment.handleEntered();
                    }
                }
            }

            this._lastRaycastSegment = segment;

            return intersect.point.y;
        }

        return null;
    }

    clearSegments() {
        this._activeSegments.forEach(segment => {
            segment.remove();
        });
        this._activeSegments.length = 0;
    }

    createSegment(name, rotation = 0, heightOffset = 0, options = Object.create(null),
        nearScaleX = 1, farScaleX = 1, nearOffsetX = 0) {
        const tScene = this.getScene().getThreeScene();
        const type = Road._segmentTypes.get(name);

        if (this._activeSegments.length >= Road.segmentsMax) {
            this._activeSegments.shift().remove();
        }

        const lastSegment = this._activeSegments.length > 0 ? this._activeSegments[this._activeSegments.length - 1] : null;
        const segment = type.getNextInstance();
        if (this._activeSegments.includes(segment)) {
            throw new Error(`No more segments of type "${name}`);
        }
        this._activeSegments.push(segment);

        segment.index = this._nextSegmentIndex;
        this._segments[this._nextSegmentIndex++] = segment;

        tScene.add(segment.mesh);
        tScene.add(segment.navMesh);

        segment.handleEntered = options.handleEntered === undefined ? null : options.handleEntered;
        segment.enteredDistance = options.enteredDistance === undefined ? 0 : options.enteredDistance;
        segment.rotation = rotation;
        segment.heightOffset = heightOffset;
        segment.nearScaleX = nearScaleX;
        segment.farScaleX = farScaleX;
        segment.nearOffsetX = nearOffsetX;

        if (lastSegment === null) {
            segment.position.set(0, 100, 0);
            segment.angle = 0;
        } else {
            lastSegment.mesh.localToWorld(lastSegment.twistPosition(
                segment.position.set(0, 0, -lastSegment.type.length)));
            segment.angle = lastSegment.angle + lastSegment.rotation;
        }

        segment.mesh.position.copy(segment.position);
        segment.mesh.rotation.set(0, -segment.angle, 0);

        segment.navMesh.position.copy(segment.position);
        segment.navMesh.rotation.set(0, -segment.angle, 0);

        segment.mesh.updateMatrix();
        segment.navMesh.updateMatrix();

        segment.mesh.updateWorldMatrix(false, false);
        segment.navMesh.updateWorldMatrix(false, false);

        const radius = rotation === 0 ? 0 : type.length / rotation;

        [[segment.meshOriginal.geometry, segment.mesh.geometry],
            [segment.navMeshOriginal.geometry, segment.navMesh.geometry]].forEach(([geometry1, geometry2]) => {
                const original = geometry1.attributes.position;
                const position = geometry2.attributes.position;

                position.needsUpdate = true;

                for (let i = 0; i < position.count; i++) {
                    const point = segment.twistPosition(Road._tmpV30.set(
                        original.getX(i), original.getY(i), original.getZ(i)));

                    position.setXYZ(i, point.x, point.y, point.z);
                }

                geometry2.computeBoundingSphere();
                geometry2.computeBoundingBox();
            });

        segment.mesh.geometry.computeVertexNormals();

        segment.mesh.children.forEach(obj => {
            const objOriginal = segment.meshOriginal.getObjectByName(obj.name);
            if (objOriginal === undefined) {
                return;
            }

            obj.position.copy(objOriginal.position);
            obj.rotation.copy(objOriginal.rotation);
            obj.updateMatrix();

            const distance = segment.toRoadPosition(obj.getWorldPosition(Road._tmpV30), Road._tmpV20).y;

            segment.twistPosition(obj.position.copy(objOriginal.position));

            obj.rotateY(segment.rotation * -distance + Math.PI * 2);
            obj.updateMatrix();
        });

        segment.mesh.traverse(obj => {
            obj.updateMatrix();

            if (obj.material !== undefined) {
                obj.renderOrder = this._nextSegmentIndex;
            }
        });

        const environment = this.getScene().findEntityOfType('Environment');

        segment.type.setup(environment, segment, options);

        return segment;
    }
}

Road._init();
Road.p_register();
