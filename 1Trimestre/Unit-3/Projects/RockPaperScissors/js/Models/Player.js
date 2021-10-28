class Player {
    num = 0;
    action = null;
    constructor(num) {
        this.num = num;
    }

    setAction(action) {
        this.action = action;
    }

    getAction() {
        return this.action;
    }

    winsAgainst(player) {
        let pAction = player.getAction();
        return this.action.winsAgainst(pAction);
    }

    loseAgainst(player) {
        let pAction = player.getAction();
        return this.action.loseAgainst(pAction);
    }
}