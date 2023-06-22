const highAndLow = function(numbers){
  let low = Math.floor(numbers);
  let high = Math.ceil(numbers);
  return `(${low}, ${high})`
}
console.log(highAndLow(1, 2))