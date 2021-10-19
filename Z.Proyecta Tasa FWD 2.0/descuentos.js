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

    if (valueDateFin > valueDateIni) {
        numDias = OperNumDias / (1000 * 3600 * 24)
    } else { numDias = (OperNumDias * -1) / (1000 * 3600 * 24) }



    if ((valueDiasDados != '' && inputDateIni.value && inputDateFin.value) || (valueDiasDados != '' && inputDateIni.value) || (valueDiasDados != '' && inputDateFin.value)) {

        alert("No puede ingresar fechas y días a la vez, intente nuevamente");

    } else if (valueDiasDados != '') {
        const ResultOnClick = calculationRateStrike(valueRateSpot, valueDevaluation, valueDiasDados);

        const printStrike = document.getElementById("PrintStrike");
        printStrike.innerText = ResultOnClick;

        const printDays = document.getElementById("PrintDays");
        printDays.innerText = valueDiasDados;

        const printDevaluation = document.getElementById("PrintDevaluation");
        printDevaluation.innerText = valueDevaluation;

        const printSpot = document.getElementById("PrintSpot");
        printSpot.innerText = valueRateSpot;

    } else {
        const ResultOnClick = calculationRateStrike(valueRateSpot, valueDevaluation, numDias);

        const printStrike = document.getElementById("PrintStrike");
        printStrike.innerText = ResultOnClick;

        const printDays = document.getElementById("PrintDays");
        printDays.innerText = numDias;

        const printDevaluation = document.getElementById("PrintDevaluation");
        printDevaluation.innerText = valueDevaluation;

        const printSpot = document.getElementById("PrintSpot");
        printSpot.innerText = valueRateSpot;

    }

}