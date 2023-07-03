// With nasted function and if\switch statemants

const multiply = (x, y) => x * y;

const divide = (num1, num2) => num1 / num2;

const add = (num1, num2) => num1 + num2;

const substract = (num1, num2) => num1 - num2;

function calculate(num1, num2, operator) {
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
