// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//

//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.



const cards = document.querySelector(".cards-container")
axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then(res => {
    console.log(res.data)
    Object.values(res.data.articles).forEach((topic) => {
      topic.forEach(e => {
        cardMaker(e)
      })
    })
  })
  .catch(err => err)

// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>

const cardMaker = (e) => {
  // Create Elements
  const cardDiv = document.createElement('div')
  const headline = document.createElement('div')
  const author = document.createElement('div')
  const imgCont = document.createElement('div')
  const img = document.createElement('img')
  const name = document.createElement('span')


  // Add Classes
  cardDiv.classList.add("card")
  headline.classList.add("headline")
  author.classList.add("author")
  imgCont.classList.add("img-container")

  // Add Content
  headline.textContent = e.headline
  img.src = e.authorPhoto
  name.textContent = `By ${e.authorName}`

  // Append
  cards.appendChild(cardDiv)
  cardDiv.appendChild(headline)
  cardDiv.appendChild(author)
  author.appendChild(imgCont)
  imgCont.appendChild(img)
  author.appendChild(name)

  return cards
}