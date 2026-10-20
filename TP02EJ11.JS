let palabra;

while (true) {
    palabra = prompt("Ingrese una palabra:");
    if (palabra === "salir") {
        console.log("Programa finalizado")
        break;
    }
    console.log(palabra.toLowerCase);
}