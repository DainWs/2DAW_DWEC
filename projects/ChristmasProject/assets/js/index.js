import { instance } from "./controllers/MainController.js";

$()
window.onload = (e) => {
    console.log("hola");
    console.log(instance);
    instance.start();
}