/* exported truncate */
function truncate(length, string) {
  var slicedStr = string.slice(0, length);
  return slicedStr + '...';
}
