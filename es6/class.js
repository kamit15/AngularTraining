class Demo {
    a = 10; //property
    constructor(a) {
        this.a = a; //initialize or change value of property
        console.log("cons")
    }
    disp() {
        console.log("hello")
    }
}

let d = new Demo(30); //object
d.disp();

console.log(d, typeof d)