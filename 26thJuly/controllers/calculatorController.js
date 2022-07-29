var Calculator = require('../libraries/Calculator')
var calculator = new Calculator()

const addNumbers = (req, res) => {
    let {num_1, num_2} = req.query;

    num_1 = parseInt(num_1), num_2 = parseInt(num_2)

    if (isNaN(num_1)) {
        res.status(400).json({status: "FAILED", message: "num_1 is not an int"})
        return
    }

    if (isNaN(num_2)) {
        res.status(400).json({status: "FAILED", message: "num_2 is not an int"})
        return
    }

    try {
        const result = calculator.add(num_1, num_2)
        res.status(200).json({
            status: "SUCCESS",
            result
        })
    } catch (e) {
        console.error(e)
        res.status(500).json({
            status: "FAILED",
            error: e
        })
    }
}

const subtractNumbers = (req, res) => {
    let {num_1, num_2} = req.query;

    num_1 = parseInt(num_1), num_2 = parseInt(num_2)

    if (isNaN(num_1)) {
        res.status(400).json({status: "FAILED", message: "num_1 is not an int"})
        return
    }

    if (isNaN(num_2)) {
        res.status(400).json({status: "FAILED", message: "num_2 is not an int"})
        return
    }

    try {
        const result = calculator.subtract(num_1, num_2)
        res.status(200).json({
            status: "SUCCESS",
            result
        })
    } catch (e) {
        console.error(e)
        res.status(500).json({
            status: "FAILED",
            error: e
        })
    }
}

const multiplyNumbers = (req, res) => {
    let {num_1, num_2} = req.query;

    num_1 = parseInt(num_1), num_2 = parseInt(num_2)

    if (isNaN(num_1)) {
        res.status(400).json({status: "FAILED", message: "num_1 is not an int"})
        return
    }

    if (isNaN(num_2)) {
        res.status(400).json({status: "FAILED", message: "num_2 is not an int"})
        return
    }

    try {
        const result = calculator.multiply(num_1, num_2)
        res.status(200).json({
            status: "SUCCESS",
            result
        })
    } catch (e) {
        console.error(e)
        res.status(500).json({
            status: "FAILED",
            error: e
        })
    }
}

const divideNumbers = (req, res) => {
    let {num_1, num_2} = req.query;

    num_1 = parseInt(num_1), num_2 = parseInt(num_2)

    if (isNaN(num_1)) {
        res.status(400).json({status: "FAILED", message: "num_1 is not an int"})
        return
    }

    if (isNaN(num_2)) {
        res.status(400).json({status: "FAILED", message: "num_2 is not an int"})
        return
    }

    if (num_1 == 0) {
        res.status(400).json({status: "FAILED", message: "Cannot divide by 0. num_1 is 0."})
        return
    }

    if (num_2 == 0) {
        res.status(400).json({status: "FAILED", message: "Cannot divide by 0. num_2 is 0."})
        return
    }

    try {
        const result = calculator.divide(num_1, num_2)
        res.status(200).json({
            status: "SUCCESS",
            result
        })
    } catch (e) {
        console.error(e)
        res.status(500).json({
            status: "FAILED",
            error: e
        })
    }
}

const exponentializeNumbers = (req, res) => {
    let {num1, num2} = req.query

    num1 = parseInt(num1), num2 = parseInt(num2)

    if (isNaN(num1)) {
        res.status(400).json({
            status: "FAILED",
            message: "num1 is not an int"
        })
    }

    if (isNaN(num2)) {
        res.status(400).json({
            status: "FAILED",
            message: "num2 is not an int"
        })
    }

    try {
        const result = calculator.exponentialize(num1, num2)
        res.status(200).json({
            status: "SUCCESS",
            result
        })
    } catch (e) {
        console.error(e)
        res.status(500).json({
            status: "FAILED",
            error: e
        })
    }
}

const modulusNumbers = (req, res) => {
    let {num_1, num_2} = req.query;

    num_1 = parseInt(num_1), num_2 = parseInt(num_2)

    if (isNaN(num_1)) {
        res.status(400).json({
            status: "FAILED",
            message: "num_1 is not an int"
        })
        return
    }

    if (isNaN(num_2)) {
        res.status(400).json({
            status: "FAILED",
            message: "num_2 is not an int"
        })
        return
    }

    try {
        const result = calculator.modulus(num_1, num_2)
        res.status(200).json({
            status: "SUCCESS",
            result
        })
    } catch (e) {
        console.error(e)
        res.status(500).json({
            status: "FAILED",
            error: e
        })
    }
}

const previousResults = (req, res) => {
    try {
        res.status(200).json(calculator.getPreviousResults())
    } catch (e) {
        console.error(e)
        res.status(500).json({
            status: "FAILED",
            error: e
        })
    }
}

const returnPreviousResults = () => {
    return calculator.getPreviousResults();
}

module.exports = {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers,
    exponentializeNumbers,
    modulusNumbers,
    previousResults,
    returnPreviousResults
}