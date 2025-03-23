const disneyData2 = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
};

if (disneyData2.close > disneyData2.open){
    if(disneyData2.volume > 100000){
        console.log("Strong Bullish");
    }
    else{
        console.log("Bullish");
    }
}
else if (disneyData2.close < disneyData2.open){
    if(disneyData2.volume > 10000){
        console.log("Strong Bearish");
    }
    else{
        console.log("Bearish");
    }
}
else if (disneyData2.close === disneyData2.open){
    console.log("Neutral");
}
