class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true;
    }

    prestar() {
        if (this.disponible) {
            this.disponible = false;
        } else {
            console.log("El libro ya está prestado.");
        }
    }

    devolver() {
        this.disponible = true;
    }

    mostrar() {
        console.log("Titulo:", this.titulo);
        console.log("Autor:", this.autor);
        console.log("Disponible:", this.disponible);
    }
}

const libros = [
    new Libro("El principito", "Antoine de Saint-Exupéry"),
    new Libro("1984", "George Orwell"),
    new Libro("Don Quijote", "Miguel de Cervantes"),
    new Libro("Fahrenheit 451", "Ray Bradbury"),
    new Libro("Harry Potter", "J. K. Rowling")
];
libros[0].prestar();
libros[2].prestar();
for (let libro of libros) {
    if (libro.disponible) {
        libro.mostrar();
    }
}