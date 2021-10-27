{ 
    let rows = prompt("Numero filas:");
    let cols = prompt("Numero columnas:");
    let width = prompt("Ancho:");
    let height = prompt("Alto:");

    let table = "<table>";
    for (let i = 0; i < rows; i++) {
        table += `<tr>`;
        for (let j = 0; j < cols; j++) {
            table += `<td width="${width}px" height="${height}px" style="border: 1px solid black"><td>`;
        }
        table += `</tr>`;
    }
    
    table += "</table>";
    document.write(table);
}