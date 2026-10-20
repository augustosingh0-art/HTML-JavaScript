//redondear al mas cercano
console.log(Math.round(1.3));
console.log(Math.round(1.7));

//valor absoluto:
console.log(Math.abs(-23));
console.log(Math.abs(23));

//redonde hacia arriba
console.log(Math.ceil(1.1));

//redonde hacia abajo
console.log(Math.floor(1.99));

console.log(Math.pow(10,2)); //potencia
console.log(10 ** 2); //alternativa

//raiz cuadrada
console.log(Math.sqrt(9));

//METODOS EN STING
let palabra = " Hola mundo ";
console.log(palabra.toUpperCase()); // MAYUSCULAS

console.log(palabra.toLowerCase()); // minusculas

console.log(palabra.trim()); //eliminar espacios al inicio y al final

console.log(palabra.trimStart()); //eliminar espacio del princio
console.log(palabra.trimEnd()); //eliminar espacio del final

console.log(palabra.indexOf("la"));// busca la cadena de caracteres (-1 si no encuentra o devuelve index)
console.log(palabra.replace("do","dial")); // reemplasa cadena de caracteres 

console.log(palabra.includes("mun"));//devolver true or folse sila palabra contiene la cadena de caracteres
console.log(!palabra.includes("mun"));