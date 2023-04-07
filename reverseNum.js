// reverse a given number------------------------------------->

let num = 46578;

function reverseNum(num) {
    let output = 0, temp = 0;
    while (num > 0) {
        temp = num % 10;
        num = Math.floor(num / 10);
        output = output * 10 + temp;
    }
    console.log(output);
}
reverseNum(num);