function randomNumber() {
  return Math.floor(Math.random() * 10);
}

function randomNumberInSeries(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}

function main() {
  console.log(randomNumber());
  console.log(randomNumberInSeries(30, 50));
}

main();