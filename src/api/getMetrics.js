import axios from "axios";

export async function getMetricsFromApi() {
    const metrics = await axios.get('http://localhost:3001/metrics');

    console.log(metrics.data);

    return metrics.data;
}