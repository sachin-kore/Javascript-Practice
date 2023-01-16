const name = 'Hello Sachin Kore'
const age = 25;


// checks if it's Numaric and is equal to NaN
console.log(Number.isNaN(name));
console.log(Number.isNaN(age));

// checks if the value is not a Number
console.log(isNaN(name));
console.log(isNaN(age));


for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0);
}
for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0);
}

