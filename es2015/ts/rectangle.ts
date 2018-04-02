import Shape from './shape'; 

class Rectangle extends Shape {
    constructor(width, height) {
        super (width, height);
    }
}

const rectangle = new Rectangle(17, 23);
console.log(rectangle.display());