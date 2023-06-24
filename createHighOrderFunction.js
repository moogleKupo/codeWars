const animals = ["Cat", "Dog", "Bird", "Fox", "Frog", "Fish"];

const myForEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
  }
}

const printInfo = (item, index, array) => {
    console.log(`This is a ${item} and it is at index ${index}.`);
}

myForEach(animals, printInfo);