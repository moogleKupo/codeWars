function removeSmallest(numbers) {
  let resultArray = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i+1]){
      resultArray.push(numbers[i]);
    } else {resultArray.push(numbers[i + 1]);
    };
  }
  return resultArray;
};
console.log(removeSmallest([2, 4, 7, 1, 8]));