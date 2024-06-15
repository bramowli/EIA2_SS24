"use strict";
var Pond;
(function (Pond) {
    class Drawable {
        position;
        constructor(_position) {
            this.position = _position;
        }
        draw() {
            // executes draw of subclasses
        }
        ;
        interact(_hitPosition) {
            //executes interaction
        }
    }
    Pond.Drawable = Drawable;
})(Pond || (Pond = {}));
var Pond;
(function (Pond) {
    class Moveable extends Pond.Drawable {
        color;
        constructor(_position, _color) {
            super(_position);
            this.color = _color;
        }
        move() {
            // executes move from subclasses
        }
    }
    Pond.Moveable = Moveable;
})(Pond || (Pond = {}));
var Pond;
(function (Pond) {
    class Static extends Pond.Drawable {
        size;
        mirror;
        constructor(_position, _size, _mirror) {
            super(_position);
            this.size = _size;
            this.mirror = _mirror;
        }
    }
    Pond.Static = Static;
})(Pond || (Pond = {}));
var Pond;
(function (Pond) {
    class Bird extends Pond.Moveable {
        size;
        type;
        mirror;
        underWater;
        isBeakOpen = false;
        constructor(_position, _size, _type, _color, _mirror) {
            super(_position, _color);
            this.position = _position;
            this.size = _size;
            this.type = _type;
            this.color = _color;
            this.mirror = _mirror;
            this.underWater = -1;
        }
        draw() {
            Pond.crc.save();
            Pond.crc.translate(this.position.x, this.position.y);
            if (this.mirror == false) {
                Pond.crc.scale(-this.size, this.size);
            }
            else {
                Pond.crc.scale(this.size, this.size);
            }
            Pond.crc.fillStyle = this.color;
            Pond.crc.beginPath();
            if (this.type === "sleepingBird") {
                Pond.crc.moveTo(0, 0);
                Pond.crc.bezierCurveTo(0, 15, -40, 15, -40, -4);
                Pond.crc.bezierCurveTo(-40, 0, -10, -14, 0, 0);
                Pond.crc.closePath();
                Pond.crc.fill();
            }
            else if (this.type === "eatingBird") {
                Pond.crc.moveTo(15, 0);
                Pond.crc.bezierCurveTo(15, 0, 15, -25, -5, -25);
                Pond.crc.bezierCurveTo(0, -25, -10, 0, -5, 0);
                Pond.crc.closePath();
                Pond.crc.fill();
            }
            else if (this.type === "swimmingBird" || this.type === "walkingBird") {
                Pond.crc.moveTo(0, -8);
                Pond.crc.bezierCurveTo(0, 15, -40, 15, -40, 0);
                Pond.crc.moveTo(-38, 5);
                Pond.crc.bezierCurveTo(-45, 0, -45, -30, -40, -10);
                Pond.crc.ellipse(-45, -15, 7, 5, Math.PI * 2, 0, Math.PI * 2);
                Pond.crc.bezierCurveTo(-37, -15, -40, 0, -30, 0);
                Pond.crc.bezierCurveTo(-40, 0, -10, -14, -2, 0);
                Pond.crc.closePath();
                Pond.crc.fill();
                this.drawBeak();
                this.drawEye();
                if (this.type === "walkingBird") {
                    this.drawLeg();
                }
                if (this.isBeakOpen)
                    this.drawInteraction();
            }
            //this.hitbox();
            Pond.crc.restore();
        }
        drawBeak() {
            Pond.crc.translate(-50, -14);
            Pond.crc.fillStyle = "#a86f32";
            Pond.crc.beginPath();
            Pond.crc.moveTo(0, 0);
            Pond.crc.bezierCurveTo(0, 3, -9, 2, -9, -1);
            Pond.crc.bezierCurveTo(-11, -4, 0, -2, 0, 0);
            Pond.crc.closePath();
            Pond.crc.fill();
        }
        drawEye() {
            Pond.crc.translate(47, 12);
            Pond.crc.fillStyle = "#000000";
            Pond.crc.beginPath();
            Pond.crc.moveTo(0, 0);
            Pond.crc.arc(-45, -15, 1, Math.PI * 2, 0);
            Pond.crc.closePath();
            Pond.crc.fill();
        }
        drawLeg() {
            Pond.crc.translate(-10, 9.5);
            Pond.crc.fillStyle = "#a86f32";
            Pond.crc.beginPath();
            Pond.crc.moveTo(0, 0);
            Pond.crc.lineTo(0, 15);
            Pond.crc.bezierCurveTo(0, 17, -10, 17, -7, 15);
            Pond.crc.bezierCurveTo(-10, 14, -10, 12, -7, 12);
            Pond.crc.bezierCurveTo(-8, 12, -7, 9, -5, 12);
            Pond.crc.lineTo(-5, 2);
            Pond.crc.closePath();
            Pond.crc.fill();
        }
        hitbox() {
            // if (this.type === "swimmingBird") {
            //   crc.beginPath();
            //   crc.moveTo(2, 0);
            //   crc.lineTo(2, -7);
            //   crc.moveTo(2, -7);
            //   crc.lineTo(-33, -7);
            //   crc.moveTo(-33, -7);
            //   crc.lineTo(-33, -18);
            //   crc.moveTo(-33, -18);
            //   crc.lineTo(-57, -18);
            //   crc.moveTo(-57, -18);
            //   crc.lineTo(-57, -8);
            //   crc.moveTo(-57, -8);
            //   crc.lineTo(-40, -8);
            //   crc.moveTo(-40, -8);
            //   crc.lineTo(-40, 12);
            //   crc.moveTo(-40, 12);
            //   crc.lineTo(2, 12);
            //   crc.moveTo(2, 12);
            //   crc.lineTo(2, 0);
            //   crc.closePath();
            //   crc.stroke();
            // } else if (this.type === "walkingBird") {
            //   crc.beginPath();
            //   crc.moveTo(12, 0);
            //   crc.lineTo(12, -16);
            //   crc.moveTo(12, -16);
            //   crc.lineTo(-23, -12);
            //   crc.moveTo(-23, -12);
            //   crc.lineTo(-23, -28);
            //   crc.moveTo(-23, -28);
            //   crc.lineTo(-47, -28);
            //   crc.moveTo(-47, -28);
            //   crc.lineTo(-47, -16);
            //   crc.moveTo(-47, -16);
            //   crc.lineTo(-30, -16);
            //   crc.moveTo(-30, -16);
            //   crc.lineTo(-30, 2);
            //   crc.moveTo(-30, 2);
            //   crc.lineTo
            //   crc.closePath()
            //   crc.stroke()
            //}
        }
        move() {
            let offset = 700;
            if (this.type === "sleepingBird")
                return;
            if (this.type === "swimmingBird") {
                offset = 500;
                if (Math.random() <= 0.001) {
                    this.type = "eatingBird";
                }
            }
            if (this.type === "eatingBird") {
                offset = 500;
                this.underWater++;
                if (this.underWater >= 50 && Math.random() >= 0.001) {
                    this.type = "swimmingBird";
                    this.underWater = -1;
                }
            }
            if (this.mirror === true) {
                this.position.x -= 1;
                if (this.position.x <= Pond.canvas.width - offset) {
                    this.mirror = false;
                    this.position.x += 2;
                }
            }
            else {
                this.position.x += 2;
                if (this.position.x >= Pond.canvas.width - 100) {
                    this.mirror = true;
                    this.position.x -= 2;
                }
            }
        }
        interact(_hitPosition) {
            if (this.type != "swimmingBird" && this.type != "walkingBird")
                return;
            if (_hitPosition.x >= this.position.x - 57 &&
                _hitPosition.x <= this.position.x &&
                _hitPosition.y >= this.position.y - 18 &&
                _hitPosition.y <= this.position.y + 12) {
                this.isBeakOpen = !this.isBeakOpen;
                new Audio("assets/Quack.wav").play();
                console.log("geht");
            }
        }
        drawInteraction() {
            Pond.crc.fillStyle = "#a86f32";
            if (this.type === "swimmingBird") {
                Pond.crc.beginPath();
                Pond.crc.moveTo(-50, -10);
                Pond.crc.bezierCurveTo(-48, -9, -55, -7, -55, -7);
                Pond.crc.lineTo(-50, -15);
                Pond.crc.moveTo(0, 0);
                Pond.crc.closePath();
                Pond.crc.fill();
                Pond.crc.beginPath();
                Pond.crc.moveTo(-60, -14);
                Pond.crc.lineTo(-67, -16);
                Pond.crc.moveTo(-60, -12);
                Pond.crc.lineTo(-67, -12);
                Pond.crc.moveTo(-60, -10);
                Pond.crc.lineTo(-67, -8);
                Pond.crc.moveTo(0, 0);
                Pond.crc.closePath();
                Pond.crc.stroke();
            }
            else if (this.type === "walkingBird") {
                Pond.crc.beginPath();
                Pond.crc.moveTo(-37, -23);
                Pond.crc.bezierCurveTo(-35, -17, -45, -15, -45, -15);
                Pond.crc.lineTo(-37, -23);
                Pond.crc.moveTo(0, 0);
                Pond.crc.closePath();
                Pond.crc.fill();
                Pond.crc.beginPath();
                Pond.crc.moveTo(-54, -21);
                Pond.crc.lineTo(-61, -23);
                Pond.crc.moveTo(-54, -19);
                Pond.crc.lineTo(-61, -19);
                Pond.crc.moveTo(-54, -17);
                Pond.crc.lineTo(-61, -15);
                Pond.crc.moveTo(0, 0);
                Pond.crc.closePath();
                Pond.crc.stroke();
            }
        }
    }
    Pond.Bird = Bird;
})(Pond || (Pond = {}));
var Pond;
(function (Pond) {
    class LilyPad extends Pond.Static {
        doesItSplash = false;
        constructor(_position, _size, _mirror) {
            super(_position, _size, _mirror);
        }
        draw() {
            Pond.crc.save();
            Pond.crc.translate(this.position.x, this.position.y);
            Pond.crc.fillStyle = "#273b20";
            Pond.crc.strokeStyle = "#1f2e19";
            Pond.crc.lineWidth = 3;
            Pond.crc.scale(this.size, this.size);
            if (this.mirror === true) {
                Pond.crc.beginPath();
                Pond.crc.moveTo(0, 0);
                Pond.crc.ellipse(0, 0, 30, 15, Math.PI * 2, 0, Math.PI * 1.7);
            }
            else if (this.mirror === false) {
                Pond.crc.beginPath();
                Pond.crc.moveTo(0, 0);
                Pond.crc.ellipse(0, 0, 30, 15, Math.PI * 1, 0, Math.PI * 1.7);
            }
            Pond.crc.closePath();
            Pond.crc.stroke();
            Pond.crc.fill();
            if (this.doesItSplash === true)
                this.drawInteraction();
            Pond.crc.restore();
        }
        interact(_hitPosition) {
            if (_hitPosition.x >= this.position.x - 30 &&
                _hitPosition.x <= this.position.x &&
                _hitPosition.y >= this.position.y - 15 &&
                _hitPosition.y <= this.position.y) {
                this.doesItSplash = !this.doesItSplash;
                new Audio("assets/Platsch.wav").play();
                console.log("platsch");
            }
        }
        drawInteraction() {
            Pond.crc.strokeStyle = "#374161";
            Pond.crc.beginPath();
            Pond.crc.lineTo(-25, 20);
            Pond.crc.bezierCurveTo(-13, 30, 15, 30, 30, 20);
            Pond.crc.moveTo(-25, -20);
            Pond.crc.bezierCurveTo(-13, -30, 15, -30, 30, -20);
            Pond.crc.stroke();
            console.log("fdg");
        }
    }
    Pond.LilyPad = LilyPad;
})(Pond || (Pond = {}));
var Pond;
(function (Pond) {
    class Petal extends Pond.Moveable {
        startPosition;
        constructor(_position, _color) {
            super(_position, _color);
            this.position = { x: _position.x, y: _position.y };
            this.startPosition = { x: _position.x, y: _position.y };
            this.color = _color;
        }
        draw() {
            Pond.crc.save();
            Pond.crc.translate(this.position.x, this.position.y);
            Pond.crc.beginPath();
            Pond.crc.moveTo(0, 0);
            Pond.crc.bezierCurveTo(0, 0, 20, 15, 20, 5);
            Pond.crc.bezierCurveTo(20, 0, 15, -5, 0, 0);
            Pond.crc.closePath();
            if (this.color === "lighter") {
                Pond.crc.fillStyle = "#ffcffd";
            }
            else if (this.color === "darker") {
                Pond.crc.fillStyle = "#f5b0f2";
            }
            Pond.crc.fill();
            Pond.crc.restore();
        }
        move() {
            this.position.x += 2 + Math.random() * 5;
            this.position.y += 2 + Math.random() * 5;
            if (this.position.y >= Pond.canvas.height) {
                this.position = { x: this.startPosition.x, y: this.startPosition.y };
            }
        }
    }
    Pond.Petal = Petal;
})(Pond || (Pond = {}));
var Pond;
(function (Pond) {
    window.addEventListener("load", handleLoad);
    Pond.canvas = document.querySelector("canvas");
    Pond.crc = Pond.canvas.getContext("2d");
    Pond.canvas.addEventListener("click", handleClick);
    let moveables = [];
    let lilyPads = [];
    let background;
    Pond.crc.fillStyle = "#c0f2fa";
    Pond.crc.fillRect(0, 0, Pond.crc.canvas.width, Pond.crc.canvas.height);
    function handleLoad(_event) {
        drawHills({ x: 0, y: 170 }, 50, 150, "#91ccbd");
        drawGrass();
        drawPond({ x: 750, y: 450 });
        drawWall();
        drawTree();
        drawStones();
        drawLilyPads();
        drawReeds();
        background = Pond.crc.getImageData(0, 0, Pond.canvas.width, Pond.canvas.height);
        drawBirds();
        drawPetals();
        setInterval(animate, 40);
    }
    function handleClick(_event) {
        let hit = { x: _event.offsetX, y: _event.offsetY };
        for (let moveable of moveables) {
            moveable.interact(hit);
        }
        for (let lilyPad of lilyPads) {
            lilyPad.interact(hit);
        }
    }
    function drawHills(_position, _min, _max, color) {
        let stepMin = 115;
        let stepMax = 180;
        let x = 0;
        Pond.crc.save();
        Pond.crc.translate(_position.x, _position.y);
        Pond.crc.beginPath();
        Pond.crc.moveTo(0, 0);
        Pond.crc.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            // to have rounded mountaintops
            let cpX1 = x - (stepMin + stepMax) / 8;
            let cpY1 = y - (_max - _min) / 4;
            let cpX2 = x - (stepMin + stepMax) / 8;
            let cpY2 = y;
            Pond.crc.bezierCurveTo(cpX1, cpY1, cpX2, cpY2, x, y);
        } while (x < Pond.canvas.width);
        Pond.crc.lineTo(x, 0);
        Pond.crc.closePath();
        Pond.crc.fillStyle = color;
        Pond.crc.fill();
    }
    function drawGrass() {
        Pond.crc.fillStyle = "#7bad87";
        Pond.crc.fillRect(0, 0, Pond.canvas.width, Pond.canvas.height);
        Pond.crc.restore();
    }
    function drawPond(_position) {
        Pond.crc.restore();
        Pond.crc.save();
        Pond.crc.translate(_position.x, _position.y);
        Pond.crc.beginPath();
        Pond.crc.ellipse(-300, -80, 300, 100, 0, 0, Math.PI * 2);
        Pond.crc.arc(-150, 0, 200, 0, Math.PI * 2);
        Pond.crc.closePath();
        Pond.crc.fillStyle = "#53608a";
        Pond.crc.fill();
        Pond.crc.restore();
    }
    function drawTree() {
        drawTrunk();
        drawCrown();
    }
    function drawCrown() {
        Pond.crc.save();
        Pond.crc.beginPath();
        Pond.crc.arc(0, 0, 200, 0, Math.PI * 2);
        Pond.crc.moveTo(0, 0);
        Pond.crc.arc(160, 0, 40, 0, Math.PI * 2);
        Pond.crc.moveTo(0, 0);
        Pond.crc.arc(160, 50, 50, 0, Math.PI * 2);
        Pond.crc.moveTo(0, 0);
        Pond.crc.arc(170, 110, 40, 0, Math.PI * 2);
        Pond.crc.moveTo(0, 0);
        Pond.crc.arc(135, 150, 40, 0, Math.PI * 2);
        Pond.crc.moveTo(0, 0);
        Pond.crc.arc(80, 170, 40, 0, Math.PI * 2);
        Pond.crc.moveTo(0, 0);
        Pond.crc.arc(20, 160, 60, 0, Math.PI * 2);
        Pond.crc.closePath();
        Pond.crc.fillStyle = "#ffcffd";
        Pond.crc.fill();
        Pond.crc.restore();
    }
    function drawTrunk() {
        Pond.crc.save();
        Pond.crc.translate(0, 400);
        Pond.crc.beginPath();
        Pond.crc.lineTo(0, -200);
        Pond.crc.lineTo(50, -200);
        Pond.crc.bezierCurveTo(0, 0, 100, 0, 80, 0);
        Pond.crc.lineTo(0, 0);
        Pond.crc.moveTo(50, -120);
        Pond.crc.arc(30, -120, 20, 0, Math.PI * 2);
        Pond.crc.closePath();
        Pond.crc.fillStyle = "#401c05";
        Pond.crc.fill();
        Pond.crc.restore();
    }
    function drawWall() {
        Pond.crc.save();
        Pond.crc.translate(0, 180);
        Pond.crc.beginPath();
        Pond.crc.moveTo(-100, 0);
        Pond.crc.bezierCurveTo(300, -50, 650, -50, 850, 0);
        Pond.crc.lineTo(850, 200);
        Pond.crc.bezierCurveTo(850, 30, 650, -50, 0, 50);
        Pond.crc.closePath();
        Pond.crc.fillStyle = "#bdb9b9";
        Pond.crc.fill();
        Pond.crc.strokeStyle = "#aba9a9";
        Pond.crc.lineWidth = 4;
        Pond.crc.stroke();
        // // for future details
        // const x = 10; // X-Position des Steins
        // const y = 10; // Y-Position des Steins
        // const width = 80; // Breite des Steins
        // const height = 60; // Höhe des Steins
        // crc.beginPath();
        // crc.moveTo(x + width * 0.1, y); // Obere linke Ecke
        // crc.lineTo(x + width * 0.9, y); // Obere rechte Ecke
        // crc.quadraticCurveTo(x + width, y + height * 0.1, x + width, y + height * 0.5); // Rundung oben rechts
        // crc.quadraticCurveTo(x + width, y + height * 0.9, x + width * 0.9, y + height); // Rundung unten rechts
        // crc.lineTo(x + width * 0.1, y + height); // Untere linke Ecke
        // crc.quadraticCurveTo(x, y + height * 0.9, x, y + height * 0.5); // Rundung unten links
        // crc.quadraticCurveTo(x, y + height * 0.1, x + width * 0.1, y); // Rundung oben links
        // crc.closePath();
        // crc.fillStyle = "#999"; // Graue Farbe für den Stein
        // crc.fill();
        Pond.crc.restore();
    }
    function drawStones() {
        new Pond.Stone({ x: 300, y: 300 }, 1, "bigStone", true).draw();
        new Pond.Stone({ x: -20, y: 370 }, 1, "weirdStone", true).draw();
        new Pond.Stone({ x: 10, y: 400 }, 1, "smallStone", true).draw();
        new Pond.Stone({ x: 200, y: 280 }, 1, "weirdStone", true).draw();
        new Pond.Stone({ x: 210, y: 310 }, 1, "smallStone", true).draw();
        new Pond.Stone({ x: 725, y: 300 }, 1, "smallStone", true).draw();
        new Pond.Stone({ x: 770, y: 330 }, 1, "bigStone", true).draw();
        new Pond.Stone({ x: 710, y: 310 }, 1, "weirdStone", true).draw();
        new Pond.Stone({ x: 220, y: 435 }, 1, "smallStone", true).draw();
        new Pond.Stone({ x: 210, y: 420 }, 1, "weirdStone", true).draw();
    }
    function drawLilyPads() {
        lilyPads.push(new Pond.LilyPad({ x: 600, y: 400 }, 1, true));
        lilyPads.push(new Pond.LilyPad({ x: 630, y: 300 }, 1, false));
        lilyPads.push(new Pond.LilyPad({ x: 680, y: 420 }, 1, false));
    }
    function drawReeds() {
        new Pond.Reed({ x: 550, y: 270 }, 1, true, "twoLeaves").draw();
        new Pond.Reed({ x: 560, y: 275 }, 1, true, "oneLeaf").draw();
        new Pond.Reed({ x: 570, y: 270 }, 1, true, "twoLeaves").draw();
        new Pond.Reed({ x: 580, y: 280 }, 1, true, "twoLeaves").draw();
        new Pond.Reed({ x: 588, y: 273 }, 1, true, "noLeaf").draw();
        new Pond.Reed({ x: 598, y: 275 }, 1, true, "noLeaf").draw();
        new Pond.Reed({ x: 605, y: 273 }, 1, true, "oneLeaf").draw();
        new Pond.Reed({ x: 610, y: 280 }, 1, true, "twoLeaves").draw();
        new Pond.Reed({ x: 223, y: 296 }, 1, true, "twoLeaves").draw();
    }
    function drawBirds() {
        moveables.push(new Pond.Bird({ x: 200, y: 230 }, 0.75, "walkingBird", "#996633", false));
        moveables.push(new Pond.Bird({ x: 240, y: 240 }, 0.75, "walkingBird", "#666633", false));
        moveables.push(new Pond.Bird({ x: 600, y: 440 }, 0.75, "swimmingBird", "#996633", true));
        moveables.push(new Pond.Bird({ x: 240, y: 400 }, 0.75, "swimmingBird", "#666633", false));
        moveables.push(new Pond.Bird({ x: 400, y: 300 }, 1, "swimmingBird", "#ffffff", true));
        moveables.push(new Pond.Bird({ x: 450, y: 300 }, 0.5, "swimmingBird", "#e6d067", true));
        moveables.push(new Pond.Bird({ x: 500, y: 300 }, 0.5, "swimmingBird", "#e6d067", true));
        moveables.push(new Pond.Bird({ x: 550, y: 300 }, 0.5, "swimmingBird", "#e6d067", true));
        moveables.push(new Pond.Bird({ x: 400, y: 350 }, 1, "swimmingBird", "#ffffff", false));
        moveables.push(new Pond.Bird({ x: 320, y: 250 }, 1, "walkingBird", "#ffffff", true));
        moveables.push(new Pond.Bird({ x: 120, y: 435 }, 1, "sleepingBird", "#ffffff", true));
        moveables.push(new Pond.Bird({ x: 220, y: 420 }, 1, "eatingBird", "#ffffff", false));
    }
    function drawPetals() {
        // for having multiple petals
        for (let i = 0; i < 30; i++) {
            let color;
            let math = Math.random();
            if (math <= 0.5) {
                color = "lighter";
            }
            else if (math > 0.5) {
                color = "darker";
            }
            moveables.push(new Pond.Petal({ x: Math.random() * 200, y: Math.random() * 250 }, color));
            //console.log(petals[i]);
        }
    }
    function animate() {
        Pond.crc.putImageData(background, 0, 0);
        for (let lilyPad of lilyPads) {
            lilyPad.draw();
        }
        for (let i = 0; i < moveables.length; i++) {
            moveables[i].move();
            moveables[i].draw();
        }
        drawReeds();
    }
})(Pond || (Pond = {}));
var Pond;
(function (Pond) {
    class Reed extends Pond.Static {
        type;
        constructor(_position, _size, _mirror, _type) {
            super(_position, _size, _mirror);
            this.type = _type;
        }
        draw() {
            if (this.type === "noLeaf") {
                this.drawStem();
                this.drawCatTail();
            }
            else if (this.type === "oneLeaf") {
                this.drawStem();
                this.drawCatTail();
                this.drawLeaf1();
            }
            else if (this.type === "twoLeaves") {
                this.drawStem();
                this.drawCatTail();
                this.drawLeaf1();
                this.drawLeaf2();
            }
        }
        drawStem() {
            Pond.crc.save();
            Pond.crc.translate(this.position.x, this.position.y);
            Pond.crc.fillStyle = "#404f27";
            Pond.crc.beginPath();
            Pond.crc.moveTo(0, 0);
            Pond.crc.bezierCurveTo(0, -30, 10, -100, 40, -120);
            Pond.crc.lineTo(45, -120);
            Pond.crc.bezierCurveTo(15, -100, 5, -30, 5, 0);
            Pond.crc.lineTo(0, 0);
            Pond.crc.closePath();
            Pond.crc.fill();
            Pond.crc.restore();
        }
        drawCatTail() {
            Pond.crc.save();
            Pond.crc.translate(this.position.x + 45, this.position.y - 128);
            Pond.crc.fillStyle = "#401c05";
            Pond.crc.beginPath();
            Pond.crc.ellipse(0, 0, 15, 5, Math.PI * 1.7, 0, Math.PI * 2);
            Pond.crc.closePath();
            Pond.crc.fill();
            Pond.crc.restore();
        }
        drawLeaf1() {
            Pond.crc.save();
            Pond.crc.translate(this.position.x + 8, this.position.y - 50);
            Pond.crc.fillStyle = "#404f27";
            Pond.crc.beginPath();
            Pond.crc.moveTo(0, 0);
            Pond.crc.bezierCurveTo(10, -8, 15, -25, 30, -60);
            Pond.crc.bezierCurveTo(10, -30, 15, -30, -2, 0);
            Pond.crc.closePath();
            Pond.crc.fill();
            Pond.crc.restore();
        }
        drawLeaf2() {
            Pond.crc.save();
            Pond.crc.translate(this.position.x + 6, this.position.y - 20);
            Pond.crc.fillStyle = "#404f27";
            Pond.crc.beginPath();
            Pond.crc.moveTo(0, 0);
            Pond.crc.bezierCurveTo(-8, -8, -5, -35, 0, -80);
            Pond.crc.bezierCurveTo(0, -30, 0, -30, 0, -4);
            Pond.crc.closePath();
            Pond.crc.fill();
            Pond.crc.restore();
        }
        goose() { }
    }
    Pond.Reed = Reed;
})(Pond || (Pond = {}));
var Pond;
(function (Pond) {
    class Stone extends Pond.Static {
        type;
        constructor(_position, _size, _type, _mirror) {
            super(_position, _size, _mirror);
            this.type = _type;
        }
        draw() {
            Pond.crc.save();
            Pond.crc.translate(this.position.x, this.position.y);
            Pond.crc.fillStyle = "#737373";
            Pond.crc.strokeStyle = "#595959";
            Pond.crc.lineWidth = 3;
            Pond.crc.scale(this.size, this.size);
            if (this.type === "bigStone") {
                Pond.crc.beginPath();
                Pond.crc.moveTo(0, 0);
                Pond.crc.bezierCurveTo(0, -40, -70, -40, -70, 0);
                Pond.crc.lineTo(0, 0);
                Pond.crc.stroke();
            }
            else if (this.type === "smallStone") {
                Pond.crc.beginPath();
                Pond.crc.ellipse(0, 0, 10, 5, 0, 0, Math.PI * 2);
                Pond.crc.stroke();
            }
            else if (this.type === "weirdStone") {
                Pond.crc.beginPath();
                Pond.crc.lineTo(10, 20);
                Pond.crc.arc(40, 30, 15, -Math.PI / 2, 0);
                Pond.crc.lineTo(15, 30);
                Pond.crc.lineTo(10, 20);
                Pond.crc.stroke();
            }
            Pond.crc.closePath();
            Pond.crc.fill();
            Pond.crc.restore();
        }
    }
    Pond.Stone = Stone;
})(Pond || (Pond = {}));
//# sourceMappingURL=build.js.map