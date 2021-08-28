/* exported drop */
function drop(array, count) {
  var newArray = [];
  if (!array.length) {
    return [];
  }
  for (let i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
