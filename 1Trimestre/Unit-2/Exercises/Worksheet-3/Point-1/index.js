{
    function invierteCadena(cadena) {
        let newCadena = "";
        for (let i = cadena.length; i >= 0; i--) {
            let currentChar = cadena.charAt(i);
            newCadena += currentChar;
        }
        return newCadena;
    }

    function inviertePalabras(cadenaPalabras) {
        let newPalabras = "";
        let palabras = cadenaPalabras.split(" ");

        for (let i = 0; i < palabras.length; i++) {
            newPalabras += invierteCadena(palabras[i]) + " ";
        }

        return newPalabras.substr(0, newPalabras.length - 1);
    }

    //Podata, si encuentra una con la misma longitud, pilla la ultima.
    function encuentraPalabraMasLarga(cadenaPalabras) {
        let resultWord = "";
        let palabras = cadenaPalabras.split(" ");

        for (let i = 0; i < palabras.length; i++) {
            let word = palabras[i];
            if (word.length >= resultWord.length) {
                resultWord = word;
            }
        }

        return resultWord;
    }

    function filtraPalabrasMasLargas(cadenaPalabras, minLenght) {
        let wordCount = 0;
        let palabras = cadenaPalabras.split(" ");

        for (let i = 0; i < palabras.length; i++) {
            if (palabras[i].length > minLenght) {
                wordCount++;
            }
        }

        return wordCount;
    }

    function cadenaBienFormada(cadena) {
        let newCadena = "";
        for (let i = 0; i < cadena.length; i++) {
            let currentChar = cadena.charAt(i);
            if (i == 0) {
                currentChar = currentChar.toUpperCase();
            }
            else {
                currentChar = currentChar.toLowerCase();
            }
            newCadena += currentChar;
        }
        return newCadena;
    }


    document.write(invierteCadena("aloh"));
    document.write("<br/>");
    document.write(inviertePalabras("aloh dlrow"));
    document.write("<br/>");
    document.write(encuentraPalabraMasLarga("Esto deberia ser la palabra mas larga"));
    document.write("<br/>");
    document.write(filtraPalabrasMasLargas("Esto deberia ser la palabra mas larga", 5));
    document.write("<br/>");
    document.write(cadenaBienFormada("hOlA CoMo EsTaIs"));
}