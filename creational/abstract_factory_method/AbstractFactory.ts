
// Chair Factory 
interface BuildingProduct {
    build(): void;
}

class ChairA implements BuildingProduct {
    public build(): void {
        console.log("Chair A is Build")
    }
}

class ChairB implements BuildingProduct {
    public build(): void {
        console.log("Chair B is Build")
    }
}

class ChairFactory {
    // private cost: number = 0;
    // constructor(_cost: number) {
    //     this.cost = _cost;
    // }

    public getChair(cost: number): ChairA | ChairB {
        if(cost > 3000) return new ChairA();
        else return new ChairB();
    }
}

// Table Factory 
class TableA implements BuildingProduct {
    public build(): void {
        console.log("Table A is Build")
    }
}

class TableB implements BuildingProduct {
    public build(): void {
        console.log("Table B is Build")
    }
}

class TableFactory {
    // private cost: number = 0;
    // constructor(_cost: number) {
    //     this.cost = _cost
    // }

    public getTable(cost: number): TableA | TableB {
        if(cost > 5000) return new TableA();
        else return new TableB();
    }
}


class AbstractFactory {
    private chairFactoryObj = null;
    private tableFactoryObj = null;
    constructor() {
        this.chairFactoryObj = new ChairFactory();
        this.tableFactoryObj = new TableFactory();
    }
    public getProduct(productType: string, cost: number):any {
        switch(productType) {
            case 'Chair': return this.chairFactoryObj.getChair(cost);
            case 'Table': return this.tableFactoryObj.getTable(cost);
            default: return null;
        }
    }
}



// Driver Function
function main2() {
  let abstractFactorObj: AbstractFactory = new AbstractFactory();
  var chairA = abstractFactorObj.getProduct("Chair", 4000);
  var tableB = abstractFactorObj.getProduct("Table", 3000);
  chairA.build();
  tableB.build();
}
main2();