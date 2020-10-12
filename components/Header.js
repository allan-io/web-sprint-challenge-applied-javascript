// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

// select div from html in order to place header in 
const headerDiv = document.querySelector('.header-container');

// function that will create header
function Header() {
  const div = document.createElement('div');
  div.className = 'header';
  
  const date = document.createElement('span');
  date.textContent = 'MARCH 28, 2020';
  date.className = 'date';
  const title = document.createElement('h1');
  title.textContent = 'Lambda Times';
  const temp = document.createElement('span');
  temp.textContent = '98°';
  temp.className = 'temp';

  div.appendChild(date);
  div.appendChild(title);
  div.appendChild(temp);

  return div
};

const header = Header();
headerDiv.appendChild(header);
