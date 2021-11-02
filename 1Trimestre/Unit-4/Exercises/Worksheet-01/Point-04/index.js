function drawCell(e){
    if (e.ctrlKey) {
        e.target.style.backgroundColor = "red";
    }
    else if (e.shiftKey) {
        e.target.style.backgroundColor = "blue";
    }
}

function makeTable() {
    let table = document.createElement("table");

    for (let i = 0; i < 100; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 100; j++) {
            let cell = document.createElement("td");
            cell.onmousemove = drawCell;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    document.body.appendChild(table);
}

window.onload = makeTable;