/* exported reverseWords */
function reverseWords(string) {
  var words = string.split(' ');
  var stringArray = [];
  for (let i = 0; i < words.length; i++) {
    stringArray.push(words[i].split('').reverse().join(''));
  }
  return stringArray.join(' ');
}
