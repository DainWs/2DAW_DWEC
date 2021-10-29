class GameView {
    constructor() {}

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

    makeImage(player) {
        let image = document.createElement("img");
        image.setAttribute("id", player.num);
        image.setAttribute("src", player.getAction().getSrc());

        return image;
    }

    writeCountdown(num) {
        let countdownElement = document.getElementById("countdown");
        countdownElement.innerText = `Time remaining for next round : ${num} s`;
    }

    clearCountdown() {
        document.getElementById("countdown").innerText = "";
    }

    askOneAction() {
        return prompt("Select one action (Paper/Rock/Scissors):");
    }
}