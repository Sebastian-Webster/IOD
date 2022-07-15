// Start of question 1
function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(ucFirst('hi'))
console.log(ucFirst('hello'))
//End of question 1

//Start of question 2
function truncate(str, maxLength) {
    if (typeof str !== 'string' || typeof maxLength !== 'number') return console.error('Wrong data type provided to truncate()')
    if (maxLength < 4) console.warn('No characters are going to be shown if a maxLength of less than 4 is provided to truncate()')
    if (maxLength > str.length) return str
    /*
    let splitString = str.split("");
    let newString = '';
    for (let i = 0; i < maxLength - 3; i++) {
        newString += splitString[i]
    }
    return newString + '...';
    */
    return str.length > maxLength ? str.substring(0, maxLength - 3) + '...' : str
}

console.log(truncate('abcdefghijklmnopqrstuvwxyz', 6))
//End of question 2

//Start of question 3
let styles = ["Jazz", "Blues"]
console.log(styles)
styles.push("Rock-n-Roll")
console.log(styles)
styles[Math.round((styles.length - 1) / 2)] = "Classics"
console.log(styles)
console.log(styles.shift())
console.log(styles)
styles.unshift('Rap', 'Reggae')
console.log(styles)
//End of question 3

//Start of question 4
function camelize(str) {
    if (typeof str !== 'string') return console.error('You must provide a string to camelize()')
    let splitString = str.split('-')
    if (splitString.length == 1) return str

    for (let i = 1; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1)
    }
    return splitString.join('')
}

console.log(camelize('background-color'))
console.log(camelize('list-style-image'))
console.log(camelize('-webkit-transition'))
//End of Question 4

//Start of Question 5
class Calculator {
    constructor() {
        this.functions = {
            '+': this.add,
            '-': this.subtract
        }
    }

    calculate(str) {
        if (typeof str !== 'string') return console.error('You must provide a string to Calculator.prototype.calculate()')
        let splitString = str.split(' ')
        let functionToUse = this.functions[splitString[1]]
        if (functionToUse == undefined) return console.error('Please provide an operator to use.')
        return functionToUse(splitString[0], splitString[2])
    }

    add(number1, number2) {
        return +number1 + +number2
    }

    subtract(number1, number2) {
        return +number1 - +number2
    }

    addMethod(operatorToUse, functionToRun) {
        this.functions[operatorToUse] = functionToRun
    }

}

const test = new Calculator()
console.log(test.calculate('2 + 2'))
console.log(test.calculate('2 - 2'))
console.log(test.calculate('3 + 7'))
console.log(test.calculate('3 - 7'))
test.addMethod('*', (a, b) => a * b)
console.log(test.calculate('3 * 7'))
test.addMethod('/', (a, b) => a / b)
console.log(test.calculate('10 / 2'))
test.addMethod('**', (a, b) => a ** b)
console.log(test.calculate('3 ** 2'))
//End of Question 5

//Start of Question 6
let arr = []

function generateRandomNumber(min, max) {
    // Answer from https://stackoverflow.com/a/69839611
    let range = {min, max}
    let delta = range.max - range.min

    return Math.round(range.min + Math.random() * delta)
}

function unique(arr, randomItemsToReturn) {
    if (Array.isArray(arr) !== true) return console.error('Must provide an array to unique()')
    if (typeof randomItemsToReturn !== 'number') return console.error('Must provide a number of random items to return to unique()')
    if (randomItemsToReturn >= arr.length) return arr
    let randomNums = []
    for (let i = 0; i < randomItemsToReturn; i++) {
        let randomNumber;
        while (true) {
            randomNumber = generateRandomNumber(0, arr.length - 1)
            if (!randomNums.includes(randomNumber)) break
        }
        randomNums.push(randomNumber)
    }
    let arrayToReturn = []
    for (const item of randomNums) {
        arrayToReturn.push(arr[item])
    }
    return arrayToReturn
}

console.log(unique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
console.log(unique([1, 2, 3], 5))
//End of Question 6


//Start of Question 7
let map = new Map();
map.set("name", "John")
let keys = map.keys();
keys = Array.from(keys)
keys.push('more')
console.log(keys)
//End of Question 7

//Start Question 8
let messagesHaveBeenRead = new WeakMap()
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
]
messages.forEach((message, index) => {
    messagesHaveBeenRead.set(message, index % 2 === 0 ? true : false);
})
console.log(messagesHaveBeenRead.get(messages[0]))
console.log(messagesHaveBeenRead.get(messages[1]))
//End of Question 8

//Start of Question 9
function sumSalaries(salaries) {
    if (typeof salaries !== 'object' || salaries == null || Array.isArray(salaries)) return console.error('Must provide an object to sumSalaries()')
    const objectValues = Object.values(salaries)
    if (objectValues.length == 0) return 0
    let combinedSalaries = 0
    for (const salary of objectValues) {
        combinedSalaries += salary
    }
    return combinedSalaries
}

console.log(sumSalaries({'John': 100, 'Sebastian': 9999}))
console.log(sumSalaries({}))
//End of Question 9

//Start Question 10
function topSalary(salaries) {
    if (typeof salaries !== 'object' || salaries == null || Array.isArray(salaries)) return console.error('You must provide an object to topSalary()')
    if (Object.keys(salaries).length == 0) return null
    let highestPaidPerson = ''
    let highestSalary = 0
    for (const [key, value] of Object.entries(salaries)) {
        if (value > highestSalary) {
            highestPaidPerson = key
            highestSalary = value
        }
    }
    return highestPaidPerson
}

console.log(topSalary({}))
console.log(topSalary({'John': 100, 'Sebastian': 999999, 'Max': 100}))

//Start Question 11
function getSecondsToday() {
    var now = new Date();
    return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds()
}

console.log(getSecondsToday())
//End Question 11

//Start of Question 12
let room = {
    number: 23
}

let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
}

//Circular references
room.occupiedBy = meetup;
meetup.self = meetup;

/*
function circularReferenceRemover(key, value) {
    const seen = new WeakSet(); //Create a WeakSet (an array but all values are unique)
    return (key, value) => { //Return replacer function to JSON.stringify
        if (typeof value === 'object' && value !== null) { //If the value is an object (only objects can have circular references (refer to themselves))
            if (seen.has(value)) { //If the value is already in the WeakSet (that will be the circular reference)
                return undefined; //Tell JSON.stringify to not include the circular reference in the stringified string
            }
            seen.add(value) // If the value has not already in the WeakSet (not a circular reference) add it to spot any circular references.
        }
        return value; //If the value is a primitive type or is not already in the WeakSet then tell JSON.stringify to add it to the string.
    }
}
*/

console.log(JSON.stringify(meetup, function(key,value) {
    if (key != '' && value == meetup) return undefined;
    else return value;
}))