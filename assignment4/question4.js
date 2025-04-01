const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
let closingPrice1 = msftData[0][3];
let closingPrice2 = msftData[1][3];
let averageClosingPrice = (closingPrice1+closingPrice2)/2.0;

console.log("Average closing price of MSFT is", averageClosingPrice.toFixed(2))