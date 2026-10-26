const celular = {
    marca: "samsung",
    modelo: "galaxy A14",
    bateria: 75,

    mostrarinfo() {
        console.log("marca:", this.marca);
        console.log("modelo:", this.modelo);
        console.log("bateria:", this.bateria + "%");
    }
};

console.log(celular.marca);

celular.bateria = 50;
celular.mostrarinfo();

celular.cargar = function() {
    this.bateria = 100;
};

celular.cargar();
celular.mostrarinfo();
