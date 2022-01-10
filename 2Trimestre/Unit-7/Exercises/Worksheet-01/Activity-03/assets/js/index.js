
function hide(event) {
    $('.intro').hide();
}

window.onload = () => {
    $('#hideButton').on('click', hide);
};