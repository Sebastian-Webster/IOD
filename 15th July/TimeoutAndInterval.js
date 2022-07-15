console.log('I am a synchronous message')
setTimeout(() => {
    console.log('I am an asynchronous message')
}, 1000);

console.log('I am a synchronous message.')
const timeout = setTimeout(() => {
    console.log('I will never run because I get cleared before I can call this function')
}, 1000);
clearTimeout(timeout);

console.log('I am a synchronous message.')
let counter = 5
const timer = setInterval(() => {
    if (counter <= 0) {
        console.log('Ending countdown...')
        clearInterval(timer)
        return;
    }

    console.log(counter)
    counter -= 1
}, 1000);

setTimeout(() => {
    console.log(new Date().getTime())
}, 1000);
setTimeout(() => {
    console.log(new Date().getTime())
}, 2000);
setTimeout(() => {
    console.log(new Date().getTime())
}, 3000);

let counter2 = 5
const timer2 = setInterval(() => {
    console.log(new Date().getTime())
    counter2 -= 1
    if (counter2 <= 0) {
        clearInterval(timer2)
    }
}, 1000);