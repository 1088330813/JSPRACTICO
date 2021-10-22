const holaMundo = () => {
    const hola = "hola mundo";
    console.log(hola);
};
holaMundo();
console.log(hola);

//A este concepto se le llama ambito lexico
//Cuando llamamos dentro de un entorno local una función, en este caso con una función para que funcione internamente

var scope = "yo soy global";

const functionScope = () => {
    var scope = "ahora soy local";
    const func = () => {
        return scope
    }
    console.log(func());
};

functionScope();