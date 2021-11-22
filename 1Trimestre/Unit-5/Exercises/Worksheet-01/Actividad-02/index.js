function showOrHide(e) {
    let pElement = document.getElementById('articulo');
    
    if (pElement.isShow) {
        pElement.isShow = false;
        pElement.style.whiteSpace = 'nowrap';
        e.target.setAttribute('value', 'Ver Articulo Completo');
    }
    else {
        pElement.isShow = true;
        pElement.style.whiteSpace = 'normal';
        e.target.setAttribute('value', 'Mostrar Menos');
    }
}

window.onload = () =>{
    document.getElementById('articulo').isShow = false;
	document.getElementById('mostrarTodo').onclick = showOrHide;
};