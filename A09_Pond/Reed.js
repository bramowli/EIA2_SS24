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
            Pond.crc.save();
            Pond.crc.translate(this.position.x, this.position.y);
            Pond.crc.fillStyle = "#404f27";
            if (this.type === "noLeaf") {
                Pond.crc.beginPath();
                Pond.crc.moveTo(0, 0);
                Pond.crc.bezierCurveTo(0, -30, 10, -100, 40, -120);
                Pond.crc.lineTo(45, -120);
                Pond.crc.bezierCurveTo(15, -100, 5, -30, 5, 0);
                Pond.crc.lineTo(0, 0);
                Pond.crc.closePath();
                Pond.crc.fill();
                this.drawCatTail();
            }
            else if (this.type === "oneLeaf") {
                Pond.crc.beginPath();
            }
            else if (this.type === "twoLeaves") {
            }
            Pond.crc.restore();
        }
        drawCatTail() {
            Pond.crc.save();
            Pond.crc.translate(45, -128);
            Pond.crc.fillStyle = "#401c05";
            Pond.crc.beginPath();
            Pond.crc.ellipse(0, 0, 15, 5, Math.PI * 1.7, 0, Math.PI * 2);
            Pond.crc.closePath();
            Pond.crc.fill();
            Pond.crc.restore();
        }
        goose() { }
    }
    Pond.Reed = Reed;
})(Pond || (Pond = {}));
//# sourceMappingURL=Reed.js.map