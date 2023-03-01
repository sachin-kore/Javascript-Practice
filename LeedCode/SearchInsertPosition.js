// const nums = [1,3,5,6], target = 5  //output is 2
// const nums = [1,3,5,6], target = 2 //output is 1
const nums = [1, 3, 5, 6], target = 7 // output is 4

function SearchInsertPosition(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}
console.log(SearchInsertPosition(nums, target));