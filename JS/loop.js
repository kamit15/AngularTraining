var fruits = ['Apple', 'Banana', 'Orange']

console.log("========for==========")
for (var i = 0; i < fruits.length; i++)
    console.log(fruits[i])

console.log("========while==========")

var i = 0;
while (i < fruits.length) {
    console.log(fruits[i])
    i++
}

console.log("========do..while==========")

var i = 0
do {
    if (fruits.length > 0) {
        console.log(fruits[i])
    }
    i++
} while (i < fruits.length)

console.log("=======for..in========")

for(var i in fruits){
    console.log(fruits[i])
}

console.log("=======for..each========")

fruits.forEach(x => console.log(x))

console.log("=2======for..each========")

function print(v) {
    console.log(v)
}
fruits.forEach(print) // For each is a higher order function

console.log("=3======for..each========")
var print = function(v) {
    console.log(v)
}
fruits.forEach(print)

console.log("=4======for..each========")

fruits.forEach(function(v) {
    console.log(v)
})



