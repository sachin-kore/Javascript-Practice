const arr = [3, 4, 7, 9, 5, 1, 54, 12, 32, 42, 35, 38, 90];

function thirdHeighstNum(arr) {
    if (arr.length < 3) {
        return "Invalid Input"
    }
    let first = arr[0], second = -1000000, third = -1000000;
    let last = arr[0], secondlast = -1000000, thirdlast = -1000000;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            third = second;
            second = first;
            first = arr[i];
        }
        else if (arr[i] > second) {
            third = second;
            second = arr[i];
        }
        else if (arr[i] > third) {
            third = arr[i];
        }

        if (arr[i] < last) {
            thirdlast = secondlast;
            secondlast = last;
            last = arr[i]
        }
        else if (arr[i] < secondlast) {
            thirdlast = secondlast;
            secondlast = arr[i];
        }
        else if (arr[i] < thirdlast) {
            thirdlast = arr[i]
        }
    }
    console.log("first el:", first, "second el:", second, "third el:", third);
    console.log("first el:", last, "secondlast el:", secondlast, "thirdlast el:", thirdlast);
}
thirdHeighstNum(arr);