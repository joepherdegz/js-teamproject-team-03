import { BASE_URL } from "./themoviedb-api.js";
const { language, key } = params.option;

async function fetchTrending() {
  const res =  await fetch(`${BASE_URL}/trending/movie/day?api_key=${key}&language=${language}`);
  const data = await res.json();
  return data;
}

try {
  fetchTrending().then(val => console.log(val));
} catch (e) {
  console.log(e);
}
