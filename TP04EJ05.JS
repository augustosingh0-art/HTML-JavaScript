let notas = [];
let suma = 0;

for (let i = 0; i < 5; i++) {
    let nota = Number(prompt("Ingrese una nota:"));
    notas.push(nota);
    suma += nota;
}

let promedio = suma / 5;

console.log("Promedio:", promedio);

if (promedio >= 6) {
    console.log("El estudiante está aprobado");
} else {
    console.log("El estudiante está desaprobado");
}
