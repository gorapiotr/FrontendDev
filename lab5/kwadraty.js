/*
    Aplikacja złap czerwony kwadrat
    Poruszja się strzałkami
    Po najechaniu na kwadrat przeciwnika, licznik się zwiększa o 1
*/

// Klasa podstawowa osobnika
class Square {
    constructor(startX, startY, size, step) {
        this.pos_x = startX;
        this.pos_y = startY;
        this.size = size;
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

    getSize() {
        return this.size;      
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
    constructor (startX, startY, size, step) {
        super(startX, startY, size, step);        
        this.name = "enemy";
        document.getElementById(this.name).style.left = this.getX();
        document.getElementById(this.name).style.top = this.getY();
        document.getElementById(this.name).style.width = this.getSize();
        document.getElementById(this.name).style.height = this.getSize();
    }

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
    constructor (startX, startY, size, step) {
        super(startX, startY, size, step);
        this.name = "player";
        document.getElementById(this.name).style.left = this.getX();
        document.getElementById(this.name).style.top = this.getY();
        document.getElementById(this.name).style.width = this.getSize();
        document.getElementById(this.name).style.height = this.getSize();
    }

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

    moveMouse(mouse) {
        if (mouse.clientX<this.getX()&&mouse.clientY>this.getY()&&mouse.clientY<this.getY()+this.getSize()) {
            this.moveLeft(this.step);
        }
        if (mouse.clientX>this.getX()+this.getSize()&&mouse.clientY>this.getY()&&mouse.clientY<this.getY()+this.getSize()) {
            this.moveRight(this.step);
        }
        if (mouse.clientY<this.getY()&&mouse.clientX>this.getX()&&mouse.clientX<this.getX()+this.getSize()) {
            this.moveUp(this.step);
        }
        if (mouse.clientY>this.getY()+this.getSize()&&mouse.clientX>this.getX()&&mouse.clientX<this.getX()+this.getSize()) {
            this.moveDown(this.step); 
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
        var redSquare = new Enemy(100,100,100,10);
        var greenSquare = new Player(150,100,100,10);
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
            .do(mouse => greenSquare.moveMouse(mouse))
            .subscribe({
            next: x => {
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
            .map(x => {if(greenSquare.collision(redSquare)){ licznik += 1;}})
            .subscribe({
                next: x => {
                    $('#wynik').text(licznik);
                }
            });
    }
}

// Aktywacja gry
var startGame = new Game;

