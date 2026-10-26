class Alumno {
    constructor(nombre, curso) {
        this.nombre = nombre;
        this.curso = curso;
        this.notas = [];
    }

    agregarNota(nota) {
        if (nota >= 1 && nota <= 10) {
            this.notas.push(nota);
        } else {
            console.log("La nota debe estar entre 1 y 10.");
        }
    }

    promedio() {
        if (this.notas.length === 0) {
            return 0;
        }

        let suma = 0;

        for (let nota of this.notas) {
            suma += nota;
        }

        return suma / this.notas.length;
    }

    estado() {
        let promedio = this.promedio();

        if (promedio >= 7) {
            return "Aprobado";
        } else if (promedio >= 4) {
            return "A diciembre";
        } else {
            return "A marzo";
        }
    }
}

const alumno1 = new Alumno("Juan", "3°A");
alumno1.agregarNota(8);
alumno1.agregarNota(9);
alumno1.agregarNota(7);

const alumno2 = new Alumno("Pedro", "3°A");
alumno2.agregarNota(5);
alumno2.agregarNota(6);
alumno2.agregarNota(4);

const alumno3 = new Alumno("Lucas", "3°A");
alumno3.agregarNota(2);
alumno3.agregarNota(3);
alumno3.agregarNota(4);

console.log(alumno1.nombre, alumno1.promedio(), alumno1.estado());
console.log(alumno2.nombre, alumno2.promedio(), alumno2.estado());
console.log(alumno3.nombre, alumno3.promedio(), alumno3.estado());