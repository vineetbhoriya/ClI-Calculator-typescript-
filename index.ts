import { question } from "readline-sync";

type Operater = "+" | "-" | "*" | "/";

function main(): void {
  //Get Input
  const num1: string = question("Enter the first number: \n");
  const op: string = question("Enter the Operation: \n");
  const num2: string = question("Enter the second number: \n");

  //check for vaild input
  const isVaild: boolean = isNumber(num1) && isOperator(op) && isNumber(num2);
  if (isVaild) {
    const firstNum: number = parseInt(num1);
    const secondNum: number = parseInt(num2);
    const result = calculator(firstNum, op as Operater, secondNum);
    console.log("Result :", result);
  } else {
    console.log("\nInvaild input \n");
    main();
  }
}

function calculator(firstNum: number, op: Operater, secondNum: number) {
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
function isOperator(Operater: string): boolean {
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
function isNumber(str: string) {
  const maybenum = parseInt(str);
  const isNum: boolean = !isNaN(maybenum);
  return isNum;
}

main();
