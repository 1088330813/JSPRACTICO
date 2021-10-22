//Este lo permite acceder por que la variables son var y estan dentro del scoupe de la función
const fruits = () => {
    if (true) {
        var fruits1 = "apple";
        var fruits2 = "banana";
        var fruits3 = "kiwi";
    }
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
}
fruits();

//Este no me ejecuta los let y const porque el llamado está fuera de su bloque
const fruits = () => {
    if (true) {
        var fruits1 = "apple";
        let fruits2 = "banana";
        const fruits3 = "kiwi";
    }
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
}
fruits();

//Así se puede ejecutar todo este codigo con las diferentes variables, poniendo el llamado dentro del bloque
const fruits = () => {
    if (true) {
        var fruits1 = "apple";
        let fruits2 = "banana";
        const fruits3 = "kiwi";
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);

}
fruits();

//En este me va a mostrar dos resultados uno del scope local en este caso (2) y otro global (1) 
let x = 1; {
    let x = 2;
    console.log(x);
}
console.log(x);

//En este que usamos var , lo que hace es la segunda invocación reemplazar a la primera, por eso ejecutará dos resultado iguales(2) (2)

var x = 1; {
    var x = 2;
    console.log(x);
}
console.log(x);

//realizando este for con var me trae 10 veces el mismo numero
const anotherFunction = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
                console.log(i);
            }, 1000) //Esta medida es en minisegundos
    }
}
anotherFunction();

//pero al cambiar el tipo de variable a let me trae todos los numeros de corrido del 0 al 9
const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
                console.log(i);
            }, 1000) //Esta medida es en minisegundos
    }
}
anotherFunction();