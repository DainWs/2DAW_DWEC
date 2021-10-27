/**
 * Crear array con 10 numeros, y ordenarlo creciente y decreciente
 */

let numArray = [1, 5, 7, 9, 0, 7, 6, 5, 3, 8];
console.log(numArray.sort((a, b) => a - b));
console.log(numArray.sort((a, b) => b - a));


let pokemonArray = [
    {name: "Bulbasaur", type: ["Grass", "Poison"], nPokedex=1},
    {name: "Ivysaur", type: ["Grass", "Poison"], nPokedex=2},
    {name: "Venusaur", type: ["Grass", "Poison"], nPokedex=3},
    {name: "Charmander", type: ["Fire"], nPokedex=4},
    {name: "Charmeleon", type: ["Fire"], nPokedex=5},
    {name: "Charizard", type: ["Fire"], nPokedex=6},
    {name: "Squirtle", type: ["Water"], nPokedex=6},
    {name: "Charizard", type: ["Fire"], nPokedex=7},
    {name: "Wartortle", type: ["Water"], nPokedex=8},
    {name: "Blastoise", type: ["Water"], nPokedex=9},
    {name: "Caterpie", type: ["Bug"], nPokedex=10},
    {name: "Butterfree", type: ["Bug", "Flying"], nPokedex=11},
    {name: "Pidgey", type: ["Normal", "Flying"], nPokedex=12},
];

pokemonArray.sort((a, b) => {
    aName = a.name.toUpperCase();
    bName = b.name.toUpperCase();

    order = (aName < bName) ? -1
            : (aName > bName) ? 1
            : 0;

    if (order === 0) {
        order = a.nPokedex - b.nPokedex;
        if (order === 0) order = a.type.length - b.type.length;
    }
    
    return order;  
});