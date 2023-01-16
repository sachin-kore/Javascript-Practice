// function CalculateVolume(length) {
//     return function (breadth) {
//         return function (height) {
//             return length * breadth * height;
//         }
//     }

// }

// console.log(CalculateVolume(4)(5)(6));

var x = 1;
a();
b();
console.log(x);
function a() {
    var x = 10;
    console.log(x)
}
function b() {
    var x = 100;
    console.log(x);
}