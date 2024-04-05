import { BASE_URL } from "./api.js";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWU4MjRhM2Q5MjJmNjhiYTIxMWZjZjZkYmRjYjZmNSIsInN1YiI6IjY2MGUwMGE3YzhhNWFjMDE2Mzc5ODIzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dVhYcbmcQhxg-GRwDOu4UQPpqCnjC9js7XxT0ubEx7s'
  }
};

fetch('https://api.themoviedb.org/3/authentication', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


