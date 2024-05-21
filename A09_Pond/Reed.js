"use strict";
var Pond;
(function (Pond) {
    class Reed {
        position;
        size;
        mirror;
        type;
        constructor(_position, _size, _mirror, _type) {
            this.position = _position;
            this.size = _size;
            this.mirror = _mirror;
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
            Pond.crc.bezierCurveTo(10, -15, 15, -25, 30, -60);
            Pond.crc.bezierCurveTo(10, -30, 15, -30, -2, 0);
            Pond.crc.closePath();
            Pond.crc.fill();
            Pond.crc.restore();
        }
        goose() { }
    }
    Pond.Reed = Reed;
})(Pond || (Pond = {}));
//# sourceMappingURL=Reed.js.map