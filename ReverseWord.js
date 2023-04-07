
// By using In built methods
let str = "hi my name is sachin";
function reverseWord(str) {
    let arr = str.split("");
    console.log(arr);
    console.log(arr.join(""));
    let output = [];
    for (let i = arr.length - 1; i > 0; i--) {
        output.push(arr[i])
    }
    console.log(output.join(""));
}
reverseWord(str);


// without using in-built methods

const str1 = "I am fine";

function reverse(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

console.log(reverse(str1));

