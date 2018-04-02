function Shape(width, height) {
  this.width = width;
  this.height = height;
}

Shape.prototype.display = function () {
  return this.width * this.height;
}

let shape = new Shape(34, 45);
console.log(shape.display());

function Rectangle(width, height) {
    Shape.call(this, width, height);
}

Rectangle.prototype = Object.create(Shape.prototype);
let rect = new Rectangle(70, 45);
console.log(rect.display());
