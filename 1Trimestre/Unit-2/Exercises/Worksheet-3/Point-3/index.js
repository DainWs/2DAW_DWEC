{ 
    function localiza(cadena, subcadena) {
        let lastPos = -1;
        let lastIndex = 0;
        do {
            lastIndex = cadena.indexOf(subcadena, lastPos + 1);
            lastPos = lastIndex;

            if (lastIndex != -1) {
                document.write(lastIndex + ", ");
            }
        } while (lastIndex != -1);
    }

    localiza("solo MAYUSCULAS, solo minusculas", "solo");

}