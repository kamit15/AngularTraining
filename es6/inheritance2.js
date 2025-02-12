class Parent {
    constructor() {
        console.log("P cons")
    }
    disp() {
        console.log("hello")
    }
}

class Child extends Parent{
    disp() {
        console.log("hello from child") // This is called
    }
}

let c = new Child();
c.disp();