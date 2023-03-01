const arr = [1, 4, 6, 0, 1, 2, 0, 3, 6, 0, 6, 9, 0];

function CountOccurence(arr) {
    let count = {};
    arr.forEach(function (val) {
        count[val] = (count[val] || 0) + 1;
    })
    for (let val in count) {
        console.log(val + " count is " + count[val]);
    }
}
CountOccurence(arr);