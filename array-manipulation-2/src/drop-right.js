/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  if (!array.length) {
    return [];
  }
  for (let i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
