/* Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que 
indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función. */

function ejercicio(n) {

    if (n%2==0) {
        console.log("El número es par");
    }else{
        console.log("El número es impar");
    }
}

ejercicio(3)