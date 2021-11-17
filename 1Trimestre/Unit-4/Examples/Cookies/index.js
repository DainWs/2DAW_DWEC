

function crearCookie(e) {
    document.cookie = "usuario=jose";
}

function borrarCookie(e) {
    document.cookie = "usuario=jose, max-age:0";
}

function mostrarCookie(e) {
    console.log(document.cookie);
}

window.onload = () =>{
    document.getElementById("crear").onclick = crearCookie;
    document.getElementById("borrar").onclick = borrarCookie;
    document.getElementById("mostrar").onclick = mostrarCookie;
};