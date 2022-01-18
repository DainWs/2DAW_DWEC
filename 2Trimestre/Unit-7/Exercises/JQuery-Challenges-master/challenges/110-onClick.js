$(document).ready(readyNow);
// counter number
let counter = 0;

function readyNow(){
    incrementOnClick();
}

function incrementOnClick(){
  // YOUR CODE HERE
  let header = $('<h1>Challenge 110</h1>');
  $('.container').append(header);

  let button = $('<button id="incrementButton">Click Me</button>');
  $('.container').append(button); 
  button.on('click', addToCounter);
  // Log a number that gets bigger by one every time a button is clicked.
}

function addToCounter (){
  counter++;
  console.log(counter + ' number of clicks!');
  $('.container').append(addToCounter);
}