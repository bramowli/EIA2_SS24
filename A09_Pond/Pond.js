"use strict";
var Pond;
(function (Pond) {
    window.addEventListener("load", handleLoad);
    let canvas = document.querySelector("canvas");
    let crc = canvas.getContext("2d");
    crc.fillStyle = "#c0f2fa";
    crc.fillRect(0, 0, crc.canvas.width, crc.canvas.height);
    function handleLoad(_event) {
        drawHills({ x: 0, y: 170 }, 50, 150, "#91ccbd");
        drawGrass();
        drawPond({ x: 750, y: 450 });
        drawTree();
    }
    function drawHills(_position, _min, _max, color) {
        let stepMin = 115;
        let stepMax = 180;
        let x = 0;
        crc.save();
        crc.translate(_position.x, _position.y);
        crc.beginPath();
        crc.moveTo(0, 0);
        crc.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            // to have rounded mountaintops
            let cpX1 = x - (stepMin + stepMax) / 8;
            let cpY1 = y - (_max - _min) / 4;
            let cpX2 = x - (stepMin + stepMax) / 8;
            let cpY2 = y;
            crc.bezierCurveTo(cpX1, cpY1, cpX2, cpY2, x, y);
        } while (x < canvas.width);
        crc.lineTo(x, 0);
        crc.closePath();
        crc.fillStyle = color;
        crc.fill();
    }
    function drawGrass() {
        crc.fillStyle = "#7bad87";
        crc.fillRect(0, 0, canvas.width, canvas.height);
    }
    function drawPond(_position) {
        crc.restore();
        crc.save();
        crc.translate(_position.x, _position.y);
        crc.beginPath();
        crc.ellipse(-300, -80, 300, 100, 0, 0, Math.PI * 2);
        crc.arc(-150, 0, 200, 0, Math.PI * 2);
        crc.closePath();
        crc.fillStyle = "#53608a";
        crc.fill();
        crc.restore();
    }
    function drawTree() {
        drawTrunk();
        drawCrown();
    }
    function drawCrown() {
        crc.beginPath();
        crc.arc(0, 0, 200, 0, Math.PI * 2);
        crc.moveTo(0, 0);
        crc.arc(160, 0, 40, 0, Math.PI * 2);
        crc.moveTo(0, 0);
        crc.arc(160, 50, 50, 0, Math.PI * 2);
        crc.moveTo(0, 0);
        crc.arc(170, 110, 40, 0, Math.PI * 2);
        crc.moveTo(0, 0);
        crc.arc(135, 150, 40, 0, Math.PI * 2);
        crc.moveTo(0, 0);
        crc.arc(80, 170, 40, 0, Math.PI * 2);
        crc.moveTo(0, 0);
        crc.arc(20, 160, 60, 0, Math.PI * 2);
        crc.closePath();
        crc.fillStyle = "#ffcffd";
        crc.fill();
    }
    function drawTrunk() {
        crc.save();
        crc.translate(0, 400);
        crc.beginPath();
        crc.lineTo(0, -200);
        crc.lineTo(50, -200);
        crc.bezierCurveTo(0, 0, 100, 0, 80, 0);
        crc.lineTo(0, 0);
        crc.moveTo(50, -120);
        crc.arc(30, -120, 20, 0, Math.PI * 2);
        crc.closePath();
        crc.fillStyle = "#401c05";
        crc.fill();
        crc.restore();
    }
})(Pond || (Pond = {}));
//# sourceMappingURL=Pond.js.map