

// Write your code below
let highestPriceCount = 0;

for(let i = amdPrices.length-1; i>= amdPrices.length-numberOfDays; i--){

    if(amdPrices[i]>averageprice)
    {
        highestPriceCount++;
    }
}

console.log("Number of days AMD was above the 7-day SMA is:",highestPriceCount.toFixed(0));