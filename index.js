const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const operadorIgual = document.querySelector('.operadorigual');
const botonBorrarTodo = document.querySelector('.borrar-todo');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.textContent));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
});

operadorIgual.addEventListener('click', () => display.computar('igual'));

botonBorrarTodo.addEventListener('click', () => display.borrarTodo());