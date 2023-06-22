var countSheep = function (num){
  let countMurmur = ""
    for (let i = 1; i = num.length; i++) {
      countMurmur += `${num} sheep...`;
      console.log(countMurmur);
    }
  console.log(countMurmur);
  return countMurmur;
}
//test

console.log(countSheep(4));