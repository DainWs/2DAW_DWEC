
function hide(event) {
    $('.intro').hide();
}

$(document).ready(function () {
    $('#hideButton').on('click', hide);
});