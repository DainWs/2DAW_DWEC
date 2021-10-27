{ 
    let rows = prompt("Numero filas:");
    let cols = prompt("Numero columnas:");
    let width = prompt("Ancho:");
    let height = prompt("Alto:");

    let table = "<table>";
    for (let i = 0; i < rows; i++) {
        table += `<tr>`;
        let oddOrPar = 0;
        
        if (i%2 != 0) oddOrPar = 0;
        else oddOrPar = 1;
        
        for (let j = 0; j < cols; j++) {
            let style = "";
            if (j%2 != oddOrPar) {
                style = ` style="background-color:black;" `;
            }
            table += `<td ${style} width="${width}px" height="${height}px" style="border: 1px solid black"><td>`;
        }
        table += `</tr>`;
    }
    
    table += "</table>";
    document.write(table);
}