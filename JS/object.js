var emp = {"eid":100, "ename":"Amit"}

console.log(emp, typeof emp)
console.log(emp.eid, typeof emp.eid)
console.log(emp.ename, typeof emp.ename)

console.log(emp["eid"], emp["ename"]) // recommended, as # will not work

for(var e in emp) {
    console.log(emp[e])
}

console.log(Array.isArray(emp))