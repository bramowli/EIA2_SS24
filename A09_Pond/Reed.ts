namespace Pond {
  interface Vector {
    x: number;
    y: number;
  }
  type ReedTypes = "noLeaf" | "oneLeaf" | "twoLeaves";

  export class Reed {
    position: Vector;
    size: number;
    mirror: boolean;
    type: ReedTypes;

    constructor(_position: Vector, _size: number, _mirror: boolean, _type: ReedTypes) {
      this.position = _position;
      this.size = _size;
      this.mirror = _mirror;
      this.type = _type;
    }

    draw() {
      crc.save();
      crc.translate(this.position.x, this.position.y);
      crc.fillStyle = "#404f27";
      if (this.type === "noLeaf") {
        crc.beginPath();
        crc.moveTo(0, 0);
        crc.bezierCurveTo(0, -30, 10, -100, 40, -120);
        crc.lineTo(45, -120);
        crc.bezierCurveTo(15, -100, 5, -30, 5, 0);
        crc.lineTo(0, 0);
       
        crc.closePath();
        crc.fill();
        this.drawCatTail();
      } else if (this.type === "oneLeaf") {
        crc.beginPath()
      } else if (this.type === "twoLeaves") {
      }
      crc.restore();
    }
    drawCatTail() {
      crc.save();
      crc.translate(45,-128);
      crc.fillStyle = "#401c05";

      crc.beginPath();
      crc.ellipse(0, 0, 15, 5, Math.PI * 1.7, 0, Math.PI * 2);

      crc.closePath();
      crc.fill();
      crc.restore();
    }

    goose() {}
  }
}
