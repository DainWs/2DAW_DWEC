{ 
    /**
     * Write a function called countTheArgs that can take any number of arguments,
     * and returns the number of arguments that are passed in.
     */
    function countTheArgs(...args) {
        return args.length;
    }
    
    console.log(countTheArgs(5, 6, 3, 4, 1));
    console.log(countTheArgs(10, 2, 11));
    
    let array = [5, 6, 3, 4, 1];
    
    console.log(countTheArgs(...array));
}