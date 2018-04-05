/*  
    =========================================
    Klasa Tools
    =========================================
*/
// Constructor
function Tools (nazwa) {   
    this.typy = {
        PROSTE: 0,
        ELEKTRYCZNE: 1,
        PNEUMATYCZNE: 2,
        POMIAROWE: 3,
        POMOCNICZE: 4
    };  
    
    this.narzedzia = [
        { nazwa: "Młotek", typ: [this.typy.PROSTE], stan: 1},
        { nazwa: "Wiertarka", typ: [this.typy.ELEKTRYCZNE], stan: 1},
        { nazwa: "Młot", typ: [this.typy.PNEUMATYCZNE], stan: 1},
        { nazwa: "Spawarka", typ: [this.typy.ELEKTRYCZNE], stan: 1},
        { nazwa: "Szlifierka", typ: [this.typy.ELEKTRYCZNE], stan: 1},
        { nazwa: "Kombinerki", typ: [this.typy.PROSTE], stan: 1},
        { nazwa: "Miara", typ: [this.typy.POMIAROWE], stan: 1},
        { nazwa: "Pion", typ: [this.typy.POMIAROWE], stan: 1},
        { nazwa: "Wkrętak", typ: [this.typy.PROSTE], stan: 1},
        { nazwa: "Imadło", typ: [this.typy.POMOCNICZE], stan: 1}
        ];
    
    this.nazwa = nazwa;
}

// Wyszukanie typu po indeksie
Tools.prototype.searchType = function (typeNo) {
        this.wynik = "";
        for (typ in this.typy) {
            if (this.typy[typ] == typeNo) {
                this.wynik = typ;
            }

        }
        return this.wynik;
}

Tools.prototype.uzyj = function (toolName) {
        findTool = this.narzedzia.find(function(element){
            return element.nazwa===toolName;
        }); 
        return "Używam narzędzie: "+toolName + ", typu: " + Tools.prototype.searchType.call(this,findTool.typ);
}


Tools.prototype.getNazwa = function () {
    return this.nazwa;
}

/*  
    =========================================
    Klasa Elektryczne dziedziczy po Tools
    =========================================
*/
// Constructor
function Elektryczne (nazwa,dodatkowanazwa) {
    Tools.call(this, nazwa); // wywołanie konstruktora Tools
    this.dodatkowanazwa = dodatkowanazwa;
}

Elektryczne.prototype = Object.create(Tools.prototype);
Elektryczne.prototype.constructor = Elektryczne;

// Rozszerzanie klasy elektryczne o nowa metode
Elektryczne.prototype.jakUzywacElektryczne = function() {
    return "Najpierw musisz podłączyć do prądu.";
}

/*  
    =========================================
    Klasa Hydrauliczne dziedziczy po Tools
    =========================================
*/
// Constructor
function Hydrauliczne (nazwa,dodatkowanazwa) {
    Tools.call(this, nazwa); // wywołanie konstruktora Tools
    this.dodatkowanazwa = dodatkowanazwa;
}

Hydrauliczne.prototype = Object.create(Tools.prototype);
Hydrauliczne.prototype.constructor = Hydrauliczne;

// Rozszerzanie klasy hydrauliczne o nawa metode
Hydrauliczne.prototype.jakUzywacHydrauliczne = function() {
    return "Najpierw musisz podłączyć do sprężarki.";
}

/*  
    =========================================
    Tworzymy obiekty i testujemy
    =========================================
*/
var NewElektryczne = new Elektryczne ("Wiertarka","220V");
console.log(NewElektryczne.uzyj("Wiertarka"));
console.log(NewElektryczne.jakUzywacElektryczne());
console.log(NewElektryczne.nazwa);
console.log(NewElektryczne.dodatkowanazwa);

var NewHydrauliczne = new Hydrauliczne ("Młot","10bar");
console.log(NewHydrauliczne.uzyj("Młot"));
console.log(NewHydrauliczne.jakUzywacHydrauliczne());
console.log(NewHydrauliczne.nazwa);
console.log(NewHydrauliczne.dodatkowanazwa);