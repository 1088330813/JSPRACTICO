
//Codigo del Cuadrado
function perimetroCuadrado(lado){
    return lado*4;
}
function areaCuadrado(lado){ 
   return lado*lado;
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

