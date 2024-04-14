import { pageCall } from './script.js';

const totalPages = 20; 
const paginationContainer = document.querySelector('.pagination');

// Function to generate pagination buttons
function generatePaginationButtons(currentPage) {
  let buttonsHTML = '';
  const numButtonsToShow = 5; // Number of pagination buttons to show

  // let startPage = 1;
  if (currentPage < 3) {
    startPage = 1;
  } else if (currentPage >= totalPages - 2) {
    startPage = totalPages - numButtonsToShow + 1;
  } else {
    startPage = currentPage - 2;
    // if (startPage % 2 === 0) {
    //   startPage -= 1;
    // }
  }

  if (startPage > 1) {
    buttonsHTML += `<button class="pagination-button previous-page" type="submit" id="prev">&#11164</button>`;
    buttonsHTML += `<button class="pagination-button" type="submit">1</button>`;
    if (startPage > 2) {
      buttonsHTML += `<button class="pagination-button" type="submit">...</button>`;
    }
  }

  for (let i = startPage; i <= totalPages && i < startPage + numButtonsToShow; i++) {
    if (i === currentPage) {
      buttonsHTML += `<button class="pagination-button current-page" type="submit">${i}</button>`;
    } else {
      buttonsHTML += `<button class="pagination-button" type="submit">${i}</button>`;
    }
  }

  if (startPage + numButtonsToShow <= totalPages) {
    if (startPage + numButtonsToShow < totalPages) {
      buttonsHTML += `<button class="pagination-button" type="submit">...</button>`;
    }
    buttonsHTML += `<button class="pagination-button" type="submit">${totalPages}</button>`;
  }

  if (currentPage < totalPages) {
    buttonsHTML += `<button class="pagination-button next-page" type="submit" id="next">&#11166</button>`;
  }

  paginationContainer.innerHTML = buttonsHTML;
}

let currentPage = 1; // Initialize current page number
generatePaginationButtons(currentPage);

// Event listener for pagination container
paginationContainer.addEventListener('click', (event) => {
  const targetButton = event.target;
  
  if (targetButton.classList.contains('pagination-button') && !targetButton.id) {
    const pageNumber = parseInt(targetButton.textContent);
    if (!isNaN(pageNumber)) {
      currentPage = pageNumber; // Update currentPage variable
      generatePaginationButtons(currentPage); 
      pageCall(currentPage);
    }
  }

  else if (targetButton.classList.contains('previous-page')) {
    if (currentPage > 1) {
      currentPage--; 
      generatePaginationButtons(currentPage); 
      pageCall(currentPage);
    }
  }
 
  else if (targetButton.classList.contains('next-page')) {
    if (currentPage < totalPages) {
      currentPage++; 
      generatePaginationButtons(currentPage); 
      pageCall(currentPage);
    }
  }
});