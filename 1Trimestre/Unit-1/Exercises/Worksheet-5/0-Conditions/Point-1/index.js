{ 
    function isPar(number) {
        if (number%2) {
            console.log(`El numero ${number} es Impar`);
        }
        else {
            console.log(`El numero ${number} es Par`);
        }
    }

    let number = prompt("Inserta un numero:");
    isPar(number);
}