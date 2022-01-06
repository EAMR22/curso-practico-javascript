function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce( // con .reduce recibe una funcion, que a su vez suma los elementos que tiene el arreglo.
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

const lista1 = [
    100,
    200,
    500,
    400000000
];

const mitadLista1 = parseInt(lista1.length / 2); //Transformamos el número decimal a un número entero.

function esPar(numerito){
    if(numerito % 2 == 0){
        return true;
    }else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1]; // Regresa a la posicion anterior de la mitad de la lista.
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([ //Reutiliza la funcion del promedio.
        elemento1,
        elemento2
    ]);

    mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitadLista1];
}
