//ARCHIVO CON LA CLASE ENCARGADA DE CONTROLAR LA CALCULADORA CON INTERACCIONES
//CON NUESTROS BOTONES Y MOSTRAR LO QUE NECESITEMOS MOSTRAR EN EL DISPLAY

class Display { 
    constructor(displayValorAnterior, displayValorActual){ 
    this.displayValorAnterior = displayValorAnterior;// ELEMENTO QUE MODIFICAMOS EN LA CUENTA
    this.displayValorActual = displayValorActual;
    this.calculador = new Calculadora();
    this.operador = undefined;
    this.valorActual = "" ;// REPRESENTA LOS NUMEROS QUE GUARDAMOS EN LA CUENTA
    this.valorAnterior = "";
    this.signos = { 
        sumar: "+",
        restar: "-",
        dividir: "%",
        multiplicar: "x",
    }
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValor();
    }

    borrarTodo(){ 
        this.valorActual = "";
        this.valorAnterior = "";
        this.operador = undefined;
        this.imprimirValor();
    }

    agregarOperador(tipo) { 
        this.operador !== 'igual' && this.calcular(); // SI PRESIONAMOS EL IGUAL, AL COLOCAR OTRO NUMERO SE REEMPLAZARA
        this.operador = tipo;
        /* SETTEAMOS EL VALOR ANTERIOR SI HAY UNO ACTUAL LO COLOCAMOS Y SI NO,
        DEJAMOS EL VALOR ANTERIOR, AL CALCULAR SE ACTUALIZA EL VALORACTUAL  Y SI NO HAY VALOR ACTUAL 
        SE ACTUALIZA EL OPERADOR, SE DEJA EL VALOR ANTERIOR COMO VALOR ANTERIOR.*/
        this.valorAnterior = this.valorActual || this.valorAnterior // 
        this.valorActual = ""; // DEJAMOS VACIO EL VALOR ACTUAL PARA PODER VOLVER A HACER UNA OPERACION NUEVA.
        this.imprimirValor();
    }

   

    agregarNumero(numero) { 
        // CONDICION PARA EVITAR MUCHOS SIMBOLOS
        if (numero === "." && this.valorActual.includes(".")) return// RETORNAMOS SIN HACER NADA PARA EVITAR MUCHOS PUNTOS SEGUIDOS
         // SETTEAMOS EL VALOR DEL DISPLAY AL VALOR DEL PARAMETRO
        this.valorActual = this.valorActual.toString() + numero.toString(); //SETTEAMOS PARA QUE SEA SIEMPRE TRABAJEMOS CON UNA STRING AL AGREGAR VALORES(NUMEROS Y PUNTOS).
        /* POR EL MOMENTO SERÀ STRING HASTA QUE TENGAMOS QUE HACER EL CALCULO CON LOS VALORES, EN ESE MOMOMENTO
        SE CONVERTIRAN EN NUMEROS. */
        this.imprimirValor();
        console.log(numero)
    }
    imprimirValor() { 
        this.displayValorActual.textContent = this.valorActual;
                                                                       // SI EXISTE USALO SINO, NO HAGAS NADA
         this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.operador] || ''}`;
    }

    calcular() { 
        const valorAnterior = parseFloat(this.valorAnterior); // SETTEAMOS COMO UN NUMERO EL VALOR
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return //DEVOLVEMOS PARA NO HACER NADA. //SI LOS VALORES ESTAN VACIOS (NOT A NUMBER)
        
        //METODO PARA CALCULAR.
        this.valorActual = this.calculador[this.operador](valorAnterior, valorActual); // TOMAMOS VALOR DEL OPERADOR Y DE LOS VALORES NUMERICOS
    }
}