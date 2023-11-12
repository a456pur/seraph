/**
 * @file input.class.js
 * @version 1.0.0
 */

export default class Input {
    static _init() {
        Input._keyDown = new Set();
        Input._keyUp = new Set();
        Input._key = new Set();

        Input._mouseButtonDown = new Set();
        Input._mouseButtonUp = new Set();
        Input._mouseButton = new Set();

        Input._cursorPosition = { x: 0, y: 0 };

        Input._enableContextMenu = true;
        Input._enableKeyScroll = true;

        Input._pointerLockElement = null;
        Input._isPointerLocked = false;

        Input._scrollKeyCodes = [32, 37, 38, 39, 40];

        Input._lastDX = 0;

        window.addEventListener('load', Input._handleLoad);
    }

    static _handleLoad() {
        const cursorMove = (x, y) => {
            Input._cursorPosition.x = x;
            Input._cursorPosition.y = y;
        };

        document.addEventListener('keydown', e => {
            if (!Input._enableKeyScroll &&
                Input._scrollKeyCodes.includes(e.keyCode)) {
                e.preventDefault();
            }

            if (e.repeat !== undefined && e.repeat) {
                return;
            }

            Input._keyDown.add(e.keyCode);
            Input._key.add(e.keyCode);
        }, false);

        document.addEventListener('keyup', e => {
            if (!Input._enableKeyScroll &&
                Input._scrollKeyCodes.includes(e.keyCode)) {
                e.preventDefault();
            }

            if (e.repeat !== undefined && e.repeat) {
                return;
            }

            if (Input._key.has(e.keyCode)) {
                Input._keyUp.add(e.keyCode);
                Input._key.delete(e.keyCode);
            }
        }, false);

        document.addEventListener('mousedown', e => {
            const target = e.target || e.srcElement;
            if (e.button === 0 && !Input._isPointerLocked &&
                target === Input._pointerLockElement) {
                Input._pointerLockElement.requestPointerLock();
            }

            Input._mouseButtonDown.add(e.button);
            Input._mouseButton.add(e.button);
        }, false);

        document.addEventListener('mouseup', e => {
            if (Input._mouseButton.has(e.button)) {
                Input._mouseButtonUp.add(e.button);
                Input._mouseButton.delete(e.button);
            }
        }, false);

        document.addEventListener('mousemove', e => {
            if (Input._isPointerLocked) {
                const dx = e.movementX !== undefined ? e.movementX : e.mozMovementX !== undefined ? e.mozMovementX : e.webkitMovementX !== undefined ? e.webkitMovementX : 0;
                const dy = e.movementY !== undefined ? e.movementY : e.mozMovementY !== undefined ? e.mozMovementY : e.webkitMovementY !== undefined ? e.webkitMovementY : 0;

                // Hack: Fix drifting X bug in Firefox
                const ignoreX = Input._lastDX === 1 && dx === 1;
                Input._lastDX = dx;

                cursorMove(Input._cursorPosition.x + (ignoreX ? 0 : dx), Input._cursorPosition.y + dy);
            } else {
                cursorMove(e.clientX, e.clientY);
            }
        }, false);

        document.addEventListener('contextmenu', e => {
            if (!Input._enableContextMenu) {
                e.preventDefault();
            }
        }, false);

        document.addEventListener('pointerlockchange', () => {
            Input._isPointerLocked = document.pointerLockElement === Input._pointerLockElement;
        }, false);

        document.addEventListener('pointerlockerror', () => {
            console.error('Unable to use Pointer Lock API');
        }, false);
    }

    static getKeyDown(key) {
        return Input._keyDown.has(key);
    }

    static getKeyUp(key) {
        return Input._keyUp.has(key);
    }

    static getKey(key) {
        return Input._key.has(key);
    }

    static getMouseButtonDown(button = 0) {
        return Input._mouseButtonDown.has(button);
    }

    static getMouseButtonUp(button = 0) {
        return Input._mouseButtonUp.has(button);
    }

    static getMouseButton(button = 0) {
        return Input._mouseButton.has(button);
    }

    static getCursorPosition(target) {
        if (target === undefined) {
            throw new Error('No target object supplied (target = { x, y })');
        }

        target.x = Input._cursorPosition.x;
        target.y = Input._cursorPosition.y;
        return target;
    }

    static setContextMenuEnabled(enabled) {
        Input._enableContextMenu = enabled;
    }

    static setPointerLockElement(element = null) {
        if (element === Input._pointerLockElement) {
            return;
        }

        if (Input._isPointerLocked) {
            document.exitPointerLock();
        }

        Input._pointerLockElement = element;
    }

    static setKeyScrollEnabled(enabled) {
        Input._enableKeyScroll = enabled;
    }

    static exitPointerLock() {
        document.exitPointerLock();
    }

    static isPointerLocked() {
        return Input._isPointerLocked;
    }

    static resetState() {
        Input._mouseButtonDown.clear();
        Input._mouseButtonUp.clear();
        Input._keyDown.clear();
        Input._keyUp.clear();
    }
}

Input._init();
