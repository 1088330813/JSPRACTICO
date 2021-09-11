var Nombre = "Jorge"
var Apellido = "Sanchez"
var NombreDeUsuarioPlatzi = "Jorge Mario Sanchez Giraldo"
var Edad = 25
var CorreoElectrónico = "bugsmario9510@"
var MayorDeEdad = true
var DineroAhorrado = 500000
var Deudas = 200000

function MiNombre(name,lastname,nickname){
const completeName = name + lastname;
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

}


const tipoDeSuscripcion = "basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "Free":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}


function PlanCursos(tipoSuscripcion) {
if (tipoSuscripcion=="Free"){
    console.log("Solo puedes tomar los cursos gratis");
} else if(tipoSuscripcion=="Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if(tipoSuscripcion=="Plus"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else{
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}}

var elementos =["CristoJesus","Jorge","Madelyn","Chocolato","Junior","Niña"];
console.log(elementos[1])


function TraeElementos(elemento){
    console.log({elemento})
}
while(elementos.length>0){
    var elemento = elementos.shift();
    TraeElementos(elemento);
}

var elementos ={CristoJesus:"MI SALVADOR",Jorge: "YO",Madelyn: "Mi esposa"};
console.log(elementos[1])

function TraeElementos(elemento){
    console.log({elemento})
}
while(elementos.length>0){
    var elemento = elementos.shift();
    TraeElementos(elemento);
}

var elementos =[
{nombre:"Jorge", Apellido: "Sánchez"},
{nombre:"Madelyn", Apellido: "Pineda"},
{nombre:"Chocolato", Apellido: "Perez"},];

function TraeElementos(elemento){
    console.log({elemento})
}
while(elementos.length>0){
    var elemento = elementos.shift();
    TraeElementos(elemento);
}
