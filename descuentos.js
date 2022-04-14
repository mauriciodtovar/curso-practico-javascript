// const precioOriginal = 100;
// const descuento = 15;
// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

// function calcularPrecioConDescuento (precio, descuento){
//     porcentajePrecioConDescuento = 100 - descuento;
//     precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
//     return precioConDescuento;
// }

function calcularPrecioConDescuentoCupones (precio, cupones){
    porcentajePrecioConCupones= 100 - cupones;
    precioConDescuentoCupones = (precio * porcentajePrecioConCupones) / 100;
    return precioConDescuentoCupones;
}

const cuponesDescuento = [
    "CLIENTE_EMPRENDEDOR_2022", 
    "CLIENTE_PREMIUM_2022", 
    "FAMILIAR_EMPLEADO_2022"
];

function ButtonCalcularPrecioCupon(){
    const inputPrecio = document.getElementById("InputPrecio");
    const valuePrecio = inputPrecio.value;

    const inputCupon = document.getElementById("InputCupon");
    const valueCupon =  inputCupon.value;

    switch (valueCupon){
        case cuponesDescuento[0]:
            descuentoCupon = 20;
        break;
        case cuponesDescuento[1]:
            descuentoCupon = 50;
        break;
        case cuponesDescuento[2]:
            descuentoCupon = 80;
        break;
        default:
            alert ("ingresa un cupon válidao")
        break;
    }

    precioCuponEmprendedor = calcularPrecioConDescuentoCupones (valuePrecio,descuentoCupon);

    const resultP = document.getElementById("ResultadoConCupon");
    resultP.innerHTML = "El precio aplicando cupon de descuento es de: " + precioCuponEmprendedor;
};

// function ButtonCalcularPrecioDescuento(){
//     const inputPrecio = document.getElementById("InputPrecio");
//     const valuePrecio = inputPrecio.value;
//     const inputDescuento = document.getElementById("InputDescuento");
//     const valueDescuento = inputDescuento.value;
//     precioConDescuentoClient = calcularPrecioConDescuento(valuePrecio,valueDescuento);
//     const resultP = document.getElementById("ResultP");
//     resultP.innerHTML = "El precio con descuento es de: " + precioConDescuentoClient;
// }

// function ButtonCalcularPrecioCupon(){
//     const selectCupon = document.getElementById("SelectCupon");
//     const valueCupon =  selectCupon.value;

//     const inputPrecio = document.getElementById("InputPrecio");
//     const valuePrecio = inputPrecio.value;
    
//     precioConDescuentoCupon = calcularPrecioConDescuentoCupones(valuePrecio,valueCupon);     

//     const resultP = document.getElementById("ResultP");
//     resultP.innerHTML = "El precio aplicando cupon de descuento es de: " + precioConDescuentoClient;
// }
