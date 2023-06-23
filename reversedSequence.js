const reverseSeq = n => {
  let resultArray = []
  for (n = n; n > 0; n--) {
    resultArray.push(n);
  }
    
  return resultArray;
};