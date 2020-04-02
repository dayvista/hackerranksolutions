const stairwayToHeaven = (n) => {
  for (let i = 1; i <= n; i++) {
    let stairway = '';

    for (let j = 0; j < n - i; j++) {
      stairway += ' ';
    }

    for (let k = 0; k < i; k++) {
      stairway += '#';
    }

    console.log(stairway);
  }
};

stairwayToHeaven(6);