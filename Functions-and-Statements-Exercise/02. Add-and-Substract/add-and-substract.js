function sum(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function solve(x, y, z) {
  const sumOfFirstTwo = sum(x, y);
  const result = subtract(sumOfFirstTwo, z);

  return result;
}

console.log(solve(1, 2, 4));
