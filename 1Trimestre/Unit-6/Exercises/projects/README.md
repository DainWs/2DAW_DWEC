# Deprecated

# Projects
* Christmas Project

## Christmas Project
Dadas las particularidades de este curso, en este periodo de vacaciones vamos a realizar un proyecto con el que reforzar conceptos de cara a la segunda evaluación. En él vamos a trabajar básicamente DOM + AJAX + API REST

El proyecto consiste en hacer uso de una API REST y maquetar los datos que éste proporciona. La interfaz debe mostrar en primer lugar un conjunto de datos obtenidos de la API, de modo que al pulsar en uno de ellos se muestre el detalle. Os dejo el ejemplo de dos proyectos de compañeros de cursos anteriores para que veáis cómo debe quedar:

El diseño es libre, lo anteriores son sólo ideas, pero éste ya se valora. Por tanto, para realizar el proyecto

- [X] Selecciona la API a usar. En https://github.com/public-apis/public-apis tenéis un listado de opciones (o puedes buscarlas tú mismo!). El tema es libre, puedes escoger la que quieras, siempre que cumpla:
  - Es una API Rest. La puedo llamar con peticiones HTTP.
  - Admite CORS (dominios cruzados)
  - Me proporciona datos en formato JSON
  - Me da listados de items de algún tema, y puedo pedir detalles de esos ítems. Asegúrate que te proporciona imágenes.
- [X] Una vez escogida la API, escríbeme indicandome cual es para que valore si es correcta o no. En https://github.com/public-apis/public-apis tenéis un listado de opciones (o puedes buscarlas tú mismo!). No se dará por válido ningún desarrollo que no haya yo validado antes.
- [X] Estudia la API detenidamente.
- [X] Maqueta una web similar a las anteriores. Debe cargar recursos de la API mediante AJAX. Coloca un botón para "Obtener más resultados" mediante nuevas peticiones AJAX (si los hubiera)
- [X] Al pulsar sobre un "item", debe mostrarse un detalle, con datos que te proporcione la API.

### IMPORTANTE:
- [X] La web se carga una sóla vez al inicio, y a partir de ahí todo se hace mediante peticiones AJAX.
- [X] El proyecto debe ponerse en producción (subido a un servidor).
- [ ] Para la entrega debéis enviarme un correo a jpineroberbel@gmail.com indicandome la URL del repositorio GIthub que lo alberga. En el README de dicho repositorio estará la URL en producción.

Por supuesto, si tenéis dudas podéis escribirme al correo.

### SCROLL INFINITO

Como podéis ver consiste en trabajar el evento scroll que saltará cada vez que se mueve la barra de scroll. Luego comprobamos cuando queremos que salte. En el siguiente ejemplo salta justo al llegar al final, pero sería deseable hacerlo antes (así el usuario no ve que llegas al final y espera hasta recibir nuevos datos, sino que cuando llegue estos ya están maquetados). Para ello basta cambiar la comparación , por ejemplo ">= window.scrollY-200" para que salte 200px antes del final. IMPORTANTE: El evento va a saltar cada vez que mováis el ratón, con lo que puede que lancéis muchísimas peticiones AJAX seguidas. Debemos evitar esto, para lo cual es tan sencillo como, mediante una variable, marcar que ya se ha lanzado una petición y hasta que no llega la respuesta y cambiamos esa petición no debemos dejar que se lance ninguna otra. Del mismo modo podéis probar a habilitar una imagen (gif animado) a modo de preload.