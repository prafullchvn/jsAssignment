function openingTag(tag) {
  return "<" + tag + ">";
}

function closingTag(tag) {
  return "</" + tag + ">";
}

function createElement(tag, content, leadingSpaces) {
  let element = "\n" + leadingSpaces + openingTag(tag);
  element += content;
  element += "\n" + leadingSpaces + closingTag(tag);

  return element;
}

function createSpaces(count) {
  let spaces = "";
  for (let i = 0; i < count; i++) {
    spaces += " ";
  }
  return spaces;
}

function generateDivs(totalLevels) {
  let divs = "";
  let spacerRequried = totalLevels - 1;

  for (let i = 0; i < totalLevels; i++) {
    let spaces = createSpaces(spacerRequried--);
    divs = createElement("div", divs, spaces);
  }

  return divs;
}

function printDivs(totalLevels) {
  return generateDivs(totalLevels);
}

function main() {
  const totalLevels = 5;
  console.log(generateDivs(totalLevels));
}

main();