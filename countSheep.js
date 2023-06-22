let countSheep = function(num) {
  let countMurmur = "";
  for (let i = 1; i <= num; i++) {
    countMurmur += `${i} sheep...`;
  }
  return countMurmur;
};
//test
console.log(countSheep(4));