// Challenge: 
// 1. Select h1 and add a click event listener. 
// Log the text from the element to the console.

// If you're not sure how to get text, feel free to check out hint.js

// 2. Add the same functionality to all the elements displayed
// in Scrimba web browser. Finally, try to trigger the event when you
// hover the mouse over the elements, instead of when clicking on them

const h1 = document.querySelector('h1')

h1.addEventListener("click", (event) => console.log(event.target.innerText))

const h2 = document.querySelector('h2')

h2.addEventListener("click", (event) => console.log(event.target.innerText))

const h3 = document.querySelector('h3')

h3.addEventListener("click", (event) => console.log(event.target.innerText))

// with mouse over
const h1 = document.querySelector('h1')

h1.addEventListener("mouseover", (event) => console.log(event.target.innerText))

const h2 = document.querySelector('h2')

h2.addEventListener("mouseover", (event) => console.log(event.target.innerText))

const h3 = document.querySelector('h3')

h3.addEventListener("mouseover", (event) => console.log(event.target.innerText))
