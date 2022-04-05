function getLastDigit(num) {
  return num % 10;
}

function getRestOfDigits(num) {
  return Math.floor(num / 10);
}

//Should return true if given digit is not present in given number
function isUnique(num, digit) {
  let restOfNum = num;

  while (restOfNum > 0) {
    lastDigit = getLastDigit(restOfNum);
    restOfNum = getRestOfDigits(restOfNum);

    if (digit === lastDigit) {
      return false;
    }
  }
  return true;
}

// Should return true if the number don't have unique digits
function haveUniqueDigits(num) {
  let restOfNumber = num;

  while (restOfNumber > 0) {
    let digit = getLastDigit(restOfNumber);
    restOfNumber = getRestOfDigits(restOfNumber);

    if (isUnique(restOfNumber, digit) == false) {
      return false;
    }
  }
  return true;
}
function formatOutput(result) {
  return result == true ? "Yes" : "No";
}

function main() {
  const num = 123;
  console.log("Does ", num, " have unique digits?", formatOutput(haveUniqueDigits(num)));
  // console.log(isUnique(num, 3));
}

main();