let num1 = +prompt("enter the first number");
let op = prompt("enter the operator");
let num2 = +prompt("enter the first number");

switch(op){
    case "+":
        alert(`${num1} + ${num2} = ${num1+num2}`)
    case "-":
        alert(`${num1} - ${num2} = ${num1-num2}`)
    case "*":
        alert(`${num1} * ${num2} = ${num1*num2}`)
    case "/":
        if (num2===0){
            alert("cannot divide by zero")
        }
        else {
        alert(`${num1} / ${num2} = ${num1/num2}`)
        }
}