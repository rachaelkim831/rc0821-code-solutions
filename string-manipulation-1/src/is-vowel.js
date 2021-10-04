/* exported isVowel */
function isVowel(word) {
  var vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < word.length; i++) {
    if (vowel.includes(word[i])) {
      return true;
    }
  }
  return false;
}
