function oddOrEven(array){
  let sum = 0;
  if(array.length === 1 && array[0] === 0){
    return "even";
  }
  for (let i = 0; i < array.length; i++) {
sum += array[i];
  }
    if ((sum % 2) === 0) {
     return "even";
      } else {
      return "odd";
  }
    }
//test
console.log(oddOrEven([1, 3, 5]));

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Fixed tests', () => {
  it('Edge tests', () => {
    assert.strictEqual(oddOrEven([0]), 'even')
    assert.strictEqual(oddOrEven([1]), 'odd')
    assert.strictEqual(oddOrEven([]), 'even')
  });
  
  it('Even tests', () => {
    assert.strictEqual(oddOrEven([0, 1, 5]), 'even')
    assert.strictEqual(oddOrEven([0, 1, 3]), 'even')
    assert.strictEqual(oddOrEven([1023, 1, 2]), 'even')
  });
  
  it('Negative Even tests', () => {
    assert.strictEqual(oddOrEven([0, -1, -5]), 'even')
    assert.strictEqual(oddOrEven([0, -1, -3]), 'even')
    assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even')
  });
  
  it('Odd tests', () => {
    assert.strictEqual(oddOrEven([0, 1, 2]), 'odd')
    assert.strictEqual(oddOrEven([0, 1, 4]), 'odd')
    assert.strictEqual(oddOrEven([1023, 1, 3]), 'odd')
  });
  
  it('Negative Odd tests', () => {
    assert.strictEqual(oddOrEven([0, -1, 2]), 'odd')
    assert.strictEqual(oddOrEven([0, 1, -4]), 'odd')
    assert.strictEqual(oddOrEven([-1023, -1, 3]), 'odd')
  });
});
