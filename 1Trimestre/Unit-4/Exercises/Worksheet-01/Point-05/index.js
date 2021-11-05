var teclaDPulsada = false

function drawCell(e){
    if (e.ctrlKey) {
        e.target.style.backgroundColor = "red";
    }
    else if (e.shiftKey) {
        e.target.style.backgroundColor = "blue";
    }
    /*else if (e.altKey) {
        e.target.style.backgroundColor = "white";
    }*/
    else if (teclaDPulsada) {
        e.target.style.backgroundColor = "white";
    }
}

function onKeyDown(e) {
    let keyDown = e.key;
    if (keyDown == "d") {
        teclaDPulsada = true;
    }
}

function onKeyUp(e) {
    let keyUp = e.key;
    if (keyUp == "d") {
        teclaDPulsada = false;
    }
}

function clear() {
    document.getElementById("table").remove();
    makeTable();
}

function makeTable() {
    let table = document.createElement("table");
    table.setAttribute("id", "table");

    for (let i = 0; i < 100; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 100; j++) {
            let cell = document.createElement("td");
            cell.onmousemove = drawCell;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    document.onkeydown = onKeyDown;
    document.onkeyup = onKeyUp;
    document.body.appendChild(table);
}

function afterLoad() {
    makeTable();
    let btn = document.querySelector("button");
    btn.onclick = clear;
}

window.onload = afterLoad;