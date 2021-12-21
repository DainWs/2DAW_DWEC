import { formatImageUrl } from '../utils/ViewUtils.js';

class ModalView {
    constructor() {
        
    }

    setImage(image) {
        let characterImage = document.getElementById('character-image');
        characterImage.setAttribute('src', formatImageUrl(image));
    }

    setName(name) {
        let characterName = document.getElementById('character-name');
        characterName.innerText = name;
    }

    setFandomLink(link) {
        let fandomLink = document.getElementById('character-fandom');
        fandomLink.setAttribute('href', link);
    }

    setDetails(films) {
        if (Array.from(character.shortFilms).length > 0) {
            let detailList = document.getElementById('detail-list');
            let details = makeDetailsWithSummary('Peliculas cortas');
            let ul = document.createElement('ul');
            ul.innerHTML = "";
            Array.from(character.shortFilms).forEach((name) => {
                let li = document.createElement('li');
    
                let link = document.createElement('a');
                link.setAttribute('href', `https://www.google.es/search?q=${formatTextToURL(name)}`)
                link.innerText = name;
    
                li.appendChild(link);
                ul.appendChild(li);
            });
            details.appendChild(ul);
            detailList.appendChild(details);
        } 
    }

    showCharacterInfo(character) {
    
        let detailList = document.getElementById('detail-list');
        detailList.innerHTML = "";
    
        tryMakeFilmsDetails(character);
        tryMakeShortFilmsDetails(character);
        tryMakeTVShowsDetails(character);
        tryMakeVideoGamesDetails(character);
        tryMakeAliesDetails(character);
        tryMakeEnemiesDetails(character);
    
        let modalDialog = document.getElementById('modal-dialog');
        modalDialog.style.display = "block";
    }
}

export { ModalView };