let numeros = [];
let cantidad = Number(prompt("¿Cuantos números desea ingresar?"));

for (let i = 0; i < cantidad; i++) {
    let numero = Number(prompt("Ingrese un nro:"));
    numeros.push(numero);
}

numeros.sort((a, b) => b - a);

console.log(numeros);