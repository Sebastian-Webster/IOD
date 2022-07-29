'use strict';

var utils = require('../utils/writer.js');
var Calculator = require('../service/CalculatorService');

module.exports.addNumbers = function addNumbers (req, res, next) {
  var num_1 = req.swagger.params['num_1'].value;
  var num_2 = req.swagger.params['num_2'].value;
  num_1 = parseInt(num_1), num_2 = parseInt(num_2)
  Calculator.addNumbers(num_1,num_2)
    .then(function (response) {
      console.log(response)
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.divideNumbers = function divideNumbers (req, res, next) {
  var num_1 = req.swagger.params['num_1'].value;
  var num_2 = req.swagger.params['num_2'].value;
  num_1 = parseInt(num_1), num_2 = parseInt(num_2)
  Calculator.divideNumbers(num_1,num_2)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.exponentializeNumbers = function exponentializeNumbers (req, res, next) {
  var num1 = req.swagger.params['num1'].value;
  var num2 = req.swagger.params['num2'].value;
  num1 = parseInt(num1), num2 = parseInt(num2)
  Calculator.exponentializeNumbers(num1,num2)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPreviousResults = function getPreviousResults (req, res, next) {
  Calculator.getPreviousResults()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.multiplyNumbers = function multiplyNumbers (req, res, next) {
  var num_1 = req.swagger.params['num_1'].value;
  var num_2 = req.swagger.params['num_2'].value;
  num_1 = parseInt(num_1), num_2 = parseInt(num_2)
  Calculator.multiplyNumbers(num_1,num_2)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.subtractNumbers = function subtractNumbers (req, res, next) {
  var num_1 = req.swagger.params['num_1'].value;
  var num_2 = req.swagger.params['num_2'].value;
  num_1 = parseInt(num_1), num_2 = parseInt(num_2)
  Calculator.subtractNumbers(num_1,num_2)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
