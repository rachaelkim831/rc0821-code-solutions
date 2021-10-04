/* exported reverseWord */
function reverseWord(word) {
  var reversedStr = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversedStr += word[i];
  }
  return reversedStr;
}
