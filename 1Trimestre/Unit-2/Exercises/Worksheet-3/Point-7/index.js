{ 
    function isPalindromo(cadena) {
        let is = true;
        let length = cadena.length;
        for (let i = 0; i < (length/2); i++) {
            let currentChar = cadena.charAt(i);
            let lastChar = cadena.charAt((length-1) - i);
            if (currentChar != lastChar) {
               is = false;
            }
        }
        return is;
    }

    document.write("ese " + isPalindromo("ese"));
    document.write("<br/>");
    document.write("eso " + isPalindromo("eso"));
    document.write("<br/>");
    document.write("esnse " + isPalindromo("esnse"));

}