const power = (base, exp) => {
  if (exp === 0) {
    return 1;
  }

  return base * power(base, exp - 1);
};

const test = power(2, 4);
console.log(test);
