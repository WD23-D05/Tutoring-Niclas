// Shape Calculations:
// Develop a Shape class that includes properties like length, width, and height for geometric shapes. Implement methods to calculate the area and perimeter of different shapes such as rectangles, squares, and cubes.

// Your code Here :

// #########################################################
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
