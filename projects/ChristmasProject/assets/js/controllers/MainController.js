import { makeDetails, makeSimpleDetails, makeSimpleLinkedDetails } from "../factories/DetailsViewsFactory.js";
import { HomeView } from "../views/HomeView.js";
import { ModalView } from "../views/ModalView.js";

class MainController {

    constructor() {
    }

    start() {
        this.homeView = new HomeView();
        this.modalView = new ModalView();

        this.oldScroll = 0;
        this.infiniteScrollEnabled = false;
        this.isRequestInProgress = false;
        this.homeView.setScrollModeText("(Disabled)");

        this.homeView.setScrollToggleButtonListener(
            function(event) { instance.toggleScrollMode(event); }
        )

        this.homeView.setOnScrollListener(
            function() { instance.onScroll(); }
        )

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
        this.isRequestInProgress = true;

        let url = "http://api.disneyapi.dev/characters";
        if (loadNewPage && instance.nextPage != null) {
            url = instance.nextPage;
        }
        
        $.ajax( url, {
            type : 'GET',
            success: function (response) {
                instance.loadRequest(response);
                instance.isRequestInProgress = false;
            },
            error: function() {
                instance.isRequestInProgress = false;
            }
        });
    }

    toggleScrollMode(event) {
        let element = event.target;
        if (element.checked) {
            this.infiniteScrollEnabled = true;
            this.homeView.setScrollModeText("(Enabled)");
        } else {
            this.infiniteScrollEnabled = false;
            this.homeView.setScrollModeText("(Disabled)");
        }
    }

    onScroll() {
        this.scrollY = window.pageYOffset;
        if (this.oldScroll < this.scrollY && (this.infiniteScrollEnabled)) {
            let currentScrolled = window.scrollY + window.innerHeight;
            let endOfScroll = document.documentElement.scrollHeight - 10;

            if ((currentScrolled > endOfScroll) && (!this.isRequestInProgress)) {
                this.request(true);
            }
        }
        this.oldScroll = this.scrollY
    }
}

const instance = new MainController();

export { instance };