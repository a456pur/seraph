/**
 * @file time.class.js
 * @version 1.0.0
 */

export default class Time {
    constructor() {
        this.timescale = 1;
        this.elapsedSeconds = 0;
        this.totalSeconds = 0;

        this._timeouts = [];
    }

    addElapsedSeconds(elapsedSeconds) {
        this.elapsedSeconds = elapsedSeconds * this.timescale;
        this.totalSeconds += elapsedSeconds * this.timescale;

        if (this._timeouts.length === 0) {
            return;
        }

        const length = this._timeouts.length;
        for (let i = 0; i < length; i++) {
            const timeout = this._timeouts[i];

            timeout.ms -= elapsedSeconds * this.timescale * 1000;

            if (!timeout.cleared && timeout.ms <= 0) {
                timeout.func(...timeout.args);
                timeout.cleared = true;
            }
        }

        for (let i = length - 1; i > -1; i--) {
            if (this._timeouts[i].cleared) {
                this._timeouts.splice(i, 1);
            }
        }
    }

    setTimeout(func, ms, ...args) {
        const timeout = { func, ms, cleared: false, args };

        this._timeouts.push(timeout);

        return timeout;
    }

    clearTimeout(timeout) {
        timeout.cleared = true;
    }

    clearAllTimeouts() {
        this._timeouts.forEach(timeout => {
            timeout.cleared = true;
        });
    }
}
