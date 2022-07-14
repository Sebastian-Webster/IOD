const weakMap = new WeakMap();
let obj = {name: "John"}

weakMap.set(obj,"value1")
console.log(weakMap.get(obj))
obj = null
console.log(weakMap.get(obj))

const map = new Map()
obj = {name: "John"}

map.set(obj, "value1")
console.log(map.get(obj))
obj = null
console.log(map.get(obj))