const { v4: uuid } = require('uuid');
const Logger = require('./Logger')
const logger = new Logger()


class Calculator {
    constructor() {
        this.id = uuid()
        this.previousResults = []
    }

    #log(value) {
        logger.log(`[Calculator: ${this.id}]:${value}`)
    }

    #addNewResult(number1, number2, result, method) {
        this.previousResults.push({
            number1,
            number2,
            result,
            method,
            date: new Date()
        })
    }

    add(num1, num2) {
        const value = num1 + num2
        this.#log(value)
        this.#addNewResult(num1, num2, value, 'add')
        return value
    }

    subtract(num1, num2) {
        const value = num1 - num2
        this.#log(value)
        this.#addNewResult(num1, num2, value, 'subtract')
        return value
    }

    multiply(num1, num2) {
        const value = num1 * num2
        this.#log(value)
        this.#addNewResult(num1, num2, value, 'multiply')
        return value
    }

    divide(num1, num2) {
        const value = num1 / num2
        this.#log(value)
        this.#addNewResult(num1, num2, value, 'divide')
        return value
    }

    exponentialize(num1, num2) {
        const value = num1 ** num2
        this.#log(value)
        this.#addNewResult(num1, num2, value, 'exponentialize')
        return value
    }

    modulus(num1, num2) {
        const value = num1 % num2
        this.#log(value)
        this.#addNewResult(num1, num2, value, 'modulus')
        return value
    }

    getPreviousResults() {
        return this.previousResults
    }
}

module.exports = Calculator