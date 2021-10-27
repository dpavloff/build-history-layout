import { data } from "../mock/builds";

let builds = data;

let date = new Date();
let isWeekend = date.getDay < 6;

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getBuildsFromApi() {
  console.time("Fetch");

  await timeout(Math.random() * isWeekend ? 5000 : 1000);

  console.timeEnd("Fetch");

  return builds;
}
