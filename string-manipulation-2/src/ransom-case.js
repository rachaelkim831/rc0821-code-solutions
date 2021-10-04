/* exported ransomCase */
function ransomCase(string) {
  var newStr = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 1) {
      newStr += string[i].toUpperCase();
    } else {
      newStr += string[i].toLowerCase();
    }
  }
  return newStr;
}
// 'javascript' => 'jAvAsCrIpT'; string[1];
