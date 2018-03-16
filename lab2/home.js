
var tools = {}

tools.module = (function(){
    var toolBox = {
                    typ: [
                        'Proste',       // 0
                        'Elektryczne',  // 1
                        'Pneumatyczne', // 2
                        'Pomiarowe',    // 3
                        'Pomocnicze',   // 4
                    ],
                    narzedzia: [
                        'Młotek',
                        'Wiertarka',
                        'Młot',
                        'Spawarka',
                        'Szlifierka',
                        'Kombinerki',
                        'Miara',
                        'Pion',
                        'Wkrętak',
                        'Imadło',
                    ],
                    typNarzedzia: [
                        0, 1, 2, 1, 1, 0, 3, 3, 0, 4
                    ],
                    stanNarzedzia: [
                        1, 1, 1, 1, 1, 1, 1, 1, 1, 1
                    ],
                };

    var myInterface = {
        
        // Wyświetlanie listy i typów wszystkich narzędzi
        getToolsTypes: function (){
            console.log('\nLista narzędzi:');
            toolBox.narzedzia.forEach(function(element, index) {
                console.log('\t%s (kategoria: %s)',element,
                    toolBox.typ[toolBox.typNarzedzia[index]]);
            });
        },

        // Wyświetlanie typu pojedynczego narzędzia
        getToolType: function (toolName){
            console.log('\nZnaleziono narzędzie:');
            findTool = toolBox.narzedzia.find(function(element){
                return element==toolName
            });
            findIndex = toolBox.narzedzia.indexOf(toolName);
            console.log('\t' + findTool + ' (kategoria: '+toolBox.typ[toolBox.typNarzedzia[findIndex]]+')'); 
        },

        // Wyświetlenie stanu magazynowego narzędzia
        getToolStock: function(toolName) {
            console.log('\nStan magazynowy:');
            findIndex = toolBox.narzedzia.indexOf(toolName);
            console.log('\t' + toolBox.narzedzia[findIndex]+ ': '+ toolBox.stanNarzedzia[findIndex] + ' szt.');
        },

        // Kupno narzędzi
        buyTool: function(toolName) {
            console.log('\nZakupiono narzędzie:');
            findIndex = toolBox.narzedzia.indexOf(toolName);
            toolBox.stanNarzedzia[findIndex]++;
        },

        // Sprzedaż narzędzi
        sellTool: function(toolName) {
            console.log('\nSprzedano narzędzie:');
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
                    console.log('\nDodano narzędzie do listy.');
                } else {
                    console.log('\nPodano niewłaściwy typ narzędzia.');             
                }  
            } else {
                console.log('\nNarzędzie istnieje już w bazie.');                          
            }        
        },
    };
    return myInterface;
})();

tools.module.getToolsTypes();

tools.module.getToolType('Miara');
tools.module.buyTool('Miara');
tools.module.buyTool('Miara');
tools.module.getToolStock('Miara');
tools.module.sellTool('Miara');
tools.module.getToolStock('Miara');

tools.module.addTool('Ekierka','Pomiarowe');
tools.module.getToolsTypes();
tools.module.addTool('Ekierka','Pomiarowe');
tools.module.getToolsTypes();


