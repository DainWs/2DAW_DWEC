import { GameController, keypressed } from "./controllers/GameController.js";

const instance = new GameController();

function loop() {
    instance.update();

    if (instance.isRunning()) {
        window.requestAnimationFrame(loop);
    }
}

function onKeyDown(e) {
    keypressed[e.key] = true;
}

function onKeyUp(e) {
    keypressed[e.key] = false;
}

function initializeKeyboard() {
    window.onkeydown = onKeyDown;
    window.onkeyup = onKeyUp;
}

window.onload = () =>{
    instance.start();
    initializeKeyboard();
    window.requestAnimationFrame(loop);
};