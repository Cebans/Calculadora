class Display {
    constructor(displayValorAnterior, displayValorActual, displayValorOperacion){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorOperacion = displayValorOperacion;
        this.calculador = new Calculadora();
        this.valorActual = '';
        this.valorAnterior = '';
        this.valorOperacion = '';
    }

    borrar(){
        this.valorActual = this.valorActual.slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.valorOperacion = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    agregarNumero(numero){
        if(numero === '.' && this.valorActual.includes('.')) return;
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior; 
        this.displayValorOperacion.textContent = this.valorOperacion;
    }

    calcular(){
        if(this.tipoOperacion=='sumar'){
            this.valorActual = this.calculador.sumar(this.valorAnterior,this.valorActual);
        } else if(this.tipoOperacion=='restar'){
            this.valorActual = this.calculador.resta(this.valorAnterior, this.valorActual);
        } else if(this.tipoOperacion=='multiplicar'){
            this.valorActual = this.calculador.multiplicar(this.valorAnterior, this.valorActual);
        } else if(this.tipoOperacion=='dividir'){
            this.valorActual = this.calculador.dividir(this.valorAnterior, this.valorActual);
        }
        //this.valorActual = this.calculador[this.tipoOperacion](this.valorAnterior,this.valorActual);
    }
    computar(tipoOperacion){
        if(this.tipoOperacion !== 'igual'){
            this.calcular();
            this.valorAnterior = this.valorActual || this.valorAnterior;
            this.valorActual = '';
            this.valorOperacion = '';
            this.imprimirValores();
        }
        this.tipoOperacion = tipoOperacion;
        this.valorOperacion = '';
    }

    agregarOperador(operador){
        this.valorOperacion = this.valorOperacion.toString() + operador.toString();
        this.imprimirValores();
    }
}