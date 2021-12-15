# Ajax
## basic example
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

## JSON example
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