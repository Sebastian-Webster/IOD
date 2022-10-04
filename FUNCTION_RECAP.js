let user = {
    sayHi() {
        console.log("Hi")
    },
    sayBye: function() {
        console.log("Bye") 
    },
    runTwoArgumentFunction(a,b) {
        console.log("Two argument function ran.") 
    },
    runFiveArgumentFunction(a,b,c,d,e) {
        console.log("Five argument function ran")
    },
    runThreeArgumentFunction(a,b,c,...more) {
        console.log("Only three arguments are provided as ... arguments do not HAVE to be provided")
    },
    countFunctionRunTimes() {
        user.countFunctionRunTimes.count++
    }
}

user.countFunctionRunTimes.count = 0

console.log(user.countFunctionRunTimes.count)

console.log(typeof user.sayHi)
console.log(typeof user.sayBye)
console.log(user.sayHi.name)
console.log(user.sayBye.name)
user.countFunctionRunTimes()
user.countFunctionRunTimes()
user.countFunctionRunTimes()
console.log(user.runFiveArgumentFunction.length)
console.log(user.runTwoArgumentFunction.length)
console.log(user.runThreeArgumentFunction.length)
console.log(user.countFunctionRunTimes.count)


function add1(a,b) { //Function declaration
    console.log(a+b) 
}

let add2 = function(a,b) { //Function expression
    console.log(a+b) 
}

let add3 = (a,b) => {console.log(a+b)} //Arrow function

add1(3,2)
add2(3,2)
add3(3,2)

let obj = {
    num: 2
}

function add(a, b) {
    return this.num + a + b
}

// - Executing in the context of obj object
console.log(add.call(obj, 10, 5)) //Call immediately calls the function. The first argument makes the "this" object the "obj" object. The other arguments will be passed to the function.

// - Executing in the context of obj object
console.log(add.apply(obj, [10, 5])) //Apply immediately calls the function with obj as the this object and the each item in the array will be supplied to the function as an argument.

// Call and apply are the exact same - the only difference is call accepts many individual parameters, apply accepts an array of parameters

let func = add.bind(obj, 10, 5) //Returns a function that can be later executed. The first argument will be the "this" object and the arguments afterwards will be passed to the function.
console.log(func()) //Executes the function returned by Function.bind()

function item(name, price) {
    this.name = name;
    this.price = price;
    this.description = `${this.name}, ${this.price}`
}

function Car(name, price) {
    item.call(this, name, price) //By passing the this object to item, item will set the this.name, this.price, and this.description. Those values can then be accessed in the Car function or object created from Car function
    console.log(this.name)
    console.log(this.price)
    console.log(this.description)
}

const bmw = new Car("BMW", 200000)
console.log(bmw.name)
console.log(bmw.price)
console.log(bmw.description)

let numbers = [1, 2, 3]
let moreNumbers = [4, 5, 6]
let evenMoreNumbers = [7,8,9]
numbers.push.apply(numbers, moreNumbers) //Pushes each element in the moreNumbers array individually
numbers.push(evenMoreNumbers) //Pushes the array as an element
console.log(numbers)

let person = {
    name: "John",
    getName: function() {
        console.log(this.name)
    },
    getNameTwo: () => {
        console.log(this.name)
    },
    getNameThree() {
        console.log(this.name)
    }
}

let func2 = person.getName;
let func3 = person.getName.bind(person)

setTimeout(person.getName, 1000) //Function logs undefined because setTimeout does not get the person context
setTimeout(func2, 1000) //Function logs undefined because setTimeout does not get the person context
setTimeout(func3, 1000) //Function logs person.name because it is binded to person. The this object is person. The function will now have context.

setTimeout(person.getNameTwo, 1000) //Function logs undefined because setTimeout does not get the person context
setTimeout(person.getNameThree, 1000) //Function logs undefined because setTimeout does not get the person context
person.getNameThree() //Logs person.name because there is person context
person.getNameTwo() //Logs undefined.
person.getName() //Logs person.name because there is person context


function Pen(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = "$" + price;
}

Pen.prototype.showPenDetails = function() {
    console.log(`This pen is a ${this.color} ${this.name} and it costs ${this.price}`)
}

let pen1 = new Pen("Camel", "Blue", 5)

pen1.showPenDetails()

class PenClass {
    constructor(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = "$" + price;
    }

    showPenDetails() {
        console.log(`This pen is a ${this.color} ${this.name} and it costs ${this.price}`)
    }
}

let pen2 = new PenClass("Camel", "Blue", 5)

pen2.showPenDetails()

function Person() {
    this.name = 'John'
}

Person.prototype.name = 'Sebastian'
Person.prototype.age = 15
let person1 = new Person()

console.log(person1) // {name: 'John'}
console.log(person1.name) // 'John'
console.log(person1.age) // 15

class Employee {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name
    }

    setName(newName) {
        if (typeof newName !== 'string' || newName.trim().length === 0) throw new Error('newName is not valid')
        this.name = newName;
    }
}

let employee = new Employee("Sebastian")
console.log(employee.name)

class Contractor extends Employee {
    constructor(name) {
        super(name)
    }

    displayStatus() {
        console.log('I am a Contractor')
    }
}

let contractor = new Contractor("John")

contractor.displayStatus()
console.log(contractor.getName())
contractor.setName("Sebastian")
console.log(contractor.getName())