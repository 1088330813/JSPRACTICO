const nombreCanciones = repertorios.map(
    function(canciones) {
        return canciones.nombre;

    });
const nombreCancionesOrdenada = repertorios.sort(
    function(a, b) {
        if (a.nombre > b.nombre) {
            return 1;
        }
        if (a.nombre < b.nombre) {
            return -1;
        } else { 0 };
    });

const nombreCancionesPorTonalidadFa = nombreCancionesOrdenada.filter(
    function(canciones) {
        return canciones.tonalidad == "F";
    });

const nombreCancionesPorTonalidad = repertorios.filter(
    function(canciones) {
        return canciones.tonalidad == "F";
    });

const nombreCancionesPrimeraCancion = repertorios.find(
    function(canciones) {
        return canciones.tonalidad == "F";
    });

function guardarInfo() {
    const inputA = document.getElementById("NombreCancion");
    const valueA = inputA.value;
    const inputB = document.getElementById("Tonalidad");
    const valueB = inputB.value;
    const inputC = document.getElementById("Tematica");
    const valueC = inputC.value;

}

var repertorio = new nombre(valueA, new tonalidad(valueB), new tema(valueC))
    // repertorios.push({
    //     nombre = valueA,
    //     tonalidad = valueB,
    //     tema = valueC,
    // });