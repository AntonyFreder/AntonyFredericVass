

// Write your code below
let totalPrice = 0;
let numberOfDays = Math.min(amdPrices.length,7);
for(let i = amdPrices.length-1; i>= amdPrices.length-numberOfDays; i--){

    totalPrice+=amdPrices[i];
    
}
let averageprice = totalPrice / numberOfDays;
console.log("The 7-day SMA of AMD is",averageprice.toFixed(2));