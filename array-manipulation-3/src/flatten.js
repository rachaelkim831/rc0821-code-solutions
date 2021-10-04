/* exported flatten */
function flatten(array) {
  var newArray = []; // [1, 2]
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArray = newArray.concat(array[i]);
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

//
