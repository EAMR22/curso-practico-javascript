// Codigo del cuadrado:

const ladoCuadrado = 5;

const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

// Codigo del triangulo:

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (alturaTriangulo * baseTriangulo) / 2;

// Codigo del circulo:

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PT = Math.PI; // Aqui traemos el numero del PI original.

const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo * radioCirculo) * PI;

/*
Esto sirve para encapsular los console.log
#Abres
console.group("nombre que desees");
#Cierras
console.groupEnd();
*/
