const visitors = new Set();

const john = {name: "John"}
const pete = {name: "Pete"}
const mary = {name: "Mary"}
visitors.add(john)
visitors.add(pete)
visitors.add(mary)
visitors.add(john)
visitors.add(pete)
visitors.add(mary)

console.log(visitors.size)
console.log(visitors)
visitors.delete(john)
console.log(visitors)
console.log(visitors.has(mary))
console.log(visitors.has(john))
visitors.clear()
console.log(visitors)
console.log(visitors.size)

const set = new Set(['hi', 'hello', 'good day', 'hi']) //The last hi doesn't get added

for (let value of set) {
    console.log(value)
}

set.forEach(value => console.log(value))

