class PlayerView {
    drawPlayer(player) {
        let playerElement = document.getElementById("player");

        playerElement.setAttribute("cx", player.getX());
        playerElement.setAttribute("cy", player.getY());
    }
}