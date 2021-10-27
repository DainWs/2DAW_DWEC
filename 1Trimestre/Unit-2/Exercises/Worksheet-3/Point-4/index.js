{ 
    function procesa(cadena) {
        let newCadena = "";
        let lastCadena = "";
        for (let i = 0; i < cadena.length; i++) {
            let currentChar = cadena.charAt(i);
            switch(currentChar) {
                case "a":
                case "e":
                case "i":
                case "o":
                case "u":
                    lastCadena += currentChar;
                    break;
                case " ":
                    break;
                default:
                    newCadena += currentChar;
                    break;
            }
        }
        return newCadena + lastCadena;
    }

    document.write(procesa(prompt("inserte frase")));

}