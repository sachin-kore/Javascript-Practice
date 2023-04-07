const name = 'Hello Sachin Kore'
const age = 25;


// checks if it's Numaric and is equal to NaN
console.log(Number.isNaN(name));
console.log(Number.isNaN(age));

// checks if the value is not a Number
console.log(isNaN(name));
console.log(isNaN(age));


//----------------------------------------------------------------------------------------------------------------------------------------
// 1) Guess output
(function () {
    setTimeout(() => { console.log(1) }, 2000);
    console.log(2);
    setTimeout(() => { console.log(3) }, 0);
    console.log(4);
})();


