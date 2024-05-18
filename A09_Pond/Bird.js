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
            if (this.mirror == false) {
                Pond.crc.scale(-this.size, this.size);
            }
            else {
                Pond.crc.scale(this.size, this.size);
            }
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
            this.drawBeak();
            this.drawEye();
            if ("walkingBird") { //warum kriegt grad jeder beine?
                this.drawLeg();
            }
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
            Pond.crc.translate(-10, 8);
            Pond.crc.fillStyle = "#a86f32";
            Pond.crc.beginPath();
            Pond.crc.moveTo(0, 0);
            Pond.crc.lineTo(0, 15);
            Pond.crc.bezierCurveTo(-10, 15, -10, 12, -7, 12);
            Pond.crc.closePath();
            Pond.crc.fill();
        }
        // warum darf ich nur eine richtung animieren?
        move() {
            if (this.mirror === true) {
                this.position.x -= 2;
                if (this.position.x >= Pond.canvas.width) {
                    this.position = { x: (this.position.x += 2), y: this.position.y };
                }
                else {
                    this.position.x += 2;
                    if (this.position.x >= Pond.canvas.width) {
                        this.position = { x: (this.position.x -= 2), y: this.position.y };
                    }
                }
            }
        }
        change() { }
    }
    Pond.Bird = Bird;
})(Pond || (Pond = {}));
//# sourceMappingURL=Bird.js.map