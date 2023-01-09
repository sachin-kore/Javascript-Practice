const str = "hi this is mern stack"
console.log(str.split(" ").map((word) => word.split("").reverse().join("")));

function reverseWords(str) {
    let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
    return reverseWordArr.join(" ");
}

console.log(reverseWords(str))