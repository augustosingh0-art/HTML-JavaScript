let palabra1 = prompt("Ingrese la primera palabra:");
let palabra2 = prompt("Ingrese la segunda palabra:");

if (palabra1.length > palabra2.length) {
    console.log("la primera palabra ingresada es más larga que la segunda");
} else if (palabra2.length > palabra1.length) {
    console.log("la segunda palabra ingresada es más larga que la primera");
} else {
    console.log("ambas palabras tienen la misma longitud de caracteres");
}