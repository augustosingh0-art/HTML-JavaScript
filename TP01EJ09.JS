let estudiante = prompt("Ingrese el nombre del estudiante:");
let materia = prompt("Ingrese el nombre de la materia:");
let nota = Number(prompt("Ingrese la nota:"));

if (nota >= 6) {
    alert(estudiante + " esta aprobado en " + materia);
} else {
    alert(estudiante + " esta desaprobado en " + materia);
}