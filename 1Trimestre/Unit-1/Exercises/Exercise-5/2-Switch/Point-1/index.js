{ 
    let monthName = prompt("Nombre del mes:");
    let monthNumber = 0;
    switch(monthName.toLowerCase()) {
        case "enero":
        case "marzo":
        case "mayo":
        case "julio":
        case "agosto":
        case "octubre":
        case "diciembre":
            monthNumber = 31;
            break;
        case "febrero":
            monthNumber = 28;
            break;
        default:
            monthNumber = 30;
    };
    console.log("Numero de dias del mes:" + monthNumber);
}