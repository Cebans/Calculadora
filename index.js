const displayvaloranterior = document.getElementById('valor-anterior');
const displayvaloractual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('numero');
const botonesOperadores = document.querySelectorAll('operador');

const display = new Display(displayvaloranterior,displayvaloractual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

