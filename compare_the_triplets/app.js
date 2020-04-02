const compareTriplets = (alice, bob) => {
  let alicePoints = 0,
      bobPoints = 0,
      pointArr = [];

  for (let i = 0; i <= 2; i++) {
    if (alice[i] > bob[i]) {
      alicePoints++;
    } else if (alice[i] < bob[i]) {
      bobPoints++;
    }
  }

  pointArr.push(alicePoints);
  pointArr.push(bobPoints);

  return pointArr;
};

console.log(compareTriplets([17,28,30], [99,16,8]));