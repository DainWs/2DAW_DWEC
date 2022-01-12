import { formatImageUrl } from '../utils/ViewUtils.js';

class ModalView {
    constructor() {
        $('#modal-close').on('click', function() {
            $('#modal-dialog').css('display', 'none');
        });
    }

    setImage(image) {
        $('#character-image').attr('src', formatImageUrl(image));
    }

    setName(name) {
        $('#character-name').text(name);
    }

    setFandomLink(link) {
        $('#character-fandom').attr('href', link);
    }

    resetDetails() {
        $('#detail-list').html("");
    }

    addDetails(detailElement) {
        if (detailElement != null) {
            $('#detail-list').append(detailElement);
        }
    }

    showCharacterInfo() {
        $('#modal-dialog').css('display', 'block');
    }
}

export { ModalView };