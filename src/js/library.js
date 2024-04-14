document.addEventListener('DOMContentLoaded', function () {
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_KEY = 'b5e824a3d922f68ba211fcf6dbdcb6f5';
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const watchedBtn = document.getElementById('watched-btn');
    const queueBtn = document.getElementById('queue-btn');
    const moviesContainer = document.querySelector('.gallery');
    let watchedMovies = JSON.parse(localStorage.getItem('movie-watched'));
    let queuedMovies = JSON.parse(localStorage.getItem('movie-queue'));
    watchedBtn.addEventListener('click', function (e) {
        e.preventDefault();
        getLibMovies(watchedMovies);
    });
    queueBtn.addEventListener('click', function (e) {
        e.preventDefault();
        getLibMovies(queuedMovies);
    });
    // Load movies whose Ids matched with those stored in the localStorage
    async function getLibMovies(array) {
        moviesContainer.innerHTML = '';
        for (const movieId of array) {
            try {
                if (!isNaN(movieId) && movieId !== null) {
                const movie = await getMovieDetailsById(movieId);
                const movieElement = createMovieElement(movie);
                moviesContainer.appendChild(movieElement);
            } else {
                throw new Error(`Invalid movie ID: ${movieId}`);
            }
            } catch (error) {
                if (error.message === 'Movie not found.') {
                    console.warn(`Movie with ID ${movieId} not found.`);
                } else {
                    console.error('Failed to display movie:', error);
                }
            }
        }
    }
    // Requesting movies using IDs
    async function getMovieDetailsById(movieId) {
        const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Movie not found.');
            } else {
                throw new Error('Failed to fetch movie details: ' + response.statusText);
            }
        }
        const movieDetails = await response.json();
        return movieDetails;
    }
    // Create movie display
    function createMovieElement(movie) {
        const element = document.createElement('div');
        element.classList.add('movie');
        element.innerHTML = `
        <img src="${movie.poster_path ? IMG_URL + movie.poster_path : 'http://via.placeholder.com/1080x1500'}";
        <h3>${movie.title}</h3>
    `;
        return element;
    }
    // function isValidMovieId(movieId) {
    //     return !isNaN(movieId);
    // }
});