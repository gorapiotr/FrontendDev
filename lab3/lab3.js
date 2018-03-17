// Obiektowość
// - przy użyciu "IEF" - hermetyzacja
// - dziedziczenie 

var obiekt = {};
console.log(obiekt.toString());

// przykład dziedziczenia
/*  Dziedziczenie prototypowe, inne niż w pozostałych językach
    właściwość __proto__ obiektu potomnego wskazuje na publiczną właściwość "prototype" 
    w obiekcie nadrzędnym, jeśli metoda nie występuje w obiekcie, to szukamy jej w proto.
    aby umożliwić dzieciczenie dla potomnych, umieszczamy właściwości w prototype.
*/
console.log("\nPrzygotowanie do dziedziczenia:");
function Shape (x,y) {
    this.x = x;
    this.y = y;
}

Shape.prototype.message = function () {
    console.log("Hello from nessage.");
}

Shape.prototype = {
    getX: function () {
        return this.x;
    },
    getY: function () {
        return this.x;
    }
}

Shape.prototype.getY = function () {
    return this.y;
}

Shape.prototype.move = function (deltaX, deltaY) {
    this.x += deltaX;
    this.y += deltaY;
}

var aShape = new Shape(2,1);
console.log(aShape.toString());
console.log(aShape.x);
//aShape.message();

/* Dziedziczenie
*/
console.log("\nPrzykład dziedziczenia:");

function create (proto) {
    function F() {}
    F.prototype = proto;
    F.prototype.sayHello = function() {
        return "Hello world";
    };
    return new F();
}

var base = {
    x: 5,
    y: 8,
    getX: function() {
        return this.x;
    },
    getY: function() {
        return this.y;
    },
};

var someExtension = create(base);
console.log(someExtension.getX);
console.log(someExtension.sayHello);


