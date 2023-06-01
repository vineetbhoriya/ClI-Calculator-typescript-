import { question } from "readline-sync";

function main(): void {
  // console.log(question)
  const num1: string = question("Enter the first number: \n");
  const op: string = question("Enter the Operation: \n");
  const num2: string = question("Enter the second number: \n");
  console.log(num1, op, num2);

  const firstNum = isNumber(num1);
  console.log(firstNum)

  const isOp = isOperater (op)
  console.log(isOp)
}

function isOperater(Operater:string):boolean{
    switch(Operater){
        case '+':
        case '-':
        case '*':
        case '/':
            return true 
        default: 
            return false    
    }

}

function isNumber(str: string) {
    const maybenum = parseInt(str)
    const isNum:boolean = !isNaN(maybenum)
    return isNum
}

main();
