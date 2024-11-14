const fib = (n) => {
  // base case
  if (n === 0) return 0;
  if (n === 1) return 1;

  // recursive case
  return fib(n - 1) + fib(n - 2);
};

const test = fib(8);
console.log(test);
