console.log('===========================================================');
console.log('Implict boolean conversion')
console.log('===========================================================');

const test = [1, 0, -1, -20, 20, 'hi', '', undefined, null, NaN, Infinity, -Infinity];
test.forEach(element => {
    if (element) {
        console.log(`${element} is true`)
    } else {
        console.log(`${element} is false`)
    }
})

console.log('==========================================================')
console.log('Typeof different elements')
console.log('==========================================================')

const typeofStuff = [1, 0, -1, -20, 20, 'hi', '', undefined, null, NaN, Infinity, -Infinity, function() {}, [], {}, Symbol('hi'), Math, 10n];
typeofStuff.forEach(element => {
    try {
        console.log(`${element} is ${typeof element}`)
    } catch {
        console.log(typeof element)
    }
})

console.log('==========================================================')
console.log('Explicit string conversion')
console.log('==========================================================')

const convertToString = [1, 0, -1, -20, 20, 'hi', '', undefined, null, NaN, Infinity, -Infinity, function() {}, [], {}, Math];
convertToString.forEach(element => {
    console.log(String(element))
})

console.log('==========================================================')
console.log('Explicit number conversion')
console.log('==========================================================')

const convertToNumber = [1, 0, -1, -20, 20, 'hi', '', undefined, null, NaN, Infinity, -Infinity, function() {}, [], {}, Math];
convertToNumber.forEach(element => {
    console.log(Number(element))
})

console.log('==========================================================')
console.log('Explicit boolean conversion')
console.log('==========================================================')

const convertToBoolean = [1, 0, -1, -20, 20, 'hi', '', undefined, null, NaN, Infinity, -Infinity, function() {}, [], {}, Math];
convertToBoolean.forEach(element => {
    console.log(`${element} is ${Boolean(element)}`)
})

console.log('==========================================================')
console.log('Implicit string conversion')
console.log('==========================================================')

const convertToStringImplicit = [["1", 2, 2], [3, "4", 5], [6, 7, 8], [9, 4, "6"]];
convertToStringImplicit.forEach(element => {
    result = element[0] + element[1] + element[2];
    let elements = '';
    for (let i = 0; i < element.length; i++) {
        if (typeof element[i] == 'number') {
            elements += `${element[i]}${i == element.length - 1 ? '' : ' + '}`;
        } else {
            elements += `"${element[i]}"${i == element.length - 1 ? '' : ' + '}`;
        }
    }
    console.log(`${elements} is ${result}`)
})

console.log('==========================================================')
console.log('Arrow Function')
console.log('==========================================================')

function sum (a, b) {
    return a + b;
}
console.log(sum(1, 2));
const sum2 = function (a, b) {
    return a + b;
}
console.log(sum2(1, 2));
const sum3 = (a, b) => a + b;
console.log(sum3(1, 2));

console.log(true + false + true)