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
console.log('\nPrzykład 3:')


