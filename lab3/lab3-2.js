/*  
    =========================================
    Dziedziczenie po klasie narzędzia
*/
function Narzedzia (nazwa) {
    this.nazwa = nazwa;
}

Narzedzia.prototype = {
    uzyj: function () {
        return "Po prostu używam narzędzie: "+ this.nazwa;
    }
}

Narzedzia.prototype.getNazwa = function () {
    return this.nazwa;
}

// Elektryczne dziedziczy ========================================
function Elektryczne (nazwa,dodatkowanazwa) {
    Narzedzia.call(this, nazwa); // wywołanie
    this.dodatkowanazwa = dodatkowanazwa;
}

Elektryczne.prototype = Object.create(Narzedzia.prototype);
Elektryczne.prototype.constructor = Elektryczne;

// Rozszerzanie
Elektryczne.prototype.jakUzywacElektryczne = function() {
    return "Najpierw musisz podłączyć do prądu.";
}

// Hudrauliczne dziedziczy ========================================
function Hydrauliczne (nazwa,dodatkowanazwa) {
    Narzedzia.call(this, nazwa); // wywołanie
    this.dodatkowanazwa = dodatkowanazwa;
}

Hydrauliczne.prototype = Object.create(Narzedzia.prototype);
Hydrauliczne.prototype.constructor = Hydrauliczne;

// Rozszerzanie
Hydrauliczne.prototype.jakUzywacHydrauliczne = function() {
    return "Najpierw musisz podłączyć do sprężarki.";
}


// Tworzymy obiekt
var nElektryczne = new Elektryczne ("Wiertarka","220V");
console.log(nElektryczne.uzyj());
console.log(nElektryczne.jakUzywacElektryczne());
console.log(nElektryczne.nazwa);
console.log(nElektryczne.dodatkowanazwa);
