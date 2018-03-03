// JavaScript ES5
// język skryptowy - interpretowany
// object oriented - bez klas
// function oriented 

// Tworzenie obiektów 
var obj = {
    imie: 'Jan',
    nazwisko: 'Kowalski',
    rok: 1999
};

console.log(obj.nazwisko);

// Elastyczne rozszerzanie obiektów 
obj.miasto= "Gdynia";

console.log("---- Rozszerzanie obiektów");
console.log(obj.miasto);
console.log(obj['miasto']);

// Mieszanie typów
var tablica = [1,2,"trzy"];
tablica.push(5);
console.log("---- Mieszanie typów");
console.log(typeof tablica);
console.log(tablica);

tablica.miasto = "Gdansk";
console.log(tablica);
console.log(tablica.miasto);
console.log(tablica.length);

// Typy danych
console.log("---- Typy danych");
console.log('Typ 1: '+ typeof 1);
console.log('Typ Array(): '+ typeof Array());
console.log('Typ true: '+ typeof true);
console.log('Typ null: '+ typeof null);
console.log('Typ NaN: '+ typeof NaN);

// ##################################################
// function oriented - funkcja jako zmienna
// przypisanie funkcji do zmiennej musi nastąpić przed wywołaniem
// ze względu na Hoisting
console.log("---- funkcja jako zmienna");
var add = function(a,b) {
    return a+b;
};
console.log('Typ add: '+ typeof add);

console.log(add());
console.log(add(1,2));
console.log(add(1,2,3));

// deklaracja funkcji może nastąpić pod wywołaniem
// Hoisting - wynoszenie deklaracji zmiennych i funkcji do góry
console.log(mnozenie(3,3));
function mnozenie (a,b) {
    return a*b;
};

// ##################################################
// function oriented - funkcja jako argument innej funkcji
console.log("---- funkcja jako argument funkcji");

var higherOrderFunction = function (jakasFunkcja,b){
    return jakasFunkcja(b) + b;
}
function multiply(a) {
    return a * a;
}
function divide(a) {
    return a / 2;
}

console.log(higherOrderFunction(multiply,4));
console.log(higherOrderFunction(divide,4));

// ##################################################
// function oriented - funkcja jako wartość zwracana z funkcji
console.log("---- funkcja jako wartość zwracana z funkcji");

// ukrywanie implementacji, przykład domknięcia
var counter = function() {
    var i = 0;
    return function(){
        return ++i;
    };
};

var c = counter();
var d = counter();
console.log(typeof c);
c();
c();
c();
d();
d();

console.log(c()+" "+d());

// IEF - Immediately executed function
var counter = function() {
    var i = 0;
    return function(){
        return ++i;
    };
}();
counter();
counter();
console.log(counter());

// SCOPE !!!
// Global scope
var counter = function() {
    // var i = 0;
    i = 0;
    return function(){
        return ++i;
    };
};
var c = counter();
var d = counter();

c();
c();
c();
d();
d();

console.log(c());
console.log(d());

var counter = function() {
    var i=0;
    function incr(){
        return i +=1;
    }
    return function(){
        return incr();
    }
}

// ##################################################
// wzorzec Module - sztuczka na modelowanie klasy
// nie zaśmiecamy przestrzeni publicznej
console.log("---- wzorzec Module");
var lib = {}

lib.module = (function(){
    var c = 0;
    var priv2 = "Hello";
    return {
        message: priv2 + "World",
        counter: function (){
            return ++c;
        },
        sayHello: function(name) {
            return "Hello " + name;
        }
    };
})();

// lub z użyciem zmiennej myInterface

lib.module = (function(){
    var myInterface = {
        message: priv2 + "World",
        counter: function (){
            return ++c;
        },
        sayHello: function(name) {
            return "Hello " + name;
        }
    };
    var c = 0;
    var priv2 = "Hello";
    return myInterface;
})();

console.log(lib.module.sayHello('Marian'));
console.log(lib.module.counter());
console.log(lib.module.counter());

console.log("---- problemy z THIS");
// ##################################################
// Problem z THIS
// wywołanie działania z różnych kontekstów
// 1. funkcja (zwykły kontekst)

function z() {
    console.log(this.imie); //this wiąże do global
}
imie = "Jan";
z(); 

// 2. konstruktor - z dużej litery aby rozróżnić od zwykłej funkcji wtedy wywołujemy przez new
function Person(name) {
    this.name = name;
}
var jan = new Person('Jan'); // wiązanie do obiektu
//var maria = Person('Maria'); // błąd - wiązanie do global

console.log(jan.name);
//console.log(maria.name);

// 3. Metoda
var person = {
    imie: "Nieznane",
    sayHello: function(){
        return "Hello " + this.imie; // wiązanie this do imie w obiekcie
    }
}
console.log(person.sayHello());

// 4. Apply
function dajGlos(zwierze){
    return console.log("Jestem "+zwierze+" bo mówię: "+ this.message);
}
var kaczka = {
    message: "Kwa, Kwa"
}
var pies = {
    message: "Hau, Hau"
}
dajGlos.apply(kaczka,['kaczka']);
dajGlos.apply(pies,['pies']);

// posługiwanie się filtrowaniem tablicy, zamiast pętli for
var numbers = [1,2,3,4,5,6];
var evenNumbers = numbers.filter(function(item){
    return item % 2 === 0;
});

console.log(evenNumbers);

// ##################################################
// zadanie: zrobić wzorzec module
// z interfejsem publicznym dla swojej dziedziny "tools" - narzędzia
// stworzyć kilka metod 2-3
// wybrać kilka właściwości różnego typu, liczby, bool, string
// stworzyć prywatne funkcje i zmienne
// wybrać co chcemy zwracać, według jakiej właściwości
// JavaScript uczymy się z: https://developer.mozilla.org/pl/docs/Web/JavaScript

