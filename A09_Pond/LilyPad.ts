namespace Pond {
  export class LilyPad extends Static {
    doesItSplash: boolean = false;

    constructor(_position: Vector, _size: number, _mirror: boolean) {
      super(_position, _size, _mirror);
    }

    draw() {
      crc.save();
      crc.translate(this.position.x, this.position.y);
      crc.fillStyle = "#273b20";
      crc.strokeStyle = "#1f2e19";
      crc.lineWidth = 3;
      crc.scale(this.size, this.size);

      if (this.mirror === true) {
        crc.beginPath();
        crc.moveTo(0, 0);
        crc.ellipse(0, 0, 30, 15, Math.PI * 2, 0, Math.PI * 1.7);
      } else if (this.mirror === false) {
        crc.beginPath();
        crc.moveTo(0, 0);
        crc.ellipse(0, 0, 30, 15, Math.PI * 1, 0, Math.PI * 1.7);
      }

      crc.closePath();
      crc.stroke();
      crc.fill();

      if (this.doesItSplash === true) this.drawInteraction();

      crc.restore();
    }

    interact(_hitPosition: Vector) {
      if (
        _hitPosition.x >= this.position.x - 30 &&
        _hitPosition.x <= this.position.x &&
        _hitPosition.y >= this.position.y - 15 &&
        _hitPosition.y <= this.position.y
      ) {
        this.doesItSplash = !this.doesItSplash;
        new Audio("assets/Platsch.wav").play();
        console.log("platsch");
      }
    }

    drawInteraction() {
      crc.strokeStyle = "#374161";
      crc.beginPath();

      crc.lineTo(-25, 20);
      crc.bezierCurveTo(-13,30, 15,30, 30,20)

      crc.moveTo(-25,-20)
      crc.bezierCurveTo(-13,-30, 15,-30, 30,-20)

      crc.stroke();
      console.log("fdg")
      
    }
  }
}
