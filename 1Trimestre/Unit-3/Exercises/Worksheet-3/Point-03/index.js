function getCoords(num) {
   let coords = [];

   coords[1] = Math.round(num % 10) - 1;
   num /= 10;
   coords[0] = Math.round(num % 10) - 1;
   console.log(coords);
   return coords;
}

let teasureMap = [
   [34, 21, 32, 41, 25],
   [14, 42, 43, 14, 31],
   [54, 45, 52, 42, 23],
   [33, 15, 51, 31, 35],
   [21, 52, 33, 13, 23]
];

let currentCoords = 11;
let lastCoords = 0;
let finded = false;
while(!finded) {
   let coords = getCoords(currentCoords);
   lastCoords = currentCoords;
   currentCoords = teasureMap[coords[0]][coords[1]];

   console.log("[" + lastCoords + "," + currentCoords + "]");

   if (lastCoords == currentCoords) {
      console.log("teasure found in " + (coords[0] + 1) + " " + (coords[1] + 1));
      finded = true;
   }
}
