let operandoA = "";
let operandoB = "";
let operacion = null;
let display = document.getElementById("display");
let listaHistorial = document.getElementById("lista-historial");

function actualizarDisplay(valor) {
    display.textContent = valor;
}

function agregarNumero(num) {
    if (operacion === null) {
        operandoA += num;
        actualizarDisplay(operandoA);
    } else {
        operandoB += num;
        actualizarDisplay(operandoB);
    }
}

function seleccionarOperacion(op) {
    if (operandoA !== "") {
        operacion = op;
    }
}

function calcular() {
    let resultado = 0;
    const a = parseFloat(operandoA);
    const b = parseFloat(operandoB);

    if (isNaN(a) || isNaN(b)) return;

    switch (operacion) {
        case "+":
            resultado = a + b;
            break;
        case "-":
            resultado = a - b;
            break;
        case "*":
            resultado = a * b;
            break;
        case "/":
            if (b === 0) {
                resultado = "Error";
            } else {
                resultado = a / b;
            }
            break;
        default:
            return;
    }
    
    agregarHistorial(`${a} ${operacion} ${b} = ${resultado}`);
    
    actualizarDisplay(resultado);
    operandoA = resultado.toString();
    operandoB = "";
    operacion = null;
}

function limpiar() {
    operandoA = "";
    operandoB = "";
    operacion = null;
    actualizarDisplay(0);
}

function agregarHistorial(textoOperacion) {
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = textoOperacion;
    listaHistorial.appendChild(nuevoElemento);
}

function borrarHistorial(){
    listaHistorial.innerHTML = '';
}

document.getElementById("btn-0").addEventListener("click", () => agregarNumero("0"));
document.getElementById("btn-1").addEventListener("click", () => agregarNumero("1"));
document.getElementById("btn-2").addEventListener("click", () => agregarNumero("2"));
document.getElementById("btn-3").addEventListener("click", () => agregarNumero("3"));
document.getElementById("btn-4").addEventListener("click", () => agregarNumero("4"));
document.getElementById("btn-5").addEventListener("click", () => agregarNumero("5"));
document.getElementById("btn-6").addEventListener("click", () => agregarNumero("6"));
document.getElementById("btn-7").addEventListener("click", () => agregarNumero("7"));
document.getElementById("btn-8").addEventListener("click", () => agregarNumero("8"));
document.getElementById("btn-9").addEventListener("click", () => agregarNumero("9"));

document.getElementById("btn-pls").addEventListener("click", () => seleccionarOperacion("+"));
document.getElementById("btn-min").addEventListener("click", () => seleccionarOperacion("-"));
document.getElementById("btn-mult").addEventListener("click", () => seleccionarOperacion("*"));
document.getElementById("btn-div").addEventListener("click", () => seleccionarOperacion("/"));

document.getElementById("btn-eql").addEventListener("click", calcular);
document.getElementById("btn-c").addEventListener("click", limpiar);

document.getElementById("btn-hist").addEventListener("click", borrarHistorial);
