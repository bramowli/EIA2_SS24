"use strict";
var Pond;
(function (Pond) {
    class Petal {
        position;
        color;
        startPosition;
        constructor(_position, _color) {
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
        fall() {
            this.position.x += 2 + Math.random() * 5;
            this.position.y += 2 + Math.random() * 5;
            if (this.position.y >= Pond.canvas.height) {
                this.position = { x: this.startPosition.x, y: this.startPosition.y };
            }
        }
    }
    Pond.Petal = Petal;
})(Pond || (Pond = {}));
//# sourceMappingURL=Petal.js.map