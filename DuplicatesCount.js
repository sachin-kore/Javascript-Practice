const arr = [1, 4, 6, 0, 1, 2, 0, 3, 6, 0, 6, 9, 0];

let count = {}
arr.forEach(function (element) {
    count[element] = (count[element] || 0) + 1;
})
for (var elements in count) {
    console.log(elements + '=' + count[elements]);
}