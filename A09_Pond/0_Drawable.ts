namespace Pond {
  export class Drawable {
    position: Vector;

    constructor(_position: Vector) {
      this.position = _position;
    }

    draw(): void{
        // executes draw of subclasses
    };
  }
}
