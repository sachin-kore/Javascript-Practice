const arr = [1, 4, 6, 0, 1, 2, 0, 3, 6, 0, 6, 9, 0];
function saparateZeros(arr) {
    let arr1 = [];
    let arr2 = [];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr1.push(arr[i])
        } else {
            arr2.push(arr[i])
        }
    }
    result = arr2.concat(arr1);
    console.log(result);
}

saparateZeros(arr);