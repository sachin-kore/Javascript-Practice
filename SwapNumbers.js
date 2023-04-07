// swap two numbers---------------------------------->

let num1 = 23;
let num2 = 65;

function swap(num1, num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
    console.log("after swapping ", num1, num2);
}
swap(num1, num2);


// lets swap without using third variable

let str1 = "hello";
let str2 = "hiiiiii";

function swapStrings(str1, str2) {
    str1 = str1 + str2;
    str2 = str1.substring(0, str1.length - str2.length);
    str1 = str1.substring(str2.length);
    console.log(str1, str2);
}
swapStrings(str1, str2);