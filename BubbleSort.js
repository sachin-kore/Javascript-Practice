const arr = [1, 4, 7, 8, 9, 4, 3, 2, 5, 8, 77, 99];

function sortArr(arr) {
    // let done = false;
    // while (!done) {
    //     done = true;
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i - 1] > arr[i]) {
    //             done = false;
    //             let temp = arr[i - 1];
    //             arr[i - 1] = arr[i];
    //             arr[i] = temp;
    //         }
    //     }
    // }
    // return arr;

    let done = false;
    while (!done) {
        done = true;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                done = false;
                let temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}
console.log(sortArr(arr));
