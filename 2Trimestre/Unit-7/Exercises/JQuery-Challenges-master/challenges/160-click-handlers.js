$(document).ready(readyNow);

function readyNow(){
  appendDom();
  addClickHandlers();
}

function appendDom(){
  let header = $('<h1>Challenge 160</h1>');
  $('.container').append(header);

  let inputBox = $('<input type="text" id="studentName" />');
  $('.container').append(inputBox);

  let submitButton = $('<button id="submitButton">Submit</button>');
  $('.container').append(submitButton);

  let studentList = $('<ul id="studentList"></ul>');
  studentList.append('<li>Sample Student</li>');
  $('.container').append(studentList);
}


function addClickHandlers() {
  // YOUR CODE HERE

  // When the submit button is clicked, the name from
  // the input box should appear in the student list.
  $('#submitButton').on('click', function(event) {
      let studentName = $('#studentName').val();
      $('#studentList').append(`<li>${studentName}</li>`);
  });
}
