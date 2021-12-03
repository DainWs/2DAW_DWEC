import { Gato } from "./models/Gato.js";

const gatos = [];

function plus(e) {
    let gato = gatos[e.target.getAttribute('id')];
    gato.incrementCount();
    document.getElementById(`counter-${gato.getID()}`).innerText = `${gato.getCount()} times`;
}

window.onload = () =>{
    let images = document.getElementsByTagName('img');

    Array.from(images).forEach((v) => {
        v.onclick = plus;

        let i = v.getAttribute('id');
        let newGato = new Gato(i, v.getAttribute('src'));
        document.getElementById(`counter-${i}`).innerText = `${newGato.getCount()} times`;
        gatos[i] = newGato;
    });
};