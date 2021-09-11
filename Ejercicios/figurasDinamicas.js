
//Codigo del Cuadrado
function perimetroCuadrado(lado){
     return lado*4;
}
function areaCuadrado(lado){ 
    return lado*lado;
}

//Codigo del triangulo

function perimetroTriangulo (lado1,lado2,base){
    return lado1+lado2+base
}
function areaTriangulo (base,altura){
    return base*altura;
}

//Codigo del Circulo
function calculosCirculo(radio){
    var diametro = (radio * 2)
    console.log("El Diametro es de: "+ diametro)
    var perimetro = diametroCirculo*PI
    console.log("El Perimetro es de: "+ perimetro)
    var area = (radio*radio)*PI
    console.log("El Area es de: "+ area)
}

//Aquí interactuamos con HTML

function CalcularPerimetroCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function CalcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area); 
}


