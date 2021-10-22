const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}
anotherFunction();

//Aqui se recomienda utilizar let en vez de var