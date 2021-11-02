function mouseUpdate(e){
    document.body.innerHTML = `<p><strong>X :</strong>${e.screenX}</p><p><strong>Y :</strong>${e.screenY}</p>`
}
document.body.onmousemove = mouseUpdate;