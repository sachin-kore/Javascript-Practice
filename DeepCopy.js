const a = {
    de: "hello",
    me: "demo",
    pt: "cmdg",
    rt: "mdgd"
}

let b = { ...a }
b.me = "sidda"
console.log(a);
console.log(b);


// tricky javascript Questions and answers
(function () {
    var x, y;
    try {
        throw new Error();
    }
    catch (x) {
        x = 1;
        y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();



/// Reduce in javascript 
const arr = [3, 6, 4, 8, 9, 2, 4, 6];
let sum = arr.reduce((itr, acc) => itr + acc, 100)
// itr will move every elements and accumulator will add all elements and (100) is the initial value
console.log(sum);