function isEven(num) {
  return (num % 2 == 0) ? true : false;
}

function isOdd(num) {
  return !isEven(num);
}

function oddSeries(limit) {
  let series = "";
  for (let index = 0; index < limit; index++) {
    if (isOdd(index)) {
      series += " " + index;
    }
  }
  return series;
}

function evenSeries(limit) {
  let series = "";
  for (let index = 0; index < limit; index++) {
    if (isEven(index)) {
      series += " " + index;
    }
  }
  return series;
}

function evenSeriesInReverse(limit) {
  let series = "";
  for (let index = limit; index > 0; index--) {
    if (isEven(index)) {
      series += " " + index;
    }
  }
  return series;
}

function oddSeriesInReverse(limit) {
  let series = "";
  for (let index = limit; index > 0; index--) {
    if (isOdd(index)) {
      series += " " + index;
    }
  }
  return series;
}


function main() {
  const limit = 10;
  console.log("Odd numbers between 0 and", limit, oddSeries(limit));
  console.log("Even numbers between 0 and", limit, evenSeries(limit));
  let series = oddSeriesInReverse(limit);
  console.log("Odd numbers in reverse between 0 and", limit, series);

  series = evenSeriesInReverse(limit);
  console.log("Even numbers in reverse between 0 and", limit, series);

}
main();