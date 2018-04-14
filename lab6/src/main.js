var Student = /** @class */ (function () {
    function Student(name, yob) {
        this.name = name;
        this.yob = yob;
        this.name = name;
        this.yob = yob;
    }
    return Student;
}());
function sayHello(person) {
    console.log("Hello " + person.name);
}
var franek = new Student('Franek', 2000);
console.log(franek.name);
var marian = { name: 'Marian' };
var myList = [marian, franek];
var myTuple = ["Fiat", 1998];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
sayHello(franek);
sayHello(marian);
