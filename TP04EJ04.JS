let puntajes = [];

for (let i = 0; i < 5; i++) {
    let puntaje = Number(prompt("Ingrese un puntaje:"));
    puntajes.push(puntaje);
}

puntajes.sort((a, b) => b - a);

console.log("1° puesto:", puntajes[0]);
console.log("2° puesto:", puntajes[1]);
console.log("3° puesto:", puntajes[2]);