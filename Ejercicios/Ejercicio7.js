/* Using a for loop output the elements in reverse order */
/* let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output: 
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line */

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

for (let index = arr.length - 1; index >= 0 ; index--) {
    let element = arr[index];
    console.log(element);
}