// With nasted function and if\switch statemants

const calculator = {
  multiply: (x, y) => x * y,
  divide: (num1, num2) => num1 / num2,
  add: (num1, num2) => num1 + num2,
  substract: (num1, num2) => num1 - num2,
};

function calculate(num1, num2, operator) {
  const fun = calculator[operator];

  if (!fun) {
    return 0;
  }

  return calculator[operator](num1, num2);
}

const result = calculate(5, 5, "multiply");
console.log(result);
