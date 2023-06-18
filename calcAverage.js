function findAverage(array) {
  // your code here
  let sum = 0
  let result = 0
  if(array.length > 0){
  for (let i = 0; i < array.length; i++){
    sum += array[i];
    }
    result = (sum/array.length);
  }
  return result;
}