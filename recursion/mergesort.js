const sort = (arr) => {
  // Base Case
  // arr.length = 1 -> already sorted -> return
  if (arr.length <= 1) {
    return arr;
  }

  // Recursive Case
  const middle = Math.floor(arr.length / 2);
  const left = sort(arr.slice(0, middle));
  const right = sort(arr.slice(middle));

  return merge(left, right);
};

const merge = (left, right) => {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i), right.slice(j));
};

const test = sort([10, 5, 7, 2, 4, 1, 8, 9, 3, 6]);
console.log(test);
