// With nasted function and if\switch statemants
function calculate(num1, num2, operator) {
  function multiply(num1, num2) {
    return num1 * num2;
  }

  function divide(num1, num2) {
    return num1 / num2;
  }

  function add(num1, num2) {
    return num1 + num2;
  }

  function substract(num1, num2) {
    return num1 - num2;
  }

  if (operator === "multiply") {
    return multiply(num1, num2);
  }

  if (operator === "divide") {
    return divide(num1, num2);
  }

  if (operator === "add") {
    return add(num1, num2);
  }

  if (operator === "substract") {
    return substract(num1, num2);
  }
}

const result = calculate(5, 5, "multiply");
console.log(result);
// Arrow function

// NO IF\SWITCH !
