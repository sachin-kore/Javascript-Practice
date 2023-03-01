// Call apply and bind

// Call() method allows an object to use the method(function) of another object
// Call() takes the arguments


const obj = {
    name: "Sachin",
    age: 25,
    getAge: function () {
        return this.age
    }
}
var obj2 = { age: 54, name: "Ramesh" };

console.log(obj.getAge.call(obj2));


function saySomething(message, mern) {
    return "hello " + this.name + " " + message + " " + mern;
}

console.log(saySomething.call(obj, "awsome", "work"));

// Apply() method is similar to call() method, the only difference is that, 
// call() takes the arguments saparately and apply() takes arguments as an array

console.log(saySomething.apply(obj2, ["awsome", "sai pallavi"]));

// Bind() this method returns a new function , where the value of this keyword will be bound to the owner object


const BikeDetails = {
    displayDetails: function (regNum, brndName) {
        return this.name + "," + "bike details: " + regNum + "," + brndName
    }
}

const person1 = {
    name: "Sachin"
};
var detailsofPerson1 = BikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
console.log(detailsofPerson1());