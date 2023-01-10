const arr = [3, 56, 45, 33, 9, 78, 11, 10, 1, -10];
function maxMin(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log("max is:>" + max, "min is :>" + min)
}
maxMin(arr);