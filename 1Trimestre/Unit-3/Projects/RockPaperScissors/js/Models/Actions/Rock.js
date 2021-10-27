class Rock extends Action {
    constructor() {
        super("Rock");
    }

    getWinsAgainst() {
        return "Rock";
    }

    getLoseAgainst() {
        return "Scissors";
    }
}