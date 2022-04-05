function sumOfSeries(startNum, limit) {
  let sum = 0;

  for (let i = startNum; i <= (startNum + limit); i++) {
    sum += i;
  }

  return sum;
}

function productOfSeries(startNum, limit) {
  let sum = 1;

  for (let i = startNum; i <= (startNum + limit); i++) {
    sum *= i;
  }

  return sum;
}

function sumOfNNumbers(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) {
    sum += i;
  }

  return sum;
}

function productOfNNumbers(limit) {
  let product = 1;

  for (let i = 1; i <= limit; i++) {
    product *= i;
  }

  return product;
}

function main() {
  let limit = 5;
  console.log("Sum of series till", limit, "is", sumOfNNumbers(limit));
  console.log("product of series till", limit, "is", productOfNNumbers(limit));

  let startNum = 4;
  limit = 4;
  sum = sumOfSeries(startNum, limit);
  msg = "sum of " + startNum + " till " + (startNum + limit) + " is " + sum;
  console.log(msg);

  startNum = 2;
  limit = 4;
  product = productOfSeries(startNum, limit);
  msg = "product of " + startNum + " till " + (startNum + limit) + " is " + product;
  console.log(msg);
}

main();