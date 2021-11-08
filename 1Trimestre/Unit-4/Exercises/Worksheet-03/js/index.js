var alpha = 0;

function rotate(e) {
    alpha = Math.round(e.alpha);
    updateImage();
}

function updateImage() {
    let image = document.getElementById("image");
    image.style.transform = `rotate(${alpha}deg)`;
}

function initialize() {
    window.addEventListener("deviceorientation", rotate);
    updateImage();
}

window.onload = initialize;