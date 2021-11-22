function loadFrame(e) {
    let iframe = document.getElementById('iframe');
    let folder = e.target.id;
    iframe.setAttribute('src', `${folder}/index.html`);
}

window.onload = () => {
    let tab = document.getElementById('tab');
    let buttons = tab.getElementsByTagName('button');
    for (buttonIndex in buttons) {
        buttons[buttonIndex].onclick = loadFrame;
    }
};