function jumpingOnClouds(c) {
  let jumps = -1;

  for (let i = 0; i < c.length; i++) {
    if (i + 2 < c.length && c[i + 2] === 0) {
      i++;
      jumps++;
    } else {
      jumps++;
    }
  }

  return jumps;
}
