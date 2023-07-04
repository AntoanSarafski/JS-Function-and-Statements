// With nasted function and if\switch statemants

const calculator = {
  multiply: (x, y) => x * y,
  divide: (num1, num2) => num1 / num2,
  add: (num1, num2) => num1 + num2,
  substract: (num1, num2) => num1 - num2,
};

const calculate = (num1, num2, operator) =>
  calculator[operator] ? calculator[operator](num1, num2) : 0;

const result = calculate(5, 5, "multiply");
console.log(result);
