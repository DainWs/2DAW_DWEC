var currentPage;

function showCharacterInfo(e) {
    let character = this.character;

    let characterImage = document.getElementById('character-image');
    characterImage.setAttribute('src', formatImageUrl(character.imageUrl));

    let characterName = document.getElementById('character-name');
    characterName.innerText = character.name;

    let fandomLink = document.getElementById('character-fandom');
    fandomLink.innerText = 'Fandom (wiki)';
    fandomLink.setAttribute('href', character.sourceUrl);

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

function tryMakeFilmsDetails(character) {
    if (Array.from(character.films).length > 0) {
        let detailList = document.getElementById('detail-list');
        let details = makeDetailsWithSummary('Peliculas');
        let ul = document.createElement('ul');
        ul.innerHTML = "";
        Array.from(character.films).forEach((name) => {
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

function tryMakeShortFilmsDetails(character) {
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

function tryMakeTVShowsDetails(character) {
    if (Array.from(character.tvShows).length > 0) {
        let detailList = document.getElementById('detail-list');
        let details = makeDetailsWithSummary('Series de televisión');
        let ul = document.createElement('ul');
        ul.innerHTML = "";
        Array.from(character.tvShows).forEach((name) => {
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

function tryMakeVideoGamesDetails(character) {
    if (Array.from(character.videoGames).length > 0) {
        let detailList = document.getElementById('detail-list');
        let details = makeDetailsWithSummary('Videojuegos');
        let ul = document.createElement('ul');
        ul.innerHTML = "";
        Array.from(character.videoGames).forEach((name) => {
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

function tryMakeAliesDetails(character) {
    if (Array.from(character.allies).length > 0) {
        let detailList = document.getElementById('detail-list');
        let details = makeDetailsWithSummary('Aliados');
        let ul = document.createElement('ul');
        ul.innerHTML = "";
        Array.from(character.allies).forEach((name) => {
            let li = document.createElement('li');
            li.innerText = name;
            ul.appendChild(li);
        });
        details.appendChild(ul);
        detailList.appendChild(details);
    } 
}

function tryMakeEnemiesDetails(character) {
    if (Array.from(character.enemies).length > 0) {
        let detailList = document.getElementById('detail-list');
        let details = makeDetailsWithSummary('Enemigos');
        let ul = document.createElement('ul');
        ul.innerHTML = "";
        Array.from(character.enemies).forEach((name) => {
            let li = document.createElement('li');
            li.innerText = name;
            ul.appendChild(li);
        });
        details.appendChild(ul);
        detailList.appendChild(details);
    } 
}

function makeDetailsWithSummary(summaryText) {
    let details = document.createElement('details');
    let summary = document.createElement('summary');
    summary.innerText = summaryText;
    details.appendChild(summary);
    return details;
}

function load() {
    var charactersElement = document.getElementById('characters');
    console.log(currentPage.data);

    let individualWidth = 0;
    if (window.innerWidth < 800) {
        individualWidth = Math.trunc(window.innerWidth / 6);
    } else {
        individualWidth = Math.trunc(window.innerWidth / 11);
    }

    Array.from(currentPage.data).forEach(character => {

        let characterDiv = document.createElement('div');
        characterDiv.setAttribute("class", "character-div");
        characterDiv.setAttribute("id", character._id);
        characterDiv.style.width = `${individualWidth}px`;

        let characterFigure = document.createElement('figure');
        characterFigure.style.backgroundImage = `url('${formatImageUrl(character.imageUrl)}')`;
        let characterImage = document.createElement('img');
        characterFigure.appendChild(characterImage);
        characterDiv.appendChild(characterFigure);
        
        let characterName = document.createElement('p')
        characterName.innerText = character.name;
        characterDiv.appendChild(characterName);
        
        characterDiv.character = character;
        characterDiv.onclick = showCharacterInfo;
        charactersElement.appendChild(characterDiv);
    });

    document.getElementById('modal-close').onclick = function() {
        document.getElementById('modal-dialog').style.display = "none";
    }
}

function formatImageUrl(imageUrl) {
    let result = 'https://static.wikia.nocookie.net/disney/images/a.png';
    if (imageUrl != null) {
        result = imageUrl.replaceAll(/\/revision.*/g, '');
    }
    return result;
}

function formatTextToURL(text) {
    let result = '';
    if (text != null) {
        result = text.replaceAll(/\+/g, " ");
    }
    return result;
}

function showMore(e) {
    search(true);
}

function search(loadNewPage = false) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            currentPage = JSON.parse(this.response);
            load();
            console.log(currentPage);
        }
    }

    let url = "http://api.disneyapi.dev/characters";
    if (loadNewPage && currentPage != null) {
        url = currentPage.nextPage;
    }

    xhttp.open("GET", url, true);
    xhttp.send();
}

window.onload = (e) => {
    search();

    document.getElementById('show-more-button').onclick = showMore;
}