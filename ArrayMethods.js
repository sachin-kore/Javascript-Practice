const str1 = 'Hello this is 1'
const str2 = 'Hello this is 2'

console.log(str1.concat(' ', str2));

console.log(str1.includes('are'));

console.log(str1.indexOf('this'));

console.log(str1.slice(0, 8));
console.log(str1)

console.log(str1.split(' '));

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// splice method adds or remove elements from an array and overwrites the original array
console.log(fruits.splice(2, 2, "Lemon"));
console.log(fruits);
//
const arr = [1, 4, 7, 8, 5, 4, 3];
console.log(arr.splice(3, 2))
console.log(arr);

// toString() method return a string with all the array values saparated by commas
//The Array.toString() method returns a string with all array values separated by commas:
const newStr = ["Banana", "Orange", "Apple", "Mango"];
console.log(newStr.toString());

//Unshift method  adds new items to beginning of an array
//unshift() adds new items to the beginning of an array:

console.log(newStr.unshift("Apple", "Grape"));
console.log(newStr);

console.log(Boolean(0)) //false

console.log(Boolean(""))// false

console.log(Boolean(NaN)) // false

console.log(Boolean("false")) // true