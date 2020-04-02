function countingValleys(n, s) {
  let elevation = 0,
    numValleys = 0;

  for (let char of s) {
    char === "D" ? elevation-- : elevation++;

    if (elevation === 0 && char === "U") {
      numValleys++;
    }
  }

  return numValleys;
}
