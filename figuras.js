// Cuadrado 
console.group("Cuadrados")

function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

// Triángulo
console.group("Triángulos")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function alturaTrianguloIso(lado1, lado2, base) {
    const catetoBase = base / 2;
    return (Math.sqrt((lado1 * lado1) - (catetoBase * catetoBase)));
}

console.groupEnd();

// Circulo 
console.group("Circulos")

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
} 

// Pi
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo (radio){
    return (radio * radio) * PI;
}

console.groupEnd();

// Interaccion HTML Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado (value);
    alert(perimetro);
}

// Interaccion HTML Triángulo

function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const valueLado1 = parseInt(inputLado1.value); 
    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const valueLado2 = parseInt(inputLado2.value); 
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = parseInt(inputBase.value); 
    const perimetro = perimetroTriangulo(valueLado1,valueLado2,valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = parseInt(inputBase.value); 
    const inputAltura = document.getElementById("InputTrianguloAltura");
    const valueAltura = parseInt(inputAltura.value); 
    const altura = areaTriangulo(valueBase, valueAltura);
    alert(altura);
}

function calcularAlturaTrianguloIso(){
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const valueLado1 = parseInt(inputLado1.value); 
    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const valueLado2 = parseInt(inputLado2.value); 
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = parseInt(inputBase.value); 
    if (valueLado1 === valueLado2){
        const alturaIso = alturaTrianguloIso(valueLado1,valueLado2,valueBase);
        alert(alturaIso);
    }
    else{
        alert("No es un triángulo isóceles, por favor indique la altura del triángulo")
    }
}

// Interaccion HTML Círculo

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo (value);
    alert(area);
}