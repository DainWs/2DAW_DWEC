$(document).ready(readyNow);

function readyNow(){
  appendDom();
}

function appendDom(){
  let header = $('<h1>Challange 140</h1>');
  $('.container').append(header);

  // YOUR CODE HERE
  // Add a DIV to the Container Class (a new DIV inside of the DIV that already exists).
  // Inside the DIV, add a P tag that has your name
  // Then add another P tag with the City you live in.
  let newDiv = $('<div></div>');
  newDiv.append('<p>Jose Antonio Duarte P&eacute;rez (DainWs)</p>');
  newDiv.append('<p>Granada</p>');
  $('.container').append(newDiv);
}
