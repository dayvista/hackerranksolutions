function sockMerchant(n, ar) {
  let matchingPairs = 0;

  ar.sort();

  for (let i = 0; i < n; i++) {
    if (ar[i] === ar[i + 1]) {
      i++;
      matchingPairs++;
    }
  }

  return matchingPairs;
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));
