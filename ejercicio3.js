/*3.- Crear una función que reciba como 
    argumentos, dos números y un callback. Según el callback
    que se pase a la función, se devuelve la suma de los
    dos números, la resta de los dos números o la
    multiplicación de los dos números.*/

function mostrarResultado(num1, num2, callback) {
       console.log("El resultado de"+callback(num1, num2));
};

function sumar(num1, num2) {
    let resultado = num1+num2;
    return (" sumar "+num1+" y "+num2+" es: "+resultado);
};

function restar(num1, num2) {
    let resultado = num1-num2;
    return (" restar "+num1+" y "+num2+" es: "+resultado);
};

function multiplicar(num1, num2) {
    let resultado = num1 * num2;
    return (" multiplicar "+num1+" y "+num2+" es: "+resultado);
};

mostrarResultado(12,5,sumar);
mostrarResultado(12,5,restar);
mostrarResultado(12,5,multiplicar);