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
      if (this.mirror == false) {
        crc.scale(-this.size, this.size);
      } else {
        crc.scale(this.size, this.size);
      }

      crc.fillStyle = this.color;
      crc.beginPath();

      crc.moveTo(0, -8);
      crc.bezierCurveTo(0, 15, -40, 15, -40, 0);
      crc.moveTo(-38, 5);
      crc.bezierCurveTo(-45, 0, -45, -30, -40, -10);
      crc.ellipse(-45, -15, 7, 5, Math.PI * 2, 0, Math.PI * 2);
      crc.bezierCurveTo(-37, -15, -40, 0, -30, 0);
      crc.bezierCurveTo(-40, 0, -10, -14, -2, 0);

      crc.closePath();
      crc.fill();

      this.drawBeak();
      this.drawEye();
      crc.restore();
    }

    drawBeak() {
      crc.translate(-50, -14);

      crc.fillStyle = "#a86f32";
      crc.beginPath();

      crc.moveTo(0, 0);
      crc.bezierCurveTo(0, 3, -9, 2, -9, -1);
      crc.bezierCurveTo(-11, -4, 0, -2, 0, 0);

      crc.closePath();
      crc.fill();
    }

    drawEye() {
      crc.translate(47, 12);

      crc.fillStyle = "#000000";
      crc.beginPath();

      crc.moveTo(0, 0);
      crc.arc(-45, -15, 1, Math.PI * 2, 0);

      crc.closePath();
      crc.fill();
    }

    // warum darf ich nur eine richtung animieren? 
    move() {
      if (this.mirror===true){
        this.position.x -= 2;

        if (this.position.x >= canvas.width) {
          this.position = { x: this.position.x += 2, y: this.position.y};
      }else {
        this.position.x += 2;

        if (this.position.x >= canvas.width) {
          this.position = { x: this.position.x -= 2, y: this.position.y};
          }
      }
     
      }
    }

    change() {}
  }
}
