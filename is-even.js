function isEven(num) {
  return (num % 2 == 0) ? true : false;
}

function isOdd(num) {
  return !isEven(num);
}

function main() {
  console.log("12 is even.", isEven(12));
  console.log("23 is even.", isEven(23));
  console.log("33 is odd.", isOdd(33));
  console.log("38 is odd.", isOdd(38));
}

main();