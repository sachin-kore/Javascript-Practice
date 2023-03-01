
const nums = [3, 2, 2, 3], val = 3;
function RemoveElement(nums, val) {
    const newArr = nums.filter((el) => el !== val);
    return newArr;
}
console.log(RemoveElement(nums, val));



// remove an element Leetcode

const arr = [3, 2, 2, 3], value = 3
let removeElement = function (arr, value) {
    let p = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== value) {
            p = p + 1;
        }
    }
    console.log(p)
};

removeElement(nums, val);


