const arr = [3, 2, 4];
const target = 6;

function Twosum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + arr[i + 1] === target) {
            return [i, i + 1];
        }

    }
}

console.log(Twosum(arr, target));

// function twoSum(nums, target) {
//     let disct = {};
//     for (let i = 0; i < nums.length; i++) {
//         let rest = target - nums[i];
//         if (disct[rest] || disct[rest] === 0) {
//             console.log(disct[rest], i);
//             return [disct[rest], i];
//         }
//         disct[nums[i]] = i;

//     }
// };
// twoSum(arr, target);