function raiseTo(num, exponent) {
  return num ** exponent;
}

function square(num) {
  return raiseTo(num, 2);
}

function cube(num) {
  return raiseTo(num, 3);
}

function main() {
  console.log("3 raise to 5 is", raiseTo(3, 5));
  console.log("Square of 4 is", square(4));
  console.log("Cube of 9 is", cube(9));
}

main();