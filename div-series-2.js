function createElement(tag, content, leadingSpaces) {
  let element = "\n" + leadingSpaces + "<" + tag + ">";
  element += content;
  element += "\n" + leadingSpaces + "</" + tag + ">";

  return element;
}

function createSpaces(count) {
  let spaces = "";
  for (let i = 0; i < count; i++) {
    spaces += " ";
  }
  return spaces;
}

function generateDivs(totalLevels, spaceCount) {
  if (totalLevels < 1) {
    return "";
  }
  let spaces = createSpaces(spaceCount);
  let divs = generateDivs(totalLevels - 1, spaceCount + 1);

  return createElement("div", divs, spaces);
}

function printDivs(totalLevels) {
  return generateDivs(totalLevels, 0);
}

function main() {
  const totalLevels = 5;
  console.log(printDivs(totalLevels));
}

main();