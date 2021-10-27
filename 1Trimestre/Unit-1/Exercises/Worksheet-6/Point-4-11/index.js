{ 

    let cols = prompt("Numero columnas:");
    let width = prompt("Ancho:");
    let height = prompt("Alto:");

    let table = "<table><tr>";
    for (let i = 0; i < cols; i++) {
        table += `<td width="${width}px" height="${height}px" style="border: 1px solid black"><td>`;
    }
    table += "</tr></table>";
    document.write(table);
}