function calcularMediana(lista) {
    const listaOrdenada = lista.sort(function(a, b) {
        return a - b;
    });

    const mitadLista = parseInt(listaOrdenada.length / 2);

    let mediana;

    if (esPar(listaOrdenada.length)) {
        //Cuando la mediana es par necesitamos el promedio de 2 elementos
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);

        mediana = promedioElemento1y2;
        return mediana;

        //En el caso de cuando no es par solo buscamos el numero del medio
    } else {
        mediana = listaOrdenada[mitadLista];
        return mediana

    }

    //Aquí podemos validar si nuestro numero es par, por medio del modulo o residuo que se trae con el simbolo % como lo vemos a continuación
    function esPar(numerito) {

        if (numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
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
}

// const lista1 = [
//     10,
//     30,
//     80,
//     25,
//     65,
//     500000,
// ];