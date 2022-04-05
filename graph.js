function array(operation, index) {
  if (operation === "length") {
    return 4;
  } else if (operation == "get") {
    switch (index) {
      case 0: return 245;
      case 1: return 324;
      case 2: return 133;
      case 3: return 455;
      default: return -1;
    }
  }
}

function drawBar(value, scale) {
  const roundedValue = Math.round(value / scale);
  let bar = "";

  for (let i = 0; i < roundedValue; i++) {
    bar += "*";
  }

  return bar;
}

function drawGraph(scale) {
  let graph = "";
  for (let i = 0; i < array("length"); i++) {
    graph += array("get", i) + "|" + drawBar(array("get", i), scale) + "\n"
  }

  return graph;
}

function main() {
  const scale = 50;
  // console.log(array("get", 2));
  console.log(drawGraph(scale));
}

main();