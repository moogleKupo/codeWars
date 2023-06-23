// First, create a function to turn the string of numbers in to an array of numbers
  function stringToArray(numbers) {
    const resultArray = numbers.split(' ').map(Number);
    return resultArray;
  }

  function highAndLow(){
    
  }
console.log(stringToArray("1 2 3 4"));