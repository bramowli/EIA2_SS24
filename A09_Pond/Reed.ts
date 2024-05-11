namespace Pond {
  interface Vector {
    x: number;
    y: number;
  }
  type ReedTypes = "noLeaf" | "oneLeaf" | "twoLeaves";

  export class Reed {
    position: Vector;
    size: number;
    mirror: boolean;
    type: ReedTypes;

    constructor(_position: Vector, _size: number, _mirror: boolean, _type: ReedTypes) {
      this.position = _position;
      this.size = _size;
      this.mirror = _mirror;
      this.type = _type;
    }

    draw() {
      if (this.type === "noLeaf") {
      } else if (this.type === "oneLeaf") {
      } else if (this.type === "twoLeaves") {
      }
    }

    goose() {}
  }
}
