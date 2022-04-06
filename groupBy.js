const isEqual = function (element1, element2) {
  if (!Array.isArray(element1) || !Array.isArray(element2)) {
    return element1 === element2;
  }

  if (element1.length !== element2.length) {
    return false;
  }

  for (let index = 0; index < element1.length; index++) {
    if (!isEqual(element1[index], element2[index])) {
      return false;
    }
  }
  return true;
};

const findLocationOfGroup = function (groups, element) {
  for (let index = 0; index < groups.length; index++) {
    if (isEqual(element, groups[index][0])) {
      return index;
    }
  }

  return -1;
};

const putInGroup = function (groups, element) {
  let location = findLocationOfGroup(groups, element);

  if (location < 0) {
    location = groups.length;
    groups.push([]);
  }

  groups[location].push(element);
};

const groupSimilarElements = function (values) {
  const groups = [];

  for (let index = 0; index < values.length; index++) {
    putInGroup(groups, values[index]);
  }

  return groups;
};

const main = function () {
  console.log(groupSimilarElements([1, 2, 1])); // [[1,1],[2]]
  console.log(groupSimilarElements([1, 2, 3, 1, 2, 4]));
  console.log(groupSimilarElements([[1, 1], 1, [1, 1], 1]));
  console.log(groupSimilarElements([[1, 2], '1,2', '1,2', [1, 2]]));
  console.log(groupSimilarElements(['1', 2, 1, 'a', 'b', 'a']));
  console.log(groupSimilarElements([[[1, 2], [1, 2]], [[1, 2], [1, 2]]]));
  console.log(groupSimilarElements([[[1], [2]], [[1], [2]]]));
};

main();
