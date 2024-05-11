"use strict";
var Pond;
(function (Pond) {
    class Reed {
        position;
        size;
        mirror;
        type;
        constructor(_position, _size, _mirror, _type) {
            this.position = _position;
            this.size = _size;
            this.mirror = _mirror;
            this.type = _type;
        }
        draw() {
            if (this.type === "noLeaf") {
            }
            else if (this.type === "oneLeaf") {
            }
            else if (this.type === "twoLeaves") {
            }
        }
        goose() { }
    }
    Pond.Reed = Reed;
})(Pond || (Pond = {}));
//# sourceMappingURL=Reed.js.map