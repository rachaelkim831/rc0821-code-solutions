/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  if (!array.length) {
    return [];
  }
  for (let i = array.length - count; i <= array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
