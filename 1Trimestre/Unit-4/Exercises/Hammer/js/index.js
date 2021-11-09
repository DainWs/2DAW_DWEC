var imageNum = 1;
var imageMin = 1;
var imageMax = 4;

function changeImageToPrev(e) {
    if(e.isFinal || e.type == "click") {
        beforeUpdate();
        imageNum--;
        if (imageNum < imageMin) imageNum = imageMax;
        updateImage();
    }
}

function changeImageToNext(e) {
    if(e.isFinal || e.type == "click") {
        beforeUpdate();
        imageNum++;
        if (imageNum > imageMax) imageNum = imageMin;
        updateImage();
    }
}

function beforeUpdate() {
    let imageSelector = document.getElementById(`image-selector-${imageNum}`);
    imageSelector.style.backgroundColor = "white";
}

function updateImage() {
    let imageSelector = document.getElementById(`image-selector-${imageNum}`);
    imageSelector.style.backgroundColor = "gray";
    
    let imageNumElement = document.getElementById("image-num");
    imageNumElement.innerText = `${imageNum}/${imageMax}`;

    let image = document.getElementById("image");
    image.setAttribute("src", `images/dinamic-image-${imageNum}.jpg`);
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

    makeSelectors();
    updateImage();
}

function makeSelectors() {
    let selectors = document.getElementById("slider-selectors");
    for (let i = 1; i <= imageMax; i++) {
        let selector = document.createElement("li");
        selector.setAttribute("id", `image-selector-${i}`);
        selectors.appendChild(selector);
    }
}

window.onload = initialize;