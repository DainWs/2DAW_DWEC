
function hide(event) {
    $('header, p, #hideButton').hide();
}

window.onload = () => {
    $('#hideButton').on('click', hide);
};