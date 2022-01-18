
// Feel free to add more data here
const petOne = {name: 'Charlie', type: 'dog', age: 6};
const petTwo = {name: 'Thorin', type: 'rabbit', age: 4};
const petThree = {name: 'Cedar', type: 'dog', age: 7};
const petFour = {name: 'Juniper', type: 'cat', age: 3};

const pets = [petOne, petTwo, petThree, petFour];

$(readyNow); // Shorthand for $(document).ready(readyNow);

function readyNow(){
  appendDom();
}

function appendDom(){
  let header = $('<h1>Challenge 170</h1>');
  $('.container').append(header);

  let table = $('<table></table>');
  table.append('<thead><tr><th>Name</th><th>Type</th><th>Age</th></thead>');

  let tbody = $('<tbody id="tableBody"></tbody>');
  table.append(tbody);

  $('.container').append(table);

  // YOUR CODE HERE
  // Remember, small steps!

  // Display each of the pets on the DOM.
  let tableBody = $('#tableBody');
  pets.forEach((value) => {
    let row = $('<tr></tr>');
    row.append(`<td>${value.name}</td>`);
    row.append(`<td>${value.type}</td>`);
    row.append(`<td>${value.age}</td>`);
    tableBody.append(row);
  })
  // Add an input field that allows users to add new pets from the index page.
  let formDiv = $('<div style="margin: 10px;"></div>');

  let inputNameBox = $('<input type="text" id="newPetName" style="width: 150px" />');
  formDiv.append('<label for="newPetName">Pet name:</label>');
  formDiv.append(inputNameBox);

  let inputTypeBox = $('<input type="text" id="newPetType" style="width: 150px" />');
  formDiv.append('<label for="newPetType">Pet type:</label>');
  formDiv.append(inputTypeBox);

  let inputAgeBox = $('<input type="number" id="newPetAge" style="width: 100px" />');
  formDiv.append('<label for="newPetAge">Pet age:</label>');
  formDiv.append(inputAgeBox);

  let submitButton = $('<button id="submitButton">Submit</button>');
  formDiv.append(submitButton);

  $('.container').append(formDiv);

  $('#submitButton').on('click', function(event) {
    let newPetName = $('#newPetName').val();
    let newPetType = $('#newPetType').val();
    let newPetAge = $('#newPetAge').val();

    let row = $('<tr></tr>');
    row.append(`<td>${newPetName}</td>`);
    row.append(`<td>${newPetType}</td>`);
    row.append(`<td>${newPetAge}</td>`);
    tableBody.append(row);
  });
  // Add a button that clears out the list of pets.

  let clearButton = $('<button id="clearButton">Clear</button>');
  clearButton.on('click', function(event) {
    tableBody.html("");
  });
  $('.container').append(clearButton);

}
