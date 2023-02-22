/* 18.7 EJERCICIO 7
El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120

Utilizando la estructura for, crear un script que calcule el factorial de un número entero. */

// let n = 5
// let operacion = n*(n-1) 

// for (let index = 2; index <= n; index++) {
//     var operacionContinua = (n-index)*operacion
//     var contador = index+1 
//     var resultado = operacionContinua*(n-contador)

// }
// console.log(resultado);

let n = 6
var resultado = 1

for (let index = 1; index <= n; index++) {
    resultado = resultado*(n-index+1)  
}

console.log(resultado);
