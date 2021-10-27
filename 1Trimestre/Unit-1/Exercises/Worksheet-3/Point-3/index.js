{ 
    const maxAge = 100;

    function calculateSupply(age, amountPerDay) {
        /* calculate the result */
        let years = maxAge - age;
        let days = years * 365;
        let result = Math.round(days * amountPerDay);

        /* Output the result */
        console.log(`You will need ${result} to last you until the ripe old age of ${maxAge}`);
    };

    calculateSupply(10, 3);

    calculateSupply(50, 4);

    calculateSupply(25, 10.55);
}