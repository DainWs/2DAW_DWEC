import { formatImageUrl } from "../utils/ViewUtils.js";

class HomeView {

    constructor() {
        this.charactersElement = document.getElementById('characters');
        this.individualWidth = 0;
        this.update();
    }

    setOnScrollListener(listener) {
        window.addEventListener("scroll", listener);
    }

    setScrollToggleButtonListener(listener) {
        document.getElementById('scroll-mode').onclick = listener;
    }

    setScrollModeText(text) {
        document.getElementById('current-scroll-mode').innerText = text;
    }

    setShowMoreListener(listener) {
        document.getElementById('show-more-button').onclick = listener;
    }

    update() {
        if (window.innerWidth < 800) {
            this.individualWidth = Math.trunc(window.innerWidth / 6);
        } else {
            this.individualWidth = Math.trunc(window.innerWidth / 11);
        }
    }

    addCharacter(character, onclick) {
        let characterDiv = document.createElement('div');
        characterDiv.setAttribute("class", "character-div");
        characterDiv.setAttribute("id", character._id);
        characterDiv.style.width = `${this.individualWidth}px`;

        let characterFigure = document.createElement('figure');
        characterFigure.style.backgroundImage = `url('${formatImageUrl(character.imageUrl)}')`;
        let characterImage = document.createElement('img');
        characterFigure.appendChild(characterImage);
        characterDiv.appendChild(characterFigure);
        
        let characterName = document.createElement('p')
        characterName.innerText = character.name;
        characterDiv.appendChild(characterName);
        
        characterDiv.character = character;
        characterDiv.onclick = onclick;
        this.charactersElement.appendChild(characterDiv);
    }

    removeCharacter(character) {
        let characterDiv = document.getElementById(character._id);
        characterDiv.remove();
    }
}

export { HomeView };