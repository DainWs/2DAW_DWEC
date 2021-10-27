{
    let brothersCount = prompt("Cantidad de Hermanos:");
    let number = prompt("Un numero:");

    let discount = 0;
    if (brothersCount = 0) {
        discount = number;
    }
    else if (brothersCount > 3) {
        discount = (number*0.75);
    }
    else {
        discount = (number*0.95);
    }

    alert(discount);
}