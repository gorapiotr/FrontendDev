/*
    Instalujemy rxjs w folderze projektu:
    npm install rxjs
    https://www.npmjs.com/package/rxjs
*/

// Przykład 1:
console.log('\nPrzykład 1:')
var Rx = require('rxjs/Rx');
var myObservable = Rx.Observable.range(0,10);
var myObserver = {
    next: item => console.log(`Next ${item}`),
    error: ex => console.log(),
    complete: () => console.log('Completed')
};
myObservable.subscribe(myObserver);

// Przykład 2: To samo co wyżej w jednej linii
console.log('\nPrzykład 2:')
var myObservable = Rx.Observable.range(0,10)
    .map(item => item * 2)
    .filter(item => item > 10)
    .subscribe({
        next: item => console.log(`Next ${item}`),
        error: ex => console.log(),
        complete: () => console.log('Completed')
    });

// Przykład 3:
//console.log('\nPrzykład 3:')
//Rx.Observable.range(0,5)

/*
function randommove(){
    var val= Math.floor(Math.random()* 4 +1)
    switch(x) {
        case 1:
            return "góra";
        case 2:
            return "prawo";
        case 3:
            return "dół";
        case 4:
            return "lewo";
        default:
            break;
    }

}
    var move = {
        UP: 1,
        RIGHT: 2,
        DOWN: 3,
        LEFT: 4
    }


Rx.Observable
    .timer(0,1000)
    .map(x => randommove())
    .subscribe({
        next: x => {
        console.log(x)}
    });
*/
    

