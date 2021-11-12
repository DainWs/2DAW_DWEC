Validación de Formularios
-------------------------

 1) Haciendo uso de expresiones regulares crea funciones para validar los campos que se indican a continuación. La función recibirá un parámetro de tipo string con el valor a validar y debe devolver true o false según cumpla los requisitos de validación:
     - validarMayuscula: El parámetro debe contener al menos un carácter en mayúscula
     - validarCaracteresEspeciales: El parámetro debe contener al menos uno de los siguientes caracteres: !@#$%^&
     - validarCorreo: El parámetro debe tener el formato correcto de un email
     - validarTarjetaCredito: El parámetro debe tener el formato correcto de una tarjeta de crédito
     - validarLongitud: El parámetro debe tener al menos 8 caracteres.
     - validarNumero: El parámetro debe contener al menos un dígito.
 
 
 2) Crea un formulario típico de registro para tu web. Debe contener al menos campos
para introducir nombre, apellidos, DNI, Teléfono, email y nombre de usuario.
Todos los campos son obligatorios, y debes validar el mayor número posible de
ellos haciendo uso de expresiones regulares. El nombre de usuario debe estar
formado por al menos 8 caracteres, entre los cuales debe aparecer
obligatoriamente algún número y algún signo de puntuación.

Conforme sale el foco de cada input, deberás validar el contenido de éste y
mostrar información al usuario que le indique si está correcto o no.