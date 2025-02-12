class Parent {
    constructor() {
        console.log("P cons")
    }
    disp() {
        console.log("hello")
    }
}

class Child extends Parent{
    constructor() {
        console.log("P cons") //error as super is not there
    }
    disp() {
        console.log("hello from child") // This is called
    }
}

let c = new Child();
c.disp();