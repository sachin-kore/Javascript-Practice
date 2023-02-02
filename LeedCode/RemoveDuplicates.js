const nums = [1, 1, 2];

// method one
var removeDuplicates1 = function (nums) {
    if (nums.length === 0) return
    const newArr = [];
    for (let i = 0; i < nums.length; i++) {
        if (!newArr.includes(nums[i])) {
            newArr.push(nums[i])
        }
    }
    return newArr;
};
console.log(removeDuplicates1(nums));

// method two
function removeDuplicates2(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1)
        } else {
            i++
        }
    }
    return nums;

}

console.log(removeDuplicates2(nums));

// third method
function removeDuplicates3(nums) {
    const array = new Set(nums);
    return [...array];
}
console.log(removeDuplicates3(nums));
