
// Eager Loading 

class EagerSingleton {
    private static instance: EagerSingleton = new EagerSingleton();
    private constructor() {
    }
    // if you want to use the static keyword using this then function should be static
    public static getInstance(): EagerSingleton {
        return this.instance;
    }
    // if you want the function to be non static then use classname to access static variables
    // public getInstance(): EagerSingleton {
    //     return EagerSingleton.instance;
    // }
}


class LazyLoadingSingleton {
    private static instance: null | LazyLoadingSingleton = null;
    private constructor() {
    }
    public static getInstance(): LazyLoadingSingleton {
        if (this.instance === null) {
            this.instance = new LazyLoadingSingleton;
        }
        return this.instance;
    }
}


class DoubleLockSingleton {
    private static instance: null | DoubleLockSingleton = null;
    private constructor() {

    }
    public static getInstance(): DoubleLockSingleton {
        if(!this.instance) {
            if(!this.instance) {
                this.instance = new DoubleLockSingleton();
            }
        }
        return this.instance;
    }
}

// Driver Class
function main3() {
var instance1: DoubleLockSingleton = DoubleLockSingleton.getInstance();
var instance2: DoubleLockSingleton = DoubleLockSingleton.getInstance();
console.log(instance1 === instance2)
}

main3();