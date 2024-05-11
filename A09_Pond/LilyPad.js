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
            Pond.crc.fillStyle = "#273b20";
            Pond.crc.strokeStyle = "#1f2e19";
            Pond.crc.beginPath();
            Pond.crc.arc;
            Pond.crc.closePath();
            Pond.crc.fill();
            Pond.crc.stroke();
        }
    }
    Pond.LilyPad = LilyPad;
})(Pond || (Pond = {}));
//# sourceMappingURL=LilyPad.js.map