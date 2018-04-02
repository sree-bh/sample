export default class Shape {
    width:number;
    height:number;

    constructor(width:number, height:number) {
        this.width = width;
        this.height = height;
    }

    display ():number {
        return this.width * this.height;
    }
}

var shape = new Shape(13, 17);
console.log(shape.display());