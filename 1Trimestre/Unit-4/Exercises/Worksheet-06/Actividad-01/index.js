
function hasCookie(cookieName) {
    return (document.cookie.indexOf(cookieName) != -1);
}

function getCookie(cookieName) {
    let pattern = new RegExp(`${cookieName}\s*=([^,$]+)`);
    let matches = document.cookie.match(pattern);
    let result = null;
    if (matches != null && matches.length > 1) {
        result = matches[1];
    }
    return result;
}

function crearCookie(value, maxAge) {
    let customCookie = `usuario=${value}`;
    if (maxAge != null) {
        customCookie += `; max-age=${maxAge}`;
    }
    document.cookie = customCookie;
}

function borrarCookie() {
    document.cookie = `usuario=null; max-age=0`;
    location.reload();
}

window.onload = () =>{
    document.getElementById('close').onclick = borrarCookie;
    
    let user = null;
    if(hasCookie('usuario')) {
        user = getCookie('usuario');
    } else {
        user = prompt("Usuario:");
        crearCookie(user, 300);
    }
	if(user != null) {
		alert(`Buenas ${user}`);
	}
};