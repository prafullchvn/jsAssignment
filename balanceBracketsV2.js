
const isStartBracket = function (bracket) {
  return bracket === '(';
};

const balanceBrackets = function (brackets) {
  let count = 0;

  for (let index = 0; index < brackets.length; index++) {
    count += isStartBracket(brackets[index]) ? 1 : -1;
    if (count < 0) {
      return false;
    }
  }

  return count === 0;
};