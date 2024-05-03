"use strict";
var Canvas;
(function (Canvas) {
    let cvs = document.querySelector("canvas");
    let crc = cvs.getContext("2d");
    crc.fillRect(0, 0, crc.canvas.width, crc.canvas.height);
    crc.strokeStyle = "#FFFFFF";
    let rad = Math.floor(Math.random() * (50 - 3)) + 3;
    let x = Math.floor(Math.random() * (50 - 3)) + 3;
    let y = Math.floor(Math.random());
    let gradient = crc.createLinearGradient(0, 0, 500, 500);
    gradient.addColorStop(0, "#34a38f");
    gradient.addColorStop(1, "#5f34a3");
    let radGradient = crc.createRadialGradient(0, 0, 0, 0, 0, x);
    radGradient.addColorStop(0, "#9c492260");
    radGradient.addColorStop(1, "#9c4922");
    crc.fillStyle = gradient;
    crc.fillRect(0, 0, 500, 500);
    let circle = new Path2D();
    //let v: number = Math.floor(Math.random() * 50 + 3);
    circle.arc(0, 0, rad, 0, 2 * Math.PI);
    circle.closePath();
    crc.fillStyle = radGradient;
    crc.fill(circle);
    crc.save();
    // crc.translate(Math.random(), Math.random());
    let triCount = Math.floor(Math.random() + 10);
    for (let i = 0; i < cvs.width; i += Math.random() * 30 + 55) {
        for (let j = 0; j < cvs.height; j += Math.random() * 30 + 55) {
            crc.save();
            crc.translate(i, j);
            crc.stroke(getTriangle(50));
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
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Canvas.js.map