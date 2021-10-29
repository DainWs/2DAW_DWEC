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

function countdownClock(controller, view, num) {
    view.writeCountdown(num);
    if(num > 0) {
        setTimeout(countdownClock, 1000, controller, view, num - 1);
    }
    else {
        controller.run();
    }
}

let playerOne = new Player(1);
let playerTwo = new IA(2);

const controller = new GameController(playerOne, playerTwo);

function run() {
    controller.run();

    console.log(controller);
}