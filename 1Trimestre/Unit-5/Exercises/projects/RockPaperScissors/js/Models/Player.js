class Player {
    num = 0;
    action = null;
    state = "tie";
    constructor(num, name) {
        this.num = num;
        this.name = name;
    }

    setAction(action) {
        this.action = action;
    }

    getAction() {
        return this.action;
    }

    getId() {
        return this.name;
    }

    winsAgainst(player) {
        let pAction = player.getAction();
        return this.action.winsAgainst(pAction);
    }

    loseAgainst(player) {
        let pAction = player.getAction();
        return this.action.loseAgainst(pAction);
    }

    win() {
        this.state = "winner";
    }

    tie() {
        this.state = "tie";
    }

    lose() {
        this.state = "losser";
    }
}