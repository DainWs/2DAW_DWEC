
function hide(event) {
    $('p.intro').hide();
}

window.onload = () => {
    $('#hideButton').on('click', hide);
};