var alpha = 0;

function rotate(e) {
    alpha = Math.round(e.alpha);
    updateImage();
}

function a() {
    alpha+=1;
    console.log(alpha);
    updateImage();
    setTimeout(a, 1);
}

setTimeout(a, 1);

function updateImage() {
    let image = document.getElementById("image");
    image.style.transform = `skewY(${alpha}deg)`;
}

function initialize() {
    window.addEventListener("deviceorientation", rotate);
    updateImage();
}

window.onload = initialize;