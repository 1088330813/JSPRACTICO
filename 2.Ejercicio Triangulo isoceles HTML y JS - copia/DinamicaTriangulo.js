//Esta es la formula para hallar la altura de un triangulo

function alturaTrianguloIsoceles(ladoAIsoceles, ladoBIsoceles, ladoBaseIsoceles) {
    if (ladoAIsoceles != ladoBIsoceles) {
        console.log("No es un triangulo Isoceles, lado A y B no son iguales")
    } else {


        const ladoBasePequeno = ladoAIsoceles;
        const ladoBPequeno = ladoBaseIsoceles / 2;

        const ladoBasePequenoAlCuadrado = ladoBasePequeno * ladoBasePequeno;
        const ladoBPequenoAlCuadrado = ladoBPequeno * ladoBPequeno;
        const ladoAPequeno = Math.sqrt(ladoBasePequenoAlCuadrado - ladoBPequenoAlCuadrado);


        const alturaTrianguloIsoceles = ladoAPequeno;
        return alturaTrianguloIsoceles;
    }
}


function perimetroTriangulo(a, b) {
    c = Number(a);
    d = Number(b);
    const perimetroResultado = (c * c + d)
    alert(perimetroResultado);
}


function areaTriangulo(a, b) {
    const areaResultado = (a * b) / 2
    alert(areaResultado);

}


//Aquí interactuamos con HTML

function CalcularPerimetroTriangulo() {
    const inputA = document.getElementById("InputLadoA");
    const valueA = inputA.value;
    const inputB = document.getElementById("InputLadoB");
    const valueB = inputB.value;


    if (valueA != valueB) {
        alert("El Triangulo no es Isoceles los lados a y b no son iguales");
    } else {

        const perimetro = perimetroTriangulo(valueA, valueB);
        return perimetro;
    }

}


function CalcularAreaTriangulo() {
    const inputA = document.getElementById("InputLadoA");
    const valueA = inputA.value;
    const inputB = document.getElementById("InputLadoB");
    const valueB = inputB.value;
    const inputC = document.getElementById("InputBase");
    const valueBa = inputC.value;

    if (valueA != valueB) {
        alert("El Triangulo no es Isoceles los lados a y b no son iguales");
    } else {
        const altura = alturaTrianguloIsoceles(valueA, valueB, valueBa);
        const area = areaTriangulo(valueBa, altura);
        return area;
    }



}