{ 
    /*  Store temperature in celsius,
    convert it to fahrenheit and store it,
    and convert fahrenheit to celsius  
    */

    /*  Store temperature in celsius */
    let temperatureInCelsius = 30;

    /* convert it to fahrenheit and output it */
    let inFahrenheit = (temperatureInCelsius * (9 / 5)) + 32;
    console.log(temperatureInCelsius + "°C is " + inFahrenheit + "°F");

    /* Store temperature in fahrenheit */
    let temperatureInFahrenheit = inFahrenheit;

    /*  */
    let inCelsius = (temperatureInFahrenheit - 32) * (5/9);

    console.log(temperatureInFahrenheit + "°F is " + inCelsius + "°C");
}