const body = document.getElementsByTagName('body')[0];

const fondoRojo = document.getElementById('rojo');
fondoRojo.addEventListener('click', function() {
    console.log('Rojo');
    resetBackground();
    body.classList.add('rojo');
});

const fondoVerde = document.getElementById('verde');
fondoVerde.addEventListener('click', function() {
    console.log('Verde');
    resetBackground();
    body.classList.add('verde');
});

const fondoAzul = document.getElementById('azul');
fondoAzul.addEventListener('click', function() {
    console.log('Azul');
    resetBackground();
    body.classList.add('azul');
});

const fondoBlanco = document.getElementById('blanco');
fondoBlanco.addEventListener('click', function() {
    console.log('Blanco');
    resetBackground();
    body.classList.add('blanco');
});

function resetBackground() {
    body.classList.remove('rojo', 'verde', 'azul', 'blanco');
}