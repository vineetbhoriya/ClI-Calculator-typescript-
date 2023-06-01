"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    // console.log(question)
    var num1 = (0, readline_sync_1.question)("Enter the first number: \n");
    var op = (0, readline_sync_1.question)("Enter the Operation: \n");
    var num2 = (0, readline_sync_1.question)("Enter the second number: \n");
    console.log(num1, op, num2);
    var firstNum = isNumber(num1);
    console.log(firstNum);
}
function isNumber(str) {
    var maybenum = parseInt(str);
    var isNum = !isNaN(maybenum);
    return isNum;
}
main();
