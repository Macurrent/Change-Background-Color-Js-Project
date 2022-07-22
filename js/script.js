// const is a variable that cannot be changed
// document.querySelector() will get the first button element
const button = document.querySelector('button')
const body = document.querySelector('body')
// creating a list of colors
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

// after getting the first body element, style it to violet (initial color should be violet)
body.style.backgroundColor = 'violet'

// An event listener is a JavaScript's procedure that waits for the occurrence of an event.
// changeBackground here is a function and click is an event 
// if the button is clicked, then change the background color

button.addEventListener('click', changeBackground)

// parseInt will convert string argument into integer value   
// Math.random()*colors.length will return random numbers between 0 and a given length

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}
