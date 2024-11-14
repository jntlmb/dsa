const sumRange = (n) => {
  if (n === 1) {
    return 1;
  }

  return n + sumRange(n - 1);
};

const test = sumRange(4);
console.log(test);
