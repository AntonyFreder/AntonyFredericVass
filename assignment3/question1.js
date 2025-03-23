const msftData = [190.15, 194.21, 191.07, 190.44, 200.15];
let average = 0.0;
let total = 0.0;
// Write your code below
for(let i = 0; i<msftData.length; i++){
    total = total + msftData[i];
}
average = total/msftData.length;
console.log(average);