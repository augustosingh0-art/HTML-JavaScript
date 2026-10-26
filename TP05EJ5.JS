class CuentaBancaria {
    titular;
    #saldo = 0;

    constructor(titular) {
        this.titular = titular;
    }

    depositar(monto) {
        if (monto > 0) {
            this.#saldo += monto;
            console.log("Depósito realizado.");
        } else {
            console.log("El monto debe ser positivo.");
        }
    }

    extraer(monto) {
        if (monto > 0 && monto <= this.#saldo) {
            this.#saldo -= monto;
            console.log("Extracción realizada.");
        } else {
            console.log("Operación no permitida.");
        }
    }
}

const cuenta = new CuentaBancaria("Augusto");

cuenta.depositar(1000);
cuenta.depositar(-500);

cuenta.extraer(300);
cuenta.extraer(1000);
cuenta.extraer(-100);