function drawCell(e){
    if (e.ctrlKey) {
        e.target.style.backgroundColor = "red";
    }
    else if (e.shiftKey) {
        e.target.style.backgroundColor = "blue";
    }
    else if (e.altKey) {
        e.target.style.backgroundColor = "white";
    }
}

function clear() {
    document.getElementById("table").remove();
    makeTable();
}

const coords = [0, 0];
const lastCoords = [0, 0];
function initial(e) {
    coords[0] = e.screenX - lastCoords[0];
    coords[1] = e.screenY - lastCoords[1];
}

function move(e) {
    console.log(e);
    if(e.screenX != 0 || e.screenY != 0) {
        let x = (e.screenX - coords[0]);
        let y = (e.screenY - coords[1]);
        e.target.style = `transform: translate(${x}px,${y}px)`;
        lastCoords[0] = x;
        lastCoords[1] = y;
    }
    return true;
}

function afterLoad() {
    let img = document.querySelector("img");
    img.ondragstart = initial;
    img.ondrag = move;
}

window.onload = afterLoad;