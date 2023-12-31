exports.max = numbers => Math.max(...numbers);
exports.min = numbers => Math.min(...numbers);
exports.avg = numbers =>
  numbers.reduce(
    (acc, current, _, array) => acc + current / array.length,
    0
  );
exports.sort = numbers => numbers.sort();
exports.median = numbers => {
  const { length } = numbers;
  const middle = Math.floor(length / 2);
  return length % 2
    ? numbers[middle]
    : (numbers[middle - 1] + numbers[middle]) / 2;
};