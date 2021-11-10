const controller = new BookController();

function afterLoad() {
    console.log("initilize");
    controller.initialize();
}

window.onload = afterLoad;