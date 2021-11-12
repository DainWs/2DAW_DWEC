function applyNormalStyle() {
    document.body.style.backgroundColor = "lightyellow";
    
    let parrafosNegrita = document.getElementsByClassName("negrita");
    applyCssToNodeList(parrafosNegrita, "font-weight: bold;");
    
    let asides = document.getElementsByTagName("aside");
    let asidesCss = "width: 100px;" +
                    "height: 100%;" +
                    "position: absolute;" +
                    "left: 0;" +
                    "top: 0;" + 
                    "background-color: cyan";
    applyCssToNodeList(asides, asidesCss);
    
    let headers = document.getElementsByTagName("header");
    let headersCss ="margin-left: 120px;" +
                    "background-color: lightcyan;" +
                    "padding: 5px;" +
                    "border: 1px solid black;" +
                    "font-weight: bold;";
    applyCssToNodeList(headers, headersCss);
    
    let links = document.getElementsByTagName("a");
    let linksCss =  "color: -webkit-link;" +
                    "cursor: pointer;" +
                    "text-decoration: none;";
    applyCssToNodeList(links, linksCss);
    
    let sections = document.getElementsByTagName("section");
    applyCssToNodeList(sections, "margin-left: 120px;");
    
    let parrafosHide = document.getElementsByClassName("hide");
    applyCssToNodeList(parrafosHide, "display: block;");
    
    let parrafosMarco = document.getElementsByClassName("marco");
    let parrafosMarcoCss =  "background-color: yellow;" +
                            "border: 1px solid black;" +
                            "padding: 5px;";
    applyCssToNodeList(parrafosMarco, parrafosMarcoCss);
}

function applyMinimalistStyle() {
    document.body.style.backgroundColor = "unset";
    
    let parrafosNegrita = document.getElementsByClassName("negrita");
    applyCssToNodeList(parrafosNegrita, "font-weight: unset;");
    
    let asides = document.getElementsByTagName("aside");
    let asidesCss = "";
    applyCssToNodeList(asides, asidesCss);
    
    let headers = document.getElementsByTagName("header");
    let headersCss ="";
    applyCssToNodeList(headers, headersCss);
    
    let links = document.getElementsByTagName("a");
    let linksCss =  "color: -webkit-link;" +
                    "cursor: pointer;" +
                    "text-decoration: underline;";
    applyCssToNodeList(links, linksCss);
    
    let sections = document.getElementsByTagName("section");
    applyCssToNodeList(sections, "");
    
    let parrafosHide = document.getElementsByClassName("hide");
    applyCssToNodeList(parrafosHide, "display: none;");
    
    let parrafosMarco = document.getElementsByClassName("marco");
    let parrafosMarcoCss =  "";
    applyCssToNodeList(parrafosMarco, parrafosMarcoCss);
}

function applyCssToNodeList(nodelist, css) {
    for (let i = 0; i < nodelist.length; i++) {
        let element = nodelist[i];
        element.style.cssText = css;
    }
}

function afterLoad() {
    document.getElementById('normal').onclick = applyNormalStyle;
    document.getElementById('minimalista').onclick = applyMinimalistStyle;
    applyMinimalistStyle();
}

window.onload = afterLoad;