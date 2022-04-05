function max(num1, num2) {
  return (num1 > num2) ? num1 : num2;
}

function maxOf3(num1, num2, num3) {
  return max(num1, max(num2, num3))
}

function main() {
  console.log("Max of 2 5 3 is", maxOf3(2, 5, 3));
}

main();