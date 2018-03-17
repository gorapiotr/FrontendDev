/*  
    =========================================
    Klasa Circle dziedziczy po shape - przykład
*/
console.log("\nDziedziczenie Circle po Shape:");
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

// ========================================
function Circle (x,y,r) {
    Shape.call(this, x, y); // wywołanie
    this.r = r;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// Rozszerzanie

Circle.prototype.area = function() {
    return Math.PI * this.r * this.r;
}

// Tworzymy obiekt
var aCircle = new Circle(20,30,2);
console.log(aCircle.area());

/*

W swojej dziedzinie stworzyć hierarchię dziedziczenia zgodną z powyższym

*/