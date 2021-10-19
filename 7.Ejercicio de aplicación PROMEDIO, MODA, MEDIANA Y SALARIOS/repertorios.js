class repertorios {

    constructor(nombre, tonalidad, tema) {
        this.nombre = nombre;
        this.tonalidad = tonalidad;
        this.tema = tema;
    }

};

// const nombreCanciones = repertorios.map(
//     function(canciones) {
//         return canciones.nombre;
//     });
// const nombreCancionesOrdenada = repertorios.sort(
//     function(a, b) {
//         if (a.nombre > b.nombre) {
//             return 1;
//         }
//         if (a.nombre < b.nombre) {
//             return -1;
//         } else { 0 };
//     });

// const nombreCancionesPorTonalidadFa = nombreCancionesOrdenada.filter(
//     function(canciones) {
//         return canciones.tonalidad == "F";
//     });

// const nombreCancionesPorTonalidad = repertorios.filter(
//     function(canciones) {
//         return canciones.tonalidad == "F";
//     });

// const nombreCancionesPrimeraCancion = repertorios.find(
//     function(canciones) {
//         return canciones.tonalidad == "F";
//     });

function guardarInfo() {
    const inputA = document.getElementById("NombreCancion");
    const valueA = inputA.value;
    const inputB = document.getElementById("Tonalidad");
    const valueB = inputB.value;
    const inputC = document.getElementById("Tematica");
    const valueC = inputC.value;
    var nuevaCancion = new repertorios(valueA, valueB, valueC);

    const printName = document.getElementById("PrintNombre");
    printName.innerText = nuevaCancion.nombre;

    const printTonalidad = document.getElementById("PrintTonalidad");
    printTonalidad.innerText = nuevaCancion.tonalidad;

    const printTema = document.getElementById("PrintTema");
    printTema.innerText = nuevaCancion.tema;

    console.log(
        nuevaCancion.nombre,
        nuevaCancion.tonalidad,
        nuevaCancion.tema,
    );

}