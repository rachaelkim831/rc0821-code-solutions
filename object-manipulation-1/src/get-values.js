/* exported getValues */
function getValues(object) {
  var newArray = [];
  for (const property in object) {
    newArray.push(object[property]);
  }
  return newArray;
}
