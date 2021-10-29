class GameView {
    constructor() { }

    writePlayersRemaining(num) {
        document.getElementById("playersCount").innerText = `${num} Players  remaining.`;
    }

    writeResults(players) {
        document.getElementById("results").innerHTML = "";
        players.forEach(player => {
            let result = document.getElementById("results");
            let image = this.makeImage(player);
            result.appendChild(image);
        });
    }

    updateResults(player) {
        let image = document.getElementById(player.num);
        image.setAttribute("class", player.state);
    }

    makeImage(player) {
        let figure = document.createElement("figure");
        figure.setAttribute("id", `figure-${player.num}`);

        let image = document.createElement("img");
        image.setAttribute("id", player.num);
        image.setAttribute("src", player.getAction().getSrc());

        let figcaption = document.createElement("figcaption");
        figcaption.setAttribute("id", `figcaption-${player.num}`);
        figcaption.innerText = player.getId();

        figure.appendChild(image);
        figure.appendChild(figcaption);
        return figure;
    }

    writeCountdown(num) {
        let countdownElement = document.getElementById("countdown");
        countdownElement.innerText = `Time remaining for next round : ${num} s`;
    }

    clearCountdown() {
        document.getElementById("countdown").innerText = "";
    }

    writeWinner(player) {
        document.getElementById("winnerText").innerText = `${player.getId()} is the winner.`;
    }

    askOneAction() {
        return prompt("Select one action (Paper/Rock/Scissors):");
    }
}