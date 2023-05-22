const arr = [1, 3, 4, 2, 3, 7, 4, 5, 3, 45, 2, 4, 8, 9, 0];
function CountDuplicate(arr) {
    let count = {}
    arr.forEach(function (element) {
        count[element] = (count[element] || 0) + 1;
    })
    for (let val in count) {
        console.log(val + "=" + count[val])
    }
}
CountDuplicate(arr);


