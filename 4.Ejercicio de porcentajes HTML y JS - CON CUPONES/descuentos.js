const coupons = [
    "DN",
    "DA",
    "DP",
];

// para mi, este array no tiene funcionalidad dentro de la formula

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupons = document.getElementById("InputCoupons");
    const couponsValue = inputCoupons.value;

    let descuento;

    switch (couponsValue) {
        case "DN":
            descuento = 15;
            break;
        case "DA":
            descuento = 30;
            break;
        case "DP":
            descuento = 25;
            break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "El Precio con descuento es: $" + precioConDescuento;
}

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}