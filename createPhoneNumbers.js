function createPhoneNumber(numbers){
  let result = numbers.toString().replace(/,/g, '');
    let firstThree = result[0] + result[1] + result[2];
    let secondThree = result[3] + result[4] + result[5];
    let lastFour = result[6] + result[7] + result[8] + result[9]
      console.log(firstThree);
    let phoneNumber = `(${firstThree}) ${secondThree}-${lastFour}`;
      return phoneNumber;
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));
