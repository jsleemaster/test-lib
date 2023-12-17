function sum(a, b) {
  return a + b;
}

function sumOf(numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0)
}

module.exports = {
  sum, sumOf
}