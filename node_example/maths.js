const prompt = require('prompt-sync')();
const arguments = process.argv;
const mathsToDo = process.argv[3];

function addition(x,y) {
    return x + y
}

function subtraction(x, y) {
    return x - y
}

function multiplication(x, y) {
    return x * y
}

function division(x, y) {
    return x / y
}

function mathsSwitchCase(symbol, firstNumber, secondNumber) {
    switch(symbol) {
        case '+':
            console.log(addition(firstNumber, secondNumber));
            break;
        case '-':
            console.log(subtraction(firstNumber, secondNumber));
            break;
        case '*':
            console.log(multiplication(firstNumber, secondNumber));
            break;
        case '/':
            console.log(division(firstNumber, secondNumber));
            break;
        default:
            console.log(`${symbol} is an invalid operation`);
    }
}

if (mathsToDo) {
    const firstNumber = parseInt(arguments[2]);
    const secondNumber = parseInt(arguments[4]);

    if (parseInt(firstNumber) == NaN || parseInt(secondNumber) == NaN) {
        console.log('Please input two numbers.')
    }

    mathsSwitchCase(mathsToDo, firstNumber, secondNumber);
} else {
    while (true) {
        const userInput = prompt('Enter a math problem: ');
        if (userInput == 'exit') {
            process.exit();
        }
        const userInputArray = userInput.split(' ');
        const firstNumber = parseInt(userInputArray[0]);
        const symbol = userInputArray[1];
        const secondNumber = parseInt(userInputArray[2]);

        if (firstNumber == NaN || secondNumber == NaN) {
            console.log('Please put in a valid math equation');
        }

        mathsSwitchCase(symbol, firstNumber, secondNumber);
    }
}