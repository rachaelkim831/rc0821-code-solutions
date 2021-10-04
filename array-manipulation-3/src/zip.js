/* exported zip */
function zip(first, second) {
  var newArray = []; // [ [1, 2], [2,3]]
  // loop iteration = shorter array.length;
  var lengthFirst = first.length;
  var lengthSecond = second.length;
  var shorter = 0;
  if (lengthFirst < lengthSecond) {
    shorter = lengthFirst;
  } else {
    shorter = lengthSecond;
  }
  // Math.min method
  for (let i = 0; i < shorter; i++) {
    newArray.push([first[i], second[i]]);
  }
  return newArray;
}
