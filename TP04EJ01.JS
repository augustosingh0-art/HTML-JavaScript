let nombres = [];
let cantidad = Number(prompt("¿CuAntos nombres desea ingresar?"));

for (let i = 0; i < cantidad; i++) {
    let nombre = prompt("Ingrese un nombre:");
    nombres.push(nombre);
}

console.log(nombres);