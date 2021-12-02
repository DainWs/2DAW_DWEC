class UIView {
    updateLifes(lifes) {
        let ui = document.getElementById('ui');
        ui.innerHTML = "";
        for (let i = 0; i < numLifes; i++) {
            let heart = document.createElement("img");
            heart.setAttribute("src", "images/heart.png");
            ui.appendChild(heart);
        }
    }
}