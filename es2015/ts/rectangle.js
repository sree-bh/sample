"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var shape_1 = require("./shape");
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        return _super.call(this, width, height) || this;
    }
    return Rectangle;
}(shape_1["default"]));
var rectangle = new Rectangle(17, 23);
console.log(rectangle.display());
