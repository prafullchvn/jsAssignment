function average(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

function percenatage(value, total) {
  return value / total * 100;
}

function percentageOfAverage(num1, num2, num3, total) {
  return percenatage(average(num1, num2, num3), total);
}

function main() {
  const num1 = 3, num2 = 5, num3 = 7, total = 10;
  console.log("Average of ", num1, num2, num3, "is", average(num1, num2, num3));
  console.log("It is", percentageOfAverage(num1, num2, num3, total), "% of", total);
}

main();