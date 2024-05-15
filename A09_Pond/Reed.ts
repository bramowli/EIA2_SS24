namespace Pond {
  interface Vector {
    x: number;
    y: number;
  }
  type ReedTypes = "noLeaf" | "oneLeaf" | "twoLeaves";
  let endPoint: Vector = { x: 0, y: 0 };

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
      crc.fillStyle = "#401cff";
      if (this.type === "noLeaf") {
        crc.beginPath();
        this.drawCatTail();
      } else if (this.type === "oneLeaf") {
      } else if (this.type === "twoLeaves") {
      }
      crc.restore()
    }
    drawCatTail() {
      crc.save();
      crc.translate(endPoint.x, endPoint.y);
      crc.fillStyle = "#401c05";

      crc.beginPath();
      crc.ellipse(0, 0, 15, 5, Math.PI * 1.5, 0, Math.PI * 2);

      crc.closePath();
      crc.fill();
      crc.restore();
    }

    goose() {}
  }
}
