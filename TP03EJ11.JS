let email = prompt("Ingrese un e-mail:");

if (email.includes("@") && email.includes(".")) {
    console.log("email válido");
} else {
    console.log("email invalido");
}