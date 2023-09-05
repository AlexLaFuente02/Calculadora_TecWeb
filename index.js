const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const operadorIgual = document.querySelectorAll('.operadorigual');
const botonBorrarTodo = document.querySelector('.borrar-todo');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});

operadorIgual.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});

botonBorrarTodo.forEach(boton => {
    boton.addEventListener('click', () => display.borrarTodo())
});