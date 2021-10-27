{ 
    function elimina(cadena) {
        let chars = []
        let newCadena = "";
        for (let i = 0; i < cadena.length; i++) {
            let currentChar = cadena.charAt(i);
            if (!chars.includes(currentChar)) {
                chars.push(currentChar);
                newCadena += currentChar;
            }
        }
        return newCadena;
    }

    document.write(elimina("inserte frase aqui tambien"));

}