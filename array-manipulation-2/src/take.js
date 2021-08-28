/* exported take */
function take(array, count) {
  var newArray = [];
  if (!array.length) {
    return [];
  }
  for (let i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
