import { Paper } from "../Models/Actions/Paper.js";
import { Rock } from "../Models/Actions/Rock.js";
import { Scissors } from "../Models/Actions/Scissors.js";

const paper = new Paper();
const rock = new Rock();
const scissors = new Scissors();

function getActionFromString(actionName) {
    let action = null;
    switch(actionName) {
        case "Paper":
            action = paper;
            break;
        case "Rock":
            action = rock;
            break;
        case "Scissors":
            action = scissors;
            break;
        default:
            action = paper;
    }
    return action;
}

function getRandomAction() {
    let action = null;
    let randomAction = Math.trunc((Math.random() * 2) + 1);
    switch(randomAction) {
        case 1:
            action = paper;
            break;
        case 2:
            action = rock;
            break;
        case 3:
            action = scissors;
            break;
        default:
            action = paper;
    }
    return action;
}

export { getActionFromString, getRandomAction };