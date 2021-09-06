/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var newStr1 = firstString.replaceAll(' ', '');
  var newStr2 = secondString.replaceAll(' ', '');
  var lengthFirst = newStr1.length;
  var lengthSecond = newStr2.length;
  if (lengthFirst !== lengthSecond) {
    return false;
  }
  var stringOne = newStr1.split('').sort().join('');
  var stringTwo = newStr2.split('').sort().join('');
  if (stringOne === stringTwo) {
    return true;
  } else {
    return false;
  }
}
