
function hide(event) {
    $('p.intro').hide();
}

$(document).ready(function () {
    $('#hideButton').on('click', hide);
});