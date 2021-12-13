window.onload = () =>{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.response;
        }
    }

    xhttp.open("GET", "mipagine.php", true);
    xhttp.send();
};