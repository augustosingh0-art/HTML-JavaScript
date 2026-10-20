let empleado = prompt("Ingrese el nombre del empleado:");
let categoria = prompt("Ingrese la categoría (A/B):");

let sueldo;

if (categoria == "A") {
    sueldo = 500000;
} else if (categoria == "B") {
    sueldo = 750000;
}

alert("Empleado: " + empleado + "Sueldo: $" + sueldo);