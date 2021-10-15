import { data } from '../mock/builds';

const builds = data;

export async function getBuildsFromApi() {    
    await setTimeout(() => {}, 10000);
    return builds;
}