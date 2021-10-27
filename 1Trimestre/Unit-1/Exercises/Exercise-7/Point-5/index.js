{ 
    function sumEveryOther(...argumentsR) {
        let result = 0;
        for (let i = 0; i < argumentsR.length; i+=2) {
            result += argumentsR[i];
        }
        return result;
    }
    
    console.log(sumEveryOther(5, 6, 3, 4, 1));
    console.log(sumEveryOther(10, 2, 11));
    
    let array = [5, 6, 3, 4, 1];
    
    console.log(sumEveryOther(...array));
}