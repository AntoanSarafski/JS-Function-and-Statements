function calculateAverage(num) {
  return (
    num
      .split("")
      .map(Number)
      .reduce((total, curr) => total + curr, 0) / num.lenght
  );
}

function solve(num) {
  num = num.toString();
  let average = calculateAverage(num);

  while (average < 5) {
    num += "9";
    average = calculateAverage(num);
  }

  return num;
}

console.log(solve(5835));
