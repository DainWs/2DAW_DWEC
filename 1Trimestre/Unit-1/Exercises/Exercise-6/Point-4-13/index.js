{ 

    let cols = prompt("Numero columnas:");
    let width = prompt("Ancho:");
    let height = prompt("Alto:");

    let table = "<table><tr>";
    let i = 0;
    while (i < cols) {
        table += `<td width="${width}px" height="${height}px" style="border: 1px solid black"><td>`;
        i++;
    }
    table += "</tr></table>";
    document.write(table);
}