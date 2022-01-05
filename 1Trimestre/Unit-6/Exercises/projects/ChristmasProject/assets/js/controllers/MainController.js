import { makeDetails, makeSimpleDetails, makeSimpleLinkedDetails } from "../factories/DetailsViewsFactory.js";
import { HomeView } from "../views/HomeView.js";
import { ModalView } from "../views/ModalView.js";

class MainController {

    constructor() {
    }

    start() {
        console.log('start');
        this.homeView = new HomeView();
        this.modalView = new ModalView();

        this.homeView.setShowMoreListener(
            function() { instance.request(true); }
        );

        this.request();
    }

    loadRequest(page) {
        this.nextPage = page.nextPage;

        this.homeView.update();

        Array.from(page.data).forEach(character => {
            instance.homeView.addCharacter(character, instance.onCharacterClick)
        });
    }

    onCharacterClick(event) {
        let character = this.character;

        instance.modalView.setImage(character.imageUrl);
        instance.modalView.setName(character.name);
        instance.modalView.setFandomLink(`https://disney.fandom.com/wiki/${character.name}`);

        instance.modalView.resetDetails();
        instance.modalView.addDetails(makeDetails('Peliculas', character.films, makeSimpleLinkedDetails));
        instance.modalView.addDetails(makeDetails('Peliculas cortas', character.shortFilms, makeSimpleLinkedDetails));
        instance.modalView.addDetails(makeDetails('Series de televisión', character.tvShows, makeSimpleLinkedDetails));
        instance.modalView.addDetails(makeDetails('Videojuegos', character.videoGames, makeSimpleLinkedDetails));
        instance.modalView.addDetails(makeDetails('Aliados', character.allies, makeSimpleDetails));
        instance.modalView.addDetails(makeDetails('Enemigos', character.enemies, makeSimpleDetails));

        instance.modalView.showCharacterInfo();
    }
    
    request(loadNewPage = false) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let page = JSON.parse(this.response);
                instance.loadRequest(page);
            }
        }
    
        let url = "http://api.disneyapi.dev/characters";
        if (loadNewPage && instance.nextPage != null) {
            url = instance.nextPage;
        }
    
        xhttp.open("GET", url, true);
        xhttp.send();
    }
}

const instance = new MainController();

export { instance };