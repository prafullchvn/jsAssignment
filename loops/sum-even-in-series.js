function sumOfEvenNum(startNum, endNum) {
  let sum = 0;

  for (let i = startNum; i <= endNum; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }

  return sum;
}

function sumOfOddNum(startNum, endNum) {
  let sum = 0;

  for (let i = startNum; i <= endNum; i++) {
    if (i % 2 != 0) {
      sum += i;
    }
  }

  return sum;
}

function main() {
  const startNum = 5;
  const endNum = 10;

  console.log("Sum of even", sumOfEvenNum(startNum, endNum));
  console.log("Sum of Odd", sumOfOddNum(startNum, endNum));
}

main();