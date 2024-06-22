namespace Pond {
  export class Food extends Drawable {
    constructor(_position: Vector, _size: number, _mirror: boolean) {
      super(_position, _size, _mirror);
      this.position = _position;
      this.size = _size;
      this.mirror = _mirror;
    }

    public draw(): void {
      crc.save();
      crc.translate(this.position.x, this.position.y);
      if (this.mirror == false) {
        crc.scale(-this.size, this.size);
      } else {
        crc.scale(this.size, this.size);
      }
      crc.beginPath();
      crc.moveTo(0, 0);
      crc.bezierCurveTo(5, -5, 10, 5, 15, 0);

      crc.strokeStyle = "#db7472";
      crc.lineWidth = 4;
      crc.stroke();
      crc.restore();
    }

    public interact(_hitPosition: Vector) {
      return false;
    }
  }
}
