namespace Pond {
  export type petalColor = "lighter" | "darker";
  export class Petal {
    position: Vector;
    color: string;
    startPosition: Vector;

    constructor(_position: Vector, _color: petalColor) {
      this.position = { x: _position.x, y: _position.y };
      this.startPosition = { x: _position.x, y: _position.y };
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

    fall() {
      this.position.x += 2+ Math.random()*5;
      this.position.y += 2 + Math.random()*5;

      if (this.position.y >= canvas.height) {
        this.position = { x: this.startPosition.x, y: this.startPosition.y };
      }
    }
  }
}
