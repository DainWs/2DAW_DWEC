function removeImage(e) {
    let image = e.target;
    image.parentElement.removeChild(image);
}

function agregarImagen(e) {
    let list = document.getElementById('imageDiv');
    for (let file of Array.from(e.target.files)) {
        let imgElement = document.createElement('img');
        imgElement.setAttribute('src', `images/${file.name}`);
        imgElement.onclick = removeImage;
        list.appendChild(imgElement);
    };
}

window.onload = () =>{
	document.getElementById('imageSubmit').onchange = agregarImagen;
};