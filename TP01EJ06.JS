let varones = Number(prompt("Ingrese la cantidad de varones:"));
let mujeres = Number(prompt("Ingrese la cantidad de mujeres:"));

let total = varones + mujeres;

let porcentajeVarones = (varones / total) * 100;
let porcentajeMujeres = (mujeres / total) * 100;
console.log("Varones: " + porcentajeVarones + "%");
console.log("Mujeres: " + porcentajeMujeres + "%");