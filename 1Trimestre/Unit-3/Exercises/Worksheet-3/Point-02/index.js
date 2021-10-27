let array = [
   {"name": "Jose Antonio"},
   {"name": "Juan"},
   {"name": "Alvaro"},
   {"name": "Carlos"}
];

array = array.filter((e) => {
   e.name.startsWith('J');
});

console.log(array);

array.sort((a, b) => {
   result = 0;
   if (a.name[0] < b.name[0]) result = -1;
   else if (a.name[0] > b.name[0]) result = 1;
   return result;
});