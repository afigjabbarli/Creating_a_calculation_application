const numbers = document.querySelectorAll(".dark");
const displayNumbersAndOperators = document.querySelector(".display #calculating")
const operators = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".delete");

let firstNumber = "";
let operator = "";
let secondNumber = "";

numbers.forEach((element) =>{
    element.addEventListener('click', function(){
           displayNumbersAndOperators.innerHTML += element.textContent;
           
    })
})
operators.forEach((element) => {
   element.addEventListener('click', function(){
       firstNumber = displayNumbersAndOperators.textContent;
       operator = element.textContent;
       displayNumbersAndOperators.innerHTML = "";
   })
})
equalsButton.addEventListener("click", function () {
    secondNumber = displayNumbersAndOperators.textContent;
    let result = calculateResult(parseFloat(firstNumber), operator, parseFloat(secondNumber));
    displayNumbersAndOperators.innerHTML = "";
    displayNumbersAndOperators.innerHTML = result;
    console.log(result)
  });
clearButton.addEventListener("click", function(){
    displayNumbersAndOperators.innerHTML = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
})


  function calculateResult(num1, operator, num2) {
    let result = 0;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "x":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operator");
    }
    return result;
  }