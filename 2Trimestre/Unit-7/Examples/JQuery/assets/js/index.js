window.onload = () => {
    // Todos los enlaces pares: ocultarlos
    $('a:even').hide();

    // Para el primer parrafo: cambiar texto a 'nuevo texto'
    $('p').eq(0).html('nuevo texto');

    // Todos los que son hijos de: poner color texto rojo
    $('div > *').css('color', 'red');
};