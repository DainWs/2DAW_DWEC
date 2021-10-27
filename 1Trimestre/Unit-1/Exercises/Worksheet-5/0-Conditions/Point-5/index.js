{ 
    let name = prompt("Nombre:");

    let message = "";
    switch(name) {
        case "Ana":
            message = "Bienvenida";
            break;
        case "Clara":
            message = "Bienvenida";
            break;
        case "Eduardo":
            message = "Bienvenido";
            break;
        case "Pablo":
            message = "Bienvenido";
            break;
        default:
            message = "Bienvenido";
    }

    alert(message);
}