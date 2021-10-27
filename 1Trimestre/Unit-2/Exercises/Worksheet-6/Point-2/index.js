{
    let data = document.getElementById('data');

    //A
    let dateLink = document.getElementById('date-link');
    dateLink.onclick(e => {
        data.innerHTML = document.lastModified;
    });

    //B
    let uriLink = document.getElementById('uri-link');
    uriLink.onclick(e => {
        data.innerHTML = document.baseURI;
    });

    //C
    let titleLink = document.getElementById('title-link');
    titleLink.onclick(e => {
        data.innerHTML = document.title;
    });

    //D
    let urlLink = document.getElementById('url-link');
    urlLink.onclick(e => {
        data.innerHTML = document.URL;
    });

    //E
    document.onload(e => {
        document.write("<h2> Esto se hizo al acabar de cargar el document </h2>");
    });

    document.onloadstart(e => {
        document.write("<h2> Esto se hizo mientras se cargaba el document </h2>");
    });
}