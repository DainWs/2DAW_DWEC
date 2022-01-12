import { formatImageUrl } from '../utils/ViewUtils.js';

class ModalView {
    constructor() {
        document.getElementById('modal-close').onclick = function() {
            document.getElementById('modal-dialog').style.display = "none";
        }
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

    resetDetails() {
        let detailList = document.getElementById('detail-list');
        detailList.innerHTML = "";
    }

    addDetails(detailElement) {
        if (detailElement != null) {
            console.log(detailElement);
            let detailList = document.getElementById('detail-list');
            detailList.appendChild(detailElement);
        }
    }

    showCharacterInfo() {
        let modalDialog = document.getElementById('modal-dialog');
        modalDialog.style.display = "block";
    }
}

export { ModalView };