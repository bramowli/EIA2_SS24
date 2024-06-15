namespace Pond {
  export abstract class Drawable {
    protected position: Vector;
    protected size: number;
    protected mirror: boolean;

    constructor(_position: Vector, _size: number, _mirror: boolean) {
      this.position = _position;
      this.size = _size;
      this.mirror = _mirror;
    }
    public abstract draw(): void;
    public abstract interact(_hitPosition: Vector): void;
  }
}
