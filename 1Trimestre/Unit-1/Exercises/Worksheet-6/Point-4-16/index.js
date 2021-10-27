{ 
    let number = prompt("Numero a adivinar:");
    let tryOne = 0;
    do {
        tryOne = parseInt(prompt("Adivina:"));
        console.log(tryOne);

        if (tryOne > number) {
            console.log("The number is smaller than " + tryOne);
        }
        else if (tryOne < number) {
            console.log("The number is bigger than " + tryOne);
        }

    } while(tryOne != number);
    
}