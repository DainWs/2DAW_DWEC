var currentPage;

function load() {
    var charactersElement = document.getElementById('characters');
    Array.from(currentPage.data).forEach(character => {
        console.log(character);
        let characterDiv = document.createElement('div');
        characterDiv.setAttribute("class", "character-div");
        characterDiv.setAttribute("id", character._id);

        let characterFigure = document.createElement('figure');
        characterFigure.style.cssText = `background-image:url('${character.imageUrl}'); width:100px; height:100px; background-position:center;`
        let characterImage = document.createElement('img');
        characterFigure.appendChild(characterImage);
        characterDiv.appendChild(characterFigure);
        
        let characterName = document.createElement('p')
        characterName.innerText = character.name;
        characterDiv.appendChild(characterName);
        
        charactersElement.appendChild(characterDiv);
    });
}

function search(e) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            currentPage = JSON.parse(this.response);
            load();
            console.log(currentPage);
        }
    }

    xhttp.open("GET", "http://api.disneyapi.dev/characters", true);
    xhttp.send();
}

window.onload = (e) => {
    search(e);
}