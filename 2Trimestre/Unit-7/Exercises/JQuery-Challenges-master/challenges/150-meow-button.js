$(document).ready(readyNow);

function readyNow(){
  appendDom();
  addClickHandlers();
}

function appendDom(){
  let header = $('<h1>Challenge 150</h1>');
  $('.container').append(header);

  $('.container').append('<div></div>');
  let $el = $('.container').children().last();
  $el.append('<button id="meowButton">Meow</button>');
}

function addClickHandlers() {
  // YOUR CODE HERE
  // Add an event listener to the Meow Button
  // The listener should log 'Meeeooow' when the button is clicked
  $('#meowButton').on('click', function(event) {
    console.log('Meeeooow');
  });
}
