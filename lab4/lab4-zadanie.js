/*
    Klasa obsługująca operacje na tabeli narzędzi i typów
*/
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
            let output;
            this.output = '\nLista narzędzi:\n';
            this.narzedzia.forEach(element => 
                this.output += ("\t"+element.nazwa+" (kategoria: "+this.searchType(element.typ)+")\n")
            );
            return this.output;
        }

        // Wyświetlanie typu pojedynczego narzędzia
        // jeśli printDescription===false to nie wyświetlamy opisów
        getToolType(toolName, printDescription = true) {
            this.findTool = this.narzedzia.find(element => element.nazwa===toolName);
            if (printDescription) { 
                let output="";              
                this.output = '\nZnaleziono narzędzie:\n'; 
                this.output += ("\t" + this.findTool.nazwa + " (kategoria: "+ this.searchType(this.findTool.typ) +")");
            } else 
            {              
                this.output = this.findTool.typ;
            }
            return this.output;
        }

        // Wyświetlenie stanu magazynowego narzędzia
        getToolStock(toolName) {
            let output;
            this.output = '\nStan magazynowy:\n';
            this.findTool = this.narzedzia.find(element => element.nazwa===toolName);
            this.output += ("\t" + this.findTool.nazwa + ": "+ this.findTool.stan + " szt.");
            return this.output;
        }

        // Kupno narzędzi
        buyTool(toolName) {
            let output;
            this.output = '\nZakupiono narzędzie:\n';
            this.findTool = this.narzedzia.find(element => element.nazwa===toolName);
            this.output += ("\t"+ this.findTool.nazwa);
            this.findTool.stan++;
            return this.output;
        }

        // Sprzedaż narzędzi
        sellTool(toolName) {
            let output;
            this.output = '\nSprzedano narzędzie:\n';
            this.findTool = this.narzedzia.find(element => element.nazwa===toolName);
            this.output += ("\t"+ this.findTool.nazwa);
            if (this.findTool.stan>0) {
                this.findTool.stan--;
            }
            return this.output;
        }

        // Dodanie narzędzia do listy
        addTool(toolName,toolType) {
            let newTool = {};
            let output;
            this.findTool = this.narzedzia.find(element => element.nazwa===toolName);
            if (!this.findTool) {
                this.findType = this.typy[toolType];
                if (this.findType) {
                    newTool.nazwa = toolName;
                    newTool.typ = this.typy[toolType];
                    newTool.stan = 0;
                    this.narzedzia.push(newTool);
                    this.output = ("\nDodano narzędzie: "+toolName+" do listy.");
                } else {
                    this.output = ("\nPodano niewłaściwy typ narzędzia: "+ toolType +".");
                }
            } else {
                this.output = ("\nNarzędzie: "+toolName+", istnieje już w bazie.");
            }
            return this.output;
        }
}

/* 
    Klasa rozbudowująca funkcjonalność o funkcje do obsługi narzędzi elektrycznych
    dziedzicząca po klasie Tools
*/
class ElectricTools extends Tools {
    
    // Rozszerzamy o fukcję wyświetlania na ekranie
    print(input) {
        console.log(input);
    }

    // Rozszerzamy funkcjonalność dla narzędzi elektrycznych
    turnPowerOn(toolName) {
        let output="";
        if (this.getToolType(toolName,false)==this.typy.ELEKTRYCZNE) {
            this.output = '\nPodłączamy narzędzie: '+ toolName +', do prądu:\n';          
        } else
        {
            this.output = '\nNarzędzia: '+ toolName +', nie można podłączyć do prądu.\n';                     
        }
        return this.output;
    }
} 

// tworzenie obiektu klasy ElectricTools i testowanie
var toolBox = new ElectricTools;
toolBox.print(toolBox.getToolsTypes());
toolBox.print(toolBox.getToolType("Miara"));
toolBox.print(toolBox.buyTool("Miara"));
toolBox.print(toolBox.buyTool("Miara"));
toolBox.print(toolBox.getToolStock("Miara"));
toolBox.print(toolBox.sellTool("Miara"));
toolBox.print(toolBox.getToolStock("Miara"));
toolBox.print(toolBox.addTool("Ekierka","POMIAROWE"));
toolBox.print(toolBox.getToolsTypes());
toolBox.print(toolBox.addTool("Ekierka","POMIAROWE"));
toolBox.print(toolBox.getToolsTypes());

// testowanie rozszerzonej klasy
toolBox.print(toolBox.turnPowerOn("Młotek"));
toolBox.print(toolBox.turnPowerOn("Szlifierka"));