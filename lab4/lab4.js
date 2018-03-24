/*
    24.03.2018
    ES6 2015 -> transpilacja (kompilacja) do ES5
    kompilator: Babel JS (https://babeljs.io/), instalujemy za każdym razem w projekcie przez:
        npm install --save-dev babel-cli babel-preset-env
        jeśli nie działa lokalnie, to instalujemy globalnie: 
        npm install -g babel-cli
        ustawiamy plik konfiguracyjny .babelrc

    kompilacja:
        babel lab4.js --out-file lab4-compiled.js
        lub
        ./node_modules/.bin/babel lab4.js --out-file lab4-compiled.js

    Nowości w ES6
        - lambda
        - Clesses + dziedziczenie
        - template strings
        - default + rest + spred
        - let, const (!!!)
        - iterator + for... of 
*/

// Przykład 1
/*console.log("\nPrzykład 1");
[1, 2, 3].map( item => item * 2);
doubles.array.forEach(item => console.log(item));
*/

"use strict";

// Przykład 2
console.log("\nPrzykład 2");
var evenPredicate = v => v % 2 === 0;
var evens = [1,3,4,5,6].filter(evenPredicate);
evens.forEach(v => console.log(v));

// Przykład 3
console.log("\nPrzykład 3");
var aShape = {
    numbers: [1,2,3,4,5],
    scale: 2,
    move() {
        var self = this; // zapamiętanie this aby używać wewnątrz poniższej funkcji
        this.numbers = this.numbers.map(function(element) {
            return element * self.scale;
        })
    }
};
aShape.move();
aShape.numbers.forEach(element => {
    console.log(element);
})

// Przykład 3 z użyciem lambdy
console.log("\nPrzykład 3 - lambda");
var aShape = {
    numbers: [1,2,3,4,5],
    scale: 2,
    move() {
        // var self = this; // zapamiętanie this aby używać wewnątrz poniższej funkcji
        this.numbers = this.numbers.map(element => element * this.scale);
        }
};
aShape.move();
aShape.numbers.forEach(element => {
    console.log(element);
})

// Przykład 4 klasy
console.log("\nPrzykład 4 - klasy");
class Shape {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    move(delta) {
        this.x += delta;
        this.y += delta;
    }
    moveToZero() {
        this.x = 0;
        this.y = 0;
    }
}

var aShape = new Shape(2,3);
aShape.move(5);
console.log(aShape.x);

/*
    Zadanie: połączyć zadanie 1 i 2 i zapisać w ES6 z użyciem nowych funkcji
    https://babeljs.io/learn-es2015/
*/