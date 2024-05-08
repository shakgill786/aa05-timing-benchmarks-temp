// const [addNums, addManyNums] = require("./phase-1");

// function addNums10Timing(increment) {
//   console.log(`Timing for addNums10 with increment ${increment}:`);
//   for (let i = 1; i <= 10; i++) {
//     console.time(`addNums${i * increment}`);
//     let result = addNums(i * increment);
//     console.timeLog(`addNums${i * increment}`, `Result: ${result}`);
//     console.timeEnd(`addNums${i * increment}`);
//   }
// }

// function addManyNums10Timing(increment) {
//   console.log(`Timing for addManyNums10 with increment ${increment}:`);
//   for (let i = 1; i <= 10; i++) {
//     console.time(`addManyNums${i * increment}`);
//     let result = addManyNums(i * increment);
//     console.timeLog(`addManyNums${i * increment}`, `Result: ${result}`);
//     console.timeEnd(`addManyNums${i * increment}`);
//   }
// }

// n = 1000000;
// console.log(`addNums(${n}): `);
// addNums10Timing(n);

// console.log("\n***********\n");

// n = 1000;
// console.log(`addManyNums(${n}): `);
// addManyNums10Timing(5000);

const [addNums, addManyNums] = require("./phase-1");

Function to compute addNums for 10 increment values with timing
function addNums10Timing(increment) {
  console.log(`Timing for addNums10 with increment ${increment}:`);
  for (let i = 1; i <= 10; i++) {
    const startTime = Date.now();
    let result = addNums(i * increment);
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    
    console.log(`addNums(${i * increment}): Result: ${result}, Elapsed Time (ms): ${elapsedTime}`);
  }
}

// Function to compute addManyNums for 10 increment values with timing
function addManyNums10Timing(increment) {
  console.log(`Timing for addManyNums10 with increment ${increment}:`);
  for (let i = 1; i <= 10; i++) {
    const startTime = Date.now();
    let result = addManyNums(i * increment);
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    
    console.log(`addManyNums(${i * increment}): Result: ${result}, Elapsed Time (ms): ${elapsedTime}`);
  }
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(n);

console.log("\n***********\n");

n = 1000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);