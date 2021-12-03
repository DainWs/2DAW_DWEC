function plus(e) {
    let counter = document.getElementById('counter');
    let countNum = counter.countNum;
    countNum++;
    counter.countNum = countNum;
    counter.innerText = `${countNum} times`;
}

window.onload = () =>{
    let counter = document.getElementById('counter');
    counter.countNum = 0;
    counter.innerText = `0 times`;

    document.getElementById('image').onclick = plus;
};