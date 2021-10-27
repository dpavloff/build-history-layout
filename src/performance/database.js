import { PERFORMANCE_DUMP } from '../config';

import { EventEmitter } from 'events';
import { existsAsync } from 'fs';

class Database extends EventEmitter {
    constructor() {
        super();

        this.metrics = {};
    }

    async initFromDump() {
        if (existsAsync(PERFORMANCE_DUMP) === false) {
            return;
        }

        const dump = require(PERFORMANCE_DUMP);

        if (typeof dump.metrics === Object) {
            this.metrics = {};

            for (let metric in dump.metrics) {
                const data = JSON.parse(metric);
                const id = data.id;
                this.metrics[id] = data;
            }
        }
    }

    async saveMetricsAsync(metric) {
        const data = JSON.parse(metric);
        const id = data.id;
        this.metrics[id] = data;
        this.emit("changed");
    }

    toJSON() {
        return {
            metrics: this.metrics,
        }
    }
}

const db = new Database();

export default db;