
function alertOfTarget(event) {
    alert($(event.target).html());
}

function alertHeader(event) {
    alert($('body > header').html());
}

function alertBody(event) {
    alert($('body').html());
}

$(document).ready(function () {
    // Apartado 1
    alert('DOM cargado');
    $('#alert').hide();

    // Apartado 2
    $('#alertHeader').on('click', alertHeader);
    $('#alertBody').on('click', alertBody);

    // Apartado 3
    $('p').on('click', function() {
        alert($(this).html());
    });

    // Apartado 4
    $('p').eq(0).on('click', function() {
        $(this).hide();
    });

    // Apartado 5 y 6
    $('main > ul > li').each(function() {
        // Apartado 5
        $(this).text('#' + $(this).text());

        // Apartado 6
        $(this).on('click', function(e) {
            $(this).hide();
        });
    });

    // Apartado 7
    $('a').html('mismo texto');

    // Apartado 8
    $('table:first-child tr').on('click', function() {
        $(this).css('background-color', 'red');
    })

    // Apartado 9
    $('table#table2 tr').hover(
        function(){
            $(this).css("display", "none");
        },
        function(){
            $(this).css("display", "block");
        }
    );
});