let palabras = [];

for (let i = 0; i < 5; i++) {
    let palabra = prompt("Ingrese una palabra:");
    palabras.push(palabra);
}

for (let palabra of palabras) {
    if (palabra.length > 5) {
        console.log(palabra);
    }
}