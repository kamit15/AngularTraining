var a = 100 //global scope, accessible within all functions

function abc() {
    var b = 200;
    console.log(a, b) 
}
abc();

console.log(a);


console.log(b); //error -> ReferenceError: b is not defined