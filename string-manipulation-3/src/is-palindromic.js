/* exported isPalindromic */
function isPalindromic(string) {
  var regex = /[^A-Za-z0-9]/g;
  string = string.toLowerCase().replace(regex, '');
  var length = string.length;
  for (let i = 0; i < length / 2; i++) {
    if (string[i] !== string[length - 1 - i]) {
      return false;
    }
  }
  return true;
}
