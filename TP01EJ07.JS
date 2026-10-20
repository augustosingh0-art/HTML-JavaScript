let num1 = Number(prompt("Ingrese el primer número:"));
let num2 = Number(prompt("Ingrese el segundo número:"));

let mayor;
let menor;

if (num1 > num2) {
    mayor = num1;
    menor = num2;
} else {
    mayor = num2;
    menor = num1;
}

console.log("El mayor es: " + mayor);
console.log("El menor es: " + menor);