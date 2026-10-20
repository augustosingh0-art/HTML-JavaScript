let A = Number(prompt("Ingrese el valor de A:"));
let B = Number(prompt("Ingrese el valor de B:"));

let resultado;

if (A > B) {
    resultado = A * B;
} else if (A < B) {
    resultado = A / B;
} else {
    resultado = A + B;
}

alert("Resultado: " + resultado);