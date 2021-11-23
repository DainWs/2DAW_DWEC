class GameController {
    players = [];
    currentPlayer = 0;
    constructor(players) {
        this.players = players;
        this.view = new GameView();
    }

    run() {
        this.currentPlayer = 0;
        this.view.clearCountdown();

        this.askActions();
        this.showActions();
        this.calcWiners();
        this.showCurrentPlayers();

        if (this.players.length > 1) {
            countdownClock(this, this.view, 5);
        } else {
            this.view.writeWinner(this.players[0]);
            console.log("The winner is player " + this.players[0].num);
        }
    }

    askActions() {
        do {
            this.selectAction();
            this.currentPlayer++;
        } while (this.currentPlayer < this.players.length);
    }

    selectAction() {
        let player = this.players[this.currentPlayer];
        if (player instanceof IA) {
            player.createAction();
        } else {
            let actionName = this.view.askOneAction();
            let selectedAction = getActionFromString(actionName);
            player.setAction(selectedAction);
        }
    }

    showActions() {
        this.view.writeResults(this.players);
    }

    calcWiners() {
        const newPlayers = [];
        this.players.forEach(
            (player, i) => {
                if (i + 1 < this.players.length) {
                    let nextPlayer = this.players[i + 1];
                    if (player.winsAgainst(nextPlayer)) {
                        newPlayers.push(player);
                        player.win();
                        nextPlayer.lose();
                    } else if (player.loseAgainst(nextPlayer)) {
                        newPlayers.push(nextPlayer);
                        player.lose();
                        nextPlayer.win();
                    } else {
                        newPlayers.push(player, nextPlayer);
                        player.tie();
                        nextPlayer.tie();
                    }

                    this.updatePlayerResult(player);
                    this.updatePlayerResult(nextPlayer);
                }
            }
        );
        this.players = newPlayers;
    }

    updatePlayerResult(player) {
        this.view.updateResults(player);
    }

    showCurrentPlayers() {
        this.view.writePlayersRemaining(this.players.length);
    }
}

