namespace Pond {
  type stoneTypes = "bigStone" | "smallStone" | "weirdStone";

  export class Stone {
    position: Vector; // kann man das nicht aus der hauptdatei entnehmen?
    size: number;
    type: stoneTypes;

    constructor(_position: Vector, _size: number, _type: stoneTypes) {
      this.position = _position;
      this.size = _size;
      this.type = _type;
    }

    draw() {
      crc.save();
      crc.translate(this.position.x, this.position.y);
      crc.fillStyle = "#737373";
      crc.strokeStyle = "#595959";
      crc.lineWidth = 3;
      crc.scale(this.size, this.size);
      if (this.type === "bigStone") {
        crc.beginPath();
        crc.moveTo(0, 0);
        crc.bezierCurveTo(0, -40, -70, -40, -70, 0);
        crc.lineTo(0, 0);
        crc.stroke();
      } else if (this.type === "smallStone") {
        crc.beginPath();
        crc.ellipse(0, 0, 10, 5, 0, 0, Math.PI * 2);
        crc.stroke();
      } else if (this.type === "weirdStone") {
        crc.beginPath();
        crc.lineTo(10, 20);
        crc.arc(40, 30, 15, -Math.PI / 2, 0);
        crc.lineTo(15, 30);
        crc.lineTo(10, 20);
        crc.stroke();
      }
      crc.closePath();
      crc.fill();
      crc.restore();
    }
  }
}
