const repertorios = [];
repertorios.push({
    nombre: "Cristo No está Muerto",
    tonalidad: "F",
    tema: "Poder",
});
repertorios.push({
    nombre: "Alabaré",
    tonalidad: "G",
    tema: "Alabanza",
});
repertorios.push({
    nombre: "Alabad a Jehova",
    tonalidad: "F",
    tema: "Alabanza",
});

const nombreCanciones = repertorios.map(
    function(canciones) {
        return canciones.nombre;

    });
const nombreCancionesOrdenada = repertorios.sort(
    function(nombreA, nombreB) {
        return (nombreA - nombreB)
    });

const nombreCancionesPorTonalidad = repertorios.filter(
    function(canciones) {
        return canciones.tonalidad == "F";
    }
)