// Ejercicio 1
const TYPES = ['blanco', 'dulce', 'tinto'];
const TYPES_CRIANZA = ['joven', 'prematuro', 'reserva', 'gran reserva'];
class Vino {
    constructor(nombre, anioCosecha, tipo, tipoCrianza) {
        this.nombre = nombre;
        this.anioCosecha = anioCosecha;
        this.tipo = tipo;
        this.tipoCrianza = tipoCrianza;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getNombre() {
        return this.nombre;
    }

    setAnioCosecha(anioCosecha) {
        this.anioCosecha = anioCosecha;
    }

    getAnioCosecha() {
        return this.anioCosecha;
    }

    setTipo(tipo) {
        if (tipo != null && TYPES.includes(tipo.toLowerCase())) {
            this.tipo = tipo;
        }
    }

    getTipo() {
        return this.tipo;
    }

    setTipoCrianza(tipoCrianza) {
        if (tipoCrianza != null && TYPES_CRIANZA.includes(tipoCrianza.toLowerCase())) {
            this.tipoCrianza = tipoCrianza;
        }
    }

    getTipoCrianza() {
        return this.tipoCrianza;
    }   
}

class Bodega {
    constructor(nombre) {
        this.nombre = nombre;
        this.vinos = [];
    }

    anadirVino(vino) {
        this.vinos.push(vino);
    }

    devuelveListadoVinos(orderByAnio = true) {
        let vinosOrdenados = this.vinos.sort((aVino, bVino) => {
            let result = 0;
            result = aVino.getAnioCosecha() - bVino.getAnioCosecha();
            if (orderByAnio) {
                result = -(result);
            }
            return result;
        });

        let resultObject = new Object();
        resultObject.numeroResultados = vinosOrdenados.length;
        resultObject.vinos = vinosOrdenados;
        return JSON.stringify(resultObject);
    }

    vinosPorTipo(tipo) {
        let vinosFiltrados = this.vinos.filter((vino) => (vino.getTipo() == tipo));
        let resultObject = new Object();
        resultObject.numeroResultados = vinosFiltrados.length;
        resultObject.vinos = vinosFiltrados;
        return JSON.stringify(resultObject);
    }
}

function ejercicio1(listaVinosJSON) {
    var div = document.createElement('div');
    let object = JSON.parse(listaVinosJSON);
    Array.from(object.vinos).forEach((vinoObject) => {
        let vinoDiv = document.createElement('div');
        let vinoUl = document.createElement('ul');
        let vinoName = document.createElement('ol');

        vinoName.innerText = `Nombre: ${vinoObject.nombre}`;
        vinoUl.appendChild(vinoName);
        
        let vinoAnio = document.createElement('ol');
        vinoAnio.innerText = `Anio cosecha: ${vinoObject.anioCosecha}`;
        vinoUl.appendChild(vinoAnio);
        
        let vinoTipo = document.createElement('ol');
        vinoTipo.innerText = `Tipo: ${vinoObject.tipo}`;
        vinoUl.appendChild(vinoTipo);
        
        let vinoTipoCrianza = document.createElement('ol');
        vinoTipoCrianza.innerText = `Tipo crianza: ${vinoObject.tipoCrianza}`;
        vinoUl.appendChild(vinoTipoCrianza);
        vinoDiv.appendChild(vinoUl);
        div.appendChild(vinoDiv);
    });
    return div;
}

// Ejercicio 2
// Ejercicio 2 - A
function ejercicio2(datas = [], domObject = document.body) {
    if (datas.length > 0) {
        saveInLocalStorage(datas);
    }

    var table = document.createElement('table');

    datas.forEach((dataRow) => {
        var row = document.createElement('tr');
        Array.from(dataRow).forEach((data) => {
            let colum = document.createElement('td');
            colum.innerText = data;
            asociaEventos(colum);
            row.appendChild(colum);
        });
        table.appendChild(row);
    });
    domObject.appendChild(table);
}

// Ejercicio 2 - B
function saveInLocalStorage(datas) {
    let datasJSON = JSON.stringify(datas);
    window.localStorage.setItem('tableData', datasJSON);
}

function getDataInLocalStorage() {
    let datasJSON = window.localStorage.getItem('tableData');
    return JSON.parse(datasJSON);
}

let datasTests = [
    ['id', 'nombre', 'apellidos'],
    [0, 'Pedro', 'Sanchez'],
    [1, 'Javi', 'Gamildez'],
    [2, 'Jose', 'Duarte'],
    [3, 'Alvaro', 'Santos'],
    [4, 'Carlos', 'Fuentes']
];

// Ejercicio 2 - C
function asociaEventos(celda) {
    celda.onmouseover = (e) => e.target.style.color = 'red';
    celda.onmouseout = (e) => e.target.style.color = 'unset';
}

// Ejercicio 3
var idSelected = "idRect";
function ejercicio3(id = "idRect", alto = 100, ancho = 200) {
    idSelected = id;
    let svg = document.getElementById('svg');
    let rectangle = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    rectangle.setAttribute("id", id);
    rectangle.setAttribute("width", ancho);
    rectangle.setAttribute("height", alto);
    rectangle.setAttribute("fill", "green");
    rectangle.setAttribute("stroke", "yellow");
    rectangle.setAttribute("stroke-width", "5px");
    svg.appendChild(rectangle);
}

var partWidth = 0;
var partHeight = 0;
var startedTime = 0;
var loopCount = 0;
function animation(e) {
    let rectangle = document.getElementById(idSelected);
    let width = rectangle.getAttribute('width');
    let height = rectangle.getAttribute('height');

    partWidth = (((width * 2) - width)/5);
    partHeight = (((height * 2) - height)/5);
    startedTime = 0;
    loopCount = 0;

    window.requestAnimationFrame(animateStep);
}

function animateStep(time) {
    if (!startedTime) {
        startedTime = time;
    }
    
    let progress = (time - startedTime) / 1000;
    if (progress >= 1 && loopCount < 5) {
        let rectangle = document.getElementById(idSelected);
        let width = rectangle.getAttribute('width');
        let height = rectangle.getAttribute('height');

        rectangle.setAttribute("width",  (parseInt(width) + parseInt(partWidth)));
        rectangle.setAttribute("height", (parseInt(height) + parseInt(partHeight)));
        startedTime = time;
        loopCount++;
    }
    
    if (loopCount < 5) {
        window.requestAnimationFrame(animateStep);
    }
}

window.onload = (e) => {
    // Ejercicio 2 - B
    let datas = getDataInLocalStorage();
    if (datas != null) {
        ejercicio2(Array.from(datas));
    } else {
        ejercicio2(datasTests);
    }
    // Ejercicio 3 - B
    ejercicio3('id', 20, 70);
    document.getElementById("animation").onclick = animation;    

    //Ejercicio 4
    google.charts.load('current', {'packages':['barchart']});
    google.charts.setOnLoadCallback(draw);

    function draw() {
        let data = google.visualization.arrayToDataTable([
            ['Año', 'Populación'],
            ['2021', 3025],
            ['2020', 2360],
            ['2019', 4021],
            ['2018', 1300]
        ]);

    var options = {
        title: 'Evolución de la población de Almendralejo',
        width: 800,
        colors: ['pink', 'gray', 'blue', 'yellow'],
        opacity: [0.8, 0.5, 0.2, 1],
        backgroundColor: 'green'
    };

    var chart = new google.charts.Bar(document.getElementById('charts'));
    chart.draw(data, options);
    }
};

// Ejercicio 5
/**
 * git ini
 * git add .
 * git commit -m "first push"
 * git remote add master https://github.com/DainWs/JoseAntonioDuartePerez_Final1.git
 * git push master
 */