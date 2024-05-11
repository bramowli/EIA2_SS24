"use strict";
var Pond;
(function (Pond) {
    class Stone {
        position; // kann man das nicht aus der hauptdatei entnehmen?
        size;
        type;
        constructor(_position, _size, _type) {
            this.position = _position;
            this.size = _size;
            this.type = _type;
        }
        draw() {
            Pond.crc.save();
            Pond.crc.translate(this.position.x, this.position.y);
            Pond.crc.fillStyle = "#737373";
            Pond.crc.strokeStyle = "#595959";
            Pond.crc.lineWidth = 3;
            Pond.crc.scale(this.size, this.size);
            if (this.type === "bigStone") {
                Pond.crc.beginPath();
                Pond.crc.moveTo(0, 0);
                Pond.crc.bezierCurveTo(0, -40, -70, -40, -70, 0);
                Pond.crc.lineTo(0, 0);
                Pond.crc.stroke();
            }
            else if (this.type === "smallStone") {
                Pond.crc.beginPath();
                Pond.crc.ellipse(0, 0, 10, 5, 0, 0, Math.PI * 2);
                Pond.crc.stroke();
            }
            else if (this.type === "weirdStone") {
                Pond.crc.beginPath();
                Pond.crc.lineTo(10, 20);
                Pond.crc.arc(40, 30, 15, -Math.PI / 2, 0);
                Pond.crc.lineTo(15, 30);
                Pond.crc.lineTo(10, 20);
                Pond.crc.stroke();
            }
            Pond.crc.closePath();
            Pond.crc.fill();
            Pond.crc.restore();
        }
    }
    Pond.Stone = Stone;
    // ins hauptdong
    function loop() {
        const stone1 = new Stone({ x: 300, y: 300 }, 50, "bigStone");
        stone1.draw();
        const stone2 = new Stone({ x: 600, y: 100 }, 30, "bigStone");
        stone2.draw();
        // funktioniert das?
        new Stone({ x: 600, y: 100 }, 30, "bigStone").draw();
    }
})(Pond || (Pond = {}));
//# sourceMappingURL=Stone.js.map