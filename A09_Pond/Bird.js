"use strict";
var Pond;
(function (Pond) {
    class Bird {
        position;
        size;
        type;
        color;
        mirror;
        constructor(_position, _size, _type, _color, _mirror) {
            this.position = _position;
            this.size = _size;
            this.type = _type;
            this.color = _color;
            this.mirror = _mirror;
        }
        draw() {
            Pond.crc.save();
            Pond.crc.translate(this.position.x, this.position.y);
            Pond.crc.fillStyle = this.color;
            Pond.crc.beginPath();
            Pond.crc.moveTo(0, -8);
            Pond.crc.bezierCurveTo(0, 15, -40, 15, -40, 0);
            Pond.crc.moveTo(-38, 5);
            Pond.crc.bezierCurveTo(-45, 0, -45, -30, -40, -10);
            Pond.crc.ellipse(-45, -15, 7, 5, Math.PI * 2, 0, Math.PI * 2);
            Pond.crc.bezierCurveTo(-37, -15, -40, 0, -30, 0);
            Pond.crc.bezierCurveTo(-40, 0, -10, -14, -2, 0);
            Pond.crc.closePath();
            Pond.crc.fill();
            Pond.crc.restore();
        }
        move() { }
        change() { }
    }
    Pond.Bird = Bird;
})(Pond || (Pond = {}));
//# sourceMappingURL=Bird.js.map