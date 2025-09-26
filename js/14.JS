//ARREGLOS O aRRAYS  SIRVE PARA AGRUPAR ELEMENTOS O PARA CARRITOS DE COMPRAS
// SIEMPRE QUE SE VEA CORCHETES [] ES UN ARREGLO

const numeros = [10,20,30,40,50];



//console.log(numeros);
console.table(numeros);// arroja los numeros en una tabla
//otra forma de crearlos es con arrays

const meses = ['Enero','Febrero','Marzo'];
console.table(meses);


const arreglo = ["hola", 10, true, "si"];

    console.log(arreglo);

   // accesos a los valores de un arrego
   //importante saber la posicion de los numero 0,1,2 etc

   console.log(numeros[4]);
   // conocer la extension de un arreglo por ejemplo para contabilizar
   //lo que hay en un carrito}
   console.log(meses.length);


   // el forEach sirve para ejecutar una sola vez
   meses.forEach(function(numero){
    console.log(numero);
   })




