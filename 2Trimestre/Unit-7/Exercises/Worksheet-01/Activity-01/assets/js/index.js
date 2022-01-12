
function hide(event) {
    $('header, p').hide();
}

$(document).ready(function () {
    $('#hideButton').on('click', hide);
});