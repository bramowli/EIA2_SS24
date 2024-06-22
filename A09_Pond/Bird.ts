namespace Pond {
  type birdTypes = "swimmingBird" | "walkingBird" | "kniveBird" | "sleepingBird" | "eatingBird";
  export class Bird extends Moveable {
    private readonly BEAK_OPEN_DURATION: number = 30;
    private type: birdTypes;
    private underWater: number;
    private beakOpen: number;

    constructor(_position: Vector, _size: number, _type: birdTypes, _color: string, _mirror: boolean) {
      super(_position, _size, _mirror, _color);
      this.position = _position;
      this.size = _size;
      this.type = _type;
      this.color = _color;
      this.mirror = _mirror;
      this.underWater = -1;
      this.beakOpen = -1;
    }

    public draw() {
      crc.save();
      crc.translate(this.position.x, this.position.y);
      if (this.mirror == false) {
        crc.scale(-this.size, this.size);
      } else {
        crc.scale(this.size, this.size);
      }

      crc.fillStyle = this.color;
      crc.beginPath();

      if (this.type === "sleepingBird") {
        crc.moveTo(0, 0);
        crc.bezierCurveTo(0, 15, -40, 15, -40, -4);
        crc.bezierCurveTo(-40, 0, -10, -14, 0, 0);
        crc.closePath();
        crc.fill();
      } else if (this.type === "eatingBird") {
        crc.moveTo(15, 0);
        crc.bezierCurveTo(15, 0, 15, -25, -5, -25);

        crc.bezierCurveTo(0, -25, -10, 0, -5, 0);
        crc.closePath();
        crc.fill();
      } else if (this.type === "swimmingBird" || this.type === "walkingBird") {
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
        if (this.type === "walkingBird") {
          this.drawLeg();
        }
        if (this.beakOpen > 0) {
          this.drawInteraction();
          this.beakOpen--;
        }
      }

      crc.restore();
    }

    private drawBeak() {
      crc.translate(-50, -14);

      crc.fillStyle = "#a86f32";
      crc.beginPath();

      crc.moveTo(0, 0);
      crc.bezierCurveTo(0, 3, -9, 2, -9, -1);
      crc.bezierCurveTo(-11, -4, 0, -2, 0, 0);

      crc.closePath();
      crc.fill();
    }

    private drawEye() {
      crc.translate(47, 12);

      crc.fillStyle = "#000000";
      crc.beginPath();

      crc.moveTo(0, 0);
      crc.arc(-45, -15, 1, Math.PI * 2, 0);

      crc.closePath();
      crc.fill();
    }

    private drawLeg() {
      crc.translate(-10, 9.5);
      crc.fillStyle = "#a86f32";
      crc.beginPath();
      crc.moveTo(0, 0);
      crc.lineTo(0, 15);
      crc.bezierCurveTo(0, 17, -10, 17, -7, 15);
      crc.bezierCurveTo(-10, 14, -10, 12, -7, 12);
      crc.bezierCurveTo(-8, 12, -7, 9, -5, 12);
      crc.lineTo(-5, 2);

      crc.closePath();
      crc.fill();
    }

    public move() {
      let offset = 700;

      if (this.type === "sleepingBird") return;
      if (this.type === "swimmingBird") {
        offset = 500;
        if (Math.random() <= 0.001) {
          this.type = "eatingBird";
        }
      }
      if (this.type === "eatingBird") {
        offset = 500;
        this.underWater++;
        if (this.underWater >= 50 && Math.random() >= 0.001) {
          this.type = "swimmingBird";
          this.underWater = -1;
        }
      }
      if (this.mirror === true) {
        this.position.x -= 1;
        if (this.position.x <= canvas.width - offset) {
          this.mirror = false;
          this.position.x += 2;
        }
      } else {
        this.position.x += 2;
        if (this.position.x >= canvas.width - 100) {
          this.mirror = true;
          this.position.x -= 2;
        }
      }
    }

    public interact(_hitPosition: Vector) {
      if (this.type != "swimmingBird" && this.type != "walkingBird") return false;

      if (
        _hitPosition.x >= this.position.x - 57 &&
        _hitPosition.x <= this.position.x &&
        _hitPosition.y >= this.position.y - 18 &&
        _hitPosition.y <= this.position.y + 12 &&
        this.beakOpen <= 0
      ) {
        this.beakOpen = this.BEAK_OPEN_DURATION;
        new Audio("assets/Quack.wav").play();
        console.log("geht");
        return true;
      }
      return false;
    }

    private drawInteraction() {
      crc.fillStyle = "#a86f32";
      if (this.type === "swimmingBird") {
        crc.beginPath();
        crc.moveTo(-50, -10);
        crc.bezierCurveTo(-48, -9, -55, -7, -55, -7);
        crc.lineTo(-50, -15);

        crc.moveTo(0, 0);
        crc.closePath();
        crc.fill();

        crc.beginPath();
        crc.moveTo(-60, -14);
        crc.lineTo(-67, -16);
        crc.moveTo(-60, -12);
        crc.lineTo(-67, -12);
        crc.moveTo(-60, -10);
        crc.lineTo(-67, -8);

        crc.moveTo(0, 0);
        crc.closePath();
        crc.stroke();
      } else if (this.type === "walkingBird") {
        crc.beginPath();
        crc.moveTo(-37, -23);
        crc.bezierCurveTo(-35, -17, -45, -15, -45, -15);
        crc.lineTo(-37, -23);

        crc.moveTo(0, 0);
        crc.closePath();
        crc.fill();

        crc.beginPath();
        crc.moveTo(-54, -21);
        crc.lineTo(-61, -23);
        crc.moveTo(-54, -19);
        crc.lineTo(-61, -19);
        crc.moveTo(-54, -17);
        crc.lineTo(-61, -15);

        crc.moveTo(0, 0);
        crc.closePath();
        crc.stroke();
      }
    }
  }
}
