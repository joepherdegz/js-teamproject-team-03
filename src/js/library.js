// Retrieve watched and queue arrays from localStorage or initialize them as empty arrays
let watched = JSON.parse(localStorage.getItem("movie-watched")) || [];
let queue = JSON.parse(localStorage.getItem("movie-queue")) || [];

// Function to save watched movies to localStorage
function saveWatchedMovies() {
    localStorage.setItem('movie-watched', JSON.stringify(watched));
}

// Function to save queued movies to localStorage
function saveQueueMovies() {
    localStorage.setItem('movie-queue', JSON.stringify(queue));
}

// Function to display watched movies in the library
function displayWatchedMovies() {
    const watchedContainer = document.getElementById('watched-container');
    watchedContainer.innerHTML = ''; // Clear previous content
    
    watched.forEach(movieTitle => {
        const movieItem = document.createElement('div');
        movieItem.textContent = movieTitle;
        watchedContainer.appendChild(movieItem);
    });
}

// Function to display queued movies in the library
function displayQueueMovies() {
    const queueContainer = document.getElementById('queue-container');
    queueContainer.innerHTML = ''; // Clear previous content
    
    queue.forEach(movieTitle => {
        const movieItem = document.createElement('div');
        movieItem.textContent = movieTitle;
        queueContainer.appendChild(movieItem);
    });
}

// Function to handle form submission
document.getElementById('lib-buttons').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const buttonClicked = event.submitter.id; // Get the ID of the button that was clicked
    const currentMovieTitle = document.getElementById('modal-title').textContent;

    if (buttonClicked === 'watched-btn') {
        // Handle adding movie to watched list
        if (!watched.includes(currentMovieTitle)) {
            watched.push(currentMovieTitle);
            saveWatchedMovies();
            displayWatchedMovies();
        } else {
            alert(`${currentMovieTitle} has been watched already`);
        }
    } else if (buttonClicked === 'queue-btn') {
        // Handle adding movie to queue list
        if (!queue.includes(currentMovieTitle)) {
            queue.push(currentMovieTitle);
            saveQueueMovies();
            displayQueueMovies();
        } else {
            alert(`${currentMovieTitle} has been added to the queue already`);
        }
    }
});
// Call the functions to display watched and queued movies when the page loads
document.addEventListener('DOMContentLoaded', function() {
    displayWatchedMovies();
    displayQueueMovies();
});