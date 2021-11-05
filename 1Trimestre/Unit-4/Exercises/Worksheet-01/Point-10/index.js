const coords = [];
const lastCoords = [];
function initial(e) {
    let id = e.target.getAttribute("id");
    coords[id][0] = e.screenX - lastCoords[id][0];
    coords[id][1] = e.screenY - lastCoords[id][1];
}

function move(e) {
    if(e.screenX != 0 || e.screenY != 0) {
        let id = e.target.getAttribute("id");
        let x = (e.screenX - coords[id][0]);
        let y = (e.screenY - coords[id][1]);
        e.target.style = `transform: translate(${x}px,${y}px)`;
        lastCoords[id][0] = x;
        lastCoords[id][1] = y;
    }
    return true;
}

function afterLoad() {
    let imgs = document.getElementsByTagName("img");
    for (const img of imgs) {
        let id = img.getAttribute("id");
        coords[id] = [0, 0];
        lastCoords[id] = [0, 0];
        img.ondragstart = initial;
        img.ondrag = move; 
    }
}

window.onload = afterLoad;