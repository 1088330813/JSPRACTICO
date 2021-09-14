const coupons = [{
        name: "DN",
        discount: 15,
    },
    {
        name: "DA",
        discount: 30,
    },
    {
        name: "DP",
        discount: 25,
    },
];


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    /*Con estas lineas de codigo, lo que hace es retornar 
    el valor correcto y que haya digitado nuestro usuario*/

    const isCouponValueValid = function(coupon) {
        return coupon.name === couponValue;
    };

    /*Este lo que hace el buscar por medio de find, el valor de 
    descuento que da al digitar el cupon*/

    const userCoupon = coupons.find(isCouponValueValid);

    /* Este lo que hace es validar si hay valor en la variable
    userCoupon que es la encargada del valor de descuento
    y de no ser así traera una alerta de erro*/


    if (!userCoupon) {
        alert("El Coupon " + couponValue + " No es valido");
    } else {

        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        console.log(
            priceValue,
            descuento,
            userCoupon,
        );
        const resultPrice = document.getElementById("ResultPrice");
        resultPrice.innerText = "El Precio con descuento es: $" + precioConDescuento;
    }

    function calcularPrecioConDescuento(precio, descuento) {
        const porcentajePrecioConDescuento = 100 - descuento;
        const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
        return precioConDescuento;
    }
}