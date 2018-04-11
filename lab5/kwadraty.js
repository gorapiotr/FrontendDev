/*
    Aplikacja kwadraty
*/
//var Rx = require('rxjs/Rx');

//var  keyups = Rx.Observable.fromEvent(q, 'keyup');

function randommove(){
    var val= Math.floor(Math.random()* 4 +1)
    switch(val) {
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

    var max_x = document.body.offsetWidth;
    var max_y = document.body.offsetHeight;
    var pos_x = Math.round(max_x/2);
    var pos_y = Math.round(max_y/2);
     
    var move = {
        UP: 1,
        RIGHT: 2,
        DOWN: 3,
        LEFT: 4
    }

Rx.Observable
    .timer(0,50)
    .map(x => randommove())
    .subscribe({
        next: x => {
            switch(x) {
                case "góra":
                    pos_y>10? pos_y -=10:pos_y=max_y-10;
                    break;
                case "prawo":
                    pos_x<max_x? pos_x +=10:pos_x=10;
                    break;
                case "dół":
                    pos_y<max_y? pos_y +=10:pos_y=10;
                    break;
                case "lewo":
                    pos_x>10? pos_x -=10:pos_x=max_x-10;
                    break;
            }
            document.getElementById("enemy").style.left = pos_x;
            document.getElementById("enemy").style.top = pos_y;
        console.log(x)}
    });