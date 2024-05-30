namespace Pond {
  export class Moveable extends Drawable {
    color: string;

    constructor(_position: Vector, _color: string) {
      super(_position);

      this.color = _color;
    }

    move(): void {
      // executes move from subclasses
    }
  }
}
