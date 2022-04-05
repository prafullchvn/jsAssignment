const isStartBracket = function (bracket) {
  return bracket === '(';
};

const isStackEmpty = function (bracketStack) {
  return bracketStack.length === 0;
};

const balanceBrackets = function (brackets) {
  const bracketStack = [];

  for (let index = 0; index < brackets.length; index++) {
    const bracket = brackets[index];

    if (bracket === '(') {
      bracketStack.push(bracket);
      // } else if (!isStartBracket(bracketStack.pop())) {
    } else if (!isStartBracket(bracketStack.pop())) {
      return false;
    }

  }

  return isStackEmpty(bracketStack);
};


const testBalanceBracket = function (brackets, expected, description) {
  const actual = balanceBrackets(brackets);
  const result = actual === expected;
  const status = result ? '✅' : '❌';
  console.log(status, description);
  if (!result) {
    console.log('Actual:', actual, 'Expected:', expected);
  }
};

testBalanceBracket('(', false, 'Single parenthesis.');
testBalanceBracket('()', true, 'Pair of brackets.');
testBalanceBracket(')', false, 'Closing bracket.');
testBalanceBracket('(((()())))', true, 'Many balanced brackets.');
testBalanceBracket(')(', false, 'Inverted pair of bracket.');
testBalanceBracket('(()', false, 'Unbalanced brackets "(()".');
testBalanceBracket('())', false, 'Unbalanced brackets "())".');
testBalanceBracket('((())', false, 'Unbalanced brackets "((())".');
testBalanceBracket('(())', true, 'Balanced brackets "(())".');
testBalanceBracket('())(()', false, 'Vivek\'s case.');
