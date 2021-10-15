import data from '../mock/builds';

export async function getBuildsFromApi() {    
    await setTimeout(() => {}, 10000);
    return data;
}