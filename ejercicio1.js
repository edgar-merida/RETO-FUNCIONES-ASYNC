/*1.- Muestra un mensaje en consola mediante un callback. 
La función que escribas debe poder mostrar el mensaje como console.warn, 
console.log, console.info, o cualquier método para pintar en consola del objeto console.*/

function mensaje() {
    var mensaje = ("Este es un texto predeterminado de respuesta....\nAdios!!");
    return mensaje;    
}

function mostrarMensaje(callback) {
    console.log(callback());   
} 

mostrarMensaje(mensaje);


