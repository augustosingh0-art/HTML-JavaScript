class  Auto{
    constructor(marca,modelo){
        this.marca = marca;      
        this.modelo = modelo;    
        this.velocidad = 0; 
    }

    acelerar(cantidad){
    this.velocidad += cantidad ;
    }

    frenar() { 
    this.velocidad = 0; 
    }

    mostrarInfo() { 
    console.log(`${this.marca} ${this.modelo} va a ${this.velocidad} km/h`); 
    } 
}

const auto1 = new Auto('Ford', 'Ranger'); 
const auto2 = new Auto('Toyota', 'Corolla'); 

auto1.acelerar(30); 
auto2.acelerar(60); 

auto1.mostrarInfo(); 
auto2.mostrarInfo();

console.log(auto1.marca);

//usar class es para de varios tipos de un objeto, Para objetos simples se ocupa el const

const estudiantes = { 
nombre: 'Nahuel', 
apellido: 'Aramayo', 
saludar() { 
    console.log(`Hola, soy ${this.nombre}`); 
    console.log(`Apellido: ${this.apellido}`); 
} 
};

console.log(estudiantes.nombre); 
estudiantes.saludar(); 

class producto{
    constructor(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
}

info(){
    console.log(`el producto ${this.nombre} cuesta $${this.precio}`)
}
}
const productos = [
    new producto("harina",800),
    new producto("arroz",1500),
    new producto("aceite",3500)
];

let total = 0;
for(const p of productos){
    p.info();
    total += p.precio;
}

console.log('Total:', total); 
//el super ahorra el this.nombre
//se añade un atributo


// con el numeral antes del nombre los vuelve accesibles mediante clases
// el numeral priva que se saque de otro dato
//con el super se extraen datos ya definidos