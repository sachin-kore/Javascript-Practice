const arr = [1, 2, 0, 4, 3, 0, 5, 0];
const zero = 0;

const result = [arr.filter(el => el !== zero), arr.filter(el => el === zero)].flat();
const result1 = [arr.filter(el => el === zero), arr.filter(el => el !== zero)].flat();


// array flatten or making single array to sub array's
const arr1 = [[1, 2, [4], [3, 4, [6, 4, [8, 9, [4, 3]]]]]];
console.log(arr1.flat(10));

// custum flat method in javascript to flatten array
const output = [];
function flattenArray(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattenArray(arr[i])
        } else {
            output.push(arr[i]);
        }
    }
    return output;
}
console.log(flattenArray(arr1));


// interview questions

// Online Javascript Editor for free

console.log("Welcome to Programiz!");

var rate = 10;
function getRate() {
    var rate = undefined;
    if (rate == undefined) {
        var rate = 6;
        return rate;
    } else {
        return 10;
    }
}


let func2 = () => {
    console.log("I will subscribe to GeekForGeeks")
};

function func1() {
    console.log("wel come to geekforgeeks")
}

// guess output

(function demo() {
    console.log(1);
    setTimeout(function () {
        console.log(2)
    }, 1000)
    setTimeout(function () {
        console.log(3);
    }, 3000)
    console.log(4);
})();


let length = 10;
function fn() {
    console.log(this.length);
}
let obj = {
    length: 5,
    method: function (fn) {
        fn();
        arguments[0]();
    }
};
obj.method(fn, 1)  /// outpot is undefined and 2