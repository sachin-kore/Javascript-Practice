const arr = [3, 56, 45, 33, 9, 78, 11, 10, 1, -10];
function findSumofTwoElements(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            if (num === sum) {
                return [i, j];
            }
        }
    }
}

console.log(findSumofTwoElements(arr, 88));