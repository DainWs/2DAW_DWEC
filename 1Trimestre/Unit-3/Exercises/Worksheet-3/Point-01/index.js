// 1
function findLargestNumber(array) {
   largest = 0;
   array.forEach(e => largest = (e > largest) ? e : largest );
   return largest;
}

// 2
function findLargestString(array) {
   largest = "";
   array.forEach(e => {
      largest = (e.length > largest.length) ? e : largest
   });
   return largest;
}

// 3
function findEvenNumbers(array) {
   return array.filter( e => (e%2 == 0));
}

// 4
function findOddNumbers(array) {
   return array.filter( e => (e%2 != 0));
}

// 5
function findWordsThats(array) {
   return array.filter( e => e.includes("is"));
}

// 6
function assertNumDivThree(array) {
   divThree = true;
   array.forEach(e => { if (e%3 != 0) divThree = false; });
   return divThree;
}

// 7
function zip(arrayOne, arrayTwo) {
   return arrayOne.map( (oneObject, i) => [oneObject, arrayTwo[i]] );
}

// 8
function sortJoined(array) {
   return array.sort( (a, b) => a - b );
}

// 9
function removeFirst(array) {
   array.shift();
   return array;
}

// 10
function addFirstTo(array, word) {
   array.unshift(word);
   return array;
}

// 11
function replace(array, searchArray, valuesArray) {
   searchArray.forEach((e) => {
      let index = searchArray.indexOf(e);
      let arrayIndex = array.indexOf(e);
      if(arrayIndex != -1) {
         array.splice(arrayIndex, 1, valuesArray[index]);
      }
   });
   return array;
}


let numberArray = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let stringArray = ["hola", "adios", "hola mundo", "islandia", "is that you?"];

console.log(findLargestNumber(numberArray));
console.log(findLargestString(stringArray));
console.log(findEvenNumbers(numberArray));
console.log(findOddNumbers(numberArray));
console.log(findWordsThats(stringArray));
console.log(assertNumDivThree(numberArray));
console.log(zip(numberArray, stringArray));
console.log(sortJoined(numberArray));
console.log(removeFirst(stringArray));
console.log(addFirstTo(stringArray, "jaja"));
console.log(replace(numberArray, [1, 5, 7], ["hola", 10, 15]));
