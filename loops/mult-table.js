function formatProduct(num, multiplier) {
  return num + " x " + multiplier + " = " + multiplier * num + "\n";
}

function generateMultTable(num, limit) {
  let table = "";
  for (let i = 1; i <= limit; i++) {
    table += formatProduct(num, i);
  }
  return table;
}

function main() {
  const num = 4;
  const limit = 5;
  console.log(generateMultTable(num, limit));
}

main();