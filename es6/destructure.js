let score = [34,67,88]

// let a = score[0]
// let b = score[1]

let [a,b] = score; //destructure array

console.log(a, b)

let [x,...y] = score;

console.log(x,y)

const emp = {"eid":100, "ename": "Amit"}

let {eid,ename} = emp; //destructure object

console.log(eid,ename)