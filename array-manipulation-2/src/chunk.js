/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  for (let i = 0; i < array.length; i += size) {
    var chunk = array.slice(i, i + size);
    newArray.push(chunk);
  }
  return newArray;
}
