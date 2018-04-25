/*
    ==============================================================================
    Klasa obsługująca operacje na tabeli narzędzi i typów
    ==============================================================================
*/

interface ToolsTypes {
    typ: string;
}

interface ToolsObject {
    nazwa: string,
    typ: ToolsTypes,
    stan: number
}

enum Types {
    PROSTE = 0,
    ELEKTRYCZNE = 1,
    PNEUMATYCZNE = 2,
    POMIAROWE = 3,
    POMOCNICZE = 4
}

class Narzedzie {
    nazwa: string;
    typ: ToolsTypes;
    stan: number;
    constructor(nazwa: string, typ: ToolsTypes, stan: number) {
        this.nazwa = nazwa;
        this.typ = typ;
        this.stan = stan;
    }
}

class Tools {
    narzedzia: any;
    typy: Types;  
    
    constructor() {     
        this.narzedzia = [
            { nazwa: "Młotek", typ: [Types['PROSTE']], stan: 1},
            { nazwa: "Wiertarka", typ: [Types['ELEKTRYCZNE']], stan: 1},
            { nazwa: "Młot", typ: [Types['PNEUMATYCZNE']], stan: 1},
            { nazwa: "Spawarka", typ: [Types['ELEKTRYCZNE']], stan: 1},
            { nazwa: "Szlifierka", typ: [Types['ELEKTRYCZNE']], stan: 1},
            { nazwa: "Kombinerki", typ: [Types['PROSTE']], stan: 1},
            { nazwa: "Miara", typ: [Types['POMIAROWE']], stan: 1},
            { nazwa: "Pion", typ: [Types['POMIAROWE']], stan: 1},
            { nazwa: "Wkrętak", typ: [Types['PROSTE']], stan: 1},
            { nazwa: "Imadło", typ: [Types['POMOCNICZE']], stan: 1}
            ];
    }

    // Wyszukanie typu po indeksie
    searchType(typeNo: any):string {
        let typ:string;
        for (typ in Types) {
            if (Types[typ] == typeNo) {
                return typ;
            }
        }
    }

    // Wyświetlanie listy i typów wszystkich narzędzi
    getToolsTypes():string {
        let output: string = "";
        output = '\nLista narzędzi:\n';
        this.narzedzia.forEach(element => 
            output += ("\t"+element.nazwa+" (kategoria: "+this.searchType(element.typ)+")\n")
        );
        return output;
    }

    // Wyświetlanie typu pojedynczego narzędzia
    // jeśli printDescription===false to nie wyświetlamy opisów
    getToolType(toolName:string, printDescription:boolean = true):any {
        let output: string = "";
        let findTool = this.narzedzia.find(element => element.nazwa===toolName);
        if (printDescription) { 
            output = '\nZnaleziono narzędzie:\n'; 
            output += ("\t" + findTool.nazwa + " (kategoria: "+ this.searchType(findTool.typ) +")");
        } else 
        {              
            output = findTool.typ;
        }
        return output;
    }   

    // Wyświetlenie stanu magazynowego narzędzia
    getToolStock(toolName:string):string {
        let output: string = "";
        output = '\nStan magazynowy:\n';
        let findTool = this.narzedzia.find(element => element.nazwa===toolName);
        output += ("\t" + findTool.nazwa + ": "+ findTool.stan + " szt.");
        return output;
    }

    // Kupno narzędzi
    buyTool(toolName:string):string {
        let output: string = "";
        let findTool = this.narzedzia.find(element => element.nazwa===toolName);
        output = '\nZakupiono narzędzie:\n';
        output += ("\t"+ findTool.nazwa);
        findTool.stan++;
        return output;
    }

    // Sprzedaż narzędzi
    sellTool(toolName:string):string {
        let output: string = "";
        let findTool = this.narzedzia.find(element => element.nazwa===toolName);
        output = '\nSprzedano narzędzie:\n';
        output += ("\t"+ findTool.nazwa);
        if (findTool.stan>0) {
            findTool.stan--;
        }
        return output;
    }

    // Dodanie narzędzia do listy
    addTool(toolName: string, toolType: string):string {
        let output: string = "";
        let findTool = this.narzedzia.find(element => element.nazwa===toolName);
        if (!findTool) {
            let findType = Types[toolType];
            if (findType) {
                let newTool = new Narzedzie(toolName,findType,0);
                this.narzedzia.push(newTool);
                output = ("\nDodano narzędzie: "+toolName+" do listy.");
            } else {
                output = ("\nPodano niewłaściwy typ narzędzia: "+ toolType +".");
            }
        } else {
            output = ("\nNarzędzie: "+toolName+", istnieje już w bazie.");
        }
        return output;
    }
}

/*
    ==============================================================================
    Klasa rozbudowująca funkcjonalność o funkcje do obsługi narzędzi elektrycznych
    dziedzicząca po klasie Tools
    ==============================================================================
*/

class ElectricTools extends Tools {
    
    // Rozszerzenie konstruktora przez dodanie dodatkowej właściwości power do obiektów
    constructor() {
        super();
        this.narzedzia.forEach(element => { 
            if (element.typ==Types['ELEKTRYCZNE']) { element.power = false };
        });
    }

    // Wyświetlanie listy i typów wszystkich narzędzi
    // rozszerzenie o wyświetlanie czy włączono do prądu
    getToolsTypes():string {
        let output: string = '\nLista narzędzi:\n';
        this.narzedzia.forEach(element => { 
            output += ("\t"+ element.nazwa +" (kategoria: "+this.searchType(element.typ) +") ");
            if (element.power!==undefined) {
                (element.power===true&&element.power!==undefined)? output += "POWER ON\n" : output += "POWER OFF\n";
            } else output += "\n";
        });
        return output;
    }
    


    // Rozszerzamy funkcjonalność dla narzędzi elektrycznych o włączenie do prądu
    turnPowerOn(toolName:string):string {
        let output: string = "";
        if (this.getToolType(toolName,false)==Types['ELEKTRYCZNE']) {
            output = ('\nPodłączamy narzędzie: '+ toolName +', do prądu.\n');
            let findTool = this.narzedzia.find(element => element.nazwa===toolName);
            findTool.power = true;
        } else
        {
            output = '\nNarzędzia: '+ toolName +', nie można podłączyć do prądu.\n';                     
        }
        return output;
    }

    // Rozszerzamy funkcjonalność dla narzędzi elektrycznych o wyłączanie z prądu
    turnPowerOff(toolName:string):string {
        let output: string = "";
        if (this.getToolType(toolName,false)==Types['ELEKTRYCZNE']) {
            output = '\nWyłączamy narzędzie: '+ toolName +', z prądu.\n';
            let findTool = this.narzedzia.find(element => element.nazwa===toolName);
            findTool.power = false;
        } else
        {
            output = '\nNarzędzie: '+ toolName +', nie działa na prąd.\n';                     
        }
        return output;
    }
    
    // Nadpisanie metody z wywołaniem dziedziczonej metody
    // Dodano właściwość power obiektu dla urządzen elektrycznych
    addTool(toolName:string,toolType:string):string {
        super.addTool(toolName,toolType);
        let findTool = this.narzedzia.find(element => element.nazwa===toolName);
        if (findTool.typ==Types['ELEKTRYCZNE']) {
            findTool.power = false;           
        }
        return "";
    }

    // Rozszerzamy o fukcję wyświetlania na ekranie
    print(input:string):void {
        console.log(input);
    }
} 

/*
    ==============================================================================
    tworzenie obiektu klasy ElectricTools i testowanie
    ==============================================================================
*/
let toolBox = new ElectricTools();
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
toolBox.print(toolBox.addTool("Wyrzynarka","ELEKTRYCZNE"));
toolBox.print(toolBox.getToolsTypes());
toolBox.print(toolBox.turnPowerOn("Wyrzynarka"));
toolBox.print(toolBox.getToolsTypes());
toolBox.print(toolBox.turnPowerOff("Wyrzynarka"));
toolBox.print(toolBox.getToolsTypes());
