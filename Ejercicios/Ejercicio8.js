/* Given two arrays of integers. Add up each element in the same position and
create a new array containing the sum of each pair. Assume both arrays are of the same length. */

let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];
let arregloNuevo = [];

for (let index = 0; index < arr_3.length; index++) {
    arregloNuevo.push(arr_3[index]+arr_4[index]);
    
}

console.log(arregloNuevo);