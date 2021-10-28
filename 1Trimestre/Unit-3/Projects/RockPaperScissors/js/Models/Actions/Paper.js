class Paper extends Action {
    constructor() {
        super("Paper");
    }

    winsAgainst(action) {
        return action.name == "Rock";
    }

    loseAgainst(action) {
        return action.name == "Scissors";
    }
}