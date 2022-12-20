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

// var i = 2;
// var j = "2";
// console.log(i === j);

