const coupons = [
    "DN",
    "DA",
    "DP",
];


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupons = document.getElementById("InputCoupons");
    const couponsValue = inputCoupons.value;

    let descuento;

    if (!coupons.includes(couponsValue)) {
        alert("El Coupon" + couponsValue + " No es valido");
    } else if (couponsValue === "DN") {
        descuento = 15;
    } else if (couponsValue === "DA") {
        descuento = 30;
    } else if (couponsValue === "DP") {
        descuento = 25;
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