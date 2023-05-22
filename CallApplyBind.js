let obj = {
    firstname: "Sachin",
    lastname: "Kore",
    getDetails: function () {
        let fullName = this.firstname + " " + this.lastname;
        return fullName;
    }
}
let obj1 = {
    firstname: "Prasanna",
    age: 25,
    getDetails: function () {
        let fullName = this.firstname + " age " + this.age;
        return fullName;
    }
}

function myInfo(one, two) {
    console.log(this.getDetails() + " loves" + " " + one + " " + two);
}

myInfo.call(obj, "dosa", "Idli");
myInfo.apply(obj, ["Booka", "Jamun"]);

let Mycred = myInfo.bind(obj1);
Mycred("kavana", "Shrinidhi");