function afterLoad() {
    document.body.style.backgroundColor = "lightyellow";
    (document.getElementsByClassName("negrita")[0]).style.cssText = "font-weight:bold;";
    let aside = document.getElementsByTagName("aside")[0];
    aside.style.cssText = "width: 100px;height: 100%;position: absolute;left: 0;top: 0;background-color: cyan";
    let header = document.getElementsByTagName("header")[0];
    header.style.cssText = "margin-left: 120px;background-color:lightcyan;padding:5px;border:1px solid black;font-weight:bold;";
    
    let aElements = document.getElementsByTagName("a");
    
    for (let i = 0; i < aElements.length; i++) {
        let a = aElements[i];
        a.style.cssText = "text-decoration: none;";
    }
    
    
    let section = document.getElementsByTagName("section")[0];
    section.style.cssText = "margin-left: 120px;";
    
    document.getElementsByClassName("hide")[0].style.display = "block";
    document.getElementsByClassName("marco")[0].style.cssText = "background-color: yellow; border: 1px solid black;padding: 5px;";
}

window.onload = afterLoad;