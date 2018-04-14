interface Person {
    name: string;
}

class Student {
    constructor(public name: string, public yob:number) {
        this.name = name;
        this.yob = yob;
    }
}

function sayHello(person: Person) {
    console.log("Hello "+person.name);
}

let franek = new Student('Franek', 2000);
console.log(franek.name);
let marian = {name : 'Marian'}

let myList: Person[] = [marian, franek];
let myTuple: [string,number] = ["Fiat",1998];
enum Color {Red, Green, Blue}

sayHello(franek);
sayHello(marian);