function generateAP(startNum, difference, limit) {
  let currentTerm = startNum;
  let series = currentTerm + " ";

  for (let i = 1; i < limit; i++) {
    let nextTerm = currentTerm + difference;
    series += nextTerm + " ";
    currentTerm = nextTerm;
  }

  return series;
}

function main() {
  const startNum = 1;
  const difference = 7;
  const limit = 6;

  console.log("Series is", generateAP(startNum, difference, limit));
}

main();