import axios from "axios";

export async function getMetricsFromApi() {
    const metrics = await axios('http://localhost:3000/metrics');

    return metrics.data;
}