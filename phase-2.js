const [addNums, addManyNums] = require("./phase-1");

// Timing Benchmarks - Scale testing harness

// Function to compute addNums for 10 increment values
function addNums10(increment) {
  const results = [];
  for (let i = 1; i <= 10; i++) {
    results.push(addNums(i * increment));
  }
  return results;
}

// Function to compute addManyNums for 10 increment values
function addManyNums10(increment) {
  const results = [];
  for (let i = 1; i <= 10; i++) {
    results.push(addManyNums(i * increment));
  }
  return results;
}

module.exports = [addNums10, addManyNums10];