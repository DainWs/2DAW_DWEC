function paresImpares() {
   let numbersList = new Array(100);
   for (let i = 0; i < numbersList.length; i++) {
      numbersList[i] = Math.round((Math.random() * 999) + 1);
   }

   numbersList.forEach(e => console.log(e));

   numbersList.sort((a, b) => {
      let isEvenA = (a%2==0);
      let isEvenB = (b%2==0);
      let result = 0;
      if (!isEvenA && isEvenB) {
         result = 1;
      }
      else if (isEvenA && !isEvenB) {
         result = -1;
      }
      return result;
   }); 
   
   console.log("Pares ---- Impares");
   numbersList.forEach(e => console.log(e));
}

paresImpares();