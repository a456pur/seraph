/**
 * @file entity.class.js
 * @version 1.1.0
 */

export default class Entity {
    static _init() {
        if (this !== Entity) {
            throw new Error('Static _init called from wrong class');
        }

        Entity._typeByName = new Map();
    }

    constructor(context, scene, options = Object.create(null)) {
        this._scene = scene;

        this.p_updatePriority = options.updatePriority === undefined ? 0 : options.updatePriority;

        this._destroyed = false;

        scene.addEntity(this);
    }

    getScene() {
        return this._scene;
    }

    getDestroyed() {
        return this._destroyed;
    }

    destroy(context) {
        this._destroyed = true;
    }

    handleResize(context) {
    }

    update(context) {
    }

    static p_register() {
        Entity._typeByName.set(this.name, this);
    }

    static createByName(name, context, scene, options) {
        return new (Entity.getTypeByName(name))(context, scene, options);
    }

    static getTypeByName(name) {
        const type = Entity._typeByName.get(name);
        if (type === undefined) {
            throw new Error(`Entity type "${name}" has not been registered`);
        }
        return type;
    }

    static updatePrioritySortFunc(a, b) {
        return b.p_updatePriority - a.p_updatePriority;
    }
}

Entity._init();
