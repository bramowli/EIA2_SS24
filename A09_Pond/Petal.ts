namespace Pond {
  type petalColor = "lighter" | "darker";
  export class Petal {
    position: Vector;
    color: string;

    constructor(_position: Vector, _color: petalColor) {
      this.position = _position;
      this.color = _color;
    }

    draw() {
      crc.save();
      crc.translate(this.position.x, this.position.y);

      crc.beginPath();
      crc.moveTo(0, 0);
      crc.bezierCurveTo(0, 0, 20, 15, 20, 5);
      crc.bezierCurveTo(20, 0, 15, -5, 0, 0);
      crc.closePath();

      if (this.color === "lighter") {
        crc.fillStyle = "#ffcffd";
      } else if (this.color === "darker") {
        crc.fillStyle = "#f5b0f2";
      }
      crc.fill();
      crc.restore();
    }

    fall() {}
  }
}
