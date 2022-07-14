const fruitMap = new Map()
fruitMap.set('banana', 89)
fruitMap.set('apple', 52)
fruitMap.set('orange', 47)
fruitMap.set('grape', 67)
fruitMap.set('pear', 57)

for (const fruit of fruitMap.keys()) {
    console.log(`${fruit} is in the fruit map.`)
}
for (const calories of fruitMap.values()) {
    console.log(calories)
}
for (const [fruit, calories] of fruitMap) {
    console.log(`A ${fruit} has ${calories} calories.`)
}

const fruitMapObject = Object.fromEntries(fruitMap.entries());
console.log(fruitMapObject)
const secondFruitMap = new Map(Object.entries(fruitMapObject))
console.log(secondFruitMap)


fruitMap.delete('banana') //banana key gets deleted
console.log(fruitMap)
fruitMap.clear()
console.log(fruitMap)
console.log(fruitMap.has('banana'))//false