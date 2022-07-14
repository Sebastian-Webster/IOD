const map = new Map()
map.set('1', 'str1')
map.set(1, 'num1')
map.set(true, 'bool1')
map.set({name: "John"}, 123)
map.set('1', 'str123') // Overrides the previous value

if (!map.has(1)) {
    map.set(1, 'num123')
} else {
    console.log('1 already exists')
}

console.log(map.size)

console.log(map)

for (let vegetable of map.keys()) {
    console.log(vegetable)
}
for (let amount of map.values()) {
    console.log(amount)
}
for (let entry of map) {
    console.log(entry)
}

const priceMap = new Map([
    ['banana', 1],
    ['apple', 2],
    ['orange', 3]
])

const prices = Object.fromEntries(priceMap.entries())
console.log(prices)

const obj = {
    name: 'John',
    age: 30
}

console.log(obj)

const objectMap = new Map(Object.entries(obj))
console.log(objectMap)

