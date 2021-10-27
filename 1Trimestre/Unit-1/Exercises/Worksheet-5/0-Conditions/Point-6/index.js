{ 
    let age = prompt("Edad:");
    let location = prompt("Localidad en la que vives:");

    let allowedAge = (18 <= age && age <= 30);

    if (allowedAge && location == "Madrid") {
        console.log("Puedes acceder al carnet de empresarios emprendedores.");
    }
}