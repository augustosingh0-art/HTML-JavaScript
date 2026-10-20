let lado1 = Number(prompt("Ingrese el primer lado:"));
let lado2 = Number(prompt("Ingrese el segundo lado:"));
let lado3 = Number(prompt("Ingrese el tercer lado:"));

if (lado1 == lado2 && lado2 == lado3) {
    alert("El triangulo es equilátero");
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    alert("El triangulo es isósceles");
} else {
    alert("El triangulo es escaleno");
}