function afterLoad() {
    let aside = document.getElementsByName("aside")[0];
    aside.style.style = "width: 50px;height: 100%;position: absolute;left: 0;";
    let header = document.getElementsByName("header")[0];
    header.style.style = "margin-left: 270px;";
    let section = document.getElementsByName("section")[0];
    section.style.style = "margin-left: 270px;";
}

window.onload = afterLoad;