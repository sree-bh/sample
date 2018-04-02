const Shape = class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    display () {
        return this.width * this.height;
    }
}

module.exports = Shape;