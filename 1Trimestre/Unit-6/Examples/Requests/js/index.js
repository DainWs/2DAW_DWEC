window.onload = () =>{
    let file = new Request("assets/images/profile.png");
    fetch(file).then(r => {
        let image = document.createElement("img");
        image.setAttribute("src", r.url);
        document.getElementById('content').appendChild(image);
    }).catch(r => {
        console.log(r);
    })
};