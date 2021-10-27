/*
    EJERCICIO: Haz una función que ordene las notas de un array 
    pasado como parámetro. Si le pasamos [4,8,3,10,5] 
    debe devolver [3,4,5,8,10]. Pruébalo en la consola
*/

function compare(a, b) {
    return a - b;
}

let array = [4, 8, 3, 10, 5];
console.log(array.sort(compare));



array = [
    {name: "Hola", value: 10},
    {name: "Jola", value: 20},
    {name: "Hola", value: 30},
    {name: "Aola", value: 40},
    {name: "Zola", value: 50},
];

array.sort((a, b) => {
    aName = a.name.toUpperCase();
    bName = b.name.toUpperCase();
    return (aName < bName) ? -1
            : (aName > bName) ? 1
            : a.value - b.value;  
});