function isEven(num) {
  return (num % 2 == 0) ? true : false;
}

function isOdd(num) {
  return !isEven(num);
}

function evenSeries(num) {
  if (num == 0) {
    return 0 + " ";
  }

  let series = evenSeries(num - 1);
  if (isEven(num)) {
    series += num + " ";
  }

  return series
}

function evenSeriesInReverse(num, series) {
  if (num == 0) {
    return series + 0;
  }

  if (isEven(num)) {
    series += num + " ";
  }

  return evenSeriesInReverse(num - 1, series);
}

function getEvenSeriesInReverse(num) {
  return evenSeriesInReverse(num, "");
}


function main() {
  const limit = 10;

  console.log("Even series", evenSeries(limit));
  console.log("Even series in reverse", getEvenSeriesInReverse(limit));
}

main();
