// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element



const entry = document.querySelector(".topics")
axios
.get('https://lambda-times-api.herokuapp.com/topics')
.then( (res) => {
  const tabData = res.data.topics
  // console.log(tabData.topics)

  tabData.forEach(e => {
    entry.appendChild(tabCreator(e))
  });

})
.catch(err => err)


const tabCreator = (item) => {


 const div = document.createElement('div')
 div.classList.add("tab")
 div.textContent = item

 return div
}