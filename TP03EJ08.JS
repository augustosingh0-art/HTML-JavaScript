let contraseña = prompt("Ingrese una contraseña:");

if (contraseña.length < 8) {
    console.log("Es una contraseña corta");
} else {
    console.log("Es una contraseña larga");
}