class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '0';
        this.valorAnterior = '0';
        this.signos = {
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-',
        };
    }

    borrar() {
        if (this.valorActual !== '0') {
            this.valorActual = this.valorActual.slice(0, -1);
        }
        if (this.valorActual === '') {
            this.valorActual = '0';
        }
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '0';
        this.valorAnterior = '0';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        if (this.tipoOperacion !== 'igual') this.calcular();
        this.tipoOperacion = tipo;
        if (this.valorActual !== 0) {
            this.valorAnterior = this.valorActual || this.valorAnterior;
        } else { this.valorAnterior = '0'; }
        if (this.valorActual === '0' && this.tipoOperacion === 'igual') {
            this.valorActual = '0';
        } else { this.valorActual = ''; }
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if (numero === '.' && this.valorActual.includes('.')) return;
        if (this.valorActual === '0' && numero !== '.') {
            this.valorActual = numero;
        } else { this.valorActual += numero; }
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if (isNaN(valorActual) || isNaN(valorAnterior)) return;

        switch (this.tipoOperacion) {
            case 'sumar':
                this.valorActual = this.calculadora.sumar(valorAnterior, valorActual);
                break;
            case 'restar':
                this.valorActual = this.calculadora.restar(valorAnterior, valorActual);
                break;
            case 'multiplicar':
                this.valorActual = this.calculadora.multiplicar(valorAnterior, valorActual);
                break;
            case 'dividir':
                this.valorActual = this.calculadora.dividir(valorAnterior, valorActual);
                break;
            default:
                return;
        }
    }
}