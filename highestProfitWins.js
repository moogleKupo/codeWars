const minMax = function(numArray){
let min = Math.min(... numArray);
let max = Math.max(... numArray);
let resultArray = [min, max];
return resultArray;
}
console.log(minMax([1,2,3,4]));