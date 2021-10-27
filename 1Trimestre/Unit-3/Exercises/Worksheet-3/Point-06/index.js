function getDistance(numOne, numTwo) {
   return Math.abs(numOne - numTwo);
}

function getSizes(stringLength) {
   return Math.trunc(Math.sqrt(stringLength));
}

function makeTable(string) {
   string = string.replace(/\s/g,'');
   sizes = getSizes(string.length);
   let newString = "";
   while(string.length > 0) {
      newString += string.substring(0, sizes) + "\n";
      string = string.substring(sizes+1, string.length);
   }
   return newString;
}

let string = "Si el hombre estuviera destinado a permanecer en el suelo, Dios nos habría dado raíces";
let result = makeTable(string);
console.log(result);