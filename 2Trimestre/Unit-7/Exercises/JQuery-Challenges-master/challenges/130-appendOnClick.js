$(document).ready(readyNow);

let myArray = [ 'lion', 'tigers', 'bears' ];

function readyNow(){
    appendBulletItem();
}

function appendBulletItem(){
  let header = $('<h1>Challenge 130</h1>');
  $('.container').append(header);
  let button = $('<button id="appendButton">Click Me</button>');
  $('.container').append(button);
  button.on('click', addClick);

  function addClick(){
  $('.container').append(`<p>Click</p>`);
  }
  

  // YOUR CODE HERE
  // Append a new p tag with text "click" to the DOM on a click
}

