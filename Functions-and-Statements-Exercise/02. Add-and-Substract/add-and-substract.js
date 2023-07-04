function sum(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function getResultFromSumAndSubtract(x, y, z) {
  return subtract(sum(x, y), z);
}

console.log(getResultFromSumAndSubtract(1, 2, 4));
