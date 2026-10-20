let numero = Number(prompt("Ingrese un número:"));
let resultado = numero;

if (numero < -5 && numero > -30) {
    resultado = numero + 100;
} else if (numero >= 0 && numero < 20) {
    resultado = numero + 50;
} else if (numero > 50) {
    resultado = numero * 2;
}

("Resultado: " + resultado);