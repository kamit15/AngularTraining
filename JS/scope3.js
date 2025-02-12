var a = 100 //global scope, accessible within all functions

function abc() {
    b = 200; // Here it becomes a global variable as var is not there
    console.log(a, b) 
}
abc();

console.log(a);


console.log(b);