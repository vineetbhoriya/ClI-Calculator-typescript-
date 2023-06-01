"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    //Get Input
    var num1 = (0, readline_sync_1.question)("Enter the first number: \n");
    var op = (0, readline_sync_1.question)("Enter the Operation: \n");
    var num2 = (0, readline_sync_1.question)("Enter the second number: \n");
    //check for vaild input
    var isVaild = isNumber(num1) && isOperator(op) && isNumber(num2);
    if (isVaild) {
        var firstNum = parseInt(num1);
        var secondNum = parseInt(num2);
        var result = calculator(firstNum, op, secondNum);
        console.log("Result :", result);
    }
    else {
        console.log("\nInvaild input \n");
        main();
    }
}
function calculator(firstNum, op, secondNum) {
    switch (op) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
    }
}
// check for vaild operators
function isOperator(Operater) {
    switch (Operater) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
}
// check for vaild number
function isNumber(str) {
    var maybenum = parseInt(str);
    var isNum = !isNaN(maybenum);
    return isNum;
}
main();
