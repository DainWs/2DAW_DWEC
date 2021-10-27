{ 
    /**
     * Write a function called addOnlyNums that can take in any number of arguments 
     * (including numbers or strings), and returns the sum of only the numbers.
     */
    function addOnlyNums(...args) {
        let result = 0;
        for (num of args) {
            if (typeof num == "number") {
                result += num;
            }
            else {
                let parsedNum = parseInt(num);
                if (!Number.isNaN(parsedNum)) {
                    result += parsedNum;
                }
            }
        }
        return result;
    }
    
    console.log(addOnlyNums(5, "6", 3, "a", 1));
    console.log(addOnlyNums(10, "hola", 11, "Adios"));
    
    let array = ["HolaMundo", 5, 3, 4, "1"];
    
    console.log(addOnlyNums(...array));
}