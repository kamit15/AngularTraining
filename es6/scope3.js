let a = 100 

function abc() {
    let b = 200; 
    console.log(a)
    if(true) {
        const a = 300;
        a=40; //error
        console.log(a);
    } 
    console.log(a);
}
abc();
console.log(a);
// console.log(b);