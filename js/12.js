"use strict";  // corre javascrip en modo estricto

//Objetos



const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//Object.freeze(producto); congela el objeto creado para ya no agregarle mas propiedades
producto.imagen = 'imagen.jpg';

console.log(producto);