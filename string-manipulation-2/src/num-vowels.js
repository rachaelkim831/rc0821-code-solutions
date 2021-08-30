/* exported numVowels */
function numVowels(string) {
  var count = 0;
  var allVowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (const vowel of string) {
    if (allVowels.includes(vowel)) {
      count++;
    }
  }
  return count;
}
