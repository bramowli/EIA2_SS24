namespace Pond {
  type birdTypes = "swimmingBird" | "walkingBird" | "kniveBird" | "sleepingBird";
  export class Bird {
    position: Vector;
    size: number;
    type: birdTypes;
    color: string;
    mirror: boolean;

    constructor(_position: Vector, _size: number, _type: birdTypes, _color: string, _mirror: boolean) {
      this.position = _position;
      this.size = _size;
      this.type = _type;
      this.color = _color;
      this.mirror = _mirror;
    }

    draw() {
      crc.save();
      crc.translate(this.position.x, this.position.y);

      crc.fillStyle = this.color;
      crc.beginPath();
      // zurückgehfail
      // crc.moveTo(-40,0)
      // crc.bezierCurveTo(-15, 7, -10, 5, 0, 0)
      crc.moveTo(0,-8)
      crc.bezierCurveTo(0,15, -40,15, -40,0)
      crc.moveTo(-38,5)
      crc.bezierCurveTo(-45,0, -45,-30, -40,-10)
      crc.moveTo(-45,-15)
      crc.ellipse(-45,-15, 7, 5,Math.PI * 2 , 0,Math.PI *2)
      crc.moveTo(-38,-15)
      crc.bezierCurveTo(-40,-15, -40,0, -35,0)// help

      crc.closePath();
      crc.fill()
      crc.restore()
    }

    move() {}

    change() {}
  }
}