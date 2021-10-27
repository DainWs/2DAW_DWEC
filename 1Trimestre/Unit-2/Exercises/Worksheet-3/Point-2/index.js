{ 
    function determina(cadena) {
        document.write(cadena);
        document.write("<br/>");
        if (cadena == cadena.toUpperCase()) {
            document.write("Formada por solo mayusculas.");
        }
        else if (cadena == cadena.toLowerCase()) {
            document.write("Formada por solo minusculas.");
        }
        else {
            document.write("Formada por una mezcla de ambas.");
        }
    }

    determina("SOLO MAYUSCULAS");
    document.write("<br/>");
    document.write("<br/>");
    determina("solo minusculas");
    document.write("<br/>");
    document.write("<br/>");
    determina("Mezcla de ambos");

}