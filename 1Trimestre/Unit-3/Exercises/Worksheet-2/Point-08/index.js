const array = new Array(11);

function lanzar() {
   let dadoUno = Math.round((Math.random() * 5) + 1);
   let dadoDos = Math.round((Math.random() * 5) + 1);

   let sum = (dadoUno + dadoDos) - 2;
   if(array[sum] == undefined) {
      array[sum] = 0;
   }
   array[sum]++;
}

let numeroLanzamientos = 36000;
for (let i = 0; i < numeroLanzamientos; i++) {
   lanzar();
}

for (let i = 0; i < array.length; i++) {
   let e = (array[i] == undefined) ? 0 : array[i];
   console.log("For result: " + (i + 2) + ", we have " + e + " cases");
}
