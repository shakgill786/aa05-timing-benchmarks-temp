// Adds up positive integers from 1-n
function addNums(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  let totalSum = 0;
  for (let i = 1; i <= n; i++) {
    totalSum += addNums(i);
  }
  return totalSum;
}

module.exports = [addNums, addManyNums];