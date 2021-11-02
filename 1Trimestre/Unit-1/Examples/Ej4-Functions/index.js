function testValues() {
    let miVariable = false;
    if (!miVariable) alert("jose");
}

function testValues2() {
    let miVariable = "";
    if (!miVariable) alert("jose2");
}
/**
 * in case Key == 0
 * only show one alert with text "jose"
 * in case key == 1
 * will show some more alerts, with text "jose2", "jose", "jose2"
 */
let key = 0;

switch(key) {
    case 0:
        testValues();
        break;
    case 1:
        testValues2();
    default:
        testValues();
        testValues2();
}

