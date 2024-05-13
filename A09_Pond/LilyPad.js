"use strict";
var Pond;
(function (Pond) {
    class LilyPad {
        position;
        size;
        mirror;
        constructor(_position, _size, _mirror) {
            this.position = _position;
            this.size = _size;
            this.mirror = _mirror;
        }
        draw() {
            Pond.crc.save();
            Pond.crc.translate(this.position.x, this.position.y);
            Pond.crc.fillStyle = "#273b20";
            Pond.crc.strokeStyle = "#1f2e19";
            Pond.crc.lineWidth = 3;
            Pond.crc.scale(this.size, this.size);
            if (this.mirror === true) {
                Pond.crc.beginPath();
                Pond.crc.moveTo(0, 0);
                Pond.crc.ellipse(0, 0, 30, 15, Math.PI * 2, 0, Math.PI * 1.7);
            }
            else if (this.mirror === false) {
                Pond.crc.beginPath();
                Pond.crc.moveTo(0, 0);
                Pond.crc.ellipse(0, 0, 30, 15, Math.PI * 1, 0, Math.PI * 1.7);
            }
            Pond.crc.closePath();
            Pond.crc.stroke();
            Pond.crc.fill();
            Pond.crc.restore();
        }
    }
    Pond.LilyPad = LilyPad;
})(Pond || (Pond = {}));
//# sourceMappingURL=LilyPad.js.map