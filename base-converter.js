function mapDigit(number) {
  switch (number) {
    case 10: return "A";
    case 11: return "B";
    case 12: return "C";
    case 13: return "D";
    case 14: return "E";
    case 15: return "F";
    default: return number;
  }
}

function changeBase(num, base) {
  let tempNum = num;
  let convertedNum = "";

  while (tempNum > 0) {
    let digit = mapDigit(tempNum % base);
    convertedNum = digit + convertedNum;
    tempNum = Math.floor(tempNum / base);
  }

  return num === 0 ? 0 : convertedNum;
}

function main() {
  const base = 16;
  const num = 10;

  console.log(num, "in base", base, "is", changeBase(num, base));

}

main();