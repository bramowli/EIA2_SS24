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
      if (this.type === "noLeaf") {
        this.drawStem();
        this.drawCatTail();
      } else if (this.type === "oneLeaf") {
        this.drawStem();
        this.drawCatTail();
        this.drawLeaf1();
      } else if (this.type === "twoLeaves") {
        this.drawStem();
        this.drawCatTail();
        this.drawLeaf1();
        this.drawLeaf2();
      }
    }
    drawStem() {
      crc.save();
      crc.translate(this.position.x, this.position.y);
      crc.fillStyle = "#404f27";
      crc.beginPath();
      crc.moveTo(0, 0);
      crc.bezierCurveTo(0, -30, 10, -100, 40, -120);
      crc.lineTo(45, -120);
      crc.bezierCurveTo(15, -100, 5, -30, 5, 0);
      crc.lineTo(0, 0);
      crc.closePath();
      crc.fill();
      crc.restore();
    }

    drawCatTail() {
      crc.save();
      crc.translate(this.position.x + 45, this.position.y - 128);
      crc.fillStyle = "#401c05";

      crc.beginPath();
      crc.ellipse(0, 0, 15, 5, Math.PI * 1.7, 0, Math.PI * 2);

      crc.closePath();
      crc.fill();
      crc.restore();
    }
    drawLeaf1() {
      crc.save();
      crc.translate(this.position.x + 8, this.position.y - 50);
      crc.fillStyle = "#404f27";
      crc.beginPath();
      crc.moveTo(0, 0);
      crc.bezierCurveTo(10, -8, 15, -25, 30, -60);
      crc.bezierCurveTo(10, -30, 15, -30, -2, 0);

      crc.closePath();
      crc.fill();

      crc.restore();
    }

    drawLeaf2() {
      crc.save();
      crc.translate(this.position.x + 6, this.position.y - 20);
      crc.fillStyle = "#404f27";
      crc.beginPath();
      crc.moveTo(0, 0);
      crc.bezierCurveTo(-8, -8, -5, -35, 0, -80);
      crc.bezierCurveTo(0, -30, 0, -30, 0, -4);

      crc.closePath();
      crc.fill();

      crc.restore();
    }

    goose() {}
  }
}
