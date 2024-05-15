"use strict";
var Pond;
(function (Pond) {
    class Petal {
        position;
        color;
        constructor(_position, _color) {
            this.position = _position;
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
        fall() { }
    }
    Pond.Petal = Petal;
})(Pond || (Pond = {}));
//# sourceMappingURL=Petal.js.map