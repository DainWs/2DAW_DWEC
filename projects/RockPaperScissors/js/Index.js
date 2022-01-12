import { Player } from "./Models/Player.js";
import { IA } from "./Models/IA.js";
import { GameController } from "./Controllers/GameController.js";

let i = 1;
let players = [
    new Player(i++, "Jose"),
    new IA(i++)
];

const controller = new GameController(players);

function run() {
    controller.run();

    console.log(controller);
}

window.onload = run;