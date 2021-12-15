<?php
$a = 'jose33';
$introducido = $_GET['username'];

$result = preg_match("/.*jose.*/", strtolower($introducido));
if(!$result < 1) {
    echo "{
        \"usuarioOcupado\": true,
        \"usuarioIntroducido\": \"$introducido\",
        \"alternativas\": [
            \"$a\",
            \"jose_123\",
            \"joseAlverto\",
            \"josePiñedo\"
        ]
    }";    
} else {
    echo "{
        \"usuarioOcupado\": false,
        \"usuarioIntroducido\": \"$introducido\"
    }";
}
