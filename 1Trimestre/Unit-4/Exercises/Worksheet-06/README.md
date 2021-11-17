## Cookies
1) Diseña una web que hará uso de cookies para guardar el nombre del usuario. En
caso de no tener ninguna cookie de ese sitio, deberá preguntar el nombre del
usuario y almacenarlo en una cookie que caducará en 5 minutos. Tras esto
saludará al usuario mediante un mensaje en pantalla. En caso de tener ya creada
la cookie deberá leerla y mostrar el mensaje anterior directamente. Deberá
proporcionar también un enlace para borrar la cookie (lo que podríamos llamar
'Cerrar Sesión').  
  
Nota: Asegúrate de que tu cookie acepta todo tipo de caracteres (como ñ, espacio
en blanco, acentos, etc....)  
  
2) Mejora el ejercicio anterior dando al usuario las opciones para que pueda
configurar el color de fondo, de párrafo y el tamaño de la letra.  
  
3) ¿Cómo podemos hacer que la segunda cookie se borre automáticamente al cerrar
el navegador? Compruébalo.  
  
4) Crea 3 funciones genéricas para el manejo de cookies:  
    a) CrearCookie(identificador,valor,fechaExpiracion): Crea la cookie con sólo
un par identificador=valor.  
    b) LeerCookie(identificador): Devuelve el valor dentro de la cookie para el
identificador indicado si existe o null en caso contrario.  
    c) BorrarCookie().