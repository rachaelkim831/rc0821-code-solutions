/* exported getKeys */
function getKeys(object) {
  var newArray = [];
  for (const property in object) {
    newArray.push(property);
  }
  return newArray;
}
