const button = document.querySelector('button')
// const is a variable that cannot be changed
// document.querySelector() will get the first button element
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

body.style.backgroundColor = 'violet'
// after getting the first body element, style it to violet (initial color should be violet)
button.addEventListener('click', changeBackground)
// An event listener is a JavaScript's procedure that waits for the occurrence of an event.
// changeBackground here is a function and click is an event 
// if the button is clicked, then change the background color

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
// parseInt will convert string argument into integer value   
  // returning random numbers between 0 and a given length
body.style.backgroundColor = colors[colorIndex]
}
