import { formatImageUrl } from "../utils/ViewUtils.js";

class HomeView {

    constructor() {
        this.charactersElement = $('#characters');
        this.individualWidth = 0;
        
        this.update();

        window.onresize = this.update;
    }

    setOnScrollListener(listener) {
        window.addEventListener("scroll", listener);
    }

    setScrollModeText(text) {
        $('#current-scroll-mode').text(text);
    }

    setScrollToggleButtonListener(listener) {
        $('#scroll-mode').on('click', listener);
    }

    setShowMoreListener(listener) {
        $('#show-more-button').on('click', listener);
    }

    update() {
        if (window.innerWidth < 800) {
            this.individualWidth = Math.trunc(window.innerWidth / 6);
        } else if (window.innerWidth < 1000) {
            this.individualWidth = Math.trunc(window.innerWidth / 9);
        } else {
            this.individualWidth = Math.trunc(window.innerWidth / 11);
        }
        
        $('.character-div').css('width', `${this.individualWidth}px`);
    }

    addCharacter(character, onclick) {
        let characterDivCss =  `width: ${this.individualWidth}px;`;
        let characterDiv = $(`<div id="${character._id}" class="character-div" style="${characterDivCss}"></div>`);

        let characterFigureCss = `background-image: url('${formatImageUrl(character.imageUrl)}')`;
        let characterFigure = $(`<figure style="${characterFigureCss}"></figure>`);

        characterDiv.append(characterFigure);
        characterDiv.append($(`<p>${character.name}</p>`));
        
        characterDiv[0].character = character;
        characterDiv.on('click', onclick);
        $(this.charactersElement).append(characterDiv);
    }

    removeCharacter(character) {
        $(`#${character._id}`).remove();
    }
}

export { HomeView };