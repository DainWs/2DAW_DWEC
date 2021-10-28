class GameController {
    players = [];
    currentPlayer = 0;
    constructor(...players) {
        this.players = players;
    }

    setView(view) {
        this.view = view;
    }

    nextPlayer() {
        this.currentPlayer++;
    }

    selectAction() {
        let player = this.players[this.currentPlayer];
        if (player instanceof IA) {
            player.createAction();
        } else {
            let actionName = prompt("Select acction (Paper/Rock/Scissors):", "Paper");
            let selectedAction = getActionFromString(actionName);
            let player = this.players[this.currentPlayer];
            player.setAction(selectedAction);
        }
    }

    askActions() {
        do {
            this.selectAction();
            this.nextPlayer();
        } while (this.currentPlayer < this.players.length);
    }

    calcWiner() {
        const newPlayers = [];
        this.players.forEach(
            (p, i) => {
                if (i + 1 < this.players.length) {
                    let nextPlayer = this.players[i + 1];
                    if (p.winsAgainst(nextPlayer)) {
                        newPlayers.push(p);
                    } else if (p.loseAgainst(nextPlayer)) {
                        newPlayers.push(nextPlayer);
                    } else {
                        newPlayers.push(p, nextPlayer);
                    }
                }
            }
        );
        this.players = newPlayers;
    }

    showActions() {
        console.log("## Actions");
        this.players.forEach(
            (p) => {
                console.log(p.num + " => " + p.getAction().name);
            }
        );
    }

    showCurrentPlayers() {
        console.log("## Current players");
        this.players.forEach(
            (p) => {
                console.log(p.num);
            }
        );
    }

    run() {

        this.askActions();
        this.showActions();
        this.calcWiner();
        this.showCurrentPlayers();

        console.log(this.players.length);
        if (this.players.length > 1) {
            setTimeout(this.run, 5000);
        } else {
            console.log("The winner is player " + this.players[0].num);
        }
    }
}

