var grades = 0;

function rotate(e) {
    grades = Math.round(e.alpha);
    updateImage();
}

function acceletare(e) {
    grades = Math.round(e.acceleration.y);
    updateImage();
}

function updateImage() {
    let image = document.getElementById("image");
    image.style.transform = `rotate(${grades}deg)`;
}

function initialize() {
    //window.addEventListener("deviceorientation", rotate);
    window.addEventListener("devicemotion", acceletare);
    updateImage();
}

window.onload = initialize;