{ 
    function countPalabras(cadena) {
        return (cadena.split("\s")).length;
    }

    document.write(countPalabras("ese que    es"));
    document.write("<br/>");
    document.write(countPalabras("ese que"));
    document.write("<br/>");
    document.write(countPalabras("ese que    "));

}