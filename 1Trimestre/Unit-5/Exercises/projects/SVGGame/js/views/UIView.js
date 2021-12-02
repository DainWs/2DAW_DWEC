class UIView {
    updateLifes(lifes) {
        let lifesUI = document.getElementById('lifes');
        lifesUI.innerHTML = "";

        let numHearts = lifes/2;
        for (; numHearts > 0.5; numHearts--) {
            let heart = document.createElement("img");
            heart.setAttribute("src", "images/heart.png");
            heart.setAttribute("class", "heart");
            lifesUI.appendChild(heart);
        }
        
        if (numHearts > 0) {
            let heart = document.createElement("img");
            heart.setAttribute("src", "images/half_heart.png");
            heart.setAttribute("class", "heart");
            lifesUI.appendChild(heart);
        }
    }

    updateScore(score) {
        let scoreUI = document.getElementById('score');
        scoreUI.innerText = score;
    }

    showEnd(time, score, highScore, lifes = 0) {
        let dialogUI = document.getElementById('modal-dialog');
        
        let header = document.createElement("header");
        let title = document.createElement("h1");
        title.innerText = "Game Over";
        header.appendChild(title);
        dialogUI.appendChild(header);
        
        let sectionOne = document.createElement("section");
        sectionOne.setAttribute("class", "end-content");
        
        let lifesRemainingsDiv = document.createElement("div");
        lifesRemainingsDiv.innerText = `Lifes remainings: ${lifes} lifes`;
        sectionOne.appendChild(lifesRemainingsDiv);

        let timeSurvivedDiv = document.createElement("div");
        timeSurvivedDiv.innerText = `Time survived: ${time}`;
        sectionOne.appendChild(timeSurvivedDiv);

        let isHighScore = score > highScore;

        let scoreDiv = document.createElement("div");
        scoreDiv.innerText = `Score: ${score} ${(isHighScore)? 'NEW HIGH SCORE' : ''}`;
        sectionOne.appendChild(scoreDiv);

        dialogUI.appendChild(sectionOne);

        dialogUI.appendChild(document.createElement("hr"));
        
        let sectionTwo = document.createElement("section");
        sectionTwo.setAttribute("class", "end-content");

        let highScoreDiv = document.createElement("div");
        highScoreDiv.innerText = `High score: ${(isHighScore)? score : highScore}`;
        sectionTwo.appendChild(highScoreDiv);
        
        dialogUI.appendChild(sectionTwo);

        let footer = document.createElement("footer");
        let reset = document.createElement("input");
        reset.setAttribute("type", "button");
        reset.setAttribute("value","Play again");
        reset.onclick = () => {location.reload()};
        footer.appendChild(reset);
        dialogUI.appendChild(footer);

        dialogUI.setAttribute("class", "visible");
    }
}

export { UIView };