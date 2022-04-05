function celsToFahr(temp) {
  return 9 / 5 * temp + 32;
}

function fahrToCels(temp) {
  return (temp - 32) * 5 / 9;
}

function main() {
  const fahrTemp = 97;
  const celsTemp = 39;
  console.log(fahrTemp, "°F to °C is", fahrToCels(fahrTemp));
  console.log(celsTemp, "°C to °F is", fahrToCels(celsTemp));
}

main();