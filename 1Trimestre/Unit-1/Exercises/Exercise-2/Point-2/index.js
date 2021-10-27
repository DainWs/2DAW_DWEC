{ /* we calculate the age of a person */
    let currentAge = 20;
    let maxAge = 80;
    let estimatedAmoung = 3;

    let years = maxAge - currentAge;
    let days = years * 365;
    let result = days * estimatedAmoung;

    console.log("The amoung estimated is " + result + " for " + days + " days");
}