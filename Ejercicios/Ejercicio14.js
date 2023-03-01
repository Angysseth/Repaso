// This is a code wars kata. click here to train on “Grasshopper – Summation” on
// code wars. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

let num1 = 2; 
let num2 = 8; 

let suma = 0
let suma1 = 0
// Example output: 
// 1 + 2 = 3
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36

for (let index = 1; index <= num1; index++) {
    suma = suma + index   
}

console.log(suma);

for (let index = 1; index <= num2; index++) {
    suma1 = suma1 + index   
}

console.log(suma1);