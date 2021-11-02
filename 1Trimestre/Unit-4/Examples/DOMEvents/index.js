const btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number+1));
}

function cambiarColorFondo(){
    const rndColor = 'rgb('+random(255)+','+random(255)+','+random(255)+')';
    document.body.style.backgroundColor = rndColor;
}

btn.addEventListener("click", cambiarColorFondo);