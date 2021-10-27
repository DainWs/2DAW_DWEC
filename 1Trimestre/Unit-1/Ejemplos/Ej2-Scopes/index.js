{
    let mivariable = 3;  /*Local scope*/
    var otraVariable = 5; /*Global scope*/ 

    otraVariable = otraVariable + mivariable;

    console.log("Inside the scope");
    console.log("mivariable = " + mivariable);
    console.log("otraVariable = " + otraVariable);
}

console.log("Outside the scope");
console.log("mivariable = " + mivariable);
console.log("otraVariable = " + otraVariable);