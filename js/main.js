/*CREO TODOS ELEMENTOS METIDOS EN VARIABLES PARA LUEGO UTILIZARLOS*/
const displayValorAnterior = document.getElementById("valor-anterior")
const displayValorActual = document.getElementById("valor-actual")
const botonesnum = document.querySelectorAll("numero")
const botonesoperadores = document.querySelectorAll("operador")

const display = new Display(displayValorActual,displayValorAnterior);

botonesnum.forEach(boton =>{    /*por cada boton de numeros*/
     boton.addEventListener("click",() => display.agregarNumero(boton.innerHTML));  /* el boton que clickee es el que se va a guardar en el metodo*/
});
