const fruits = () => {
    var fruit = "apple";
    console.log(fruit);
};

fruits();
console.log(fruit); //consulta global que va a generar error porque fruit está de manera local en la función

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    // let y = 2;
    console.log(x);
    console.log(y);
};

anotherFunction();