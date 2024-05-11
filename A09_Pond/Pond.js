"use strict";
var Pond;
(function (Pond) {
    window.addEventListener("load", handleLoad);
    let canvas = document.querySelector("canvas");
    Pond.crc = canvas.getContext("2d");
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
        drawBirds();
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
        } while (x < canvas.width);
        Pond.crc.lineTo(x, 0);
        Pond.crc.closePath();
        Pond.crc.fillStyle = color;
        Pond.crc.fill();
    }
    function drawGrass() {
        Pond.crc.fillStyle = "#7bad87";
        Pond.crc.fillRect(0, 0, canvas.width, canvas.height);
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
        new Pond.Stone({ x: 300, y: 300 }, 1, "bigStone").draw();
        new Pond.Stone({ x: -20, y: 370 }, 1, "weirdStone").draw();
        new Pond.Stone({ x: 10, y: 400 }, 1, "smallStone").draw();
        new Pond.Stone({ x: 200, y: 280 }, 1, "weirdStone").draw();
        new Pond.Stone({ x: 210, y: 310 }, 1, "smallStone").draw();
        new Pond.Stone({ x: 725, y: 300 }, 1, "smallStone").draw();
        new Pond.Stone({ x: 770, y: 330 }, 1, "bigStone").draw();
        new Pond.Stone({ x: 710, y: 310 }, 1, "weirdStone").draw();
        new Pond.Stone({ x: 220, y: 435 }, 1, "smallStone").draw();
        new Pond.Stone({ x: 210, y: 420 }, 1, "weirdStone").draw();
    }
    function drawLilyPads() {
        new Pond.LilyPad({ x: 400, y: 400 }, 1, true);
    }
    function drawBirds() { }
})(Pond || (Pond = {}));
//# sourceMappingURL=Pond.js.map