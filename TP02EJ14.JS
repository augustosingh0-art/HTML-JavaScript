let numero;
while (true) {
    numero = Number(prompt("Ingrese un numero del 1 al 10:"));
    if (numero === 5) {
        console.log("Adivinaste el numero secreto");
        break;
    } else {
        console.log("Incorrecto,intentalo nuevamente");
    }
}