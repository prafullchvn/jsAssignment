const subsets = function (set) {
  if (set.length === 0) {
    return [set];
  }

  const inHand = [set[0]];
  const prevSubsets = subsets(set.slice(1));
  const newSubsets = [];

  for (let index = 0; index < prevSubsets.length; index++) {
    newSubsets[index] = prevSubsets[index].concat(inHand);
  }

  return newSubsets.concat(prevSubsets);
};

const main = function () {
  console.log(subsets([1, 2, 3, 4, 5]).length);
  console.log(subsets([1, 2, 3, 4, 5]));
};

main();