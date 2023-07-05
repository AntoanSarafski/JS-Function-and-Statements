function calculateFactorial(num) {
  let sum = 1;

  for (let index = 1; index <= num; index++) {
    sum *= index;
  }
  return sum;
}

function divideTwoFactorials(x, y) {
  return (calculateFactorial(x) / calculateFactorial(y)).toFixed(2);
}

console.log(divideTwoFactorials(5, 2));
