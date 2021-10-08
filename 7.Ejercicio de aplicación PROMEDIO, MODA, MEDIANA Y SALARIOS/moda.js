// const lista1 = [
//     1,
//     2,
//     3,
//     1,
//     1,
//     3,
//     3,
//     3,
//     4,
//     5,
//     6,
//     1,
//     1,
// ];

function calcularModa(lista1) {

    //Esto se usa para contar cuando se repiten mis numeros
    const lista1Count = {};
    //Este es un objeto

    lista1.map( // Este permite recorrer el array
        function(elemento) {
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1; //con += lo que hago es traer mi resultado anterior y a esto sumarle lo que yo quiera en este caso 1
            } else {
                lista1Count[elemento] = 1;
            }

        }
    );

    const lista1Array = Object.entries(lista1Count).sort( //Este convierte un objecto en un array
        function(valorAcumulado, nuevoValor) {
            return valorAcumulado - nuevoValor

        }
    );
    //Así convertimos de un objeto a un array, pero con más arrays por dentro
    const lista2Array = Object.entries(lista1Count).sort(
        function(elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );
    const moda = lista2Array[lista2Array.length - 1];
    return moda;
}