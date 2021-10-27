const array = new Array(11);

function lanzar() {
   let dadoUno = Math.round((Math.random() * 5) + 1);
   let dadoDos = Math.round((Math.random() * 5) + 1);

   let combinacion = dadoUno + " & " + dadoDos;

   let sum = (dadoUno + dadoDos) - 2;
   if(array[sum] == undefined) {
      array[sum] = {};
   }

   if(array[sum][combinacion] == undefined) {
      array[sum][combinacion] = {key: combinacion, casos: 0};
   }
   
   array[sum][combinacion].casos += 1;
}

let numeroLanzamientos = 1000;
for (let i = 0; i < numeroLanzamientos; i++) {
   lanzar();
}

console.log(array);

for (let i = 0; i < array.length; i++) {
   let subArray = array[i];
   console.log("For result: " + (i + 2) + ", we have :");
   let totalCasos = 0;
   for(var key in array[i]) {
      let e = array[i][key];
      console.log("Combinacion : " + e.key + " hay " + e.casos + " casos.");
      totalCasos += e.casos;
   }
   console.log("El total de casos es: " + totalCasos);
   console.log(" ");
}
