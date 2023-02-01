
const str = [2, 4, 7, 4, 6, 9]
let reverseString = function (str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        let temp = str[right];
        str[right--] = str[left];
        str[left++] = temp;
    }
};

console.log(reverseString(str))