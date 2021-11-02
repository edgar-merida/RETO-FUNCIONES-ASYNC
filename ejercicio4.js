/*4.- Escribe una función que reciba una cadena de caracteres y debe devolver, mediante un callback, 
la cadena de caracteres en mayúsculas o en minúsculas. 
            ordenSuperior("PejeLagarto", minus);
            -> pejelagarto
            ordenSuperior("PejeLagarto", mayus);
            -> PEJELAGARTO*/

function mostrarCadenas(cadena) {
    console.log("El texto original es: "+cadena);
    console.log("El texto convertido es: "+convertir(cadena));
};

function convertir(cadena) {
    let resultado;
    if (cadena.charAt(0) == cadena.charAt(0).toUpperCase()){
        resultado = cadena.toLowerCase(); 
    }
    else {
        resultado = cadena.toUpperCase(); 
    }
return resultado;
};

mostrarCadenas("PRUEBA1");
mostrarCadenas("prueba2");
mostrarCadenas("eStA Es la PrUeBA 3");
