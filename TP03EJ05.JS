let num1 = Number(prompt("Ingrese el primer número:"));
let num2 = Number(prompt("Ingrese el segundo número:"));

if (num1 > num2) {
    console.log("el primero es mayor que el segundo");
} else if (num2 > num1) {
    console.log("el segundo es mayor que el primero");
} else {
    console.log("ambos números son iguales");
}