// Cuadrado 
console.group("Cuadrados")

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es de: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es de: " + areaCuadrado + "cm2");

console.groupEnd();

// Triángulo
console.group("Triángulos")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
    "los lados del triángulo miden: " 
    + ladoTriangulo1 
    + "cm, "
    + ladoTriangulo2
    + "cm, "
    + baseTriangulo
    + "cm"
);
console.log("La altura del triángulo es de: " + alturaTriangulo + "cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triangulo es de: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es de: " + areaTriangulo + "cm");

console.groupEnd();

// Circulo 
console.group("Circulos")

// Radio
const radioCiculo = 4;
console.log("El radio del ciculo es " + radioCiculo + "cm");


// Diametro
const diametroCirculo = radioCiculo * 2;
console.log("El diámetro del ciculo es " + diametroCirculo + "cm");

// Pi
const PI = Math.PI;
console.log("El PI es " + PI );

// Circunferencia
const perimetroCiculo = diametroCirculo * PI;
console.log("La circunferencia del ciculo es " + perimetroCiculo + "cm");

// Área
const areaCirculo = (radioCiculo * 2) * PI;
console.log("El área del ciculo es " + areaCirculo + "cm");



console.groupEnd();