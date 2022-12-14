//Store necessary buttons and screen in a variable
const screen = document.querySelector(".screen");
const display = document.querySelector(".fullEquation");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const backSpace = document.querySelector(".backSpace");
//introduce numbers and operators
let firstNum = undefined;
let secondNum = undefined;
let operation = "";
let equals = "";
let oldNumber = undefined;
let num = undefined;
let currentResult = undefined;

// event listener to clear the screen and variables
clear.addEventListener('click', () =>{
    screen.textContent ="";
    firstNum = undefined;
    secondNum = undefined;
    operation = "";
    equals = "";
    display.textContent = "";
    let currentResult = undefined;

});

//remove the last element on the screen if user presses backspace

backSpace.addEventListener('click',() =>{
    oldNumber = screen.textContent;
    let newNumber = oldNumber.slice(0, -1);
    screen.textContent = newNumber;
});

// Add event listener to number button to show up on the calculator screen
numbers.forEach(number => {number.addEventListener('click', () =>{
    num = number.value;
    if (currentResult != undefined){
        screen.textContent = "";
        currentResult = undefined;       
    }
    oldNumber = screen.textContent;
    if (oldNumber.includes(".") && num ==="."){
        num = "";
    }
    screen.textContent += num;
    
});  
  });

// eventlistener for operators and call functions to use the appropriate calculator function
operators.forEach(operator => {operator.addEventListener('click', () =>{

   if (typeof firstNum === 'undefined'){
      firstNum = Number(screen.textContent);
    }

   else{
    
        secondNum = Number(screen.textContent);
        display.textContent = firstNum + " " + operation + " " + secondNum + " =";
        
    }
    screen.textContent = "";
    
    if (operator.value != "="){
        if (operation ===""){
            operation = operator.value;
        }
        else{
            equals = "=";
            result(equals, operation);
            operation = operator.value;
        }
        
         display.textContent = firstNum + " " + operation;
    }
    else{
        if (secondNum=== undefined || operation===""){
            screen.textContent = firstNum;
            firstNum = undefined;
        }
        else{
            equals = operator.value;
            result(equals, operation);
        }
    }
    
    
});
});
// functions to perfor arithimatic calculations
function add(numOne, numTwo){
    return numOne+numTwo;
}
function subtract(numOne, numTwo){
    return numOne-numTwo;
}
function multiply(numOne, numTwo){
    return numOne*numTwo;
}
function divide(numOne, numTwo){
    if (numTwo !=0){
        return parseFloat(numOne/numTwo).toFixed(2);
    }
    else{
        return "ERROR";
    }
}
// result function to show the result and initialise next steps
function result(sign, op){
    switch (sign === "=") {
        case op =="+":
            firstNum =add(firstNum,secondNum);
            currentResult = firstNum;
            operation = "";
            equals = "";
            screen.textContent = firstNum;
            break;
        
        case op =="-":
            firstNum =subtract(firstNum,secondNum);
            currentResult = firstNum;
            operation = "";
            equals = "";
            screen.textContent = firstNum;
            break;
        
        case op =="*":
            firstNum =multiply(firstNum,secondNum);
            currentResult = firstNum;
            operation = "";
            equals = "";
            screen.textContent = firstNum;
            break;
        case op =="/":
            firstNum =Number(divide(firstNum,secondNum));
            currentResult = firstNum;
            operation = "";
            equals = "";
            screen.textContent = firstNum;
            break;
        
    }    
}