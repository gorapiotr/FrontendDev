/*
    ==============================================================================
    Klasa obsługująca operacje na tabeli narzędzi i typów
    ==============================================================================
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Types;
(function (Types) {
    Types[Types["PROSTE"] = 0] = "PROSTE";
    Types[Types["ELEKTRYCZNE"] = 1] = "ELEKTRYCZNE";
    Types[Types["PNEUMATYCZNE"] = 2] = "PNEUMATYCZNE";
    Types[Types["POMIAROWE"] = 3] = "POMIAROWE";
    Types[Types["POMOCNICZE"] = 4] = "POMOCNICZE";
})(Types || (Types = {}));
var Narzedzie = /** @class */ (function () {
    function Narzedzie(nazwa, typ, stan) {
        this.nazwa = nazwa;
        this.typ = typ;
        this.stan = stan;
    }
    return Narzedzie;
}());
var Tools = /** @class */ (function () {
    function Tools() {
        this.narzedzia = [
            { nazwa: "Młotek", typ: [Types['PROSTE']], stan: 1 },
            { nazwa: "Wiertarka", typ: [Types['ELEKTRYCZNE']], stan: 1 },
            { nazwa: "Młot", typ: [Types['PNEUMATYCZNE']], stan: 1 },
            { nazwa: "Spawarka", typ: [Types['ELEKTRYCZNE']], stan: 1 },
            { nazwa: "Szlifierka", typ: [Types['ELEKTRYCZNE']], stan: 1 },
            { nazwa: "Kombinerki", typ: [Types['PROSTE']], stan: 1 },
            { nazwa: "Miara", typ: [Types['POMIAROWE']], stan: 1 },
            { nazwa: "Pion", typ: [Types['POMIAROWE']], stan: 1 },
            { nazwa: "Wkrętak", typ: [Types['PROSTE']], stan: 1 },
            { nazwa: "Imadło", typ: [Types['POMOCNICZE']], stan: 1 }
        ];
    }
    // Wyszukanie typu po indeksie
    Tools.prototype.searchType = function (typeNo) {
        var typ;
        for (typ in Types) {
            if (Types[typ] == typeNo) {
                return typ;
            }
        }
    };
    // Wyświetlanie listy i typów wszystkich narzędzi
    Tools.prototype.getToolsTypes = function () {
        var _this = this;
        var output = "";
        output = '\nLista narzędzi:\n';
        this.narzedzia.forEach(function (element) {
            return output += ("\t" + element.nazwa + " (kategoria: " + _this.searchType(element.typ) + ")\n");
        });
        return output;
    };
    // Wyświetlanie typu pojedynczego narzędzia
    // jeśli printDescription===false to nie wyświetlamy opisów
    Tools.prototype.getToolType = function (toolName, printDescription) {
        if (printDescription === void 0) { printDescription = true; }
        var output = "";
        var findTool = this.narzedzia.find(function (element) { return element.nazwa === toolName; });
        if (printDescription) {
            output = '\nZnaleziono narzędzie:\n';
            output += ("\t" + findTool.nazwa + " (kategoria: " + this.searchType(findTool.typ) + ")");
        }
        else {
            output = findTool.typ;
        }
        return output;
    };
    // Wyświetlenie stanu magazynowego narzędzia
    Tools.prototype.getToolStock = function (toolName) {
        var output = "";
        output = '\nStan magazynowy:\n';
        var findTool = this.narzedzia.find(function (element) { return element.nazwa === toolName; });
        output += ("\t" + findTool.nazwa + ": " + findTool.stan + " szt.");
        return output;
    };
    // Kupno narzędzi
    Tools.prototype.buyTool = function (toolName) {
        var output = "";
        var findTool = this.narzedzia.find(function (element) { return element.nazwa === toolName; });
        output = '\nZakupiono narzędzie:\n';
        output += ("\t" + findTool.nazwa);
        findTool.stan++;
        return output;
    };
    // Sprzedaż narzędzi
    Tools.prototype.sellTool = function (toolName) {
        var output = "";
        var findTool = this.narzedzia.find(function (element) { return element.nazwa === toolName; });
        output = '\nSprzedano narzędzie:\n';
        output += ("\t" + findTool.nazwa);
        if (findTool.stan > 0) {
            findTool.stan--;
        }
        return output;
    };
    // Dodanie narzędzia do listy
    Tools.prototype.addTool = function (toolName, toolType) {
        var output = "";
        var findTool = this.narzedzia.find(function (element) { return element.nazwa === toolName; });
        if (!findTool) {
            var findType = Types[toolType];
            if (findType) {
                var newTool = new Narzedzie(toolName, findType, 0);
                this.narzedzia.push(newTool);
                output = ("\nDodano narzędzie: " + toolName + " do listy.");
            }
            else {
                output = ("\nPodano niewłaściwy typ narzędzia: " + toolType + ".");
            }
        }
        else {
            output = ("\nNarzędzie: " + toolName + ", istnieje już w bazie.");
        }
        return output;
    };
    return Tools;
}());
/*
    ==============================================================================
    Klasa rozbudowująca funkcjonalność o funkcje do obsługi narzędzi elektrycznych
    dziedzicząca po klasie Tools
    ==============================================================================
*/
var ElectricTools = /** @class */ (function (_super) {
    __extends(ElectricTools, _super);
    // Rozszerzenie konstruktora przez dodanie dodatkowej właściwości power do obiektów
    function ElectricTools() {
        var _this = _super.call(this) || this;
        _this.narzedzia.forEach(function (element) {
            if (element.typ == Types['ELEKTRYCZNE']) {
                element.power = false;
            }
            ;
        });
        return _this;
    }
    // Wyświetlanie listy i typów wszystkich narzędzi
    // rozszerzenie o wyświetlanie czy włączono do prądu
    ElectricTools.prototype.getToolsTypes = function () {
        var _this = this;
        var output = '\nLista narzędzi:\n';
        this.narzedzia.forEach(function (element) {
            output += ("\t" + element.nazwa + " (kategoria: " + _this.searchType(element.typ) + ") ");
            if (element.power !== undefined) {
                (element.power === true && element.power !== undefined) ? output += "POWER ON\n" : output += "POWER OFF\n";
            }
            else
                output += "\n";
        });
        return output;
    };
    // Rozszerzamy funkcjonalność dla narzędzi elektrycznych o włączenie do prądu
    ElectricTools.prototype.turnPowerOn = function (toolName) {
        var output = "";
        if (this.getToolType(toolName, false) == Types['ELEKTRYCZNE']) {
            output = ('\nPodłączamy narzędzie: ' + toolName + ', do prądu.\n');
            var findTool = this.narzedzia.find(function (element) { return element.nazwa === toolName; });
            findTool.power = true;
        }
        else {
            output = '\nNarzędzia: ' + toolName + ', nie można podłączyć do prądu.\n';
        }
        return output;
    };
    // Rozszerzamy funkcjonalność dla narzędzi elektrycznych o wyłączanie z prądu
    ElectricTools.prototype.turnPowerOff = function (toolName) {
        var output = "";
        if (this.getToolType(toolName, false) == Types['ELEKTRYCZNE']) {
            output = '\nWyłączamy narzędzie: ' + toolName + ', z prądu.\n';
            var findTool = this.narzedzia.find(function (element) { return element.nazwa === toolName; });
            findTool.power = false;
        }
        else {
            output = '\nNarzędzie: ' + toolName + ', nie działa na prąd.\n';
        }
        return output;
    };
    // Nadpisanie metody z wywołaniem dziedziczonej metody
    // Dodano właściwość power obiektu dla urządzen elektrycznych
    ElectricTools.prototype.addTool = function (toolName, toolType) {
        _super.prototype.addTool.call(this, toolName, toolType);
        var findTool = this.narzedzia.find(function (element) { return element.nazwa === toolName; });
        if (findTool.typ == Types['ELEKTRYCZNE']) {
            findTool.power = false;
        }
        return "";
    };
    // Rozszerzamy o fukcję wyświetlania na ekranie
    ElectricTools.prototype.print = function (input) {
        console.log(input);
    };
    return ElectricTools;
}(Tools));
/*
    ==============================================================================
    tworzenie obiektu klasy ElectricTools i testowanie
    ==============================================================================
*/
var toolBox = new ElectricTools();
toolBox.print(toolBox.getToolsTypes());
toolBox.print(toolBox.getToolType("Miara"));
toolBox.print(toolBox.buyTool("Miara"));
toolBox.print(toolBox.buyTool("Miara"));
toolBox.print(toolBox.getToolStock("Miara"));
toolBox.print(toolBox.sellTool("Miara"));
toolBox.print(toolBox.getToolStock("Miara"));
toolBox.print(toolBox.addTool("Ekierka", "POMIAROWE"));
toolBox.print(toolBox.getToolsTypes());
toolBox.print(toolBox.addTool("Ekierka", "POMIAROWE"));
toolBox.print(toolBox.getToolsTypes());
// testowanie rozszerzonej klasy
toolBox.print(toolBox.turnPowerOn("Młotek"));
toolBox.print(toolBox.turnPowerOn("Szlifierka"));
toolBox.print(toolBox.addTool("Wyrzynarka", "ELEKTRYCZNE"));
toolBox.print(toolBox.getToolsTypes());
toolBox.print(toolBox.turnPowerOn("Wyrzynarka"));
toolBox.print(toolBox.getToolsTypes());
toolBox.print(toolBox.turnPowerOff("Wyrzynarka"));
toolBox.print(toolBox.getToolsTypes());
