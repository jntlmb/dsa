// const fib = (n) => {
//   if (n <= 0) return [];
//   if (n === 1) return [0];
//   if (n === 2) return [0, 1];

//   let arr = [0, 1];
//   while (arr.length < n) {
//     arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//   }
//   return arr;
// };

// const testFib = fib(19);
// console.log(testFib);

const fibRec = (n) => {
  // base case
  if (n === 0) return 0;
  if (n === 1) return 1;

  // recursive case
  return fibRec(n - 1) + fibRec(n - 2);
};

const testFibRec = fibRec(8);
console.log(testFibRec);
