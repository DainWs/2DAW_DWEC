
function hide(event) {
    $('header, p').hide();
}

window.onload = () => {
    $('#hideButton').on('click', hide);
};