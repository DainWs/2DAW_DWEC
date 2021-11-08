var imageNum = 1;
var imageMin = 1;
var imageMax = 3;

function changeImageToPrev(e) {
    if(e.isFinal || e.type == "click") {
        imageNum--;
        if (imageNum < imageMin) imageNum = imageMax;
        updateImage();
    }
}

function changeImageToNext(e) {
    if(e.isFinal || e.type == "click") {
        imageNum++;
        if (imageNum > imageMax) imageNum = imageMin;
        updateImage();
    }
}

function updateImage() {
    let image = document.getElementById("image");
    image.setAttribute("src", `images/dinamic-image-${imageNum}.png`);
}

function initialize() {
    let leftButton = document.getElementById("left-button");
    leftButton.onclick = changeImageToPrev;
    let rightButton = document.getElementById("right-button");
    rightButton.onclick = changeImageToNext;

    var imagesElement = document.getElementById('images');

    var hammerObject = new Hammer(imagesElement);
    hammerObject.on("panleft", changeImageToPrev);
    hammerObject.on("panright doubletap", changeImageToNext);
}

window.onload = initialize;