function esPar(numerito){
    (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce( 
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

//calculadora de medianas

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    }else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

// Mediana general

const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana top 10%

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
); // Con splice aqui parte el arreglo desde el 90% del contenido del array, hasta donde se termina.

const medianaColTop10 = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaColTop10,
});