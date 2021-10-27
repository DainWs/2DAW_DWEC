function maximo(numbers) {
   max = 0;
   numbers.forEach(
      e => (max = (e > max) ? e : max)
   );
   return max;
}

numbers = [
   prompt("numero 1"),
   prompt("numero 2"),
   prompt("numero 3"),
   prompt("numero 4")
];

console.log(maximo(numbers));