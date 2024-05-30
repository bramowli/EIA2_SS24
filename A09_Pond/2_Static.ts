namespace Pond {
  export class Static extends Drawable {
    size: number;
    mirror: boolean;

    constructor(_position: Vector, _size: number, _mirror: boolean) {
      super(_position);

      this.size = _size;
      this.mirror = _mirror;
    }
  }
}
