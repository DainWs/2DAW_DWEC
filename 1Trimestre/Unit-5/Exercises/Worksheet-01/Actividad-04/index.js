function agregar(e) {
    let list = document.getElementById('lista');

    let newLiElement = document.createElement('li');
    newLiElement.innerText = prompt('Write something:');

    list.appendChild(newLiElement);
}

window.onload = () =>{
	document.getElementById('agregar').onclick = agregar;
};