function resetArray(array) {
   for (let i = 0; i < array.length; i++) {
      array[i] = 0;
   }
}

function add(array) {
   for (let i = 0; i < array.length; i++) {
      array[i] = array[i] + 1;
   }
}

function show(array) {
   array.forEach(e => console.log(e));
}

array = new Array(10);
resetArray(array);
add(array);
show(array);