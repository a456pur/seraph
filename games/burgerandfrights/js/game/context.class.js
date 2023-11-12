/**
 * @file context.class.js
 * @version 1.0.0
 */

export default class Context {
    constructor(app, time, renderer) {
        this.app = app;
        this.time = time;
        this.renderer = renderer;
    }
}
