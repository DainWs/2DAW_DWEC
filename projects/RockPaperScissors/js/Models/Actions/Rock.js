import { Action } from "./Action.js";

class Rock extends Action {
    constructor() {
        super("Rock");
    }

    winsAgainst(action) {
        return action.name == "Scissors";
    }

    loseAgainst(action) {
        return action.name == "Paper";
    }
}

export { Rock };