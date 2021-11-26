window.onload = () =>{
	let result = "";
    let links = document.getElementsByTagName('a');
    result += `Numero de enlaces de la pagina: ${links.length}\n`;
    let penultimo = links[links.length - 2];
    result += `Direccion a la que enlaza el penultimo enlace: ${penultimo.href}\n`;
    let googleLinks = Array.from(links).filter((e) => {
        return ("https://google.com/".includes(e.href));
    });
    result += `Numero de enlaces que enlazan a google: ${googleLinks.length}\n`;
    let threePLinks = document.getElementsByTagName('p')[2].getElementsByTagName('a');
    result += `Numero de enlaces del tercer parrafo: ${threePLinks.length}\n`;
    document.body.innerText = result;
};