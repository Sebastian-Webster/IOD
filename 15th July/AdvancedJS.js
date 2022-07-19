import promptsync from 'prompt-sync'
const prompt = promptsync();
import fetch from 'node-fetch'
import lodash from 'lodash';
var _ = lodash;
//Start of Question 1
//The counters are independent.

function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    }
}

let counter = makeCounter();
let counter2 = makeCounter()

console.log(counter())
console.log(counter())
console.log(counter2())
console.log(counter2())
//End of Question 1


//Start of Question 2 ---will come back to later---
function makeCounter2() {
    let count = 0;

    function counter() {
        return ++count;
    }

    counter.set = value => count = value;

    counter.decrease = () => --count;

    return counter;
}

let counter3 = makeCounter2();
counter3.set(100);
console.log(counter3.decrease())
console.log(counter3.decrease())
console.log(counter3())

function makeCounter3() {
    let count = 0;

    this.reset = (newcount = 0) => count = newcount;
    this.decrease = () => count--;
    this.increase = () => count++
    this.current = () => count;
}

let counter4 = new makeCounter3();
counter4.reset(100)
counter4.decrease()
counter4.increase()
console.log(counter4.current())
//End of Question 2


//Start of Question 3
function printNumbersWithInterval(from, to) {
    const timer = setInterval(() => {
        console.log(from)
        if (++from >= to + 1) clearInterval(timer)
    }, 1000);
}
printNumbersWithInterval(10, 20)

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

async function printNumbersWithNestedSetTimeout(from, to) {
    for (let i = +from - 1; i < +to + 1; i++) {
        console.log(i)
        await wait(1000);
    }
}

function printNumbersTimeout(from, to) {
    for (let i = from; i <= to; i++) {
        setTimeout(() => {
            console.log(i)
        }, 1000 * i);
    }
}

function printNumbersTimeoutNested(from, to) {
    setTimeout(function printNumber(current) {
        console.log(current)
        if (current != to) setTimeout(printNumber, 1000, current + 1)
    }, 1000, from);
}

printNumbersWithNestedSetTimeout(10, 20)
printNumbersTimeout(10, 20)
printNumbersTimeoutNested(10, 20)
//End of Question 3

//Start of Question 4
let f = _.debounce(console.log, 1000)

f("a")

setTimeout(() => {
    f("b")
}, 200);

setTimeout(() => {
    f("c")
}, 500);

setTimeout(() => {
    f("d")
}, 1000);

setTimeout(() => {
    f("e")
}, 1500);

setTimeout(() => {
    f("f")
}, 2000);
//End of Question 4

//Start of Question 5
/*function askPassword(ok, fail) {
    let password = prompt('Enter password...')
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',
    login(result) {
        console.log(this.name + (result ? ' logged in' : ' failed to log in'))
    }
}

askPassword(() => {user.login(true)}, () => {user.login(false)})*/
//End of Question 5

//Start of Question 6
let head = {
    glasses: 1
};

let table = {
    pen: 3
}

let bed = {
    sheet: 1,
    pillow: 2
}

let pockets = {
    money: 2000
}

table.__proto__ = head;
bed.__proto__ = table;
pockets.__proto__ = bed;

console.log(pockets.pen)
//End of Question 6

//Start of Question 7
class class1 {
    constructor(name) {
        this.name = name;
    }
}

function User(name) {
    this.name = name;
}

const object1 = new class1('Sebastian');
const object2 = new object1.constructor('Seb');
console.log(object1)
console.log(object2)

const object3 = new User('Pete')
const object4 = new object3.constructor('Sebastian')
console.log(object3)
console.log(object4)
//End of Question 7

//Skipping Question 8 for now
Function.prototype.defer = function(ms) {
    let sum = this;
    return function(...args) {
        setTimeout(() => {
            sum.apply(this, args)
        }, ms);
    }
}

function sum(a,b) {
    return a + b
}

console.log(sum.defer(3000)(5,6))

//Start of Question 9
let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join();
        }
    }
})

dictionary.apple = "Apple";
dictionary.__proto__ = "Test"

for (let key in dictionary) {
    console.log(key)
}

console.log(dictionary + '')


//End of Question 9

//Start of Question 10
class Clock {
    constructor({template}) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs)
        
        console.log(output)
    }

    stop() {
        clearInterval(this.timer)
    }

    start() {
        this.render()
        this.timer = setInterval(() => {
            this.render();
        }, 1000);
    }
}

class ExtendedClock extends Clock{
    constructor(template = 'hh:mm:ss.milliseconds', precision = 1000) {
        super({template})
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => {
            this.render()
        }, this.precision);
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let milliseconds = date.getMilliseconds();

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs)
            .replace('milliseconds', milliseconds)
        
        console.log(output)
    }
}

const clock = new ExtendedClock(undefined, 500);
clock.start();
//End of Question 10

//Skipping Question 11 for now

//Start of Quesstion 12
const delay = (ms) => new Promise(resolve => {
    setTimeout(() => {
        resolve()
    }, ms);
})

delay(3000).then(() => console.log('runs after 3 seconds'))
//End of Question 12

//Start of Question 13
async function loadJSON(url) {
    try {
        const response = await fetch(url);
        if (response.status == 200) return await response.json();
        else throw new Error(response.status)
    } catch (error) {
        console.log(error)
    }
}

loadJSON('no-such-user.json')
//End of Question 13