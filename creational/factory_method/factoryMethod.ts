// Interface of the Shape 
interface Shape {
    draw(param?: any): void;
}

// Concrete Classes
class Square implements Shape {
    draw() {
        console.log("This is a Square")
    }
}

class Circle implements Shape {
    draw() {
        console.log("This is a Circle")
    }
}

// ShapeFactory Class retunrs Shape type of Object
class ShapeFactory {
    public getShape(shapeType: string){
        switch(shapeType) {
            case 'Circle': return new Circle()
            case 'Square': return new Square()
            default: return null;
        }
    }
}

// main function
function main() {
  var shapeFactoryObj = new ShapeFactory();
  var circle = shapeFactoryObj.getShape("Circle");
  var square = shapeFactoryObj.getShape("Square");
  circle.draw(); // This is a Circle
  square.draw(); // This is a Square
}

main();



