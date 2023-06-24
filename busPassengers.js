let gotOn = 0;
let gotOff = 0;
// find out how many are added, how many get off and update result
const passengerRemainderCalc = function(obj) {
  for (let key in obj) {
   gotOn += parseInt(key);
   gotOff += obj[key];
  }
  let result = gotOn - gotOff;  
  return  result;
  };
  

console.log(passengerRemainderCalc({
  3: 0,
  4: 6,
  7: 5
}))
