
function hide(event) {
    $('header, p, #hideButton').hide();
}

$(document).ready(function () {
    $('#hideButton').on('click', hide);
});