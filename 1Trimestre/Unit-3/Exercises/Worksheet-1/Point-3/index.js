function lanzamiento() {
   return Math.round((Math.random() * 5) + 1);
}

ocurrencias = [];
ocurrencias[1] = 0;
ocurrencias[2] = 0;
ocurrencias[3] = 0;
ocurrencias[4] = 0;
ocurrencias[5] = 0;
ocurrencias[6] = 0;

for (let i = 0; i < 6000; i++) {
   ocurrencias[lanzamiento()]++;
}

ocurrencias.forEach(e => console.log(e));