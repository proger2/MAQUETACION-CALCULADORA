class Display {
    /*creo un constructor para que luego instanciemos la clase y le pase valores}*/
    constructor(displayValorAnterior,displayValorActual){
        this.displayValorActual= displayValorActual;    /*creo propiedades de la clase*/
        this.displayValorAnterior=displayValorAnterior;     /*creo propiedades de la clase*/
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;     /*variable que va a servir para guardar la operacion*/
        this.valorActual = "";                           /*son los numeros que estoy guardando*/
        this.valorAnterior = "";
        this.signos = {
            sumar: "+",
            dividir: "/",
            multiplicar: "x",
            restar: "-",
        }
    }
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = "";
        this.valorAnterior = "";
        this.tipoOperacion = undefined;
        this.imprimirValores();
        }
    
    
computar(tipo) {
    this.tipoOperacion !== "igual" && this.calcular();
    this.tipoOperacion = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = "";
    this.imprimirValores();
    }

    agregarNumero(numero){          /*creo un metodo para que reciba numeros como parametros*/
        if (numero === "." && this.valorActual.includes(".")) return 
        this.valorActual = this.valorActual.toString() + numero.toString();         /*designo el numero que clickeo al valor del display*/
        this.imprimirValores();
    }
    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {         /*toma los valores que tiene el display y darselo a la calculadora para efectuar calculos*/
        const valorAnterior = parseFloat(this.valorAnterior);   /*pasa de string a float*/
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior) ) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior,valorActual);
    }


}