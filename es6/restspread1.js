let score = [34,67,88]
let copy = [...score]; // Rest spread opeartor ...

const emp = {"eid":100, "ename": "Amit"}
const empCopy = {...emp} //spread

emp.eid = 101;

console.log(emp)
console.log(empCopy)

score.push(77)
console.log(score)
console.log(copy)

function add(...a) {
    let s = 0;
    for(aa of a) {
        s+=aa
    }

    console.log(s)
}

add(1,2)
add(1,2,3)
add(1,2,3,4)
add(1,2,456,67,8,86,8)
add(...score)//spread
add(1,2,...score)
