/*CREO TODOS ELEMENTOS METIDOS EN VARIABLES PARA LUEGO UTILIZARLOS*/
const displayValorAnterior = document.getElementById("valor-anterior")
const displayValorActual = document.getElementById("valor-actual")
const botonesNumeros = document.querySelectorAll(".numero")
const botonesOperadores = document.querySelectorAll(".operador")

const display = new Display(displayValorAnterior,displayValorActual);

botonesNumeros.forEach(boton =>{    /*por cada boton de numeros*/
     boton.addEventListener("click",() => display.agregarNumero(boton.innerHTML));  /* el boton que clickee es el que se va a guardar en el metodo*/
});
botonesOperadores.forEach(boton => {      /*por cada boton de operadores*/
     boton.addEventListener("click", () => display.computar(boton.value))
});