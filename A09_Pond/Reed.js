"use strict";
var Pond;
(function (Pond) {
    let endPoint;
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
            Pond.crc.fillStyle = "#401cff";
            if (this.type === "noLeaf") {
                Pond.crc.beginPath();
                this.drawCatTail();
            }
            else if (this.type === "oneLeaf") {
            }
            else if (this.type === "twoLeaves") {
            }
        }
        drawCatTail() {
            Pond.crc.save();
            Pond.crc.translate(endPoint.x, endPoint.y);
            Pond.crc.fillStyle = "#401c05";
            Pond.crc.beginPath();
            Pond.crc.ellipse(0, 0, 10, 20, Math.PI * 1.5, 0, Math.PI * 2);
            Pond.crc.closePath();
            Pond.crc.fill();
        }
        goose() { }
    }
    Pond.Reed = Reed;
})(Pond || (Pond = {}));
//# sourceMappingURL=Reed.js.map