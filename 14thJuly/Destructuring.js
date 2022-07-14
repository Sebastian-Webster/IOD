let obj = {title: "Sebastian", height: 100, width: 100}
const {height = 10, title = "Hi", width = 50, otherVariable = 'hi'} = obj;
//otherVariable uses the default 'hi' because obj does not have a key called otherVariable
console.log(height)
console.log(width)
console.log(title)
console.log(otherVariable)

let guest = "Pete";
let admin = "Jane";
console.log(guest);
console.log(admin);
[guest, admin] = [admin, guest]
console.log(guest);
console.log(admin);

let obj2 = {seb: "Seb"}
let {seb: Sebastian} = obj2 //Make variable Sebastian be set to obj2.seb
console.log(Sebastian) //Will be Seb

const {title: title2, ...rest} = obj;
console.log(title2)
console.log(rest)

function sumAll(...numbers) {
    let finalNum = 0
    numbers.forEach(number => {
        if (isNaN(number)) return;
        finalNum  += +number;
    })
    return finalNum;
}

function sumAllWithReduce(...numbers) {
    return numbers.reduce((accumulator, numberToAdd) => {
        if (isNaN(numberToAdd)) return accumulator;
        return accumulator += +numberToAdd
    })
}

console.log(sumAll(10, 20, 30, 40, 50, 'hi', '2'))
console.log(sumAllWithReduce(10, 20, 30, 40, 50, 'hi', '2'))

let [rego1, rego2] = new Set(['ABCXYZ', 'XYZABC'])
console.log(rego1)
console.log(rego2)

const employee = {
    name: "Sebastian",
    age: 15,
    company: "SquareTable"
}

for (const [key, value] of Object.entries(employee)) {
    console.log(`${key} equals ${value}`)
}

const deconstructMe = ['hi', 'hello', 'hey']
const [greeting1, greeting2, greeting3] = deconstructMe;
console.log(greeting1)
console.log(greeting2)
console.log(greeting3)

const deconstructMe2 = ['hi', 'hey', 'hello']
const [greetingOne = 'how do you do', greetingTwo = 'whats up', greetingThree = 'greetings', greetingFour = 'howdy'] = deconstructMe2
console.log(greetingOne)
console.log(greetingTwo)
console.log(greetingThree)
console.log(greetingFour)

const map = new Map();
map.set('name', 'Sebastian')
map.set('age', 15)
map.set('company', 'SquareTable')
const {name: mapName, age: mapAge, company: mapCompany} = Object.fromEntries(map.entries())
console.log(mapName)
console.log(mapAge)
console.log(mapCompany)

const studentMap = new Map([
    ['Sebastian', '100%'],
    ['John', '80%'],
    ['Mary', '70%']
])

for (const [key, value] in studentMap.entries()) {
    console.log(`${key} has a ${value} grade`)
}