function getCoords(num) {
   let coords = [];

   coords[1] = Math.trunc(num % 10) - 1;
   num /= 10;
   coords[0] = Math.trunc(num % 10) - 1;
   console.log(coords + ' coords');
   return coords;
}

function randomTeasure() {

   var mapWidth = 5;
   var mapHeight = 5;

   var noValidsPos = [11];

   var teasureMap = new Array(mapWidth);
   for (let i = 0; i < teasureMap.length; i++) {
      teasureMap[i] = new Array(mapHeight);
   }

   function getRandomPos() {
      let randomPos = {};
      do {
         randomX = Math.trunc(Math.random() * mapWidth);
         randomY = Math.trunc(Math.random() * mapHeight);
         posText = parseInt((randomX + 1) + '' + (randomY + 1), 10);
         
         randomPos.x = randomX;
         randomPos.y = randomY;
         randomPos.value = posText;
      } while(noValidsPos.indexOf(randomPos.value) != -1);
      return randomPos;
   }

   let teasurePos = getRandomPos();

   teasureMap[teasurePos.x][teasurePos.y] = 'teasure';
   for (let i = 0; i < teasureMap.length; i++) {
      for (let j = 0; j < teasureMap[i].length; j++) {
         if(teasureMap[i][j] != 'teasure') {
            let newPos = getRandomPos();
            while (newPos.x == i && newPos.y == j) {
               let nIndex = noValidsPos.indexOf(newPos.value);
               noValidsPos.splice(nIndex, 0);
               newPos = getRandomPos();
            }
            teasureMap[i][j] = newPos.value;
            noValidsPos.push(newPos.value);
         }
      }
   }
   teasureMap[teasurePos.x][teasurePos.y] = teasurePos.value;

   return teasureMap;
}

let teasureMap = randomTeasure();
console.log(teasureMap);
/*[
   [34, 21, 32, 41, 25],
   [14, 42, 43, 14, 31],
   [54, 45, 52, 42, 23],
   [33, 15, 51, 31, 35],
   [21, 52, 33, 13, 23]
];*/

function getRowMax(row) {
   let max = 0;
   let posOfMax = 0;
   for (let i = 0; i < row.length; i++) {
      if (row[i] > max) {
         max = row[i];
         posOfMax = i;
      }
   }
   return posOfMax;
}

let currentCoords = 11;
let lastCoords = 0;
let saddlePoints = [];
teasureMap.forEach((row, i) => {
   let rowMaxPos = getRowMax(row);
   let current = teasureMap[i][rowMaxPos];
   let isMoreLower = true;
   for (let j = 0; j < teasureMap.length; j++) {
      if (teasureMap[j][rowMaxPos] < current) {
         isMoreLower = false;
      }
   }
   if (isMoreLower) {
      saddlePoints.push(current);
      console.log("Saddle point added : " + current);
   }
});