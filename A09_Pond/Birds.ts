namespace Pond {
  type birdTypes = "smimmingBird" | "walkingBird" | "kniveBird" | "sleepingBird";
  export class Birds {
    color: string;
    position: Vector;
    size: number;
    type: birdTypes;
    direction: Vector;

    draw() {
      crc.beginPath;
    }

    move() {}

    change() {}
  }
}
