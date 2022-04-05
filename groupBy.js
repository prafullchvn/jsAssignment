const areBothArrays = function (array1, array2) {
  return Array.isArray(array1) && Array.isArray(array2);
};

const areArraysEqual = function (array1, array2) {
  if (!areBothArrays(array1, array2)) {
    return false;
  }

  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areEquals(array1[index], array2[index])) {
      return false;
    }
  }
  return true;
};

// console.log(areArraysEqual([1, [1, 2], 2], [1, [1, 2], 2]));

const areEquals = function (value1, value2) {
  if (areBothArrays(value1, value2)) {
    return areArraysEqual(value1, value2);
  }
  return value1 === value2;
};

const findLocationOfGroup = function (groups, element) {
  for (let index = 0; index < groups.length; index++) {
    if (areEquals(element, groups[index][0])) {
      return index;
    }
  }

  return -1;
};

const groupSimilarElements = function (values) {
  const groups = [];

  for (let index = 0; index < values.length; index++) {
    let location = findLocationOfGroup(groups, values[index]);
    if (location < 0) {
      location = groups.length;
      groups.push([]);
    }
    groups[location].push(values[index]);

  }

  return groups;
};

const main = function () {
  const array1 = [1, 2, 1];
  const array2 = [1, 2, 3, 1, 2, 4];
  const array3 = [[1, 1], 1, [1, 1], 1];
  const array4 = [[1, 2], '1,2', '1,2', [1, 2]];
  const array5 = ['1', 2, 1, 'a', 'b', 'a'];
  const array6 = [[[1, 2], [1, 2]], [[1, 2], [1, 2]]];
  const array7 = [[[1], [2]], [[1], [2]]];
  console.log(groupSimilarElements(array7));
};

main();
