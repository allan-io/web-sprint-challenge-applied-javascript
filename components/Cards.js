// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
// HTTP get request that returns a Promise object
axios.get("https://lambda-times-backend.herokuapp.com/articles")
  // use the Promise .then method to access to response
  .then(response => {
    // manipulate response to get the articles object
    const data = response.data.articles;
    // return the data
    return data;
  })
  // here we wait for the first .then method to resolve before being able to manipulate the data again
  .then(data => {
    // use for in loop to iterate through each property in the articles object
    for (key in data) {
      // since each property in the articles object has an array with multiple articles, I use a forEach loop to access each element in the array
      data[key].forEach((el) => {
        // so I call the carMaker function for each of the 15 articles.
        cardMaker(el);
      })
    }
  })
// variable in which i will attach each card to
const cards = document.querySelector(".cards-container");
// cardMaker function takes in each individual article object
function cardMaker(obj) {
  const card = document.createElement("div");
  card.className = "card";
  const result = innerHTML(obj, card);
  result.addEventListener('click', () => console.log(obj.headline));
  // append result which is the current article to the DOM
  cards.appendChild(result);

};
// I used this helper function to be able to create each card before appending it inside of cardMaker()
function innerHTML(el, card) {
  
  card.innerHTML += `
            <div class="headline">${el.headline}</div>
            <div class="author">
                <div class="img-container">
                    <img src=${el.authorPhoto} />
                </div>
            <span>By ${el.authorName}</span>
            </div>
        `;
  // return the individual card back which is stored into result var inside cardMaker
  return card;
};
