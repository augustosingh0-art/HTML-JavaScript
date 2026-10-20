let nombre = prompt("Ingrese el nombre:");
let apellido = prompt("Ingrese el apellido:");
let cargo = prompt("Ingrese el cargo:");
let presentismo = prompt("¿Posee bonus por presentismo? (si/no)");

let sueldo;

if (cargo === "cajero") {
    sueldo = 600000;
} else if (cargo === "administrativo") {
    sueldo = 800000;
} else if (cargo === "gerente") {
    sueldo = 1000000;
}

if (presentismo === "si") {
    sueldo = sueldo * 1.15;
} else {
    sueldo = sueldo * 0.95;
}

console.log("El monto a percibir es: $" + sueldo);