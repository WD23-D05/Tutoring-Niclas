// Shape Calculations:
// Develop a Shape class that includes properties like length, width, and height for geometric shapes. Implement methods to calculate the area and perimeter of different shapes such as rectangles, squares, and cubes.

class Shape {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    // Calculate area for rectangle
    calculateAreaRectangle() {
        return this.length * this.width;
    }

    // Calculate perimeter for rectangle
    calculatePerimeterRectangle() {
        return 2 * (this.length + this.width);
    }

    // Calculate area for square
    calculateAreaSquare() {
        return this.length * this.length;
    }

    // Calculate perimeter for square
    calculatePerimeterSquare() {
        return 4 * this.length;
    }

    // Calculate surface area for cube
    calculateSurfaceAreaCube() {
        return 6 * this.length * this.length;
    }

    // Calculate volume for cube
    calculateVolumeCube() {
        return this.length * this.length * this.length;
    }
}

// Example usage:
const rectangle = new Shape(5, 10);
console.log("Area of rectangle: ", rectangle.calculateAreaRectangle());
console.log("Perimeter of rectangle: ", rectangle.calculatePerimeterRectangle());

const square = new Shape(5);
console.log("Area of square: ", square.calculateAreaSquare());
console.log("Perimeter of square: ", square.calculatePerimeterSquare());

const cube = new Shape(5, 5, 5);
console.log("Surface area of cube: ", cube.calculateSurfaceAreaCube());
console.log("Volume of cube: ", cube.calculateVolumeCube());
