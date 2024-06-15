namespace Pond {
  export abstract class Moveable extends Drawable {
    protected color: string;

    constructor(_position: Vector, _size: number, _mirror: boolean, _color: string) {
      super(_position, _size, _mirror);

      this.color = _color;
    }
    public abstract move(): void;
  }
}
