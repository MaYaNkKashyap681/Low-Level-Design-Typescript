// Define an interface that represents the expected behavior
interface Target {
    runner(): string;
  }
  
  // The Original class
  class Original implements Target {
    public runner(): string {
      return "Hello, I am good";
    }
  }
  
  // The NewClass class
  class NewClass {
    public runNew(): string {
      return "I am new one";
    }
  }
  
  // The Adapter class
  class Adapter implements Target {
    private newClass: NewClass;
  
    public constructor(newClass: NewClass) {
      this.newClass = newClass;
    }
  
    public runner(): string {
      const result = this.newClass.runNew();
      return `${result} Compatible with Old One`;
    }
  }
  
  function run() {
    const oldObj = new Original();
    console.log(oldObj.runner());
  
    const newObj = new NewClass();
    console.log(newObj.runNew());
  
    const compatible = new Adapter(newObj);
    console.log(compatible.runner());
  }
  
  run();
  

// class Original {
//     public runner(): string {
//         return "Hello i am good"
//     }
// }

// class NewClass {
//     public runNew(): string {
//         return "I am new one";
//     }
// }

// class Adaptee {
//     private nc: NewClass | null = null;

//     public constructor(_nc: NewClass) {
//         this.nc = _nc;
//     }

//     public runner() {
//         return this.nc.runNew() + "Compatible with Old One"
//     }
// }

// function run() {
//     var oldObj = new Original();
//     console.log(oldObj.runner());

//     var newObj = new NewClass();
//     console.log(newObj.runNew());

//     var compatible = new Adaptee(newObj);
//     console.log(compatible.runner());
// }

// run();