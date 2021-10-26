import { data } from "../mock/builds";

let builds = data;

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getBuildsFromApi() {
  await timeout(Math.random() * 5000);

  return builds;
}
