function createElement(tag, content, leadingSpaces) {
  let element = "\n" + leadingSpaces + "<" + tag + ">";
  element += content;
  element += "\n" + leadingSpaces + "</" + tag + ">";

  return element;
}

function createSpace(count) {
  let spaces = "";
  for (let i = 0; i < count; i++) {
    spaces += " ";
  }
  return spaces;
}

function generateDivs(totalLevels, spaces) {
  if (totalLevels < 1) {
    return "";
  }
  const divs = generateDivs(totalLevels - 1, spaces + " ");

  // let div = "\n" + spaces + "<div>";
  // div += divs;
  // div += "\n" + spaces + "</div>";

  return createElement("div", divs, spaces);

  // return div;
}

function printDivs(totalLevels) {
  return generateDivs(totalLevels, "");
}

function main() {
  const totalLevels = 5;
  console.log(printDivs(totalLevels));
}

main();