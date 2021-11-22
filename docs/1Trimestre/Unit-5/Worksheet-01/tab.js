function loadFrame(e) {
    let iframe = document.getElementById('iframe');
    let activity = e.target.id;
    iframe.setAttribute('src', `../../../../1Trimestre/Unit-5/Exercises/Worksheet-01/${activity}/index.html`);
}

window.onload = () => {
    let tab = document.getElementById('tab');
    let buttons = tab.getElementsByTagName('button');
    for (buttonIndex in buttons) {
        buttons[buttonIndex].onclick = loadFrame;
    }
};