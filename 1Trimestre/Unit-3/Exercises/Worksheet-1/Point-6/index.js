function potencia(num, veces) {
   return (veces > 2) ? (num * potencia(num, veces - 1)) : (num * num);
}

console.log(potencia(5, 2));
console.log(potencia(2, 2));
console.log(potencia(2, 4));
console.log(potencia(2, 3));