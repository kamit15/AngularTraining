class Parent {
    disp() {
        console.log("hello")
    }
}

class Child extends Parent{
    disp() {
        console.log("hello from child") // This is called // Overriding is supported but not overloading
    }
}

let c = new Child();
c.disp();