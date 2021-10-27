{ 
    let numberOne = parseInt(prompt("Number #1:"));
    let numberTwo = parseInt(prompt("Number #2:"));
    let operator = prompt("Operator (+|-|*|/):");

    let result = 0;
    switch(operator) {
        case "+":
            result = numberOne + numberTwo;
        case "-":
            result = numberOne - numberTwo;
        case "*":
            result = numberOne * numberTwo;
        case "/":
            result = numberOne / numberTwo;
        default:
            result = numberOne + numberTwo;
    }

    console.log(`Result : ${result}`);
}