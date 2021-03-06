
function hasCookie(cookieName) {
    return (document.cookie.indexOf(cookieName) != -1);
}

function leerCookie(cookieName, defaultValue = '') {
    let pattern = new RegExp(`${cookieName}\s*=([^,$]+)`);
    let matches = document.cookie.match(pattern);
    let result = defaultValue;
    if (matches != null && matches.length > 1) {
        result = matches[1];
    }
    return result;
}

function crearCookie(key, value, maxAge) {
    let customCookie = `${key}=${value}`;
    if (maxAge != null) {
        customCookie += `; max-age=${maxAge}`;
    }
    document.cookie = customCookie;
}

function borrarCookie(key) {
    document.cookie = `${key}=null; max-age=0`;
    location.reload();
}

function save(e) {
    let background = document.getElementById('background-color').value
    crearCookie('background', background);
    let pBackground = document.getElementById('p-background-color').value
    crearCookie('pBackground', pBackground);
    let fontSize = document.getElementById('font-size').value
    crearCookie('fontSize', fontSize);
    load();
}

function load() {
    let background = leerCookie('background', 'white');
    let pBackground = leerCookie('pBackground', 'white');
    let fontSize = leerCookie('fontSize', '12');
    let bodies = document.getElementsByTagName("body");
    applyCssToNodeList(bodies, `background-color: ${background}`);

    let ps = document.getElementsByTagName("p");
    let pCss = `background-color: ${pBackground}; font-size: ${fontSize}px`;
    applyCssToNodeList(ps, pCss);
	
	document.getElementById('background-color').value = background;
	document.getElementById('p-background-color').value = pBackground;
	document.getElementById('font-size').value = fontSize;
}

function applyCssToNodeList(nodelist, css) {
    for (let i = 0; i < nodelist.length; i++) {
        let element = nodelist[i];
        element.style.cssText = css;
    }
}

window.onload = () =>{
	console.log(document.cookie);
	
    let user = null;
    if(hasCookie('usuario')) {
        user = leerCookie('usuario');
		document.getElementById('save').onclick = save;
		document.getElementById('close').onclick = borrarCookie;
		load();
    } else {
        user = prompt("Usuario:");
        crearCookie('usuario', user, 300);
		document.getElementById('save').onclick = save;
		document.getElementById('close').onclick = borrarCookie;
		load();
    }
	if(user != null) {
		alert(`Buenas ${user}`);
	}
};