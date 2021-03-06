//Closure es un valor de recuerdo, para hacer la practica vamos a realizar una alcancia

//Es esta no funciona la alcancia
const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

//En esta se explica la manera correcta para que funcione el closure
const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(10);

//Este es un ejemplo chistoso del tema

const papa = (nuevoEngendro) => {
    var cantidadDeHijos = 0;
    const crearEngendro = (nuevoEngendro) => {
        cantidadDeHijos += nuevoEngendro;
        console.log(`cantidad de engendritos = ${cantidadDeHijos}`)
    }
    return crearEngendro;
}

let traigamosHijosAlMundo = papa();
traigamosHijosAlMundo(1) // cantidad de engendritos = 1
traigamosHijosAlMundo(1) // cantidad de engendritos = 2
traigamosHijosAlMundo(1) //