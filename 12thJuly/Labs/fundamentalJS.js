// Question 2
console.log('' + 1 + 0) // Logs 10
console.log('' - 1 + 0) // Logs -1
console.log(true + false) // Logs 1
console.log(6 / "3") // Logs 2
console.log("2" * "3") // Logs 6
console.log(4 + 5 + "px") // Logs 9px
console.log("$" + 4 + 5) //Logs $45
console.log("4" - 2) // Logs 2
console.log("4px" - 2) //Logs NaN
console.log('   -9   ' + 5) //Logs     -9    5
console.log("   -9    " - 5) //Logs -14
console.log(null + 1) //Logs 1
console.log(undefined + 1) //Logs NaN
console.log(" \t \n" - 2) // Logs -2
console.log(" \t " - 2) // Logs -2
console.log(" \n " - 2) // Logs -2
// End of Question 2



// Question 3
let a = 1
let b = 2
console.log(+a + +b);
// End of Question 3



//Question 4
console.log(5 > 4) //True
console.log("apple" > "pineapple") //False
console.log("2" > "12") //True
console.log(undefined == null) //True
console.log(undefined === null) //False
console.log(null == "\n0\n") //False
console.log(null === +"\n0\n") //False
// End of Question 4



//Question 5
//Hello will be logged to console
if ("0") {
    console.log('hello')
}
//End of Question 5



//Question 6
//Write usign coditional / ternary operator
let result;
result = a + b < 4 ? 'Below' : 'Over'
//End of Question 6

//Question 7
const hello = (who) => console.log('Hello ' + who)
const delay = (func, ms, parameters) => setTimeout(func, ms, parameters)
const delayHello = (who) => delay(hello, 300, who)
delayHello('World')
// End of Question 7


// Question 8
function isEmpty(obj) {
    return Object.keys(obj).length > 0 ? false : true
}

let schedule = {}
console.log(isEmpty(schedule))
schedule["8:30"] = "get up"
console.log(isEmpty(schedule))
//End of Question 8



// Question 9
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep() {console.log(this.step)}
}

ladder.up().up().down().showStep() //1

//End of Question 9


//Question 10
const prompt = () => Math.round(Math.random() * 10)
/*
class Accumulator {
    constructor(startingValue) {
        this.value = startingValue
    }

    read = () => {
        this.value += +prompt('Write a number:')
    }
}*/

function Accumulator(startingValue) {
    this.value = startingValue
    this.read = () => {
        this.value += +prompt('Write a number:')
    }
}

let accumulator = new Accumulator(1)
accumulator.read();
accumulator.read();
console.log(accumulator.value)
//End of Question 10