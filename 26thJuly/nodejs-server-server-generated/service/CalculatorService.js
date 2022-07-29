'use strict';


/**
 * Adds 2 numbers
 *
 * num_1 Integer The First Number
 * num_2 Integer The Second number
 * no response value expected for this operation
 **/

let previousResults = []

function addPreviousResults(num1, num2, result, method) {
  previousResults.push({
    number1: num1,
    number2: num2,
    result: result,
    method: method,
    date: new Date()
  })
}

exports.addNumbers = function(num_1,num_2) {
  return new Promise(function(resolve, reject) {
    const result = num_1 + num_2
    addPreviousResults(num_1, num_2, result, 'add')
    resolve({result});
  });
}


/**
 * Divides 2 numbers together
 *
 * num_1 Integer The First Number
 * num_2 Integer The Second number
 * no response value expected for this operation
 **/
exports.divideNumbers = function(num_1,num_2) {
  return new Promise(function(resolve, reject) {
    const result = num_1 / num_2
    addPreviousResults(num_1, num_2, result, 'divide')
    resolve({result});
  });
}


/**
 * Raises a number to the power of another number
 *
 * num1 Integer The First Number
 * num2 Integer The Second number
 * no response value expected for this operation
 **/
exports.exponentializeNumbers = function(num1,num2) {
  return new Promise(function(resolve, reject) {
    const result = num_1 ** num_2
    addPreviousResults(num_1, num_2, result, 'exponentialize')
    resolve({result});
  });
}


/**
 * Get the previous results you have received from this calculator service.
 *
 * no response value expected for this operation
 **/
exports.getPreviousResults = function() {
  return new Promise(function(resolve, reject) {
    resolve(previousResults);
  });
}


/**
 * Multiplies 2 numbers together
 *
 * num_1 Integer The First Number
 * num_2 Integer The Second number
 * no response value expected for this operation
 **/
exports.multiplyNumbers = function(num_1,num_2) {
  return new Promise(function(resolve, reject) {
    const result = num_1 * num_2
    addPreviousResults(num_1, num_2, result, 'multiply')
    resolve({result});
  });
}


/**
 * Subtracts 2 numbers
 *
 * num_1 Integer The First Number
 * num_2 Integer The Second number
 * no response value expected for this operation
 **/
exports.subtractNumbers = function(num_1,num_2) {
  return new Promise(function(resolve, reject) {
    const result = num_1 - num_2
    addPreviousResults(num_1, num_2, result, 'subtract')
    resolve({result});
  });
}

