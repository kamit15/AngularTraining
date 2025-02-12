class Parent {
    disp() {
        console.log("hello")
    }
}

class Child extends Parent{}

let c = new Child();
c.disp();