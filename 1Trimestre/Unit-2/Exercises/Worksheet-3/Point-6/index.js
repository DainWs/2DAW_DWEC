{ 
    function check(cadena, subcadena) {
        let index = cadena.indexOf(subcadena);
        if (index == -1) {
            document.write("La cadena 2 no es subcadena de la cadena 1");
        }
        else {
            document.write(`La cadena 2 es subcadena de la cadena 1, esto empieza en la posición: ${index}`);
        }
    }

    check("inserte frase aqui tambien", "aqui");
    document.write("<br/>");
    check("inserte frase aqui tambien", "hola");
    document.write("<br/>");
    check("inserte frase aqui tambien", "frase");

}