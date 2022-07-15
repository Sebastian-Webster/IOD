const prompt = require('prompt-sync')();
//Start of Question 1
//I think no, the counters will not be independent.
//The counters are actually independent.

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
//End of Question 2


//Start of Question 3
function printNumbersWithInterval(from, to) {
    const timer = setInterval(() => {
        console.log(from)
        if (++from >= to + 1) clearInterval(timer)
    }, 1000);
}
printNumbersWithInterval(10, 20)

// -- Will do nested setTimeout later --
//End of Question 3

//Start of Question 4 ---will come back to later---
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

//Skipping question 7 for now

//Start of Question 8 --NOT FINISHED YET--
function f(a, b) {
    return a + b;
}
//End of Question 8