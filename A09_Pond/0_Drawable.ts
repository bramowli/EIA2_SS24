namespace Pond {
  export abstract class Drawable {
    position: Vector;

    constructor(_position: Vector) {
      this.position = _position;
    }

    draw(): void{
        // executes draw of subclasses
    };

    interact(_hitPosition: Vector): void{
      //executes interaction
    }
  }
}
