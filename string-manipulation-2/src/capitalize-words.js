/* exported capitalizeWords */
function capitalizeWords(string) {
  var splitStr = string.split(' ');
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i][0].toUpperCase() + splitStr[i].substr(1).toLowerCase();
  }
  return splitStr.join(' ');
}
