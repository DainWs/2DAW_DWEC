$(document).ready(readyNow);

function readyNow(){
    appendBulletItem();
}

function appendBulletItem(){
  let header = $('<h1>Challenge 100</h1>');
  $('.container').append(header);

  let ul = $('<ul id="myList"></ul>');
  $('.container').append(ul);
  $( '#myList' ).append( '<li>first item</li>');
  $( '#myList' ).append( '<li>second item</li>');
  $( '#myList' ).append( '<li>third item</li>');

  // YOUR CODE HERE
  // Use jQuery to add third bullet item to list.
}
