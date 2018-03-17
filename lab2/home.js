
var tools = {};

tools.module = (function(){
    var typy = {
        PROSTE: 0,
        ELEKTRYCZNE: 1,
        PNEUMATYCZNE: 2,
        POMIAROWE: 3,
        POMOCNICZE: 4
    }

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
        ]

    var myInterface = {
        // Wyświetlanie listy i typów wszystkich narzędzi
        getToolsTypes: function (){
            console.log("\nLista narzędzi:");
            narzedzia.forEach(function(element, index) {
                console.log("\t%s (kategoria: %s)",element.nazwa, element.typ);
            });
        },

        // Wyświetlanie typu pojedynczego narzędzia
        getToolType: function (toolName){
            console.log("\nZnaleziono narzędzie:");
            findTool = narzedzia.find(function(element){
                return element.nazwa===toolName;
            });
            //findIndex = narzedzia.indexOf(toolName);
            console.log("\t" + findTool + " (kategoria: "+findTool+")"); 
        },
/*
        // Wyświetlenie stanu magazynowego narzędzia
        getToolStock: function(toolName) {
            console.log("\nStan magazynowy:");
            findIndex = toolBox.narzedzia.indexOf(toolName);
            console.log("\t" + toolBox.narzedzia[findIndex]+ ": "+ toolBox.stanNarzedzia[findIndex] + " szt.");
        },

        // Kupno narzędzi
        buyTool: function(toolName) {
            console.log("\nZakupiono narzędzie:");
            findIndex = toolBox.narzedzia.indexOf(toolName);
            toolBox.stanNarzedzia[findIndex]++;
        },

        // Sprzedaż narzędzi
        sellTool: function(toolName) {
            console.log("\nSprzedano narzędzie:");
            findIndex = toolBox.narzedzia.indexOf(toolName);
            if (toolBox.stanNarzedzia[findIndex]>0) {toolBox.stanNarzedzia[findIndex]--};
        },

        // Dodanie narzędzia do listy
        addTool: function(toolName,toolType) {
            findNarzedzie = toolBox.narzedzia.indexOf(toolName);
            if (findNarzedzie<0) {
                findTyp = toolBox.typ.indexOf(toolType);
                if (findTyp!=-1) {
                    toolBox.narzedzia.push(toolName);
                    toolBox.typNarzedzia.push(findTyp);
                    toolBox.stanNarzedzia.push(0);
                    console.log("\nDodano narzędzie do listy.");
                } else {
                    console.log("\nPodano niewłaściwy typ narzędzia.");             
                }  
            } else {
                console.log("\nNarzędzie istnieje już w bazie.");                          
            }        
        },*/
    };
    return myInterface;
})();

tools.module.getToolsTypes();

tools.module.getToolType("Miara");
/*tools.module.buyTool("Miara");
tools.module.buyTool("Miara");
tools.module.getToolStock("Miara");
tools.module.sellTool("Miara");
tools.module.getToolStock("Miara");

tools.module.addTool("Ekierka","Pomiarowe");
tools.module.getToolsTypes();
tools.module.addTool("Ekierka","Pomiarowe");
tools.module.getToolsTypes();*/