/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newStrArr = string.split('');
  var letterOne = newStrArr[firstIndex];
  newStrArr[firstIndex] = newStrArr[secondIndex];
  newStrArr[secondIndex] = letterOne;
  return newStrArr.join('');
}
