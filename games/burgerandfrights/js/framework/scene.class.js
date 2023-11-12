/**
 * @file scene.class.js
 * @version 1.0.0
 */

import Entity from './entity.class.js';

export default class Scene {
    constructor(context) {
        this._entities = [];
    }

    addEntity(entity) {
        if (!this._entities.includes(entity)) {
            this._entities.push(entity);
        }
    }

    clearEntities(context) {
        this._entities.forEach(entity => {
            entity.destroy(context);
        });
    }

    findEntityOfType(typeOrTypeName) {
        const type = typeof typeOrTypeName === 'string' ?
            Entity.getTypeByName(typeOrTypeName) : typeOrTypeName;

        for (let i = 0; i < this._entities.length; i++) {
            const entity = this._entities[i];
            if (entity instanceof type && !entity.getDestroyed()) {
                return this._entities[i];
            }
        }
        return null;
    }

    findEntitiesOfType(typeOrTypeName) {
        const type = typeof typeOrTypeName === 'string' ?
            Entity.getTypeByName(typeOrTypeName) : typeOrTypeName;

        return this._entities.filter(entity => entity instanceof type && !entity.getDestroyed());
    }

    handleResize(context) {
        this._entities.forEach(entity => {
            entity.handleResize(context);
        });
    }

    update(context) {
        this._entities.sort(Entity.updatePrioritySortFunc);

        this._entities.forEach(entity => {
            if (!entity.getDestroyed()) {
                entity.update(context);
            }
        });

        for (let i = this._entities.length - 1; i > -1; i--) {
            const entity = this._entities[i];
            if (entity.getDestroyed()) {
                this._entities.splice(i, 1);
            }
        }
    }
}

