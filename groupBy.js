const transferElement = function (sourceArray, destArray, index) {
  destArray.push(sourceArray[index]);
  removeAt(sourceArray, index);
};

const removeAt = function (array, index) {
  array.splice(index, 1);
};

const toArray = function (value) {
  return [].concat(value);
};

const areBothArrays = function (array1, array2) {
  return Array.isArray(array1) && Array.isArray(array2);
};

const areArraysNotEqual = function (array1, array2) {
  return !areArraysEqual(array1, array2);
};

const areArraysAndNotEqual = function (array1, array2) {
  return areBothArrays(array1, array2) && areArraysNotEqual(array1, array2);
};

const areArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index = 0; index < array1.length; index++) {
    if (areArraysAndNotEqual(array1[index], array2[index])) {
      return false;
    }
    else if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
};

const shiftElement = function (array, to, from) {
  const element = array[from];
  array.splice(from, 1);
  array.splice(to, 0, element);
};

const groupElements = function (values) {
  let groups = [];
  for (let index = 0; index < values.length; index++) {
    const group = [values[index]];
    for (let subIndex = index + 1; subIndex < values.length; subIndex++) {
      if (areArraysEqual(toArray(values[index]), toArray(values[subIndex]))) {
        shiftElement(values, index + 1, subIndex);
        group.push(values[index]);
        index = index + 1;
      }
    }
    groups.push(group);
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
  // [ [[[1,2],[1,2]],[[1,2],[1,2]]]]
  console.log(groupElements([[[1], [2]], [[1], [2]]]));
};

main();
