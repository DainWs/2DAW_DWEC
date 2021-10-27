{ 
    function show() {
        let date = new Date();
        console.clear();
        let dateString = "Current date : " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " - " +date.getHours()+ ":" + date.getMinutes() + ":" + date.getSeconds();
        console.log(dateString);
        document.body.innerHTML = dateString;
    }

    let timer = [];
    let i = 0;
    while(i < 65) {
        timer[i] = setTimeout(show, (1000 * i));
        i++;
    }
}