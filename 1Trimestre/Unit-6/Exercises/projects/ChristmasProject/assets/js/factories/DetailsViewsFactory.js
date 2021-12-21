class DetailsViewsFactory {
    getDetailsFrom(character) {

    }

    
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

function makeDetails(title, list, fun) {
    let details = null;
    let array = Array.from(list);
    if (array.length > 0) {
        details = makeDetailsWithSummary(title);
        let ul = document.createElement('ul');
        ul.innerHTML = "";
        array.forEach(fun);
        details.appendChild(ul);
    }
    return details;
}

function makeDetailsWithSummary(summaryText) {
    let details = document.createElement('details');
    let summary = document.createElement('summary');
    summary.innerText = summaryText;
    details.appendChild(summary);
    return details;
}

export { DetailsViewsFactory };