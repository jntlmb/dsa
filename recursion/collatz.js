const collatz = (n) => {
  if (n === 1) {
    return [n];
  }

  if (n % 2 === 0) {
    return [n, ...collatz(n / 2)];
  } else {
    return collatz(n * 3 + 1);
  }
};

const test01 = collatz(1);
console.log(test01);

const test02 = collatz(2);
console.log(test02);

const test03 = collatz(3);
console.log(test03);
