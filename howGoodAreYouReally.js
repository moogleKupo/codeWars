function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let classPointsSum = 0
  for( let i = 0; i < classPoints.length; i++){
    classPointsSum += classPoints[i];
  }
  let average = (classPointsSum + yourPoints)/(classPoints.length + 1)
  if (yourPoints > average){
    return true;
  } else {
    return false;
    }
}