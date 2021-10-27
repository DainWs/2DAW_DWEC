{
    /*
        Write a function that can take in any number of arguments,
        and returns the sum of all of the arguments.
    */
    function sum(...args) {
        let result = 0;
        for (num of args) {
            if (typeof num == "number") {
                result += num;
            }
        }
        return result;
    }

    console.log(sum(5, "6", 3, "a", 1));
    console.log(sum(10, "hola", 11, "Adios"));

    let array = ["HolaMundo", 5, 3, 4, "HolaMundo"];

    console.log(sum(...array));
}