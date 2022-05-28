const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const displayValorOperacion = document.getElementById('valor-operacion');
const botonesNumeros = document.getElementsByClassName('numero');
const botonesOperadores = document.getElementsByClassName('operador');

const display = new Display(displayValorAnterior,displayValorActual, displayValorOperacion);

for (const boton of botonesNumeros){
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
}

// botonesNumeros.forEach(boton => {
//     boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
// });
for (const boton of botonesOperadores){
    boton.addEventListener('click', () => display.computar(boton.value));
    boton.addEventListener('click', () => display.agregarOperador(boton.innerHTML));
}


// botonesOperadores.forEach(boton => {
//     boton.addEventListener('click', () => display.computar(boton.value));
// });
