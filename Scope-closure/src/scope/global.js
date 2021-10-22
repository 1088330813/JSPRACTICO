var hello = "hello";
let world = "hello world";
const helloWorld = "hello world!";
console.log(hello);

const anotherFuction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFuction();

//Esto es una mala practica

const helloWorld = () => {
    globalVar = "im global"
}

helloWorld();
console.log(globalVar)


//Esto es una mala practica

const anotherFunction = () => {
    var localVar = globalVar = "Im Global";
}

anotherFunction()
console.log(globalVar);