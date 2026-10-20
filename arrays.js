let nombres = ["Ana","Juan","Jose","Carla"];
let notas = [3 ,10,7,9];
let apellidos = [];
console.log(nombres[1]); //ver un dato especifico
console.log(nombres.at(-1)); //el ultimo elemento,varia entre penultimo si es -2

let longitud = nombres.length -1; // contar los elementos de la lista
console.log(longitud);

nombres.push("Pablo"); // añadir elementos a un array
console.log(nombres);

nombres.splice( 1,0,"Mateo" ); //el primer es el indice,el segundo es elementos a eliminar y el ultimo es el agregado 
console.log(nombres); 

let nuevos = ["Maria","Lucia"];
nombres.push(...nuevos); //agregar listas a otras listas
console.log(nombres);

nombres[0] = "Antonella"; //reemplazar
console.log(nombres);

nombres.shift();
console.log(nombres); //elimina el primer elemento

nombres.pop(); //elimina el ultimo elemento
console.log(nombres);

nombres.splice(2,1); //elimina un elemento especifico
console.log(nombres);

//nombres.length = 0;
//console.log(nombres); // elimina todos los elementos de la lista o allay

nombres.includes("Maria");
nombres.indexOf("Pablo");  //revisar...

//para concatenar se utiliza el signo de invertido
let nombre = Augusto;
console.log(`Bienvenido ${nombre}`);
//