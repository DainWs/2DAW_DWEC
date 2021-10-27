function factorial(num) {
   return (num > 1) ? num * factorial(num - 1) : 1;
}

let table = document.getElementById("table");
for (let i = 1; i <= 10; i++) {
   let fila = document.createElement("tr");
   let col = document.createElement("td");
   col.innerText = i;
   fila.appendChild(col);
   col = document.createElement("td");
   col.innerText = factorial(i);
   fila.appendChild(col);
   table.appendChild(fila);
}

