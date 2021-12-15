function request(e) {
    let value = document.getElementById('username').value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let jsonObject = JSON.parse(this.response);
            
            document.getElementById("error-username").innerHTML = "";
            if(jsonObject.usuarioOcupado) {
                Array.from(jsonObject.alternativas).forEach(element => {
                    let span = document.createElement("li");
                    span.innerText = element;
                    let error = document.getElementById("error-username");
                    error.appendChild(span);
                });
            }
        }
    }

    xhttp.open("GET", `jsonNames.php?username=${value}`, true);
    xhttp.send();
}


window.onload = () =>{
    let usesrname = document.getElementById('username');
    usesrname.addEventListener("keyup", request);
    
};