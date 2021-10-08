// FUNCIONES HELPERS O UTILS(Estas son aquellas funciones que no hacen parte de mis calculos en cuestion pero que las necesitamos)

function esPar(numerito) {
    // if (numerito % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }


    //EL CODIGO ANTERIOR SE PUEDE SIMPLIFICAR ASÍ:

    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(listaOrdenada) {

    const sumaLista = listaOrdenada.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / listaOrdenada.length;
    return promedioLista;
}
//CALCULADORA DE MEDIANAS 

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;

    }
}
//MEDIANA GENERAL

const salariosCol = colombia.map(
    function(personita) {
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//MEDIANA DEL TOP 10%
const spliceStart = (salariosColSorted.length * (100 - 10) / 100);
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});