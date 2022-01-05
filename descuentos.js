function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice"); // Traemos el valor del input que esta en el HTML.
    const priceValue = inputPrice.value; //Traemos el valor que digito el usuario.

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento; // 
}

/* Tratamos el console.log como si fuera un objeto
console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});
*/

//innerHTML: Es una propiedad que manda u obtiene el contenido HTML de un elemento

//innerText: Es una propiedad que manda u obtiene el texto contenido en un elemento especifico.