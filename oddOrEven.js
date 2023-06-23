function oddOrEven(array){
  let sum = 0;
  for (let i = 0; i <=array.length - 1; i++){
sum += array[i];
if ((sum % 2) === 0){
  return "Even";
} else {
  return "Odd";
  }
  
    }
}
//test
console.log(oddOrEven([1, 3, 5]));