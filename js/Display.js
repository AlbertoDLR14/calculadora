class Display{
    constructor(displayResultado, displayActual){
        this.displayActual = displayActual;
        this.displayResultado = displayResultado;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.numeroActual = "";
        this.numeroResultado = "";
        this.signos = {
            sumar: "+",
            restar: "-",
            multiplicar: "x",
            dividir: "/",
            porcentaje: "%",
        }
    }

    borrarAtras(){
        this.numeroActual = this.numeroActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.numeroActual = "";
        this.numeroResultado = "";
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo){
        this.tipoOperacion !== "igual" && this.calcular();
        if(tipo === "+") this.tipoOperacion = "sumar";
        if(tipo === "-") this.tipoOperacion = "restar";
        if(tipo === "x") this.tipoOperacion = "multiplicar";
        if(tipo === "/") this.tipoOperacion = "dividir";
        if(tipo === "%") this.tipoOperacion = "porcentaje";
        if(tipo === "=") this.tipoOperacion = "igual";
        this.numeroResultado = this.numeroActual || this.numeroResultado
        this.numeroActual = "";
        this.imprimirValores();
    }

    agregarNumero(numero){
        if(numero === "←") return this.borrarAtras();
        if(numero === "C") return this.borrarTodo();
        if(numero === "." && this.numeroActual.includes('.')) return;
        this.numeroActual = this.numeroActual + numero;
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayActual.value = this.numeroActual;
        this.displayResultado.value = `${this.numeroResultado} ${this.signos[this.tipoOperacion] || ""}` ;
    }

    calcular(){
        const numeroResultado = parseFloat(this.numeroResultado);
        const numeroActual = parseFloat(this.numeroActual);

        if(isNaN(numeroActual) || isNaN(numeroResultado)) return
        this.numeroActual = this.calculador[this.tipoOperacion](numeroResultado, numeroActual)
    }

}