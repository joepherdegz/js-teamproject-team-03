const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=b5e824a3d922f68ba211fcf6dbdcb6f5';
const API_URL = BASE_URL + '/discover/movie?sort_by-popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;

const options = {
    params: {
        key: API_KEY,
        query: "",
        include_adult: false,
        language: "en-US",
        primary_release_year: "",
        page: 1,
        region: "",
        year: "",
       
    }
}

const main = document.getElementById('main');
const form = document.getElementById('search-form');
const search = document.getElementById('search-input');
const galleryEl = document.getElementById('gallery');
const loader = document.querySelector('.loader-container');

// PAGINATION
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const current = document.getElementById('current');

var currentPage = 1;
var nextPage = 2;
var prevPage = 3;
var lastUrl = '';
var totalPages = 100;

let currentMovieTitle;
let queue = [];
localStorage.setItem("movie-queue", JSON.stringify(queue));

getMovies(API_URL);

// DISPLAY MOVIE CARDS
function getMovies(url) {
    lastUrl = url;
    main.classList.toggle('is-hidden');
    loader.classList.toggle('is-hidden'); 

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            if(data.results.length !== 0){
                showMovies(data.results);
                currentPage = data.page;
                nextPage = currentPage + 1;
                prevPage = currentPage - 1;
                totalPages = data.total_pages;
                main.classList.toggle('is-hidden');
                loader.classList.toggle('is-hidden');  

                current.innerText = currentPage;
                if(currentPage <= 1){
                    prev.classList.add('disabled');
                    next.classList.remove('disabled');
                } else if(currentPage >= totalPages){
                    prev.classList.remove('disabled');
                    next.classList.add('disabled');
                } else {
                    prev.classList.remove('disabled');
                    next.classList.remove('disabled');
                }

            } else {
                main.classList.toggle('is-hidden');
                loader.classList.toggle('is-hidden');  
                main.innerHTML = `<h1 class="no-results">No Results Found</h1>`
            }

    })
}

function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const { title, poster_path, release_date } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src="${poster_path? IMG_URL+poster_path: "http:/>/via.placeholder.com/1080x1500"}"
                alt="${title}"/>
            
            <div class="movie-info">
                <h3>${title}</h3>
                <div class="movie-details">
                    <span id="release_date" class="${release_date}">${release_date}</span>
                </div>
            </div>        
        `
        main.appendChild(movieEl);
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    
    if(searchTerm) {
        getMovies(searchURL+'&query='+searchTerm)
    }else{
        getMovies(API_URL);
    }
})


// function for previous page
prev.addEventListener('click', () => {
    if(prevPage > 0) {
        pageCall(prevPage);
    }
})

// function for the next page
next.addEventListener('click', () => {
    if(nextPage <= totalPages) {
        pageCall(nextPage);
    }
})

function pageCall(page) {
    let urlSplit = lastUrl.split('?');
    let queryParams = urlSplit[1].split('&');
    let key = queryParams[queryParams.length - 1].split('=');
    if(key[0] != 'page') {
        let url = lastUrl + '&page=' + page;
        getMovies(url);
    }else{
        key[1] = page.toString();
        let a = key.join('=');
        queryParams[queryParams.length - 1] = a;
        let b = queryParams.join('&');
        let url = urlSplit[0] +'?'+ b;
        getMovies(url);
    }
}

//Clicking a movie
main.addEventListener('click', (e) => {
    let currentMovie = e.target.parentElement;
    currentMovieTitle = currentMovie.lastElementChild.firstElementChild.innerText;
    console.log(currentMovieTitle)
})