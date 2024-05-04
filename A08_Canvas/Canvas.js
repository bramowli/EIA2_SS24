"use strict";
var Canvas;
(function (Canvas) {
    let cvs = document.querySelector("canvas");
    let crc = cvs.getContext("2d");
    crc.fillRect(0, 0, crc.canvas.width, crc.canvas.height);
    crc.strokeStyle = "#FFFFFF";
    let rndAmount = Math.floor(Math.random() * 37);
    let gradient = crc.createLinearGradient(0, 0, 500, 500);
    gradient.addColorStop(0, "#34a38f");
    gradient.addColorStop(1, "#5f34a3");
    let radGradient = crc.createRadialGradient(0, 0, 0, 0, 0, 70);
    radGradient.addColorStop(0, "#9c492260");
    radGradient.addColorStop(1, "#9c4922");
    crc.fillStyle = gradient;
    crc.fillRect(0, 0, 500, 500);
    while (rndAmount >= 0) {
        let y = Math.floor(Math.random() * cvs.width);
        let v = Math.floor(Math.random() * cvs.height);
        crc.save();
        crc.translate(v, y);
        crc.fill(getCircle());
        rndAmount--;
        crc.restore();
    }
    const random = Math.floor(Math.random() * 2);
    let color;
    switch (random) {
        case 0:
            color = "#1a4f46";
            break;
        case 1:
            color = "#4f1a2e";
            break;
    }
    crc.fillStyle = color;
    for (let i = 0; i < cvs.width; i += Math.random() * 30 + 55) {
        for (let j = 0; j < cvs.height; j += Math.random() * 30 + 55) {
            crc.save();
            crc.translate(i, j);
            if (Math.random() <= 0.25) {
                crc.stroke(getTriangle(50));
            }
            else if (Math.random() <= 0.25) {
                crc.fill(getTriangle(100));
            }
            crc.restore();
        }
    }
    function getTriangle(_size) {
        let triangle = new Path2D();
        triangle.moveTo(Math.random() * _size, Math.random() * _size);
        triangle.lineTo(Math.random() * _size, Math.random() * _size);
        triangle.lineTo(Math.random() * _size, Math.random() * _size);
        triangle.closePath();
        return triangle;
    }
    function getCircle() {
        let rad = Math.floor(Math.random() * 50) + 3;
        let circle = new Path2D();
        circle.arc(0, 0, rad, 0, 2 * Math.PI);
        circle.closePath();
        crc.fillStyle = radGradient;
        return circle;
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Canvas.js.map