function saludo(){
    console.log("Hola mundo.");
}

saludo();

//otra forma

/*const saludar = () =>{
    console.log("Hola mundo.")
}*/

saludar()

//definir parametros y argumentos

function saludar(nombre){
console.log("Hola ",nombre);
}

//let a = "Nahuel";
//saludar(a);

function suma(n1 , n2){
return n1 + n2;
}

let a = 5;
let b = 10;
let c = suma(a,b);
console,log(c);