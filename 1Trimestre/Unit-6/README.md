# Unit 6
----------------------

## Ajax
### basic example
**JS:**
```js
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("body").innerText = this.response;
    }
}

xhttp.open("GET", "index.php", true);
xhttp.send();
```

**PHP:**
```php
<?php 
echo "Hello World!!";
?>
```

**Result previsualization:**
```html
<!DOCTYPE html>
<html lang="es">
    <body id="body">
        Hello World!!
    </body>
</html>
```

**Result:**
<html lang="es">
    <body id="body">
        Hello World!!
    </body>
</html>

### JSON example
**JS:**
```js
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let jsonResponse = JSON.parse(this.response);

        if(jsonResponse.usuarioOcupado) {
            let text = Array.from(jsonResponse.alternativas).join();
            document.getElementById("body").innerText = text;
        }
    }
}

xhttp.open("GET", "index.php", true);
xhttp.send();
```

**PHP:**
```php
<?php
$response = new stdClass();
$response->usuarioOcupado = true;
$response->alternativas = [ "Hola", "Mundo" ]
echo json_encode($response);
?>
```

**Result previsualization:**
```html
<!DOCTYPE html>
<html lang="es">
    <body id="body">
        Hello World
    </body>
</html>
```

**Result:**
<html lang="es">
    <body id="body">
        Hello World
    </body>
</html>

----------------------

## Requests
### Example
**JS:**
```js
let file = new Request("https://avatars.githubusercontent.com/u/59877930");
fetch(file).then(r => {
    let image = document.createElement("img");
    image.setAttribute("src", r.url);
    document.getElementById('content').appendChild(image);
});
```

**Result previsualization:**
```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <script type="module" src="js/index.js"></script>
    </head>
    <body id="content">
        <img src="https://avatars.githubusercontent.com/u/59877930"/>
    </body>
</html>
```

**Result:**
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <script type="module" src="js/index.js"></script>
    </head>
    <body id="content">
        <img src="https://avatars.githubusercontent.com/u/59877930"/>
    </body>
</html>