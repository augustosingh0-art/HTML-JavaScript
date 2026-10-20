let nota1 = Number(prompt("Ingrese la primera nota:"));
let nota2 = Number(prompt("Ingrese la segunda nota:"));
let nota3 = Number(prompt("Ingrese la tercera nota:"));

let promedio = (nota1 + nota2 + nota3) / 3;

if (promedio >= 7) {
    alert("Aprobado");
} else if (promedio < 4) {
    alert("A marzo");
} else {
    alert("A diciembre");
}