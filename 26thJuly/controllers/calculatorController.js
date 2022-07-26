var calculator = require('../libraries/Calculator')
var Calculator = new calculator()

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


    res.status(200).json({
        status: "SUCCESS",
        result: Calculator.add(num_1, num_2)
    })
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


    res.status(200).json({
        status: "SUCCESS",
        result: Calculator.subtract(num_1, num_2)
    })
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


    res.status(200).json({
        status: "SUCCESS",
        result: Calculator.multiply(num_1, num_2)
    })
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


    res.status(200).json({
        status: "SUCCESS",
        result: Calculator.divide(num_1, num_2)
    })
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

    res.status(200).json({
        status: "SUCCESS",
        result: Calculator.exponentialize(num1, num2)
    })
}

module.exports = {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers,
    exponentializeNumbers
}