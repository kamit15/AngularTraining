let a = 100 

function abc() {
    let b = 200; 
    console.log(a)
    if(true) {
        let a = 300;
        console.log(a);
    } 
    console.log(a);
}
abc();
console.log(a);
// console.log(b);