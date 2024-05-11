namespace Pond {
  export class LilyPad {
    position: Vector;
    size: number;
    mirror: boolean;

    constructor(_position: Vector, _size: number, _mirror: boolean) {
      this.position = _position;
      this.size = _size;
      this.mirror = _mirror;
    }

    draw() {
      crc.fillStyle = "#273b20";
      crc.strokeStyle = "#1f2e19";

      crc.beginPath();
      crc.arc;

      crc.closePath();
      crc.fill();
      crc.stroke();
    }
  }
}
