class Paper extends Action {
    constructor() {
        super("Paper");
    }

    getWinsAgainst() {
        return "Rock";
    }

    getLoseAgainst() {
        return "Scissors";
    }
}