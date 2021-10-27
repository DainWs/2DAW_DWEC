{ 
    var time = 60;
    function show() {
        console.log(time);
        time--;

        if (time < 0) {
            redirectGoogle();
        }
    }

    function redirectGoogle() {
        location.href = "https://www.google.es/";
    }

    let timer = [];
    for (let i = 1; i <= 61; i++) {
        timer[i] = setTimeout(show, (1000 * i));
    }
}