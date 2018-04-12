/*
    Aplikacja złap czerwony kwadrat
    Poruszja się strzałkami
    Po najechaniu na kwadrat przeciwnika, licznik się zwiększa o 1
*/

// Klasa podstawowa osobnika
class Square {
    constructor(startX, startY, step) {
        this.pos_x = startX;
        this.pos_y = startY;
        this.step = step;
        this.max_x = document.body.offsetWidth;
        this.max_y = document.body.offsetHeight;
    }

    getX() {
        return this.pos_x;
    }

    getY() {
        return this.pos_y;      
    }

    moveLeft(step) {
        this.pos_x>step? this.pos_x -= step : this.pos_x = this.max_x;
    }

    moveRight(step) {
        this.pos_x<this.max_x? this.pos_x += step : this.pos_x = step;
    }

    moveUp(step) {
        this.pos_y>step? this.pos_y -= step : this.pos_y = this.max_y;
    }

    moveDown(step) {
        this.pos_y<this.max_y? this.pos_y += step : this.pos_y = step;
    }
}

// Klasa potomna osobnika - wróg
class Enemy extends Square {
    randomMove() {
        let val= Math.floor(Math.random()* 4 +1)
        switch(val) {
            case 1:
                this.moveUp(this.step);
                break;
            case 2:
                this.moveRight(this.step);
                break;
            case 3:
                this.moveDown(this.step);
                break;
            case 4:
                this.moveLeft(this.step);
                break;
        }
    }
}

// Klasa potomna osobnika - gracz
class Player extends Square {
    move(key) {
        switch(key) {
            case "ArrowUp":
                this.moveUp(this.step);
                break;
            case "ArrowDown":
                this.moveDown(this.step);
                break;
            case "ArrowLeft":
                this.moveLeft(this.step);
                break;
            case "ArrowRight":
                this.moveRight(this.step);
                break;
        }
    }

    collision(Square) {
        if (Square.getX()==this.getX() && Square.getY()==this.getY()) {
            return true;
        } else return false;
    }
}

// Główna klasa gry
class Game {
    constructor () {
        let redSquare = new Enemy(100,100,10);
        let greenSquare = new Player(150,100,10);
        let licznik = 0;
        
        // Obsługa gracza
        let key = Rx.Observable.fromEvent(document, 'keyup')
            .map(key => greenSquare.move(key.key))
            .subscribe({
                next: key => {
                    document.getElementById("player").style.left = greenSquare.getX();
                    document.getElementById("player").style.top = greenSquare.getY();
                }
            });

        let mouse = Rx.Observable.fromEvent(document, 'mousedown')
            .subscribe({
            next: x => {
                if (x.clientX<greenSquare.getX()&&x.clientY>greenSquare.getY()&&x.clientY<greenSquare.getY()+50) {
                    greenSquare.move("ArrowLeft"); 
                }
                if (x.clientX>greenSquare.getX()+50&&x.clientY>greenSquare.getY()&&x.clientY<greenSquare.getY()+50) {
                    greenSquare.move("ArrowRight"); 
                }
                if (x.clientY<greenSquare.getY()&&x.clientX>greenSquare.getX()&&x.clientX<greenSquare.getX()+50) {
                    greenSquare.move("ArrowUp"); 
                }
                if (x.clientY>greenSquare.getY()+50&&x.clientX>greenSquare.getX()&&x.clientX<greenSquare.getX()+50) {
                    greenSquare.move("ArrowDown"); 
                }
                console.log(x.clientX+" "+greenSquare.getX());                  
                document.getElementById("player").style.left = greenSquare.getX();
                document.getElementById("player").style.top = greenSquare.getY();
            }
        });
        
        // Obsługa wroga
        let enemy = Rx.Observable
            .timer(0,500)
            .map(x => redSquare.randomMove())
            .subscribe({
                next: x => {
                    document.getElementById("enemy").style.left = redSquare.getX();
                    document.getElementById("enemy").style.top = redSquare.getY();
                }
            });

        // Obsługa kolizji
        let boom = Rx.Observable.interval(200)
            .subscribe({
                next: x => {
                    if(greenSquare.collision(redSquare)){ licznik += 1;};
                    $('#wynik').text(licznik);
                }
            });
    }
}

// Aktywacja gry
var startGame = new Game;

