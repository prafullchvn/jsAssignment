function sumOfFirstNNumbers(limit) {
  return limit * (limit + 1) / 2
}

function main() {
  const limit = 10;
  console.log("Sum of first", limit, "is", sumOfFirstNNumbers(limit));
}

main();