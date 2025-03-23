const bacData = [190.15, 194.21, 191.07, 192.44, 129000];
const keys = ['open','high', 'low', 'close','volume']; // Define the corresponding keys for the object
const bacObject = {}; // Create an empty object

// Using a for loop to assign values to the object
for (let i = 0; i < keys.length; i++) {
    bacObject[keys[i]] = bacData[i]; // Assign the corresponding value from bacData to the key
}

if (bacObject.close > bacObject.open){
    if(bacObject.volume > 10000){
        console.log("Strong Bullish");
    }
    else{
        console.log("Bullish");
    }
}
else if (bacObject.close < bacObject.open){
    if(bacObject.volume > 10000){
        console.log("Strong Bearish");
    }
    else{
        console.log("Bearish");
    }
}
else if (bacObject.close === bacObject.open){
    console.log("Neutral");
}
