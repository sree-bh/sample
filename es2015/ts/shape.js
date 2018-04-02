"use strict";
exports.__esModule = true;
var Shape = (function () {
    function Shape(width, height) {
        this.width = width;
        this.height = height;
    }
    Shape.prototype.display = function () {
        return this.width * this.height;
    };
    return Shape;
}());
exports["default"] = Shape;
var shape = new Shape(13, 17);
console.log(shape.display());
