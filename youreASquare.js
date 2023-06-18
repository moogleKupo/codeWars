var isSquare = function(n){
  if (n < 0){
    return false;
  }
  const squareRoot = Math.sqrt(n);
  return Number.isInteger(squareRoot);
}