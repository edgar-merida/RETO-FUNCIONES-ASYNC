/*2.- Crear una función que reciba como argumento una 
variable de cualquier tipo y un callback. 
La función debe retornar como resultado, mediante el callback, 
cual es el tipo de dato de la variable ingresada e imprimir su contenido.*/

function imprimirVariable(variable, callback) {
   console.log("La variable es de tipo: "+callback(variable)+" y su contenido es: "+variable);
}

function leerVariable(variable) {
    var tipo = typeof(variable);
    return tipo;
}

imprimirVariable(11, leerVariable);