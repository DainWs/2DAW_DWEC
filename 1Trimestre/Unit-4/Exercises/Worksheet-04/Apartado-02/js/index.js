var fontSize = 24;
var alingment = "left";

function incrementFontSize() {
    fontSize++;
    updateTextCss();
}

function decrementFontSize() {
    fontSize--;
    updateTextCss();
}

function justifyAlingment() {
    alingment = "justify";
    updateTextCss();
}

function leftAlingment() {
    alingment = "left";
    updateTextCss();
}

function updateTextCss() {
    let parrafos = document.getElementsByTagName("p");
    
    for (let i = 0; i < parrafos.length; i++) {
        let parrafo = parrafos[i];
        parrafo.style.fontSize = `${fontSize}px`;
        parrafo.style.textAlign = alingment;
    }
}

function afterLoad() {
    document.getElementById("incrementFontSize").onclick = incrementFontSize;
    document.getElementById("decrementFontSize").onclick = decrementFontSize;
    document.getElementById("justifiedAlingment").onclick = justifyAlingment;
    document.getElementById("leftAlingment").onclick = leftAlingment;
    updateTextCss();
    
    // [Opcional] Input and form css
    let head = document.getElementsByTagName('head')[0];
    let style = document.createElement('style');

    let persistenceCss = `
        form { display: flex; }

        input[type="button"] {
            padding: 15px;
            background-color: azure;
            border: 1px solid black;
        }

        input[type="button"]:hover { background-color: lightcyan; }

        input[type="button"]:active {
            background-color: lightblue;
            color: white;
        }`;
    
    style.type = 'text/css';
    // style.styleSheet for IE8 and below support
    if (style.styleSheet) 
        style.styleSheet.cssText = persistenceCss;
    else 
        style.appendChild(document.createTextNode(persistenceCss));
    
    head.appendChild(style);
}

window.onload = afterLoad;