const person = ['sakib', 'nokib', 'rakib', 'akib', 'mukib', 'Akib', 'anis', 'Anis'];
const sortedPerson = person.sort();
console.log(sortedPerson);

// sort
const numbers = [7,6, 3,5, 4, 3, 7];

/**
 * Ascending ----> smaller to larger: [3, 4, 5, 6, 7, 14, 15, 17, 34, 35];
 * Descending ---> larger to smaller: [35, 34, 17, 15, 14, 7, 6, 5, 4, 3];
 */

const numberS = [7,6, 3,5, 14, 3, 44, 77, 7];
// const numbers_asc = numberS.sort();   //Not working
const numbers_asc = numberS.sort(function(a, b){return a-b});
const numbers_deS = numberS.reverse(function(a, b){return a-b});
console.log(numbers_asc);
console.log(numbers_deS);
const numbers_des = numbers.reverse();
console.log(numbers_des);