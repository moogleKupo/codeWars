// First, create a function to turn the string of numbers in to an array of numbers
function highAndLow(numbers) {
  let args = numbers.split(' ').map(Number);
  return `(Math.min(${args}) Math.min(${args}))`;
}
console.log(highAndLow("1 2 3 4 5"));
