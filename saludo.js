console.log("Hola mundo"); //imprimir en pantalla

/*

*/

//let numero = 1//es una variable que puede cambiar

let nombre = "Augusto";
console.log(nombre);

//Tipos de datos
//primitivos:
//Number
//String
//Boolean
//undefined
//null

//de referencia:
//array
///Object
//function
//class

let mensaje = "Bienvenido " + nombre;
console.log(mensaje);

//Operadores matemáticos
/* Son los mismo que utilizamos en phyton (+ - * / % ** )*/

let n1 = 5;
let n2 = 4;
let resultado = n1 + n2 ;
console.log(resultado);
console.log("La suma es ", resultado); 

//Operadores logicos
/* > >= < <= === !== */

//INGRESO DE DATOS

let apellido = prompt("Ingrese un apellido: ");
console.log("El apellido ingresado es ", apellido);

let edad = Number(prompt("Ingrese su edad: "));
console.log("Tu edad es ",edad);

//Condicional:
//if (a>b){}
//else:(a < b){}

if (edad >= 18){
    console.log(nombre, "Es mayor a edad");
} else{
    console.log(nombre ,"es menor de edad");
}

let nota = Number(prompt("Ingrese nota de matemática: "));
if (nota >= 8){
    console.log("Promoción");
}
else if(nota <4){
    console.log("Libre");
}else{
    console.log("regular");
}