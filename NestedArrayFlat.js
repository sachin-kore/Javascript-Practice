const arr = [1, 2, 0, 4, 3, 0, 5, 0];
const zero = 0;

const result = [arr.filter(el => el !== zero), arr.filter(el => el === zero)].flat();
const result1 = [arr.filter(el => el === zero), arr.filter(el => el !== zero)].flat();
console.log(result);
console.log(result1);

// array flatten or making single array to sub array's
const arr1 = [[1, 2, [4], [3, 4, [6, 4, [8, 9, [4, 3]]]]]];
console.log(arr1.flat(10));