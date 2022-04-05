function min(num1, num2) {
  return num1 > num2 ? num2 : num1;
}

function max(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function gcd(num1, num2) {
  let smaller = min(num1, num2);
  let bigger = max(num1, num2);
  let index = smaller;

  while (index >= 1) {
    if (bigger % index == 0 && smaller % index == 0) {
      return index;
    }
    index--;
  }
}

function lcm(num1, num2) {
  return num1 * num2 / gcd(num1, num2);
}

function main() {
  const num1 = 4;
  const num2 = 6;
  console.log("GCD of", num1, "and", num2, "is", gcd(num1, num2));
  console.log("LCM of", num1, "and", num2, "is", lcm(num1, num2));
}

main();