//Objetos

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//formas de  extraer valores de un objeto

//const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;


//console.log(precioProducto);
//console.log(nombreProducto);

// a esto se le conose como " distrocturing  de objetos ejempplo
// siempre de usar distruccion se usan llaves"  esta forma es en 1 solo paso

const {precio} = producto;

const {nombreProducto} = producto;


console.log(nombreProducto);
