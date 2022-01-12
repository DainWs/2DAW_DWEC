import { instance } from "./controller/BookController.js";

function afterLoad() {
    console.log("initilize");
    instance.initialize();
}


window.onload = afterLoad;