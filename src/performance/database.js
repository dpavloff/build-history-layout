import { EventEmitter } from 'events';
import axios from 'axios';

class Database extends EventEmitter {
    constructor() {
        super();

        this.database = {
            metrics: []
        };
    }

    async initFromDump() {
        this.database = {
            metrics: []
        };

        const dump = await axios.get('http://localhost:3000/metrics');        
        this.database.metrics = dump.data;
    }

    async saveMetricsAsync(metric) {
        const data = JSON.parse(metric);
        this.database.metrics.push(data);
        await axios.post('http://localhost:3000/metrics', data);
    }

    getMetrics() {
        return this.database.metrics;
    }
}

const db = new Database();

db.initFromDump();

// db.on("changed", async () => {
//     await axios.post('http://localhost:3000/metrics', this.database.metrics[this.database.metrics.length - 1])
// });

export default db;