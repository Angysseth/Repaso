/* Get the sum of two arrays…actually the sum of all their elements.
P.S. Each array includes only integer numbers. Output is a number too. */

/* arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output: 
// 276 + 351 = 627 */

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
let element = 0
let element2 = 0

for (let i = 0; i < arr_1.length; i++) {
    element = element + arr_1[i];
}

for (let j = 0; j < arr_2.length; j++) {
    element2 = element2 + arr_2[j];
}

console.log(element," + ",element2," = ", element+element2);