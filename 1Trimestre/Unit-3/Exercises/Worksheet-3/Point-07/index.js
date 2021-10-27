function myCodificar(string) {
   let newString = string.split("");
   for (let i = 0; i < string.length; i++) {
      let charCode = (newString[i].charCodeAt(0)) + 1;
      if (0 < charCode && charCode < 255) {
         newString[i] = String.fromCharCode(charCode);
      }
   }
   return newString.join("");
}

function myDecodificar(string) {
   let newString = string.split("");
   for (let i = 0; i < string.length; i++) {
      let charCode = (newString[i].charCodeAt(0)) - 1;
      if (0 < charCode && charCode < 255) {
         newString[i] = String.fromCharCode(charCode);
      }
   }
   return newString.join("");
}

function codificar(string) {
   return btoa(string);
}

function decodificar(string) {
   return atob(string)
}

let string = "Si el hombre estuviera destinado a permanecer en el suelo, Dios nos habría dado raíces";
let result = codificar(string);
console.log("Standart");
console.log(result);
result = decodificar(result);
console.log(result);

console.log("Custom");
result = myCodificar(string);
console.log(result);
result = myDecodificar(result);
console.log(result);

