{ 
    let number = prompt("Inserte un numero:");

    let isPar = (number % 2 == 0);
    let isMultThree = (number % 3 == 0);
    let isMultFive = (number % 5 == 0);

    if (isPar) console.log(`${number} es Par.`);
    else console.log(`${number} es Impar.`);

    if (isMultThree) console.log(`${number} es múltiplo de 3.`);
    else console.log(`${number} no es múltiplo de 3.`);

    if (isMultFive) console.log(`${number} es múltiplo de 5.`);
    else console.log(`${number} no es múltiplo de 5.`);
}