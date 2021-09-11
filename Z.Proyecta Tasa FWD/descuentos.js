function calculationRateStrike(spot, dev, dias) {

    devPorcentual = (dev / 100);
    resultS = spot * ((1 + devPorcentual) ** (dias / 365));
    var resultSDecimal = resultS.toFixed(2);
    return resultSDecimal;

}

function OnClicKCalculationRateStrike() {
    const inputDateIni = document.getElementById("dateInicial");
    valueDateIni = new Date(inputDateIni.value);
    const inputDateFin = document.getElementById("dateFinal");
    valueDateFin = new Date(inputDateFin.value);
    const inputDiasDados = document.getElementById("diasDados");
    valueDiasDados = inputDiasDados.value;
    const inputRateSpot = document.getElementById("rateSpot");
    valueRateSpot = inputRateSpot.value;
    const inputDevaluation = document.getElementById("devaluation");
    valueDevaluation = inputDevaluation.value;

    const OperNumDias = Math.abs(valueDateFin - valueDateIni);
    numDias = OperNumDias / (1000 * 3600 * 24)


    if ((valueDiasDados != '' && inputDateIni.value && inputDateFin.value) || (valueDiasDados != '' && inputDateIni.value) || (valueDiasDados != '' && inputDateFin.value)) {

        alert("No puede ingresar fechas y días a la vez, intente nuevamente");

    } else if (valueDiasDados != '') {
        const ResultOnClick = calculationRateStrike(valueRateSpot, valueDevaluation, valueDiasDados);

        const inputResultPrice = document.getElementById("ResultPrice");
        inputResultPrice.innerText = "La Tasa Futura es: $" + ResultOnClick;

    } else {
        const ResultOnClick = calculationRateStrike(valueRateSpot, valueDevaluation, numDias);

        const inputResultPrice = document.getElementById("ResultPrice");
        inputResultPrice.innerText = "La Tasa Futura es: $" + ResultOnClick;

    }

}