console.log("Hello World!");

//Codigo del Cuadrado
console.group("CUADRADOS")
const lado = 5;
console.log("Los lados del cuadrado miden: "+ lado +"cm");
const perimetroCuadrado =lado*4;
console.log("El perimetro es: "+ perimetroCuadrado+"cm")
const areaCuadrado = lado*lado;
console.log("El area del cuadrado es: "+ areaCuadrado+"cm^2");
console.groupEnd();

//Codigo del triangulo
console.group("TRIANGULOS")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados de triangulo miden: "
+ladoTriangulo1
+ "cm,"
+ladoTriangulo2
+ "cm,"+
+baseTriangulo+ "cm"
);

const alturaTriangulo = 5.5;
console.log("la altura del triangulo es: "+alturaTriangulo);
const perimetroTriangulo = (ladoTriangulo1+ladoTriangulo2+baseTriangulo);
console.log("El perimetro del triangulo es: "+ perimetroTriangulo);
const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El area del triangulo es: "+ areaTriangulo);
console.groupEnd();

console.group("CIRCULOS");
//Radio
const radioCirculo = 4;
console.log("El radio del triangulo es: "+ radioCirculo);
//Diametro 
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del triangulo es: "+ diametroCirculo);
//PI
const PI = Math.PI;
console.log("PI es equivalente a: "+ PI);
//Circunferencia
const perimetroCirculo = diametroCirculo * PI
console.log("El perimetro del triangulo es: "+ perimetroCirculo);
//Area
const areaCirculo = (radioCirculo*radioCirculo)*PI;
console.log("El area del triangulo es: "+ areaCirculo);
console.groupEnd();
