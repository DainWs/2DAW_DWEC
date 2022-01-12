import { Action } from "./Action.js";

class Scissors extends Action {
    constructor() {
        super("Scissors");
    }

    winsAgainst(action) {
        return action.name == "Paper";
    }

    loseAgainst(action) {
        return action.name == "Rock";
    }
}

export { Scissors };