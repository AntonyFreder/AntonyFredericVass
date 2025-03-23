const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
};

// Write your code below
for (const key in disneyData) {
    if (disneyData.hasOwnProperty(key)) {
        disneyData[key] = parseFloat(disneyData[key]);
    }
}

const result = disneyData.open - disneyData.high + disneyData.low - disneyData.close;
console.log(result.toFixed(2));