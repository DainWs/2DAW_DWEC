{ 
    const retirementAge = 67;
    let age = prompt("Edad:");

    let grade = "";

    if(age <= 5) {
        grade = "Jardín de infancia";
    }
    else if (age <= 11) {
        grade = "Primaria";
    }
    else if (age <= 16) {
        grade = "ESO";
    }
    else if (age <= 21) {
        grade = "Bachillerato o Ciclos";
    }
    else {
        grade = "Universidad";
    }

    console.log(grade);
}