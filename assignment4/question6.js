// Modify the code below:

/*amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]*/
// Step 1: Sort the array in ascending order
const sortedPrices = amdPrices.slice().sort((a, b) => a - b); // Using slice() to avoid mutating the original array

// Step 2: Get the first three lowest prices
const lowestPrices = sortedPrices.slice(0, 3);

// Output the result
console.log(`The three lowest prices are ${lowestPrices.join(', ')}`);
