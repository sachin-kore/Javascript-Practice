console.log("hello world");
const arr = [1, 4, 6, 0, 1, 2, 0, 3, 6, 0, 6, 9, 0];
function removeDuplicates(arr) {
    let UniqueArr = []
    arr.forEach((val) => {
        if (!UniqueArr.includes(val)) {
            UniqueArr.push(val)
        } else {
            console.log("dupplicates found and number is", val);
        }
        console.log(UniqueArr);
    })
}
removeDuplicates(arr);

console.log(arr.forEach((val, i, arr) => (arr[i] = val * 2)));
console.log(arr);