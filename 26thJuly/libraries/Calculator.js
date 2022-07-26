const { v4: uuid } = require('uuid');
const Logger = require('./Logger')
const logger = new Logger()


class Calculator {
    constructor() {
        this.id = uuid()
    }

    #log(value) {
        logger.log(`[Calculator: ${this.id}]:${value}`)
    }

    add(num1, num2) {
        const value = num1 + num2
        this.#log(value)
        return value
    }

    subtract(num1, num2) {
        const value = num1 - num2
        this.#log(value)
        return value
    }

    multiply(num1, num2) {
        const value = num1 * num2
        this.#log(value)
        return value
    }

    divide(num1, num2) {
        const value = num1 / num2
        this.#log(value)
        return value
    }

    exponentialize(num1, num2) {
        const value = num1 ** num2
        this.#log(value)
        return value
    }
}

module.exports = Calculator