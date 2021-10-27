{
    function process(cadena) {
        let length = cadena.length;
        let matriz = [];

        for (let i = 0; i < length; i++) {
            matriz.push([]);
            for (let j = 0; j < length; j++) {
                matriz[i].push(" ");
            }
        }

        let lengthOne = length - 1;
        for (let j = 0; j < length; j++) {
            let currentChar = cadena.charAt(length - (j + 1));

            matriz[lengthOne][j] = currentChar;
            matriz[j][lengthOne] = currentChar;

            matriz[0][lengthOne - j] = currentChar;
            matriz[lengthOne - j][0] = currentChar;
        }

        document.write("<table>");
        for (let i = 0; i < length; i++) {
            document.write("<tr>");
            for (let j = 0; j < length; j++) {
                document.write(`<td>${matriz[i][j]}</td>`);
            }
            document.write("</tr>");
        }
        document.write("</table>");

    }

    process(prompt("inserte palabra:"));

}