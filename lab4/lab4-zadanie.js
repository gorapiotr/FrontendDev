
class Tools {
    
    constructor() {
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
    }


        // Wyszukanie typu po indeksie
        searchType(typeNo) {
            for (this.typ in this.typy) {
                if (this.typy[this.typ] == typeNo) {
                    return this.typ;
                }
            }
        }

        // Wyświetlanie listy i typów wszystkich narzędzi
        getToolsTypes() {
            console.log("\nLista narzędzi:");
            this.narzedzia.forEach(function(element, index) {
                //console.log("\t%s (kategoria: %s)",element.nazwa, this.searchType(element.typ));
            });
        }

        // Wyświetlanie typu pojedynczego narzędzia
        getToolType(toolName) {
            console.log("\nZnaleziono narzędzie:");
            this.findTool = this.narzedzia.find(element => element.nazwa===toolName);
            console.log("\t" + this.findTool.nazwa + " (kategoria: "+ this.searchType(this.findTool.typ) +")");
        }

        // Wyświetlenie stanu magazynowego narzędzia
        getToolStock(toolName) {
            console.log("\nStan magazynowy:");
            this.findTool = this.narzedzia.find(element => element.nazwa===toolName);
            console.log("\t" + this.findTool.nazwa + ": "+ this.findTool.stan + " szt.");
        }

        // Kupno narzędzi
        buyTool(toolName) {
            console.log("\nZakupiono narzędzie:");
            this.findTool = this.narzedzia.find(element => element.nazwa===toolName);
            console.log("\t"+ this.findTool.nazwa);
            this.findTool.stan++;
        }

        // Sprzedaż narzędzi
        sellTool(toolName) {
            console.log("\nSprzedano narzędzie:");
            this.findTool = this.narzedzia.find(element => element.nazwa===toolName);
            console.log("\t"+ this.findTool.nazwa);
            if (this.findTool.stan>0) {
                this.findTool.stan--;
            }
        }

        // Dodanie narzędzia do listy
        addTool(toolName,toolType) {
            let newTool = {};
            this.findTool = this.narzedzia.find(element => element.nazwa===toolName);
            if (!this.findTool) {
                this.findType = this.typy[toolType];
                if (this.findType) {
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
        }
}

var toolBox = new Tools;

toolBox.getToolsTypes();

toolBox.getToolType("Miara");
toolBox.buyTool("Miara");
toolBox.buyTool("Miara");
toolBox.getToolStock("Miara");
toolBox.sellTool("Miara");
toolBox.getToolStock("Miara");
toolBox.addTool("Ekierka","POMIAROWE");
toolBox.getToolsTypes();
toolBox.addTool("Ekierka","POMIAROWE");
toolBox.getToolsTypes();