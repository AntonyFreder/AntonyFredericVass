const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];
// Write your code below
function roundToTwoDecimals(num) {
	return Math.round(num * 100) / 100;
  }
  const averageClosingPriceDisney = disneyData.reduce((acc, data) => acc + parseFloat(data.close), 0) / disneyData.length;
  let averageClosingPriceRounded = roundToTwoDecimals(averageClosingPriceDisney);

  console.log("Average closing price of Disney is", averageClosingPriceRounded);

