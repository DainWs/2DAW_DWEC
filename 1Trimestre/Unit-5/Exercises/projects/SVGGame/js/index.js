
const instance = new GameController();

function initializeKeyboard() {
    window.onkeydown = instance.update;
}

window.onload = () =>{
    initializeKeyboard();
};