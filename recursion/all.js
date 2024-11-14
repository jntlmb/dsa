const all = (arr, callback) => {
  let copy = arr.slice();

  if (copy.length === 0) return true;

  if (callback(copy[0])) {
    copy.shift();
    return all(copy, callback);
  } else {
    return false;
  }
};

const lessThan = (num) => {
  return num < 7;
};

const test = all([1, 2, 8], lessThan);
console.log(test);
