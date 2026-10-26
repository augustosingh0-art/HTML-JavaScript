class rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    area() {
        return (this.base * this.altura) / 2;
    }

    perimetro() {
        return (this.base + this.altura);
    }
}
const rectangulo1 = new rectangulo(32, 8);
const rectangulo2 = new rectangulo(12, 9);
const rectangulo3 = new rectangulo(16, 3);
console.log("rectanngulo 1");
console.log("area:", rectangulo1.area());
console.log("perimetro:", rectangulo1.perimetro());

console.log("rectangulo 2");
console.log("area:", rectangulo2.area());
console.log("perimetro:", rectangulo2.perimetro());

console.log("rectangulo 3");
console.log("area:", rectangulo3.area());
console.log("perimetro:", rectangulo3.perimetro());