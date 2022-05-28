class Display {
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.valorActual = '';
        this.valorAnterior = '';
    }

    borrar(){
        this.valorActual = this.valorActual.slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    agregarNumero(numero){
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }

    calcular(){
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior,this.valorActual);
    }
    computar(tipoOperacion){
        if(this.tipoOperacion !== 'igual' && this.calcular()){
            this.tipoOperacion = tipoOperacion;
            this.valorAnterior = this.valorActual || this.valorAnterior;
            this.valorActual = '';
            this.imprimirValores();
        }
    }
}