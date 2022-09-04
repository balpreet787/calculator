//Store necessary buttons and screen in a variable
const screen = document.querySelector(".screen");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear")
//introduce numbers and operators
let firstNum = undefined;
let secondNum = undefined;
let operation = "";
let equals = "";


// event listener to clear the screen and variables
clear.addEventListener('click', () =>{
    screen.textContent ="";
    firstNum = undefined;
    secondNum = undefined;
    operation = "";
    equals = "";
});

// Add event listener to number button to show up on the calculator screen
numbers.forEach(number => {number.addEventListener('click', () =>{
    screen.textContent += number.value;
    
});  
  });

// eventlistener for operators and call functions to use the appropriate calculator function
operators.forEach(operator => {operator.addEventListener('click', () =>{

   if (typeof firstNum === 'undefined'){
      firstNum = Number(screen.textContent);
    }

   else{
    
        secondNum = Number(screen.textContent);
        
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
        
        
    }
    else{
        equals = operator.value;
        result(equals, operation);
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
            operation = "";
            equals = "";
            screen.textContent = firstNum;
            break;
        
        case op =="-":
            firstNum =subtract(firstNum,secondNum);
            operation = "";
            equals = "";
            screen.textContent = firstNum;
            break;
        
        case op =="*":
            firstNum =multiply(firstNum,secondNum);
            operation = "";
            equals = "";
            screen.textContent = firstNum;
            break;
        case op =="/":
            firstNum =divide(firstNum,secondNum);
            operation = "";
            equals = "";
            screen.textContent = firstNum;
            break;
        
    }    
}