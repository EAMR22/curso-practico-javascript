/*
const lista1 = [
    100,
    200,
    300,
    500
];

let sumaLista1 = 0;

for(let i=0; i<lista1.length; i++){
    sumaLista1 = sumaLista1 + lista1[i];
}

const promedioLista1 = sumaLista1 / lista1.length;
*/

function calcularMediaAritmetica(lista){
    /*
    let sumaLista = 0;

    for(let i=0; i<lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }
    */

    const sumaLista = lista.reduce( // con .reduce recibe una funcion, que a su vez suma los elementos que tiene el arreglo.
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}