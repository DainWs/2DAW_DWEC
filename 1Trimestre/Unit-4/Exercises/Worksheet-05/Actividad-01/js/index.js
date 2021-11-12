function validarMayuscula(text) {
   return (text.search(/[A-Z]/) != -1);
}

function validarCaracteresEspeciales(text) {
    return (text.search(/[!@#$%^&]/) != -1);
}

function validarCorreo(text) {
    let maches = text.search(/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/);
    return (maches != -1);
}

function validarTarjetaCredito(text) {
   return (text.search(/^(?:[0-9]{4}\s?){4}$/) != -1);
}

function validarLongitud(text) {
   return (text.search(/^[0-9]{8,}$/) != -1);
}

function validarNumero(text) {
   return (text.search(/[0-9]/) != -1);
}

console.log(validarMayuscula("jajAajaj"));
console.log(validarCaracteresEspeciales("ja#jAajaj"));
console.log(validarCorreo("ja#jAajaj"));
console.log(validarCorreo("ja#jAajaj@gmail.com"));
console.log(validarCorreo("jajAa.jaj@gmail.com"));
console.log(validarCorreo("jajAajaj@gmailcom"));
console.log(validarCorreo("jajAajajgmail.com"));
console.log(validarCorreo("jajAajaj@.com"));
console.log(validarCorreo("jajAajaj@gmail.com"));
console.log(validarTarjetaCredito("000000a000000000"));
console.log(validarTarjetaCredito("0000 0000 0000 0000"));
console.log(validarLongitud("0000000000000000"));
console.log(validarLongitud("00000000"));
console.log(validarLongitud("0000"));
console.log(validarMayuscula("jajA0ajaj"));
console.log(validarMayuscula("jajAajaj"));