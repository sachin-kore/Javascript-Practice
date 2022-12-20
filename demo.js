let str = "Welcome to Programiz";

function printNumberOcc(str) {
    let count = {}
    let arr = str.split("")
    arr.forEach(function (element) {
        count[element] = (count[element] || 0) + 1;
    })
    console.log(count);
    for (let val in count) {
        console.log(val + "=" + count[val])
    }
}
printNumberOcc(str);