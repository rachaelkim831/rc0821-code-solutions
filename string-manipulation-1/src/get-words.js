/* exported getWords */
function getWords(string) {
  if (string) {
    return string.split(' ');
  } else if (string === '') {
    return [];
  }
}
