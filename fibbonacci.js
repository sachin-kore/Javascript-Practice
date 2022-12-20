
let number = 7;
let n1 = 0, n2 = 1, prevsum;

console.log('Fibonacci Series:');
for (let i = 1; i <= number; i++) {
    console.log(n1);
    prevsum = n1 + n2;
    n1 = n2;
    n2 = prevsum;
}  
