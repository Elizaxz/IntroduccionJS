//objetos


const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// para agregar nuevas propiedades

producto.imagen = 'imagen.jpg';

//eliminar propiedades
delete producto.disponible;

console.log(producto);

//console.log(producto.precio);

