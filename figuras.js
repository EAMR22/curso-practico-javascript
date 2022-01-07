// Codigo del cuadrado:

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

// Codigo del triangulo:

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

// Codigo del circulo:

const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio); //Llama una funcion de otra
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

// Aquí interactuamos con el HTML:

function calcularPerimetroCuadrado(){ // Es la funcion del boton del HTML.
    const input = document.getElementById("InputCuadrado"); // Aqui traemos el digito que digitoel usuario en el input.
    const value = input.value; // Obtenemos el valor del usuario.

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){ // Es la funcion del boton del HTML.
    const input = document.getElementById("InputCuadrado"); // Aqui traemos el digito del usuario en el input.
    const value = input.value; // Obtenemos el valor del usuario.

    const area = areaCuadrado(value);
    alert(area);
}

/*
Esto sirve para encapsular los console.log
#Abres
console.group("nombre que desees");
#Cierras
console.groupEnd();
*/

/*
cuando declaramos la funcion los datos dentro de los parentesis se llaman PARAMETROS, 
cuando llamamos a ejecutarla se llaman ARGUMENTOS.
*/

