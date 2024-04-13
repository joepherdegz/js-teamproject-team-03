import { pageCall } from './script.js';

const buttons = document.querySelectorAll('.pagination-button:not(#prev):not(#next)');

// Event listener for numbered buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const pageNumber = parseInt(button.textContent);
    if (!isNaN(pageNumber)) {
      pageCall(pageNumber);
    }
  });
});


