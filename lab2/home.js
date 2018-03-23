
var tools = {};

tools.module = (function() {
    var typy = {
        PROSTE: 0,
        ELEKTRYCZNE: 1,
        PNEUMATYCZNE: 2,
        POMIAROWE: 3,
        POMOCNICZE: 4
    };

    var narzedzia = [
        { nazwa: "Młotek", typ: [typy.PROSTE], stan: 1},
        { nazwa: "Wiertarka", typ: [typy.ELEKTRYCZNE], stan: 1},
        { nazwa: "Młot", typ: [typy.PNEUMATYCZNE], stan: 1},
        { nazwa: "Spawarka", typ: [typy.ELEKTRYCZNE], stan: 1},
        { nazwa: "Szlifierka", typ: [typy.ELEKTRYCZNE], stan: 1},
        { nazwa: "Kombinerki", typ: [typy.PROSTE], stan: 1},
        { nazwa: "Miara", typ: [typy.POMIAROWE], stan: 1},
        { nazwa: "Pion", typ: [typy.POMIAROWE], stan: 1},
        { nazwa: "Wkrętak", typ: [typy.PROSTE], stan: 1},
        { nazwa: "Imadło", typ: [typy.POMOCNICZE], stan: 1}
        ];

    var myInterface = {
        // Wyszukanie typu po indeksie
        searchType: function (typeNo) {
            for (typ in typy) {
                if (typy[typ] == typeNo) {
                    return typ;
                }
            }
        },

        // Wyświetlanie listy i typów wszystkich narzędzi
        getToolsTypes: function (){
            console.log("\nLista narzędzi:");
            narzedzia.forEach(function(element, index) {
                console.log("\t%s (kategoria: %s)",element.nazwa, tools.module.searchType(element.typ));
            });
        },

        // Wyświetlanie typu pojedynczego narzędzia
        getToolType: function (toolName){
            console.log("\nZnaleziono narzędzie:");
            findTool = narzedzia.find(function(element){
                return element.nazwa===toolName;
            });
            console.log("\t" + findTool.nazwa + " (kategoria: "+ tools.module.searchType(findTool.typ) +")");
        },

        // Wyświetlenie stanu magazynowego narzędzia
        getToolStock: function(toolName) {
            console.log("\nStan magazynowy:");
            findTool = narzedzia.find(function(element){
                return element.nazwa===toolName;
            });
            console.log("\t" + findTool.nazwa + ": "+ findTool.stan + " szt.");
        },

        // Kupno narzędzi
        buyTool: function(toolName) {
            console.log("\nZakupiono narzędzie:");
            findTool = narzedzia.find(function(element){
                return element.nazwa===toolName;
            });
            console.log("\t"+ findTool.nazwa);
            findTool.stan++;
        },

        // Sprzedaż narzędzi
        sellTool: function(toolName) {
            console.log("\nSprzedano narzędzie:");
            findTool = narzedzia.find(function(element){
                return element.nazwa===toolName;
            });
            console.log("\t"+ findTool.nazwa);
            if (findTool.stan>0) {
                findTool.stan--;
            }
        },

        // Dodanie narzędzia do listy
        addTool: function(toolName,toolType) {
            var newTool = {};
            findTool = narzedzia.find(function(element){
                return element.nazwa===toolName;
            });
            if (!findTool) {
                findType = typy[toolType];
                if (findType) {
                    newTool.nazwa = toolName;
                    newTool.typ = typy[toolType];
                    newTool.stan = 0;
                    narzedzia.push(newTool);
                    console.log("\nDodano narzędzie do listy.");
                } else {
                    console.log("\nPodano niewłaściwy typ narzędzia.");
                }
            } else {
                console.log("\nNarzędzie istnieje już w bazie.");
            }
        },
    };
    return myInterface;
})();

tools.module.getToolsTypes();

tools.module.getToolType("Miara");
tools.module.buyTool("Miara");
tools.module.buyTool("Miara");
tools.module.getToolStock("Miara");
tools.module.sellTool("Miara");
tools.module.getToolStock("Miara");
tools.module.addTool("Ekierka","POMIAROWE");
tools.module.getToolsTypes();
tools.module.addTool("Ekierka","POMIAROWE");
tools.module.getToolsTypes();