# JQuery
Ejemplos de uso:

**Todos los enlaces pares: ocultarlos**
```js
$('a:even').hide();
```

**Para el primer parrafo: cambiar texto a 'nuevo texto'**
```js
$('p').eq(0).html('nuevo texto');
```

**Todos los que son hijos de: poner color texto rojo**
```js
$('div > *').css('color', 'red');
```