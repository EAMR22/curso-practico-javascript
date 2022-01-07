const lista1 = [1,2,3,1,2,3,4,2,2,2,1];

const lista1Count = {};

lista1.map(
    function (elemento){
        if(lista1Count[elemento]){
            //lista1Count[elemento] = lista1Count[elemento] + 1;
            lista1Count[elemento] += 1; // Aqui lo esta sumando en cada iteraccion.
        } else {
            lista1Count[elemento] = 1; // Esta instruccion nos indica que solo a aparecido una vez.
        }    
    }
);

const lista1Array = Object.entries(lista1Count).sort( // Con object.entries transforma un objeto en un array.
    function (elementoA, elementoB){ // Con sort en esta funcion esta ordenando los elementos de la segunda columna de menor a mayor.
        return elementoA[1] - elementoB[1]; 
    }
); 

const moda = lista1Array[lista1Array.length - 1]; // Accedemos a la ultima posicion del elemento de nuestro array.