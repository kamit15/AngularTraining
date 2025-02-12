var a = 100 //global scope, accessible within all functions

function abc() {
    console.log(a) //undefined, (Hoisiting) as this variable is function scope, when we create a variable in function it is declared in function, we can use it before intilization.
    var a = 10;
    if (true) {
        console.log(a); //10
        var a = 20;
        console.log(a); //20
    }
    console.log(a) //function scope variable //20
}
abc();

console.log(a);

var b = 100 //global scope, accessible within all functions

function xyz() {
    console.log(b) //undefined, (Hoisiting) as this variable is function scope, when we create a variable in function it is declared in function, we can use it before intilization.
    //var b = 10;
    if (false) {
        console.log(b); //10
        var b = 20;
        console.log(b); //20
    }
    console.log(b) //function scope variable //undefined // variable declaration will happen 
    // but initilization will not happen as it is in false scope.
}
xyz();

console.log(b);

